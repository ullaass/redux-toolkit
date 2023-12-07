import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/slices/productSlice';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=> state.product.products);

    console.log("prod",products)
    const getData = async()=>{
        const response= await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("fa",data);
        dispatch(addProducts(data))

    };

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>Home</div>
  )
}

export default Home