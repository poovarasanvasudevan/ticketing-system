package controller

import (
	"application/core/service"
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"net/http"
)

type LoginController struct {
	Ctx iris.Context
}

func (c *LoginController) Get() mvc.Result {
	return mvc.View{
		Name: "login.html",
	}
}

func (c *LoginController) GetAuthorize()  {

	srv := service.OauthServiceInstance()

	err := srv.HandleAuthorizeRequest(c.Ctx.ResponseWriter(), c.Ctx.Request())
	if err != nil {
		http.Error(c.Ctx.ResponseWriter(), err.Error(), http.StatusBadRequest)
	}
}

func (c *LoginController) GetToken()  {
	srv := service.OauthServiceInstance()
	srv.HandleTokenRequest(c.Ctx.ResponseWriter(), c.Ctx.Request())
}