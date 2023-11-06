const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'/css'))
app.use('/js',express.static(__dirname+'/js'))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine



app.get('/api', (req, res) => {
  res.send(
    {
        "id": 1,
        "task": "javascript",
        "status": true
     }
  )
})

app.post('/apipost', (req, res) => {
    res.send(
      {
          "id": 2,
          "task": "data",
          "status": true
       }
    )
})


app.get('/', (req, res) => {

  res.render('index',{
    
    nama : 'jani suhanda',
    alamat : 'banten'
  })
})

app.get('/home', (req, res) => {
    const mataajar = [
        {
            namapelajaran : 'JavaScript',
            jmlPertemuan   : 14
        },
        {
            namapelajaran : 'Flutter',
            jmlPertemuan   : 16
        },
        {
            namapelajaran : 'Javaspring',
            jmlPertemuan   : 16
        }
    ]
  res.render('home',{
    
    nama : 'jani',
    alamat : 'banten',
    mataajar : mataajar
  }
  )
})
// app.get('/:nama',(req,res) => res.send(`nama saya : ${req.params.nama}`));

app.get('/beranda',async (req, res) =>{
  const resp = await fetch('http://localhost:3000/api/books')
  const data = await resp.json()
  res.render('beranda',{ books : data.data.books})

  // fetch("http://127.0.0.1:3000/api/books")
  // .then(response => response.json())
  // .then((data) => {
  //  console.log(data.data)
  //  res.render('beranda',{ books : data.data})
  // })
  // .catch(error => console.error(error));
  
  
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})