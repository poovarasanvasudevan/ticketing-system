package core

import (
	"database/sql"
	"github.com/RangelReale/osin"
	_ "github.com/lib/pq"
	"github.com/ory/osin-storage/storage/postgres"
)

var oauthInstance *osin.Server

func GetOauthInstance() *osin.Server {

	if oauthInstance == nil {
		url := "postgres://my-postgres-url/database"
		db, err := sql.Open("postgres", url)
		if err != nil {
		}

		store := postgres.New(db)
		oauthInstance = osin.NewServer(osin.NewServerConfig(), store)
	}
	return oauthInstance
}
