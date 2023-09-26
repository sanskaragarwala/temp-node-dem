// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page')
//     }else if(req.url === '/about'){
//         res.end('Here is our short history')
//     }else{
//         res.end(`
//            <h1>Ooops!</h1>

//         `)
//     }
//     console.log(req.url)

// })

// server.listen(5000)

const _ = require('lodash');

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)