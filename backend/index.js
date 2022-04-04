const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const gifController = require('./controllers/gif')
app.use('/gifs', gifController)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`);
})
