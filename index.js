//процедура импортирования модулей
const express = require('express') //заводим переменную express (в которй храниться вся библиотека express)

// элемент для работы с файлами (что бы не прописывать полный путь )
const path = require("path")
//подключаем пакет для работы с файлами
const fs = require("fs")
//получаем объект вэб сервера
const app = express()
//объявляем порт для работы
const port = 3000



//продлючаем парсер для формы
app.use(express.json())
app.use(express.urlencoded())


app.get('/registration', (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname )})
    //res.sendFile("styles.css", {root: path.join(__dirname, "./static")})
  })


app.post('/reg-data',(req,res) => {
    console.log(">>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) =>{
        if(err){
            res.status(500).send("User not added")

        }
        else res.status(201).send("User added")
    })
})




app.get('/', (req, res) => {
    res.send('Hello!')
  })
app.get('/hi', (req, res) => {
    res.status(200).send('Hi, get')
  })

app.post('/hi', (req, res) => {
    res.status(201).send('Hi, post')
  })

  app.put('/hi', (req, res) => {
    res.status(202).send('Hi, put')
  }) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
