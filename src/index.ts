import express from 'express'
import { MongoConnection } from '../database/MongoConnection';

const api = express();
api.user(express.json)

const database = new MongoConnection()
database.connect()

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.shorten)
api.get("/:hash", urlController.redirect)

api.listen(5000, () => console.log('Express Listening'))
