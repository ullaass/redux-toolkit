import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'
const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart.cart)

  console.log("cart",cart)
  return (
    <div className='h-screen flex flex-wrap gap-5 justify-center items-center mx-20'>

        {
            cart.map((product)=>{
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
                            
                            <button className='bg-yellow-500 w-full font-bold'
                                    onChange={()=> dispatch(removeFromCart(product))}>
                                Remove To Cart
                            </button>
                        </div>
                    </div>)
            })
        }
          
        </div>
  )
}

export default Cart