export const querys = {
    // metodos get
    getPwds: 'SELECT * FROM passwords',
    getById: 'SELECT * FROM passwords WHERE id = @id',
    getByTitle: 'SELECT * FROM passwords WHERE title LIKE @title',
    getByUser: 'SELECT * FROM passwords WHERE username LIKE @username',
    getByNameBank: 'SELECT * FROM cards WHERE bank_name LIKE @bank_name',
    getCards: 'SELECT * FROM cards',
    getCardsByIdCards: 'SELECT * FROM cards WHERE id = @id',

    // metodos post
    addPwd:
        'INSERT INTO passwords (title,username,userpassword) VALUES (@title,@username,@userpassword)',
    addCard:
        'INSERT INTO cards (bank_name,account_number,date,cvv,nip,app_user_name,app_password,type) VALUES (@bank_name,@account_number,@date,@cvv,@nip,@app_user_name,@app_password,@type)',

    // metodos put
    updatePwd:
        'UPDATE passwords SET title = @title, username = @username, userpassword = @userpassword WHERE id = @id',
    updateCard:
        'UPDATE cards SET bank_name = @bank_name, account_number = @account_number, date = @date, cvv = @cvv, nip = @nip, app_user_name = @app_user_name, app_passowrd = @app_password, type = @type WHERE id = @id',
    
    deletePwd: 'DELETE FROM passwords WHERE id = @id',
    deleteCards: 'DELETE FROM cards WHERE id = @id'
}