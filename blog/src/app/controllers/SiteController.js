class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /me
    me(req, res) {
        res.render('me');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); // dùng new để khởi tạo
