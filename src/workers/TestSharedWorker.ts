const _self: SharedAndDedicatedWorkerGlobalScope = self as any;

var counter = 0;

_self.onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = (e) => {
    counter++;
    // console.log('Worker Received', e.data);
    port.postMessage(`${e.data} counter is now ${counter}`);
  };
}

_self.onmessage = function (e) {
  counter++;
  //@ts-ignore: https://github.com/microsoft/TypeScript/issues/30042
  postMessage(`${e.data} counter is now ${counter}`)
}
