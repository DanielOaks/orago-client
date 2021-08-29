const _self: NormalisedWorkerGlobalScope = self as any

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
