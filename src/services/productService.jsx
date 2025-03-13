const products = [
  {
    id: "1",
    name: "Procesador AMD Ryzen 7 5800X",
    description: "Procesador de alto rendimiento con 8 núcleos y 16 hilos",
    price: 279000,
    category: "processors",
    categoryName: "Procesadores",
    stock: 15,
    image: new URL('../assets/5800.webp', import.meta.url).href,
    specs: ["8 núcleos / 16 hilos", "Frecuencia base: 3.8GHz", "Frecuencia máxima: 4.7GHz", "TDP: 105W", "Socket: AM4"],
  },
  {
    id: "2",
    name: "Tarjeta Gráfica NVIDIA RTX 3080",
    description: "Tarjeta gráfica de alto rendimiento para gaming y diseño",
    price: 490000,
    category: "graphics",
    categoryName: "Tarjetas Gráficas",
    stock: 8,
    image: new URL('../assets/3080.png', import.meta.url).href,
    specs: [
      "CUDA Cores: 8704",
      "Memoria: 10GB GDDR6X",
      "Interfaz de memoria: 320-bit",
      "Boost Clock: 1.71 GHz",
      "TDP: 320W",
    ],
  },
  {
    id: "3",
    name: "Monitor Gaming ASUS ROG Swift",
    description: 'Monitor gaming de 27" con alta tasa de refresco',
    price: 450000,
    category: "monitors",
    categoryName: "Monitores",
    stock: 12,
    image: new URL('../assets/asus-rog-monitor.webp', import.meta.url).href,
    specs: [
      "Tamaño: 27 pulgadas",
      "Resolución: 2560 x 1440 (WQHD)",
      "Tasa de refresco: 165Hz",
      "Tiempo de respuesta: 1ms",
      "Panel: IPS",
      "HDR: Sí",
    ],
  },
  {
    id: "4",
    name: "Disco SSD Samsung 970 EVO Plus",
    description: "Unidad de estado sólido NVMe de alta velocidad",
    price: 80000,
    category: "storage",
    categoryName: "Almacenamiento",
    stock: 20,
    image: new URL('../assets/solid-sams.webp', import.meta.url).href,
    specs: [
      "Capacidad: 1TB",
      "Interfaz: NVMe PCIe Gen 3.0 x4",
      "Velocidad de lectura: hasta 3,500 MB/s",
      "Velocidad de escritura: hasta 3,300 MB/s",
      "Factor de forma: M.2 2280",
    ],
  },
  {
    id: "5",
    name: "Placa Base ASUS ROG Strix B550-F",
    description: "Placa base gaming con soporte para AMD Ryzen serie 5000",
    price: 270000,
    category: "motherboards",
    categoryName: "Placas Base",
    stock: 10,
    image: new URL('../assets/mother-asus.jpg', import.meta.url).href,
    specs: [
      "Socket: AM4",
      "Chipset: AMD B550",
      "Memoria: 4x DIMM, máx. 128GB, DDR4",
      "PCIe 4.0 x16: 1",
      "M.2 Socket: 2",
      "USB 3.2 Gen 2: Sí",
    ],
  },
  {
    id: "6",
    name: "Memoria RAM Corsair Vengeance RGB Pro",
    description: "Memoria RAM DDR4 con iluminación RGB personalizable",
    price: 80000,
    category: "memory",
    categoryName: "Memoria RAM",
    stock: 25,
    image: new URL('../assets/ram-ddr4.jpeg', import.meta.url).href,
    specs: [
      "Capacidad: 16GB (2 x 8GB)",
      "Tipo: DDR4",
      "Velocidad: 3200MHz",
      "Latencia: CL16",
      "Iluminación: RGB",
      "Perfil XMP 2.0: Sí",
    ],
  },
]

export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id)
      if (product) {
        resolve(product)
      } else {
        reject(new Error("Producto no encontrado"))
      }
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categoryProducts = products.filter((p) => p.category === categoryId)
      const categoryName =
        categoryProducts.length > 0 ? categoryProducts[0].categoryName : getCategoryNameById(categoryId)

      resolve({
        products: categoryProducts,
        categoryName,
      })
    }, 500)
  })
}

const getCategoryNameById = (categoryId) => {
  const categoryMap = {
    processors: "Procesadores",
    graphics: "Tarjetas Gráficas",
    monitors: "Monitores",
    storage: "Almacenamiento",
    motherboards: "Placas Base",
    memory: "Memoria RAM",
  }

  return categoryMap[categoryId] || "Categoría"
}

