package controller

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

type MultitendentController struct {
	Ctx iris.Context
}

func (c *MultitendentController) Get() mvc.Result {
	subdomain := c.Ctx.Subdomain()
	print(subdomain)

	return mvc.View{
		Name: "index.view",
	}
}
