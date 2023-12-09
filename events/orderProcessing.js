class OrderProcessing {
    constructor () {
        this.eventHandlers = {}
    }

    on(event, handler) {
        if (!this.eventHandlers[event]) {
            this.eventHandlers[event] = []
        }
        this.eventHandlers[event].push(handler)
    }

    emit(event, data) {
        const handlers = this.eventHandlers[event]
        if (handlers) {
            handlers.forEach((handler) => {
                handler(data)
            })
        }
    }

    processOrder(order) {
        console.log(`Processing order: ${order}`)
        this.emit('order', order)
    }

    processPayment(payment) {
        console.log(`Processing payment: ${payment}`)
        this.emit('payment', payment)
    }

    shipOrder(order) {
        console.log(`Shipping order: ${order}`)
        this.emit('ship', order)
    }
}

// Usage
const orderProcessing = new OrderProcessing()

// Define event handlers
orderProcessing.on('order', (order) => {
    console.log(`Received order: ${order}`)
})

orderProcessing.on('payment', (payment) => {
    console.log(`Payment received: ${payment}`)
})

orderProcessing.on('ship', (order) => {
    console.log(`Order shipped: ${order}`)
})

orderProcessing.processOrder("12345")
orderProcessing.processPayment("37727")
orderProcessing.shipOrder("12345")