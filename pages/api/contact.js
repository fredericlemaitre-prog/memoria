 export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Envoie un email (exemple avec SendGrid, Mailgun, ou un service gratuit comme FormSubmit)
    // Pour tester, on simule l'envoi :
    console.log('Nouveau message :', { name, email, message });

    // Réponds au client
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}

