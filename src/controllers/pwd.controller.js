//import { json } from 'express';
import { getConnection, querys, sql } from './../database';

// get
const getPwds = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.request().query(querys.getPwds);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection
            .request()
            .input('id', id)
            .query(querys.getById);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const connection = await getConnection();
        const result = await connection
            .request()
            .input('title', title)
            .query(querys.getByTitle);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getByUser = async (req, res) => {
    try {
        const { username } = req.params;
        const connection = await getConnection();
        const result = await connection
            .request()
            .input('username', username)
            .query(querys.getByUser);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getByNameBank = async (req, res) => {
    try {
        const { bank_name } = req.params;
        const connection = await getConnection();
        const result = await connection
            .request()
            .input('bank_name', bank_name)
            .query(querys.getByNameBank);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCards = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection
            .request()
            .querys(querys.getCards);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCardsById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection
            .request()
            .input('id', id)
            .query(querys.getCardsById);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// post
const addPwd = async (req, res) => {
    const { title, username, userpassword } = req.body;

    if (title == null || userpassword == null) {
        return res.status(400).json({ msg: 'Bad request.' });
    }

    try {
        const connection = await getConnection();
        await connection
            .request()
            .input('title', sql.VarChar, title)
            .input('username', sql.VarChar, username)
            .input('userpassword', sql.VarChar, userpassword)
            .query(querys.addPwd);
        res.json({ title, username, userpassword });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCard = async (req, res) => {
    const { bank_name, account_number, date, cvv, nip, app_user_name, app_password, type } = req.body;

    if (bank_name == null || account_number == null || date == null || cvv == null || nip == null) {
        return res.status(400).json({ msg: 'Bad request.' });
    }

    if (type == null) type = 0;

    try {
        const connection = await getConnection();
        await connection
            .request()
            .input('bank_name', sql.VarChar, bank_name)
            .input('account_number', sql.VarChar, account_number)
            .input('date', sql.VarChar, date)
            .input('cvv', sql.VarChar, cvv)
            .input('nip', sql.VarChar, nip)
            .input('app_user_name', sql.VarChar, app_user_name)
            .input('app_password', sql.VarChar, app_password)
            .input('type', sql.Int, type)
            .query(querys.addCard);
        res.json({ bank_name, account_number, date, cvv, nip, app_user_name, app_password, type })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// put
const updatePwd = async (req,res) => {
    const {title,username,userpassword} = req.body;

    if (title == null || userpassword == null) {
        return res.status(400).json({ msg: 'Bad request.' });
    }

    try{
        const connection = await getConnection();
        await connection
        .request()
        .input('title',sq.VarChar,title)
        .input('username',sql.VarChar,username)
        .input('userpassword',sql.VarChar,userpassword)
        .query(querys.updatePwd);
        res.json({title,username,userpassword});
    }catch (error){
        json.status(500);
        json.send(error.message);
    }
}

const updateCard = async (req,res) => {
    const { bank_name, account_number, date, cvv, nip, app_user_name, app_password, type } = req.body;

    if (bank_name == null || account_number == null || date == null || cvv == null || nip == null) {
        return res.status(400).json({ msg: 'Bad request.' });
    }

    if (type == null) type = 0;

    try {
        const connection = await getConnection();
        await connection
            .request()
            .input('bank_name', sql.VarChar, bank_name)
            .input('account_number', sql.VarChar, account_number)
            .input('date', sql.VarChar, date)
            .input('cvv', sql.VarChar, cvv)
            .input('nip', sql.VarChar, nip)
            .input('app_user_name', sql.VarChar, app_user_name)
            .input('app_password', sql.VarChar, app_password)
            .input('type', sql.Int, type)
            .query(querys.updateCard);
        res.json({ bank_name, account_number, date, cvv, nip, app_user_name, app_password, type })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// delete
const deletePwd = async (req,res) =>{
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection
        .request()
        .input('id',id)
        .query(querys.deletePwd);
        
        if(result.rowsAffected[0] === 0) return res.sendStatus(400);
        return res.sendStatus(204);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteCard = async (req,res) =>{
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection
        .request()
        .input('id',id)
        .query(querys.deleteCards);
        
        if(result.rowsAffected[0] === 0) return res.sendStatus(400);
        return res.sendStatus(204);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getPwds,
    getById,
    getByTitle,
    getByUser,
    getByNameBank,
    getCards,
    getCardsById,
    addPwd,
    addCard,
    updatePwd,
    updateCard,
    deletePwd,
    deleteCard
}