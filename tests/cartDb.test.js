const { MongoClient } = require("mongodb");

describe("insert", () => {
    let connection;
    let db;
    let carts;

    beforeAll(async () => {
        connection = await MongoClient.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db();
        carts = db.collection("carts");
    });

    it("should find cart by userId and return it", async () => {
        const mockCart = {
            _id: "cart-object-id",
            user_id: "user-object-id",
            cart_items: [],
        };
        await carts.insertOne(mockCart);

        const insertedCart = await carts.findOne({ user_id: "user-object-id" });
        expect(insertedCart).toEqual(mockCart);
    });

    it("should find cart by userId and update it", async () => {
        const mockRequest = {
            _id: "cart-object-id",
            user_id: "user-object-id",
            cart_items: [{ _id: "product-id", qnty_selected: 3 }],
        };
        await carts.findOneAndUpdate(
            { _id: "cart-object-id" },
            {
                $set: {
                    user_id: "user-object-id",
                    cart_items: [{ _id: "product-id", qnty_selected: 3 }],
                },
            }
        );

        const updatedCart = await carts.findOne({ user_id: "user-object-id" });
        expect(updatedCart).toEqual(mockRequest);
    });

    afterAll(async () => {
        await connection.close();
    });
});
