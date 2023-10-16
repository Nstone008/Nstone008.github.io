import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));
// These are routes like https://www.nstone008.github.io/about
// app.com
app.get((''),(req, res) => {
    res.send('<h1>Nicholas Stone, A creative</h1>');
});

app.get('/help',(req,res) => {
    res.send([{
        name: 'Nick',
        age: 29
    },{
        name:'Haile'
    }]);
});

app.get('/about',(req,res) => {
    res.send('A');
});

app.get('/projects',((req,res) => {
    res.send('Projects')
}));

app.listen(3000,() => {
    console.log('Server is up on port 3000');
});