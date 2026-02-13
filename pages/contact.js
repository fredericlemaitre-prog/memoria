import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setMessage('Merci ! Votre message a été envoyé.');
        form.reset();
      } else {
        setMessage('Erreur, veuillez réessayer.');
      }
    } catch (error) {
      setMessage('Erreur, veuillez réessayer.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact - Mémoria</title>
      </Head>
      <header style={{ backgroundColor: '#f0e6d2', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5em', color: '#5a3d2b' }}>
          Contactez-nous
        </h1>
      </header>
      <main style={{
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: "'Open Sans', sans-serif"
      }}>
        <p style={{ fontSize: '1.1em', marginBottom: '30px' }}>
          Nous sommes là pour répondre à vos questions.
        </p>
        <form
          action="https://formsubmit.co/frederic.lemaitre@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <input type="hidden" name="_subject" value="Nouveau message depuis Mémoria" />
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em' }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em' }}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: 'em', resize: 'vertical' }}
            required
          />
          <button type="submit" style={{
            backgroundColor: '#5a3d2b',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#3a2618'} onMouseOut={(e) => e.target.style.backgroundColor = '#5a3d2b'}>
            Envoyer
          </button>
          {message && <p style={{ marginTop: '15px', color: '#5a3d2b', fontWeight: 'bold' }}>{message}</p>}
        </form>
      </main>
    </div>
  );
}
