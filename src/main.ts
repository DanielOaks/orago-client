import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

export const app = createApp(App)

app.use(router).mount('#app')

// if (SharedWorker) {
// } else {
// }

//
import TestWorker2 from './workers/TestSharedWorker?worker'

const worker2 = new TestWorker2
worker2.onerror = (e) => {
  console.log(`worker error: ${e}`)
}
worker2.onmessage = (e) => {
  console.log('worker caller received:', e.data)
}
worker2.postMessage('worker')
worker2.postMessage('worker')
worker2.postMessage('worker')
worker2.postMessage('worker')

console.log(worker2);

//
import TestWorker from './workers/TestSharedWorker?sharedworker'

const worker = new TestWorker
worker.port.start()
worker.port.onmessage = (e) => {
  console.log('sharedworker caller received:', e.data)
}
worker.port.postMessage('sharedworker')
worker.port.postMessage('sharedworker')
worker.port.postMessage('sharedworker')
worker.port.postMessage('sharedworker')

console.log(worker);
