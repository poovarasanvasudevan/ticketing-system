package main

import (
	"application/controller"
	"github.com/jasonlvhit/gocron"
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"github.com/kataras/iris/core/host"
	"github.com/kataras/iris/middleware/logger"
	recover2 "github.com/kataras/iris/middleware/recover"
	"github.com/kataras/iris/mvc"
	"github.com/kataras/iris/sessions"
)

func commonMiddleware(c context.Context) {
	c.ResponseWriter().Header().Add("X-Version", "0.1.0")
	c.ResponseWriter().Header().Add("X-PoweredBy", "Mico")
	c.ResponseWriter().Header().Add("X-Frame-Options", "sameorigin")
	c.ResponseWriter().Header().Add("X-XSS-Protection", "1; mode=block")
	c.ResponseWriter().Header().Add("X-Content-Type-Options", "nosniff")
	c.ResponseWriter().Header().Add("Referrer-Policy", "no-referrer")

	c.Next()
}

func dynamicSubdomainHandler(ctx iris.Context) {
	username := ctx.Subdomain()
	_, _ = ctx.Writef("Hello from dynamic subdomain path: %s, here you can handle the route for dynamic subdomains, handle the user: %s", ctx.Path(), username)
}

func mainApplication() *iris.Application {
	app := iris.New()
	app.Use(recover2.New())
	app.Use(logger.New())

	app.UseGlobal(iris.Gzip)
	app.UseGlobal(commonMiddleware)

	view := iris.HTML("D:/GO/src/application/views", ".html")
	view.Layout("layout.html")
	view.Reload(true)
	app.RegisterView(view)

	app.StaticWeb("/static", "D:/GO/src/application/assets/")

	sess := sessions.New(sessions.Config{
		Cookie: "application_session",
	})

	app.ConfigureHost(func(su *host.Supervisor) {
		su.RegisterOnServe(func(taskHost host.TaskHost) {
			initCron()
		})
	})

	mvc.
		New(app.Party("/")).
		Register(sess).
		Handle(new(controller.DefaultController))

	mvc.
		New(app.Party("*.")).
		Register(sess).
		Handle(new(controller.LoginController))

	return app
}

func pingTask() {
	print("ping")
}

func initCron() {
	cron := gocron.NewScheduler()
	cron.
		Every(3).
		Minutes().
		Do(pingTask)

	<-cron.Start()
}

func main() {
	app := mainApplication()
	_ = app.Run(
		iris.Addr(":9555"),
		// skip err server closed when CTRL/CMD+C pressed:
		iris.WithoutServerError(iris.ErrServerClosed),
		// enables faster json serialization and more:
		iris.WithOptimizations,
	)
}
