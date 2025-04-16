import { collection, addDoc } from "firebase/firestore"
import { db } from "./config"
import { seedProducts } from "./firestore/products"

export const loadSeedData = async () => {
  try {
    const productsRef = collection(db, "products")

    for (const product of seedProducts) {
      const { id, ...productData } = product
      await addDoc(productsRef, productData)
    }

    console.log("Datos de ejemplo cargados correctamente")
    return true
  } catch (error) {
    console.error("Error al cargar datos de ejemplo:", error)
    return false
  }
}
