const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const express = require('express')
const app = express()
app.use(express.json());

// Câu 1 : đã kết nối

// Câu 2 :
app.get('/get_orders',async (req,res) => {
    const data = await prisma.orders.findMany({
        include : {
            customers : true
        }
    })
    res.json(data)
})

// Câu 3
app.post('/get_order',async (req,res)=>{
    const customerNumber = req.body.customerNumber
    const data = await prisma.orders.findMany({
        where: {
            customerNumber : customerNumber
        },
    })
    res.json(data)
})
app.listen(3000,()=>{
    console.log("host port 3000 !")
})
prisma.$disconnect()

