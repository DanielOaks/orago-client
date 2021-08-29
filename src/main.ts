import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

export const app = createApp(App)

app.use(router).mount('#app')

// irc worker
import { NormalisedWorkerHelper } from './normalised-worker'
import SharedIRCWorker from './irc-worker/IRCWorker?sharedworker'
import IRCWorker from './irc-worker/IRCWorker?worker'

const worker = NormalisedWorkerHelper(SharedIRCWorker, IRCWorker);
worker.onerror = (e) => {
  console.log(`worker error: ${e}`)
}
worker.onmessage = (e) => {
  console.log('worker caller received:', e.data)
}

worker.postMessage('worker')
worker.postMessage('worker')
worker.postMessage('worker')
worker.postMessage('worker')

console.log(worker);
