module.exports = app => {

    app.use('/api/teachers', require('./teachers.routes.js'))
    app.use('/api/users', require('./users.routes.js'))
    app.use('/api', require('./auth.routes.js'))
}