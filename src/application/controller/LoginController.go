package controller

import (
	"application/core"
	"github.com/RangelReale/osin"
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

type LoginController struct {
	Ctx iris.Context
}

func (c *LoginController) Get() mvc.Result {
	return mvc.View{
		Name: "login.html",
	}
}

func LoginLogic(ar *osin.AuthorizeRequest, ctx iris.Context) bool {
	r := ctx.Request()

	_ = r.ParseForm()

	if r.Method == "POST" && r.FormValue("username") == "test" && r.FormValue("password") == "test" {
		return true
	}
	_ = ctx.View("login.html")
	return false
}

func (c *LoginController) GetAuthorize() {

	server := core.GetOauthInstance()
	resp := server.NewResponse()
	defer resp.Close()

	if ar := server.HandleAuthorizeRequest(resp, c.Ctx.Request()); ar != nil {

		if !LoginLogic(ar, c.Ctx) {
			return
		}
		ar.UserData = struct{ Login string }{Login: "test"}

		ar.Authorized = true
		server.FinishAuthorizeRequest(resp, c.Ctx.Request(), ar)
	}
	_ = osin.OutputJSON(resp, c.Ctx.ResponseWriter(), c.Ctx.Request())
}

func (c *LoginController) GetToken() {

}
