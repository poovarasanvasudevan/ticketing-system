package core

import (
	"application/model"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/satori/go.uuid"
	"time"
)

var db *gorm.DB

func updateCreated(scope *gorm.Scope) {
	if scope.HasColumn("CreatedAt") {
		_ = scope.SetColumn("CreatedAt", time.Now())
	}
	if scope.HasColumn("UniqueIdentifier") {
		_ = scope.SetColumn("UniqueIdentifier", uuid.Must(uuid.NewV4()).String())
	}
}

func updateModified(scope *gorm.Scope) {
	if scope.HasColumn("UpdatedAt") {
		_ = scope.SetColumn("UpdatedAt", time.Now())
	}
}

func GetDatabaseInstance() *gorm.DB {

	gorm.DefaultTableNameHandler = func(db *gorm.DB, defaultTableName string) string {
		return "app_" + defaultTableName
	}

	if db == nil {
		psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
			"localhost", 5432, "postgres", "123Welcome", "golang")

		db, _ = gorm.Open("postgres", psqlInfo)

		db.LogMode(true)
		db.AutoMigrate(&model.User{})

		db.Callback().Create().Register("update_created_at", updateCreated)
		db.Callback().Update().Register("update_modified_at", updateModified)
	}
	return db
}
