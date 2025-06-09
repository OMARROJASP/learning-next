
import Header from '@/componets/Header';
import Link from 'next/link';


export default function Home () {
    return (
        <>
         <Header />
            <h1>Bienvenido a mi primera pagina en next</h1>
            <Link href="/contacto"> Ir a contacto</Link>
        </>
    )
}