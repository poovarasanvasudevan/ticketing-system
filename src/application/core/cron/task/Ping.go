package task

import (
	"application/core"
	"github.com/r3labs/sse"
)

func Ping() {
	core.
		GetSSEInstance().
		Publish("messages", &sse.Event{
			Data: []byte("second message"),
		})
}
