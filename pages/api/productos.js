export default function handler(req, res) {
  const productos = [
    { id: '1', nombre: 'Laptop', descripcion: 'Laptop con 16GB de RAM' },
    { id: '2', nombre: 'Teléfono', descripcion: 'Teléfono con cámara de 108MP' },
    { id: '3', nombre: 'Audífonos', descripcion: 'Audífonos con cancelación de ruido' },
  ];

  res.status(200).json(productos);
}