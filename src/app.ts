import express from 'express'
import os from 'os'
import apiMetrics from 'prometheus-api-metrics'
import Prometheus from 'prom-client'

const HOSTNAME = process.env.POD_NAME || process.env.HOSTNAME || os.hostname()
const app = express()
app.use(apiMetrics({
  metricsPrefix: 'contoso_renderer',
  defaultMetricsInterval: 3000,
  additionalLabels: ['pod'],
  extractAdditionalLabelValuesFn: () => ({ pod: HOSTNAME })
}))

app.use(express.json())

const numberOfRequests = new Prometheus.Counter({
  name: 'request_total',
  help: 'Total number of requests per day',
  labelNames: ['date', 'pod']
})

const timeoutSummary = new Prometheus.Summary({
  name: 'application_render_timeout',
  help: 'Time spent rendering the video',
  labelNames: ['pod']
})

app.get('/render', (req, res) => {
  numberOfRequests.inc({ date: new Date().toISOString().split('T')[0], pod: HOSTNAME })

  const timeout = Math.floor(Math.random() * (1e4 - 1e2 + 1) + 1e2)
  timeoutSummary.observe({ pod: HOSTNAME }, timeout)

  console.log(`Set timeout of ${timeout}`)
  for (let i = 0; i < timeout; i++) {
    console.log(`rendering ${i}`)
  }

  res.send(`Rendered in ${timeout}`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
