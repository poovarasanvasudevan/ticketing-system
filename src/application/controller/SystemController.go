package controller

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

type SystemController struct {
	Ctx iris.Context
}

func (c *DefaultController) GetMaintenence() mvc.Result {
	return mvc.View{
		Name: "maintenence.html",
	}
}
