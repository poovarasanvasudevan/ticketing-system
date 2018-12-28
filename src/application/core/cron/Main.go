package cron

import (
	"application/core/cron/task"
	"github.com/jasonlvhit/gocron"
)

func New() *gocron.Scheduler {
	cron := gocron.NewScheduler()
	cron.Every(5).Minutes().Do(task.Ping)
	return cron
}
