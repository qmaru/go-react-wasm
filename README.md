# go-react-wasm

## ⚠ create react app

There is no easier way to do it.

## go wasm_exec

[wasm](https://github.com/golang/go/tree/master/misc/wasm)

## Build server

```shell
go build -o runserver server/main.go
```

## Build .wasm

```shell
cd wasm
GOARCH=wasm GOOS=js go build -o ../demo/test.wasm main.go
```

## Browser to url

localhost:3000/demo
