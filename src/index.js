import express from 'express';
import Renderer from './helpers/Renderer';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(Renderer());
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})