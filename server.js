// server.js
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route
app.post('/chat', async (req, res) => {
  try {
    const r = await fetch("https://aipipe.org/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    res.setHeader("Content-Type", "text/event-stream");
    r.body.pipe(res);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: String(err) });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running → http://localhost:${PORT}`);
});
