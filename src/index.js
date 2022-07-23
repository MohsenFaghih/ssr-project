import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import Renderer from './helpers/Renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    const promiseData = matchRoutes(Routes, req.path).map(({route})=>{
        return route.loadData ? route.loadData(store) : null;
    })

    Promise.all(promiseData).then(()=>{
        res.send(Renderer(req, store));
    })

})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})