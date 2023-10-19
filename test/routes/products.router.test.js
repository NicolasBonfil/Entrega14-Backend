import { expect } from "chai"
import supertest from "supertest"
import { dropProducts } from "../setup.test.js"

const requester = supertest("http://localhost:8080")

let productId;

describe("Products router test case", async () => {
    before(async (done) => {
        this.timeout(50000)
        await dropProducts()
        // done()
    })

    after(async(done) => {
        done()
    })

    it("[GET] api/products -get all products", async () => {
        const response = await requester.get("/api/products")
        console.log(response);

        expect(response.statusCode).to.be.eql(200)
    })

    it("[GET] api/products -get a product by id", async () => {
        const response = await requester.get(`/api/products/${productId}`)
        console.log(response);

        expect(response.statusCode).to.be.eql(200)
    })

    it("[POST] api/products -create a product", async () => {
        const mockProduct = {
            title: "Medias",
            description: "Nike Blancas",
            price: 150,
            code: "1029042933472472947294932091",
            stock: 2,
            category: "Medias",
            status: true,
            thumbnail: "fifhsf"
        }

        const response = await requester.post("/api/products").send(mockProduct)
        console.log(response);

        expect(response.statusCode).to.be.eql(200)
        expect(response.body.payload._id).to.be.ok

        productId = response.body.payload._id
    })

    it("[PUT] api/products -update a product", async () => {
        const mockData = {
            "price": 10,
            "code": "12210",
            "stock": 1
        }

        const response = await requester.put("/api/products").send(mockData)
        console.log(response);

        expect(response.statusCode).to.be.eql(200)
    })

    it("[DELETE] api/products -delete a product", async () => {
        const response = await requester.delete(`/api/products/${productId}`)
        console.log(response);

        expect(response.statusCode).to.be.eql(200)
    })
})