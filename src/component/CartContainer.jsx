import {  useSelector } from "react-redux"
import CartView from "./CartView"
import { Grid2 } from "@mui/material"



function CartContainer() {

   const cart = useSelector((state)=>state.cart)
  //  console.log(cart,product)
  
  return (
   <Grid2 container spacing={{xs:1,md:2,lg:3}}>
   {
     
     cart?.items.map((ele,index)=>{
       
       return <Grid2  size={{xs:12,md:6,lg:4}} key={ele.id}>
         <CartView key={ele.id} data = {{des:ele}}/>
        </Grid2>
        })
       }
   
   </Grid2>
  )
}

export default CartContainer