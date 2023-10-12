class ProductClass {
    static count = 0
    constructor(title, price) {
        this.title = title
        this.price = price
        this.id = ++ProductClass.count
    }
}

export default ProductClass