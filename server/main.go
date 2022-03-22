package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)
	fmt.Println("Listening: localhost:3000")
	http.ListenAndServe("localhost:3000", nil)
}
