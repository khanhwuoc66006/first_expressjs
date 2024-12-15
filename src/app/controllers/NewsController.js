class NewsController {
    index(req,res) {
        res.render('News');
    }

    show(req,res) {
        res.send("Lmao");
    }
}

module.exports = new NewsController;
