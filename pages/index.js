import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mémoria – Transformez vos souvenirs en héritage</title>
      </Head>

      <header style={{ backgroundColor: '#f0e6d2', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5em', color: '#5a3d2b' }}>
          Mémoria
        </h1>
        <p style={{ fontSize: '1.2em', color: '#666' }}>
          Transformez vos souvenirs en héritage
        </p>
      </header>

      <main style={{
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '700px',
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2em', marginBottom: '20px' }}>
            Bienvenue sur Mémoria
          </h2>
          <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
            Découvrez nos offres pour immortaliser l'histoire de votre vie ou d'un événement marquant.
          </p>
          <Link href="/offres" passHref>
            <button style={{
              backgroundColor: '#5a3d2b',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1em',
              cursor: 'pointer'
            }}>
              Découvrir nos offres
            </button>
          </Link>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#5a3d2b',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px'
      }}>
        <p>© 2026 Mémoria. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
