
import Header from '@/componets/Header';
import Layout from '@/componets/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home () {

    const [busqueda, setBusqueda] = useState('');
    const router = useRouter();

    const enviarBusqueda = (e) => {
        e.preventDefault();
        router.push(`/busqueda?q=${encodeURIComponent(busqueda)}`);
    }

    return (
        <Layout>
            <h1>Bienvenido a mi primera pagina en next</h1>
            <Link href="/contacto"> Ir a contacto</Link>
             <form onSubmit={enviarBusqueda}>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
        </Layout>
    )
}