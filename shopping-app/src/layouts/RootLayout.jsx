import { NavLink, Outlet } from "react-router-dom"
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { useEffect } from "react";


function RootLayout() {

  const {cart} = useContext(CartContext);
  const [totalInCart,setTotalInCart] = useState(0);

  const cartQuantity = () => {
    const quantitiesArray = cart.map((item) => item.amount);
    const total = quantitiesArray.reduce((accum,curr) => {
      return accum + curr;
    })
    return total;
  }

  //If cart changes update my total quantities.
useEffect(() => {
  if (cart.length > 0) {
    setTotalInCart(cartQuantity())
  }
},[cart])



  return (
  <>
  <div className="flex justify-between bg-blue-800 text-white h-20 items-center">
    <h1 className="text-4xl font-extrabold ml-2 text-yellow-500">myshop.com</h1>
    <div className="flex w-[25%] justify-evenly font-bold">
        <NavLink
         to= "/" className=" hover:bg-blue-600 p-1 flex justify-center" >Home</NavLink>
        <NavLink to="shop" className=" hover:bg-blue-600 p-1 flex justify-center">Shop</NavLink>
        <NavLink to="cart" className=" hover:bg-blue-600 p-1 flex justify-center">Cart  <span className="ml-1"> ({totalInCart})</span></NavLink>
    </div>
  </div>
  <main>
    <Outlet/>
  </main>
  {/* <div className="bg-blue-800 flex justify-center h-10 items-center text-yellow-500 font-extrabold"> 
    By Farhan.
  </div> */}
  </>
  )
}

export default RootLayout