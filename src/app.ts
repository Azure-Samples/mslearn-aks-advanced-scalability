import express from 'express'

const app = express()

app.get('/render', (req, res) => {
  const timeout = Math.floor(Math.random() * (1e6 - 1e5 + 1) + 1e5)
  console.log(`Set timeout of ${timeout}`)
  for (let i = 0; i < timeout; i++) {
    console.log(`rendering ${i}`)
  }

  res.send(`Rendered in ${timeout}`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
