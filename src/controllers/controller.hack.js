
module.exports = function(app) {
    app
    .get('/home', (req, res) => {
        res.send("<h1>Hello</h1>");
    });
}