const http = require('http'),
    hostname = '127.0.0.1',
    port = 3001;

const cors = require('cors'),
    express = require('express'),
    app = express();




app.use(cors());


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const server = http.createServer(app);


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index')
const searchController = require('./routes/search')

app.use('/', rootController);
app.use('/search', searchController);