const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔗 Koble til MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb'
});

// 🧪 Test database
db.connect(err => {
    if (err) {
        console.error('❌ DB-feil:', err);
        return;
    }
    console.log('✅ Koblet til MySQL');
});

// 📥 API: lagre påmelding
app.post('/signup', (req, res) => {
    const game = req.body.game;

    db.query(
        'INSERT INTO signups (game) VALUES (?)',
        [game],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Feil ved lagring');
            }
            res.json({ success: true });
        }
    );
});

// 🚀 Start server
app.listen(3000, () => {
    console.log('🚀 Server kjører på http://localhost:3000');
});