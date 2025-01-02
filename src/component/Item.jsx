import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {addCart} from '../redux/cartSlice'

function Item(props) {
        const dispatch=  useDispatch()
  
  return (
    <>
    <Card sx={{minWidth:275,mt:0.5}}>
        <CardContent>
            <Typography gutterBottom sx={{color:'text.secondary'}} variant='h6' >
                 {props.itemData.brand?.toUpperCase().slice(0,1).concat(props.itemData.brand.slice(1))}
            </Typography>
            <Typography variant="body2" style={{color:'text.secondary',mb:1.5}}>{props.itemData.description.toUpperCase().slice(0,1).concat(props.itemData.description.slice(1))}</Typography>
            <Typography sx={{color:'text.secondary',mt:1.5}}>Price : {props.itemData.price}$</Typography>
        </CardContent>
        <CardActions>
            <Button size="medium" onClick={()=>{
              dispatch(addCart({item:props.itemData,count:1}))
            }}>Add to Cart</Button>
        </CardActions>
    </Card>
    </>
  )
}

export default Item