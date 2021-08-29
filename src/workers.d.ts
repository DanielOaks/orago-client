interface SharedAndDedicatedWorkerGlobalScope {
  onconnect: (event: MessageEvent) => void;
  onmessage: (event: MessageEvent) => void;
}
