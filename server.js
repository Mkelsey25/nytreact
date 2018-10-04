const express = require('express');
var path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express, Jenni' });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//////////////////////////////////////////////////////////
//default for when no other route is hit.  Must be last
//////////////////////////////////////////////////////////
app.get('*', (req, res) => {
    res.send({ something: 'Hello Hello' })
})

// listen for request
app.listen(port, () => console.log(`Listening on port ${port}`));