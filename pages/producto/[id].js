import Header from "@/componets/Header";
import { useRouter } from "next/router";

const productos = [
  { id: '1', nombre: 'Laptop', descripcion: 'Potente laptop con 16GB de RAM' },
  { id: '2', nombre: 'Teléfono', descripcion: 'Teléfono inteligente con cámara de 108MP' },
  { id: '3', nombre: 'Audífonos', descripcion: 'Audífonos con cancelación de ruido' },
];

export default function Producto() {
    const router = useRouter();
    const { id } = router.query;

    const producto = productos.find((p) => p.id === id);
    
    return (
        <div>
            <Header />
            <h1>Producto dinamico</h1>
            {producto ? (
                <div>
                    <h2>{producto.nombre}</h2>
                    <h2>{producto.descripcion}</h2>
                </div>
            ): (
                <p>Cargando producto ...</p>
            )}
        </div>
    )
} 