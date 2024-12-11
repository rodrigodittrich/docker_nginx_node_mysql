const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    connectTimeout: 10000
};

const connection = mysql.createConnection(config)

const createTable = `
    CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

connection.query(createTable, (err) => {
    if (err) {
        console.error('Erro ao criar a tabela:', err);
        return;
    }
    console.log('Tabela criada ou já existente.');

    const sql = `INSERT INTO people(name) values('Rodrigo Dittrich')`;
    connection.query(sql, (err) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            return;
        }
        console.log('Dados inseridos com sucesso.');
    });
});

app.get('/', (req, res) => {
    const selectSql = `SELECT id, name FROM people`;

    connection.query(selectSql, (err, results) => {
        if (err) {
            console.error('Erro ao consultar os dados:', err);
            res.status(500).send('Erro ao consultar os dados.');
            return;
        }

        let html = `
            <h1>Full Cycle Rocks!</h1>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
        `;

        results.forEach(row => {
            html += `
                <tr>
                    <td>${row.id}</td>
                    <td>${row.name}</td>
                </tr>
            `;
        });

        html += `</table>`;
        res.send(html);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});