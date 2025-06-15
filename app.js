const express = require("express");
const admin = require("firebase-admin");

// Inicializa o Firebase Admin (NÃO use initializeApp do firebase/app aqui)
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo à Kings BJJ Academy!");
});

// Rota que busca alunos no Firestore
app.get("/api/alunos", async (req, res) => {
  try {
    const snapshot = await db.collection("alunos").get();
    const alunos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar alunos" });
  }
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});