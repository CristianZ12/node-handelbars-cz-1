const contact = {};

const pool = require('../database');

contact.contacts = async (req, resp) => {
    const contact = await pool.query('SELECT * FROM Contact');
    resp.render('notes/contact', { contact });
}

contact.addContact = async (req, resp) => {
    const { nameContact, addressContact, phoneContact } = req.body;
    const addData = {
        nameContact,
        addressContact,
        phoneContact
    }
    await pool.query('INSERT INTO Contact set ?', [addData]);
    resp.redirect('/contact');
}

contact.contact = async (req, resp) => {
    const { id } = req.params;
    const contact = await pool.query('SELECT * FROM Contact WHERE idContact = ?', [id]);
    resp.render('notes/updateContact', { contact: contact[0] });
}

contact.updateContact = async (req, resp) => {
    const { nameContact, addressContact, phoneContact } = req.body;
    const { id } = req.params;
    const updateData = {
        nameContact,
        addressContact,
        phoneContact
    }
    await pool.query('UPDATE Contact set ? WHERE idContact = ?', [updateData, id]);
    resp.redirect('/contact');
}

contact.deleteContact = async (req, resp) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Contact WHERE idContact = ?', [id]);
    resp.redirect('/contact');
}

module.exports = contact;