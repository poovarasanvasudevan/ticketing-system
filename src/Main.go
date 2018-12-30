package main

import (
	"application/controller"
	"application/core"
	cron2 "application/core/cron"
	"application/core/middleware"
	"github.com/kataras/iris"
	"github.com/kataras/iris/core/host"
	"github.com/kataras/iris/middleware/logger"
	recover2 "github.com/kataras/iris/middleware/recover"
	"github.com/kataras/iris/mvc"
	"github.com/kataras/iris/sessions"
	"time"
)

func dynamicSubdomainHandler(ctx iris.Context) {
	username := ctx.Subdomain()
	_, _ = ctx.Writef("Hello from dynamic subdomain path: %s, here you can handle the route for dynamic subdomains, handle the user: %s", ctx.Path(), username)
}

func mainApplication() *iris.Application {

	config := core.GetConfigInstance()

	app := iris.New()
	app.Use(recover2.New())
	app.Use(logger.New())

	app.UseGlobal(iris.Gzip)
	app.UseGlobal(middleware.CommonMiddleware)
	app.UseGlobal(middleware.SecurityMiddleware)
	app.UseGlobal(iris.Cache304(10 * time.Second))

	view := iris.HTML(config.Get("application","viewpath").String(""), ".html")
	view.Layout("layout.html")
	view.Reload(true)
	app.RegisterView(view)

	app.StaticWeb("/static", config.Get("application","assetpath").String(""))

	sess := sessions.New(sessions.Config{
		Cookie: "application_session",
	})

	app.ConfigureHost(func(su *host.Supervisor) {
		su.RegisterOnServe(func(taskHost host.TaskHost) {
			initCron()
		})
	})

	mvc.
		New(app.Party("/sys")).
		Register(sess).
		Handle(new(controller.SystemController))



	mvc.
		New(app.Party("/")).
		Register(sess).
		Handle(new(controller.DefaultController))

	mvc.
		New(app.Party("/auth")).
		Register(sess).
		Handle(new(controller.LoginController))




	return app
}

func initCron() {
	cron := cron2.New()
	<-cron.Start()
}

func main() {
	app := mainApplication()
	_ = app.Run(
		iris.Addr("application.local:9555"),
		// skip err server closed when CTRL/CMD+C pressed:
		iris.WithoutServerError(iris.ErrServerClosed),
		// enables faster json serialization and more:
		iris.WithOptimizations,
	)
}
