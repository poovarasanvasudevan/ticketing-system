package core

import (
	"github.com/micro/go-config"
	"github.com/micro/go-config/encoder/toml"
	"github.com/micro/go-config/source"
	"github.com/micro/go-config/source/file"
)

var instance config.Config

func GetConfigInstance() config.Config {

	if instance == nil {
		instance = config.NewConfig()
		enc := toml.NewEncoder()

		_ = instance.Load(file.NewSource(
			file.WithPath("D:/GO/src/application/config/app.toml"),
			source.WithEncoder(enc),
		))
	}

	return instance
}
