import mongoose from "mongoose"
import CONFIG from "../src/config/config.js"
import userModel from "../src/models/schemas/Users.model.js"
import productsModel from "../src/models/schemas/products.js"
import cartsModel from "../src/models/schemas/carts.js"

const {MONGO_URL} = CONFIG

before(async () => {
    await mongoose.connect("mongodb+srv://bonfilnico:12345@pruebacoder.q69nl8a.mongodb.net/?retryWrites=true&w=majority", {dbName: "ecommerce"})
})
after(async () => {
    await mongoose.connection.close()
})

export const dropUsers = async () => {
    await userModel.collection.drop()
}

export const dropProducts = async () => {
    await productsModel.collection.drop()
}

export const dropCarts = async () => {
    await cartsModel.collection.drop()
}