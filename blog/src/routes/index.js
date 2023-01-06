const newsRouter = require('./news.route');
const meRouter = require('./me.route');
const coursesRouter = require('./courses.route');
const siteRouter = require('./site.route');

function route(app) {
    
    //news
    app.use('/news', newsRouter);

    //me
    app.use('/me', meRouter);

    //courses
    app.use('/courses', coursesRouter);

    //site
    app.use('/', siteRouter);

}

module.exports = route;