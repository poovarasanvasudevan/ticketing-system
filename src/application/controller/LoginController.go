package controller

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

type LoginController struct {
	Ctx iris.Context
}

func (c *LoginController) Get() mvc.Result {
	print(c.Ctx.Subdomain())

	return mvc.View{
		Name: "login.view",
	}
}
