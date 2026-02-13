import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{
      backgroundColor: '#5a3d2b',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
    }}>
      <Link href="/" style={{
        color: 'white',
        textDecoration: 'none',
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5em',
        fontWeight: 'bold'
      }}>
        Mémoria
      </Link>
      <div style={{ display: 'flex' }}>
        <Link href="/" style={{
          color: 'white',
          margin: '0 15px',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#3a2618'} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
          Accueil
        </Link>
        <Link href="/offres" style={{
          color: 'white',
          margin: '0 15px',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#3a2618'} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
          Nos Offres
        </Link>
        <Link href="/contact" style={{
          color: 'white',
          margin: '0 15px',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#3a2618'} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
