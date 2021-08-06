const exprees = require('express')
const articleRouter = require('./routes/articles')

require('dotenv').config()

const port = process.env.PORT || 3000

const app = exprees()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      description: 'Test Article',
    },
  ]
  res.render('index', { articles: articles })
})

app.listen(port)
