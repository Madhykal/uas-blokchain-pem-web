const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware agar frontend bisa akses backend
app.use(cors());
app.use(express.json());

// Endpoint GET /api/transactions
app.get('/api/transactions', (req, res) => {
    // Data dummy dalam bentuk ARRAY (penting agar tidak error .map)
    const transactions = [
        { id: 1, from: "0x71C...392", amount: "0.5 ETH", date: "2024-05-20" },
        { id: 2, from: "0x123...abc", amount: "1.2 ETH", date: "2024-05-21" },
        { id: 3, from: "0x987...xyz", amount: "0.1 ETH", date: "2024-05-22" }
    ];
    res.json(transactions);
});

// Tambahkan rute ini untuk halaman utama
app.get('/', (req, res) => {
  res.send('Backend Server UAS Blockchain Siap!');
});

app.listen(PORT, () => {
    console.log(`Server Backend jalan di http://localhost:${PORT}`);
});