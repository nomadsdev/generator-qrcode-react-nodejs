const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate-qr', async (req, res) => {
    try {
      const { link } = req.body;
  
      console.log('Received link:', link); // เพิ่มบรรทัดนี้
  
      if (!link) {
        return res.status(400).json({ error: 'Link is required' });
      }
  
      const qrCode = await QRCode.toDataURL(link);
      res.json({ qrCode });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(PORT, () => {
    console.log('Server is running')
})