const { join } = require('path');
const x = require('express');
const  { MongoClient } = require('mongodb');


const url = 'mongodb://reader:123321@kodaktor.ru/readusers';
const dbName = 'readusers';
const collectionName = 'users';

const client = new MongoClient(url);

const app = x();

app
.set('view engine', 'pug')
.set('views', join(__dirname, 'views'));

app.get('/users3', (req, res) => {
    client.connect(err => {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        collection.find({}).toArray((err, users) => res.render('user_list', {users: users}));
    });
})

app.listen(4321, () => console.log('Running server'));
