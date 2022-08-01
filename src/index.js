import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import Renderer from './helpers/Renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = 3000;

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}))

app.use(express.static('public')); 

app.get('*', (req, res) => {
    const store = createStore(req);

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