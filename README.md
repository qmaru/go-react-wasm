# go-react-wasm

## Build web

```shell
cd html
yarn install
yarn build
```

## Build server

```shell
go build -o runserver server/main.go
```

## Build .wasm

```shell
cd wasm
GOARCH=wasm GOOS=js go build -o ../html/src/test.wasm main.go
```

## Browser to url

localhost:3000/

```shell
cp runserver html/dist
./runserver
```
