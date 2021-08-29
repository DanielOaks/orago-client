interface NormalisedWorkerGlobalScope {
  sharedWorker: boolean;
  onconnect: (event: MessageEvent) => void;
  onmessage: (event: MessageEvent) => void;
  postToAll: (message: any, options?: PostMessageOptions) => void;
}
