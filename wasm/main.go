package main

import (
	"syscall/js"

	"github.com/spaolacci/murmur3"
)

func Murmur3(this js.Value, args []js.Value) interface{} {
	key := args[0].String()
	h32 := murmur3.Sum32([]byte(key))
	return h32
}

func main() {
	js.Global().Set("Murmurhash", js.FuncOf(Murmur3))

	var c chan struct{}
	<-c
}
