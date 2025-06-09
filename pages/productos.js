import Header from '@/componets/Header';
import Link from 'next/link';

const productos = [
  { id: '1', nombre: 'Laptop' },
  { id: '2', nombre: 'Teléfono' },
  { id: '3', nombre: 'Audífonos' },
];

export default function ListaProductos() {
  return (
    <Layout>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link href={`/producto/${producto.id}`}>
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
