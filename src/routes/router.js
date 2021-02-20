const express = require('express');
const contact = require('../controllers/contact');
const router = express.Router();

//Controllers
const contacts = require('../controllers/contact');

module.exports = app => {
    //Home
    router.get('/');

    //Contact
    router.get('/contact', contacts.contacts);
    router.post('/api/add/contact', contacts.addContact);
    router.get('/api/contact/:id', contacts.contact);
    router.put('/api/update/:id', contact.updateContact);
    router.delete('/api/delete/:id', contact.deleteContact);

    app.use(router);
}