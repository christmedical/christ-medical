/**
 * Created by jameym on 5/26/16.
 */
var express = require('express'),
    app     = express(),
    PouchDB = require('pouchdb');

app.use('/db', require('express-pouchdb')(PouchDB));

app.listen(3000);