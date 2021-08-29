interface NormalisedWorker {
  worker: SharedWorker | Worker;
  onerror: (event: ErrorEvent) => void;
  onmessage: (event: MessageEvent) => void;
  postMessage: (message: any, options?: PostMessageOptions) => void;
}

export function NormalisedWorkerHelper(sw: new () => SharedWorker, w: new () => Worker): NormalisedWorker {
  if (!!window.SharedWorker) {
    const worker = new sw;
    const nw = {
      worker: worker,
      onerror: (event: ErrorEvent) => {},
      onmessage: (event: MessageEvent) => {},
      postMessage: (message: any, options?: PostMessageOptions) => {
        worker.port.postMessage(message, options);
      }
    }

    worker.port.start();
    worker.onerror = (e) => {
      nw.onerror(e);
    }
    worker.port.onmessage = (e) => {
      nw.onmessage(e);
    }

    return nw
  } else {
    const worker = new w;
    const nw = {
      worker: worker,
      onerror: (event: ErrorEvent) => {},
      onmessage: (event: MessageEvent) => {},
      postMessage: (message: any, options?: PostMessageOptions) => {
        worker.postMessage(message, options);
      }
    }

    worker.onerror = (e) => {
      nw.onerror(e);
    }
    worker.onmessage = (e) => {
      nw.onmessage(e);
    }

    return nw
  }
}
