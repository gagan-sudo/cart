
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item'
import { useEffect } from 'react';
import { getData, getDataByCall, getDataByFork, getState, hello } from '../redux/apidata/action';
import { Grid2 } from '@mui/material';





 function Items() {
   const product = useSelector((state)=>state.product.product)
  const dispatch=useDispatch()

useEffect(()=>{
   dispatch(getData())
},[dispatch])
  

  return (
    <>
  {/* <button onClick={()=>{
      dispatch(getDataByCall())
    }}>Call Method</button>
  <button onClick={()=>{
      dispatch(getDataByFork())
    }}>Fork Method</button>
  <button onClick={()=>{
      dispatch(getState())
    }}>Redux State</button>
  <button onClick={()=>{
      dispatch(hello())
    }}>Take</button> */}
    <Grid2 container size={12} spacing={{xs:1,md:2,lg:3}}>

    {
      product?.map((element)=>{
        return  <Grid2 size={{xs:12,md:6,lg:4}} key={element.id}> <Item key={element.id} itemData={element}/>
        </Grid2>
      })
    }
    </Grid2>
    
    </>
  )
}

export default Items