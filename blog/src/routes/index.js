const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {

    //homepage
    app.use('/', siteRouter);

    //news
    app.use('/news', newsRouter);


}

module.exports = route;