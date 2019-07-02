/*Задание №1.
Создайте сервер для приветствия пользователя:
1.	Метод GET, маршрут "/hello" – сервер возвращает HTML-страницу с формой. 
В форме должно быть поле для ввода имени и кнопка для отправки данных. Форма отправляет данные методом POST на путь /hello.
2.	Метод POST, маршрут "/hello" – сервер получает имя пользователя (данные из тела запроса) и отправляет ответ с приветствием.*/

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.get('/hello', (req, res) => {
    fs.createReadStream('./public/index.html', 'utf8').on('data', (chunk) => {
        res.write(chunk);
    }).on('end', () => res.end());
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/hello', (req, res) => {
    res.send(`Request name is ${req.body.name}`);

});
app.listen(3000);