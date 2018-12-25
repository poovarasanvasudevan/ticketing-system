package controller

import "github.com/kataras/iris/mvc"

type DefaultController struct {
}

func (c *DefaultController) Get() mvc.Result {
	return mvc.View{
		Name: "index.view",
	}
}
