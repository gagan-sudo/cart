// import { CardGiftcard } from "@mui/icons-material"
import { Card,CardContent,Typography,CardActions,Button, ButtonGroup} from "@mui/material"
import { useDispatch } from "react-redux"
import {removeNumberCart,addNumberCart} from '../redux/cartSlice'
import { useRef } from "react"

function CartView(props) {
    const ref = useRef()
    const dispatch = useDispatch()
    const des = props.data.des
    // const count = props.data.count

    
    

  return (
   <>
   <Card sx={{minWidth:275,mt:0.5}}  >
        <CardContent>
            <Typography gutterBottom sx={{color:'text.secondary'}} variant='h6' >
                 {des.brand.toUpperCase().slice(0,1).concat(des.brand.slice(1))}
            </Typography>
            <Typography variant="body2" style={{color:'text.secondary',mb:1.5}}>{des.description.toUpperCase().slice(0,1).concat(des.description.slice(1))}</Typography>
            <Typography sx={{color:'text.secondary',mt:1.5}}>Price : {des.price}$</Typography>
            <Typography sx={{color:'text.secondary',mt:1.5}}>Cart Count : {des.count}</Typography>
            <Typography sx={{color:'text.secondary',mt:1.5}}>Amount : {des.price} * {des.count}= {des.count*des.price}$</Typography>
        </CardContent>
        
            <input style={{width:'100',height:30, paddingLeft:10,marginLeft:10}} ref={ref} type="number" defaultValue="1" />
        <CardActions>

            <ButtonGroup>
                <Button onClick={()=>{
                    let body = {id:des.id,count:ref.current.value}
                     dispatch(removeNumberCart(body))
                }}
                
                >Remove</Button>
                {/* <Button
                onClick={()=>{
                    
                }}>
                    RMV Number
                </Button> */}
                <Button  onClick={()=>{
                   dispatch(addNumberCart({id:des.id,count:ref.current.value}))
                }}>Add More</Button>
            </ButtonGroup>
        </CardActions>
    </Card>
   </>
  )
}

export default CartView