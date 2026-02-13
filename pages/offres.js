 import Head from 'next/head';

export default function Offres() {
  return (
    <div>
      <Head>
        <title>Nos Offres - Mémoria</title>
      </Head>
      <header style={{ backgroundColor: '#f0e6d2', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5em', color: '#5a3d2b' }}>
          Nos Offres
        </h1>
      </header>
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#5a3d2b' }}>
          Découvrez nos forfaits
        </h2>
        <p>Cette page présentera bientôt toutes nos offres.</p>
      </main>
    </div>
  );
}

