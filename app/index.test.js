const request = require("supertest");
const app = require("./index.js");
const { describe } = require("node:test");


//these are called happy part testcases
describe("Express App",() => {
    it("GET / returns Hello World", async () => {
        const res = await request(app).get("/")
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("hello-world");
    })

    it("GET /:id returns Hello World with ID", async () => {
        const res = await request(app).get("/chai");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello world chai");
    });
    
})