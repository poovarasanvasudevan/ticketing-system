package model

import (
	"github.com/jinzhu/gorm"
	"github.com/jinzhu/gorm/dialects/postgres"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	BASE

	Username *string `gorm:"unique;not null"`
	Password string
	Active   bool

	FirstName string
	LastName  string

	MetaData postgres.Hstore
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func (user *User) BeforeCreate(scope *gorm.Scope) error {
	_ = scope.SetColumn("Active", true)
	password, _ := HashPassword(user.Password)
	_ = scope.SetColumn("Password", password)
	return nil
}
