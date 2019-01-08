package controller

import (
	"application/core"
	"application/model"
	"fmt"
	"github.com/RangelReale/osin"
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"golang.org/x/crypto/bcrypt"
)

type LoginController struct {
	Ctx iris.Context
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func VerifyLogin(username string, password string) bool {
	db := core.GetDatabaseInstance()

	var user model.User
	db.Where("username = ?", username).First(&user)

	if user.Username == nil {
		return false
	}

	if CheckPasswordHash(password, user.Password) {
		return true
	}

	return false
}

func (c *LoginController) PostLoginVertification() {
	r := c.Ctx.Request()
	_ = r.ParseForm()

	if r.Method == "POST" && VerifyLogin(r.FormValue("d-email"), r.FormValue("d-password")) {
		c.Ctx.Redirect("/home", 200)
	}

	c.Ctx.Redirect("/auth?error=2", 200)
}

func (c *LoginController) Get() mvc.Result {
	c.Ctx.ViewData("authurl", fmt.Sprintf("/auth/authorize?%s", c.Ctx.Request().URL.RawQuery))
	return mvc.View{
		Name: "login.html",
	}
}

func LoginLogic(ar *osin.AuthorizeRequest, ctx iris.Context) bool {
	r := ctx.Request()

	_ = r.ParseForm()

	if r.Method == "POST" && VerifyLogin(r.FormValue("d-email"), r.FormValue("d-password")) {
		return true
	}
	ctx.ViewData("urlquery", r.URL.RawQuery)
	ctx.ViewData("authurl", fmt.Sprintf("/auth/authorize?%s", r.URL.RawQuery))
	_ = ctx.View("login.html")
	return false
}

func (c *LoginController) AnyAuthorize() {

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
