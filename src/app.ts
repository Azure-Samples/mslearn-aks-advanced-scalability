import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('pong')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
