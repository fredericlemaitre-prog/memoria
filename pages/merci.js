import Head from 'next/head';

export default function Merci() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: "'Open Sans', sans-serif" }}>
      <Head>
        <title>Merci - Mémoria</title>
      </Head>
      <header style={{ backgroundColor: '#f0e6d2', padding: '20px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5em', color: '#5a3d2b' }}>
          Merci pour votre message !
        </h1>
      </header>
      <main style={{ maxWidth: '600px', margin: '40px auto', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <p style={{ fontSize: '1.2em', color: '#5a3d2b' }}>
          Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </p>
        <a href="/" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: '#5a3d2b', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '4px', fontSize: '1em' }}>
          Retour à l’accueil
        </a>
      </main>
    </div>
  );
}
