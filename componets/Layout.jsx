import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ padding: '10px', background: '#eee' }}>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link href="/">Inicio</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/productos">Productos</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '10px', background: '#eee' }}>
        <p>© {new Date().getFullYear()} Mi Sitio Web Maximo Rojas</p>
      </footer>
    </div>
  );
}
