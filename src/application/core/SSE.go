package core

import (
	"github.com/r3labs/sse"
)

var sseInstance *sse.Server

func GetSSEInstance() *sse.Server {
	if sseInstance == nil {
		sseInstance = sse.New()
		sseInstance.CreateStream("messages")
	}
	return sseInstance
}
