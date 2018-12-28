package middleware

import "github.com/kataras/iris/context"

func SecurityMiddleware(c context.Context) {
	c.ResponseWriter().Header().Add("X-Version", "0.1.0")
	c.ResponseWriter().Header().Add("X-PoweredBy", "Mico")
	c.ResponseWriter().Header().Add("X-Frame-Options", "sameorigin")
	c.ResponseWriter().Header().Add("X-XSS-Protection", "1; mode=block")
	c.ResponseWriter().Header().Add("X-Content-Type-Options", "nosniff")
	c.ResponseWriter().Header().Add("Referrer-Policy", "no-referrer")

	c.Next()
}
