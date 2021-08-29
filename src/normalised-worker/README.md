Normalised workers can run as a Worker or a SharedWorker, depending on what the browser supports.

Here is the main process:

```typescript
import { NormalisedWorker } from './normalised-worker'
import SharedExampleWorker from './example-worker/ExampleWorker?sharedworker'
import ExampleWorker from './example-worker/ExampleWorker?worker'

const worker = new NormalisedWorker(SharedExampleWorker, ExampleWorker)
worker.onerror = (e) => {
  console.log(`worker error: ${e}`)
}
worker.onmessage = (e) => {
  console.log('worker caller received:', e.data)
}

worker.postMessage('worker')
```

Here is `worker.ts`:

```typescript
const _self: NormalisedWorkerGlobalScope = self as any

// all of your code goes here
let counter = 0

function processIncomingMessage(e: MessageEvent): void {
  counter++
  _self.postToAll(`${e.data} counter is now ${counter}`)
}

// optimise for being a shared worker
_self.sharedWorker = true
const ports: MessagePort[] = []
_self.postToAll = (message: any, options?: PostMessageOptions) => {
  ports.forEach((port) => {
    port.postMessage(message, options)
  })
}

_self.onconnect = function (e) {
  var port = e.ports[0]
  ports.push(port)

  port.onmessage = (ev) => {
    processIncomingMessage(ev)
  }
}

// also support being a web worker
_self.onmessage = function (e) {
  if (_self.sharedWorker) {
    _self.sharedWorker = false
    _self.postToAll = postMessage
  }

  processIncomingMessage(e)
}
```
