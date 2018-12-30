package middleware

import (
	"application/core"
	"github.com/kataras/iris/context"
)

func MaintenenceMode(c context.Context)  {
	conf := core.GetConfigInstance()

	if(conf.Get("application" , "maintenencemode").Bool(false)) {
		c.Redirect("/maintenence")
	} else {
		c.Next()
	}
}