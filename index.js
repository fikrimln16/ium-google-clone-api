const express = require('express');
const bodyParser = require('body-parser');
const corsMiddleware = require('./config/cors');

const app = express();
const db = require('./config/db')

// gunakan body-parser untuk membaca data dari body permintaan POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsMiddleware);


// definisikan rute POST
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `INSERT INTO users ( id, email, password) VALUES (null, '${email}', '${password}')`;

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error registering user!');
        } else {
            return res.status(200).json({
                message : "Berhasil",
                data : {
                    email,
                    password
                }
            })
        }
    });
});

// jalankan aplikasi pada port tertentu
app.listen(5000, () => {
    console.log('Aplikasi berjalan pada port 3000');
});
