import Link from 'next/link';

function Header () {

    return(
        <header style={{ padding: '20px', background: '#f5f5f5' }}> 
            <nav style={{ display: 'flex', gap: '20px' }}>
                <Link href="/">Inicio</Link>
                <Link href="/productos">Productos</Link>
                <Link href="/contacto">Contacto</Link>
            </nav>
        </header>
    )

}

export default Header;