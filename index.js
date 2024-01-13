const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

// get Data json file info
const categoris = require('./Data/Categoris.json');
const news = require('./Data/news.json');


// send  Data
// 1. news-categoris
// 2. news/:id
// 3. category/:id
// 4. news
app.get('/news-categoris', (req, res) => {
    res.send(categoris)
});
app.get('/news/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
});
app.get('/category/:id', (req, res) => {
    // console.log(req.params.id)

    // todo এইটা সেই আইডি যে আইডি দিয়ে আমরা ক্লাইন্ট সাইড থেকে হিট করবো, concept clear.
    const id = req.params.id;
    // todo apply filter for finding similar category id then compare clint side category_id vs database news category_id then > match > res.send(data)
    if (id === "8") {
        res.send(news)
    } else {
        const category_news = news.filter(n => n.category_id === id)
        res.send(category_news)
    }

});

app.get('/news', (req, res) => {
    res.send(news)
});







// todo::: For testing Parpus Server runing or not :::
app.get('/', (req, res) => {
    res.send('News API Running')
})
app.listen(port, () => {
    console.log(`Yahh Server Running ${port}`)
})
// todo::: For testing Parpus Server runing or not :::