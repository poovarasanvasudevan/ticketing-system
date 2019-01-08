package controller

import "github.com/kataras/iris/mvc"

type DefaultController struct {
}

func (c *DefaultController) Get() mvc.Result {
	return mvc.View{
		Name: "index.html",
	}
}

func (c *DefaultController) GetOffline() mvc.Result {
	return mvc.View{
		Name: "cache.html",
	}
}

func (c *DefaultController) GetProfile() mvc.Result {
	return mvc.View{
		Name: "profile.html",
	}
}

func (c *DefaultController) GetHome() mvc.Result {
	return mvc.View{
		Name: "home.html",
	}
}
