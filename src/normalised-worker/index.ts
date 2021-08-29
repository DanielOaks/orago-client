export class NormalisedWorker {
  private worker: SharedWorker | Worker;

  constructor(
    sw: new () => SharedWorker,
    w: new () => Worker
  ) {
    if (!!window.SharedWorker) {
      this.worker = new sw;
      this.worker.port.onmessage = (e) => {
        this.onmessage(e);
      }
    } else {
      this.worker = new w;
      this.worker.onmessage = (e) => {
        this.onmessage(e);
      }
    }
    this.worker.onerror = (e) => {
      this.onerror(e);
    }
  }

  onerror(event: ErrorEvent): void {}

  onmessage(event: MessageEvent): void {}

  postMessage(message: any, options?: PostMessageOptions): void {
    if (this.worker instanceof SharedWorker) {
      this.worker.port.postMessage(message, options);
    } else {
      this.worker.postMessage(message, options);
    }
  }
}
