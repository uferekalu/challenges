class OrdersAnalyzer {
    constructor(orders) {
        this.orders = orders
    }

    averageDailySales(productId) {
        const result = {
            sunday: 0,
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0
        }
        let average = 0
        for (const order of this.orders) {
            console.log("order", order)
            if (order.productId === productId) {
                const date = new Date(order.date)
                const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
                // console.log(weekday)
                result[weekday] = parseInt(order.quantity)
                average += result[weekday]
            }
        }

        return {
            ...result,
            average
        }
    }
}

const orderAnalyzer = new OrdersAnalyzer([
    {
        productId: 1, date: '2022-10-03', quantity: 12
    },
    {
        productId: 1, date: '2022-10-04', quantity: 10
    },
    {
        productId: 2, date: '2022-10-03', quantity: 15
    },
    {
        productId: 2, date: '2022-10-06', quantity: 22
    },
    {
        productId: 3, date: '2022-10-03', quantity: 30
    },
    {
        productId: 3, date: '2022-10-08', quantity: 33
    },
])

console.log(orderAnalyzer.averageDailySales(1))
console.log(orderAnalyzer.averageDailySales(2))
console.log(orderAnalyzer.averageDailySales(3))