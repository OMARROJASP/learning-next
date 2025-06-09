import Header from "@/componets/Header";

export default function Producto({producto}) {

    if (!producto){
        return <p>Producto no encontrado</p>;
    }

    
    return (
        <div>
            <Header />
            <h1>Detalle del Producto</h1>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
        </div>
    );
} 

export async function getServerSideProps(context) {
    const { id } = context.params;

    const res = await fetch(`http://localhost:3000/api/productos`);
    const productos = await res.json();
    const producto = productos.find((p) => p.id === id) || null;
    return {
        props : {
            producto: producto || null, // Si no se encuentra el producto, pasamos null
        },
    }
}