import Layout from '@/componets/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const productos = [
  { id: '1', nombre: 'Laptop' },
  { id: '2', nombre: 'Teléfono' },
  { id: '3', nombre: 'Audífonos' },
  { id: '4', nombre: 'Mouse' },
];

export default function Busqueda() {
    const router = useRouter();
    const { q }  = router.query;

    const [resultados, setResultados] = useState([]);   

    useEffect(() => {
        if (q) {
            const filtrados = productos.filter((p) => 
            p.nombre.toLowerCase().includes(q.toLowerCase())
            );
            setResultados(filtrados);
        }
    },[q]);

    return (
        <Layout>
            <h1>Resultado de búsqueda</h1>
            <p>Buscando: <strong>{q}</strong></p>
        
            {resultados.length > 0 ? (
                <ul>
                    {resultados.map((p) => (
                        <li key={p.id}>{p.nombre}</li>
                    ))}
                </ul>
            ): (
               <p>No se encontro resultados.</p>
            )}
        </Layout>
    )
}