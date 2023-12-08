import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';

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
    <>
        <div className='h-screen flex flex-wrap gap-5 justify-center items-center mx-20'>

        {
            products.map((product)=>{
                return (  
                    <div className='flex flex-col border-2 w-[250px] h-[350px] justify-center items-center rounded-md hover:scale-110 transition-all ease-in-out' key={product.id}>
                        <img 
                            className='h-[150px] object-contain p-3 overflow-hidden'
                            src={product.image} alt='/' />
                        <div className='p-3'>
                            <h3 className='font-bold'>{product.title.slice(0,10)}</h3>
                            <span className='text-sm text-gray-400 font-semibold flex justify-between'>
                                <span>{product.category}</span>
                                <span className='text-yellow-500'>Rs{product.price}</span>
                            </span>
                            <p className='text-sm'>{product.description.slice(0,50)}... </p>
                            {/* <h3 className='text-right'> Rs {product.price}</h3> */}
                            <button className='bg-yellow-500 w-full font-bold'
                                    onChange={()=> dispatch(addToCart(product))}>
                                Add To Cart
                            </button>
                        </div>
                    </div>)
            })
        }
          
        </div>
    </>
  )
}

export default Home