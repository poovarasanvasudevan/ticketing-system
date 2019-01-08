package core

import (
	"database/sql"
	"fmt"
	"github.com/RangelReale/osin"
	_ "github.com/lib/pq"
	"github.com/ory/osin-storage/storage/postgres"
)

var oauthInstance *osin.Server

func GetOauthInstance() *osin.Server {

	if oauthInstance == nil {
		psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
			"localhost", 5432, "postgres", "123Welcome", "golang")
		db, err := sql.Open("postgres", psqlInfo)

		if err != nil {
		}

		store := postgres.New(db)

		_ = store.CreateSchemas()
		_ = store.CreateClient(&osin.DefaultClient{
			Id:          "1234",
			Secret:      "aabbccdd",
			RedirectUri: "http://localhost:14001/appauth",
		})

		sconfig := osin.NewServerConfig()
		sconfig.AllowedAuthorizeTypes = osin.AllowedAuthorizeType{osin.CODE, osin.TOKEN}
		sconfig.AllowedAccessTypes = osin.AllowedAccessType{osin.AUTHORIZATION_CODE,
			osin.REFRESH_TOKEN, osin.PASSWORD, osin.CLIENT_CREDENTIALS, osin.ASSERTION}
		sconfig.AllowGetAccessRequest = true
		sconfig.AllowClientSecretInParams = true
		oauthInstance = osin.NewServer(sconfig, store)
	}
	return oauthInstance
}
