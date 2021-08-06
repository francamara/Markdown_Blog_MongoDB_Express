const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

require('dotenv').config()

DB_NAME = process.env.DB_NAME

// console.log(DB_NAME)

mongoose.connect(`mongodb://localhost:${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      date: new Date(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facere aut! Recusandae impedit, dolore facere culpa praesentium eum vitae hic deleniti officiis, perferendis repellat quae autem amet aliquam incidunt ipsum.',
    },
  ]
  res.render('articles/index', { articles: articles })
})

app.listen(port)
