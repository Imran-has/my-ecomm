// import { Product } from '@/types/product'
// import React, { useEffect, useState } from 'react'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../Action/actions'
// import swal from 'sweetalert2'

// const Cartpage = () => {
//     const [cartItem , setCartItems]= useState<Product[]>([])
//     useEffect(()=>{
//         setCartItems(getCartItems())
//     },[]);
//     const handleRomove=(id:string)=>{
//       swal.fire({
//         title: "Are you sure",
//         text: "You will not be able to recover this item",
//         icon: "warning",
//         showCancelButton: true,
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, remove it"
//       }).then((result: any) => {
//         if(result.isConfirmed){
//           removeFromCart(id)
//           setCartItems(getCartItems())
//           swal.fire("Removed","Item has been removed","success")
//         }
//       })
//     }
//     const handleQuanityChange=(id:string,quantity:number)=>{
//       updateCartQuantity(id,quantity);
//       setCartItems(getCartItems())
//     }
//     const handleIncrement=(id:string)=>{
//       const product=cartItem.find((item)=>item._id===id);
//     if(product)
//       handleQuanityChange(id,product.stockLevel+1)
    
//     }
//     const handleDecrement=(id:string)=>{
//       const product=cartItem.find((item)=>item._id===id);
//     if(product && product.stockLevel>1)
//       handleQuanityChange(id,product.stockLevel-1)
    
//     }
//     const calculatedTotal= ()=>{
//       return cartItem.reduce((total, item) => total + item.price * item.stockLevel, 0)
//     }
//     const handleProceed=()=>{
//       swal.fire({
//         title:"Proceed to Checout",
//         text:"Please review your cart before checkout",
//         icon:"question",
//         showCancelButton:"true",
//         confirmButtonColor:"#308566",
//         cancelButtonColor:"#033",
//         confirmButtonText:"yes proceed"
//       }).then((result)=>{
//         if(result.isConfirmed){
//           swal.fire("sucess", "your order has been successfully proceed ","success")
//           setCartItems([])
//         }
//       })
//     }
//   return (
//     <div>
      
//       </div>
  
//   )
// }

// export default Cartpage
'use client';
import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../Action/actions'
import swal, { SweetAlertResult } from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
const Cartpage = () => {
  const [cartItem, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const handleRemove = (id: string) => {
    swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it"
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCartItems())
        swal.fire("Removed", "Item has been removed", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
    setCartItems(getCartItems())
  }

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id)
    if (product) handleQuantityChange(id, product.stockLevel + 1)
  }

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id)
    if (product && product.stockLevel > 1) handleQuantityChange(id, product.stockLevel - 1)
  }

  const calculatedTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.stockLevel, 0)
  }

  const handleProceed = () => {
    swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#308566",
      cancelButtonColor: "#033",
      confirmButtonText: "Yes, Proceed"
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire("Success", "Your order has been successfully processed", "success")
        setCartItems([]);
      }
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      
      {cartItem.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr key={item._id} className="border-b border-gray-200">
                  {item.image && (
                    <Image src={urlFor(item.image).url()} alt={item.name}
                    width={500}
                    height={500}
                     className="w-16 h-16 object-cover" />
                  )}
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleDecrement(item._id)} 
                        className="bg-gray-300 px-2 py-1 rounded text-lg">-</button>
                      <span>{item.stockLevel}</span>
                      <button 
                        onClick={() => handleIncrement(item._id)} 
                        className="bg-gray-300 px-2 py-1 rounded text-lg">+</button>
                    </div>
                  </td>
                  <td className="py-2 px-4">${item.price * item.stockLevel}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-500 hover:text-red-700">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-semibold">Total: ${calculatedTotal()}</p>
        <button
          onClick={handleProceed}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cartpage

