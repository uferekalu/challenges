class FilterSearch {
    query
    queryString
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }
    filtering() {
        const queryObj = {
            ...this.queryString
        }
        console.log(queryObj)
        
        const excludeFields = ["page", "sort", "limit"]
        if (!excludeFields) return
        excludeFields.forEach((el) => delete queryObj[el])

        if (queryObj.category !== "all") {
            this.query.find({ category: queryObj.category })
        }

        if (queryObj.title !== "all") {
            this.query.find({ title: { $regex: queryObj.title, $options: 'i' }})
        }
        this.query.find()
        return this        
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(",").join("")
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort("-createdAt")
        }

        return this
    }

    pagination() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 6
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

const products = {
    a: "banana",
    b: "orange",
    c: "mango",
    d: "pear",
    e: "tomatoe"
}

const data = new FilterSearch(products, products["a"])
console.log(data)