import { expect } from "chai"
import supertest from "supertest"
import { dropProducts } from "../setup.test.js"

const requester = supertest("http://localhost:8080")

describe("Products router test case", () => {
    before(async () => {
        this.timeout(50000)
        await dropProducts()
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
    })
})