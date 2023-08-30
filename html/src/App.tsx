import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// wasm
import wasmUrl from './test.wasm?url'
import './wasm_exec'

const LoadWASM = (url: string) => {
  const go = new Go()
  let wasm
  WebAssembly.instantiateStreaming(fetch(url), go.importObject).then((result) => {
    wasm = result.instance
    go.run(wasm)
  }).catch((err) => {
    console.error(err)
  })
}

function App() {
  useEffect(() => {
    LoadWASM(wasmUrl)
  }, [])

  const [count, setCount] = useState("0")

  const hashCount = () => {
    const hash = Murmurhash(new Date().getMilliseconds())
    setCount(hash)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => hashCount()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
