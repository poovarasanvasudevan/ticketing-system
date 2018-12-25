package main

import (
	"application/controller"
	"github.com/alexandrevicenzi/go-sse"
	"github.com/jasonlvhit/gocron"
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"github.com/kataras/iris/core/host"
	"github.com/kataras/iris/middleware/logger"
	recover2 "github.com/kataras/iris/middleware/recover"
	"github.com/kataras/iris/mvc"
	"github.com/kataras/iris/sessions"
	"time"
)

func commonMiddleware(c context.Context) {

	//
	//cookie,_ := c.Request().Cookie("Application")
	//
	//
	//if cookie == nil {
	//	c.Request().AddCookie(&http.Cookie{
	//		Expires: time.Now().Add(365 * 24 * time.Hour),
	//		Name:"Application",
	//		Value: uuid.NewV4().String(),
	//	})
	//}

	c.Next()
}

func dynamicSubdomainHandler(ctx iris.Context) {
	username := ctx.Subdomain()
	_, _ = ctx.Writef("Hello from dynamic subdomain path: %s, here you can handle the route for dynamic subdomains, handle the user: %s", ctx.Path(), username)
	// if http://username4.mydomain.com:8080/ prints:
	// Hello from dynamic subdomain path: /, here you can handle the route for dynamic subdomains, handle the user: username4
}


func sseServer() *sse.Server{
	sses := sse.NewServer(nil)
	//sse.CreateStream("notifications")
	return sses
}


func mainApplication() *iris.Application {
	app := iris.New()
	app.Use(recover2.New())
	app.Use(logger.New())

	app.UseGlobal(iris.Gzip)
	app.UseGlobal(commonMiddleware)

	view := iris.HTML("/Users/user/Documents/GOPATH/src/application/views", ".view")
	view.Layout("layout.view")
	view.Reload(true)
	app.RegisterView(view)

	app.StaticWeb("/static" , "/Users/user/Documents/GOPATH/src/application/assets/")

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

	//mvc.
	//	New(app.Subdomain("auth")).
	//	Register(sess).
	//	Handle(new(controller.LoginController))

	return app
}

func pingTask() {
	s := sseServer()
	s.SendMessage("/events/c1", sse.SimpleMessage(time.Now().String()))

	print("ping")
}

func initCron() {
	cron := gocron.NewScheduler()
	cron.
		Every(3).
		Seconds().
		Do(pingTask)

	<-cron.Start()
}

func main() {
	app := mainApplication()
	_ = app.Run(
		iris.Addr(":3000"),
		// skip err server closed when CTRL/CMD+C pressed:
		iris.WithoutServerError(iris.ErrServerClosed),
		// enables faster json serialization and more:
		iris.WithOptimizations,
	)
}
