// // Include packages and define server related variables
// const express = require('express')
// const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser')
// const generateTrashTalk = require('./trash_talk_generator')
// const app = express()
// const port = 3000

// // setting template engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars')

// // setting body-parser
// app.use(bodyParser.urlencoded({ extended: true }))

// // setting routes
// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.post('/', (req, res) => {
//   const options = req.body
//   const TrashTalk = generateTrashTalk(options);
//   res.render('index', { TrashTalk: TrashTalk, options: options });
//   console.log(`${generateTrashTalk(options)}`)
// })

// // starts the express server and listening for connections.
// app.listen(port, () => {
//   console.log(`Express app listening on port ${port}.`)
// })


const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashtalk = require('./trash_talk_generator')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// define position
const position = [
  {
    'job': 'engineer',
    'title': '工程師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg'
  },
  {
    'job': 'designer',
    'title': '設計師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg'
  },
  {
    'job': 'entrepreneur',
    'title': '創業家',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg'
  }
]


app.get('/', (req, res) => {
  res.render('index', { position: position })
})

app.post('/', (req, res) => {

  const selectedItem = req.body.job
  const selectedArray = position.find(item => {
    return item.job === selectedItem
  })
  const rubbishtalk = generateTrashtalk(selectedArray)

  res.render('index', { position, rubbishtalk })
})


app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})