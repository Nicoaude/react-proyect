import { collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { db } from "../config"

// Función para obtener todos los productos
export const getProducts = async () => {
  const productsRef = collection(db, "products")
  const querySnapshot = await getDocs(productsRef)

  const products = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return products
}

// Función para obtener productos por categoría
export const getProductsByCategory = async (categoryId) => {
  const productsRef = collection(db, "products")
  const q = query(productsRef, where("category", "==", categoryId))
  const querySnapshot = await getDocs(q)

  const products = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return products
}

// Función para obtener un producto por ID
export const getProductById = async (productId) => {
  const productRef = doc(db, "products", productId)
  const productDoc = await getDoc(productRef)

  if (productDoc.exists()) {
    return { id: productDoc.id, ...productDoc.data() }
  } else {
    throw new Error("El producto no existe")
  }
}

// Datos de ejemplo para usar mientras se configura Firebase
// Estos datos se pueden usar para cargar inicialmente la colección en Firestore
export const seedProducts = [
  {
    id: "N4wlUcQndpLii4bTHwTH",
    name: "Procesador AMD Ryzen 7 5800X",
    price: 299.99,
    category: "procesadores",
    img: "https://i.imgur.com/RgH6mz4.jpeg",
    stock: 15,
    description:
      "Procesador de 8 núcleos y 16 hilos con una frecuencia base de 3.8GHz y boost de hasta 4.7GHz. Perfecto para gaming y tareas de productividad exigentes.",
  },
  {
    id: "hjMJLZkLnEdqycdKlsRM",
    name: "Procesador Intel Core i9-12900K",
    price: 499.99,
    category: "procesadores",
    img: "https://i.imgur.com/rs51vj0.jpeg",
    stock: 8,
    description:
      "Procesador de 16 núcleos (8P+8E) y 24 hilos con una frecuencia base de 3.2GHz y boost de hasta 5.2GHz. La mejor opción para gaming de alto rendimiento y creación de contenido.",
  },
  {
    id: "Z6487SQqiAgfNpncoWgt",
    name: "Tarjeta Gráfica NVIDIA RTX 3080",
    price: 799.99,
    category: "tarjetas-graficas",
    img: "https://i.imgur.com/2VJMH5c.jpeg",
    stock: 5,
    description:
      "Tarjeta gráfica con 10GB GDDR6X, tecnología ray tracing en tiempo real y DLSS. Ideal para gaming en 4K y creación de contenido profesional.",
  },
  {
    id: "pgVprbnznhbuB1X4p1yc",
    name: "Tarjeta Gráfica AMD Radeon RX 6800 XT",
    price: 649.99,
    category: "tarjetas-graficas",
    img: "https://i.imgur.com/NitnuFs.jpeg",
    stock: 7,
    description:
      "Tarjeta gráfica con 16GB GDDR6, tecnología AMD Infinity Cache y Ray Accelerators. Excelente rendimiento en juegos a resoluciones 1440p y 4K.",
  },
  {
    id: "vwhPLoUINfgRg77NFmTR",
    name: "Placa Base ASUS ROG Strix B550-F Gaming",
    price: 179.99,
    category: "placas-base",
    img: "https://i.imgur.com/YfGH9cu.png",
    stock: 12,
    description:
      "Placa base ATX con socket AM4 para procesadores AMD Ryzen, PCIe 4.0, WiFi 6, 2.5Gb Ethernet y audio SupremeFX. Diseñada para gaming de alto rendimiento.",
  },
  {
    id: "aOnVyb6XnZbuxAxirpe0",
    name: "Placa Base MSI MPG Z690 Gaming Edge",
    price: 289.99,
    category: "placas-base",
    img: "https://i.imgur.com/huCSybH.png",
    stock: 9,
    description:
      "Placa base ATX con socket LGA1700 para procesadores Intel de 12ª generación, PCIe 5.0, WiFi 6E, 2.5Gb Ethernet y audio de alta definición.",
  },
  {
    id: "9ACI4F2yW9AlzharIzKx",
    name: "Memoria RAM Corsair Vengeance RGB Pro 32GB",
    price: 149.99,
    category: "memorias",
    img: "https://i.imgur.com/3rdQhgm.png",
    stock: 20,
    description:
      "Kit de memoria DDR4 de 32GB (2x16GB) a 3600MHz con iluminación RGB personalizable. Ideal para sistemas de gaming y workstations.",
  },
  {
    id: "QSLaHpubZ982car7tPUo",
    name: "Memoria RAM G.Skill Trident Z Neo 16GB",
    price: 99.99,
    category: "memorias",
    img: "https://i.imgur.com/54G6ILj.jpeg",
    stock: 15,
    description:
      "Kit de memoria DDR4 de 16GB (2x8GB) a 3600MHz con iluminación RGB, optimizada para plataformas AMD Ryzen.",
  },
  {
    id: "Gfd55J13XeprCQ7YVkXG",
    name: "SSD Samsung 970 EVO Plus 1TB",
    price: 129.99,
    category: "almacenamiento",
    img: "https://i.imgur.com/OKCi28a.jpeg",
    stock: 25,
    description:
      "SSD NVMe M.2 con velocidades de lectura de hasta 3,500 MB/s y escritura de hasta 3,300 MB/s. Perfecto para reducir los tiempos de carga en juegos y aplicaciones.",
  },
  {
    id: "okdtzzOaKrzHvbEtm3jd",
    name: "Disco Duro WD Black 4TB",
    price: 149.99,
    category: "almacenamiento",
    img: "https://i.imgur.com/FlNFWZs.png",
    stock: 18,
    description: "Disco duro de 7200 RPM con 256MB de caché, diseñado para gaming y almacenamiento de alta capacidad.",
  },
  {
    id: "8GSozthScQQusP8ofxuc",
    name: "Fuente de Alimentación Corsair RM850x",
    price: 139.99,
    category: "fuentes",
    img: "https://i.imgur.com/K6RhlmN.png",
    stock: 14,
    description:
      "Fuente de alimentación de 850W con certificación 80 PLUS Gold, totalmente modular y con ventilador de 135mm para un funcionamiento silencioso.",
  },
  {
    id: "oExxxrWmrUoZVdgLFaXO",
    name: "Gabinete NZXT H510 Elite",
    price: 149.99,
    category: "gabinetes",
    img: "https://i.imgur.com/Y4jLC4M.jpeg",
    stock: 10,
    description:
      "Gabinete ATX con panel lateral de vidrio templado, dos ventiladores RGB de 140mm incluidos y excelente gestión de cables.",
  },
]

export const loadSeedData = async () => {
  try {
    const productsRef = collection(db, "products")

    for (const product of seedProducts) {
      const { id, ...productData } = product
      await addDoc(productsRef, productData)
    }

    console.log("Datos de ejemplo cargados correctamente")
  } catch (error) {
    console.error("Error al cargar datos de ejemplo:", error)
  }
}
