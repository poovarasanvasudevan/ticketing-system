package middleware

import "github.com/kataras/iris/context"

func CommonMiddleware(c context.Context) {
	c.Next()
}
