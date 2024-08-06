import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() =>{
        // axios => promise -> then-catch / async-await

        axios.get('https://dummyjson.com/products').then((res) => {
            setProducts(res.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])    


    return (
        <div>Products</div>
    )
}

export default Products