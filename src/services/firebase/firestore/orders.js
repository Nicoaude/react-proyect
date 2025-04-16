import { collection, addDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../config"

export const createOrder = async (orderData) => {
  try {
    const ordersRef = collection(db, "orders")
    const orderDoc = await addDoc(ordersRef, {
      ...orderData,
      date: new Date(),
    })
    return orderDoc.id
  } catch (error) {
    console.error("Error al crear la orden:", error)
    throw new Error("No se pudo crear la orden")
  }
}

export const getOrderById = async (orderId) => {
  try {
    const orderRef = doc(db, "orders", orderId)
    const orderDoc = await getDoc(orderRef)

    if (orderDoc.exists()) {
      return { id: orderDoc.id, ...orderDoc.data() }
    } else {
      throw new Error("La orden no existe")
    }
  } catch (error) {
    console.error("Error al obtener la orden:", error)
    throw error
  }
}
