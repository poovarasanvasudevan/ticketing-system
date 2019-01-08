package model

import "time"

type BASE struct {
	ID uint `gorm:"primary_key"`

	UniqueIdentifier string
	CreatedAt        time.Time
	UpdatedAt        time.Time
	DeletedAt        *time.Time
}
