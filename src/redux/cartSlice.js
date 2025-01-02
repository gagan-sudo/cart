import { createSlice, current } from "@reduxjs/toolkit";
// const deepCopy=(data) => JSON.parse(JSON.stringify(data))
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
        
    ],
  },
  reducers: {
    addCart: (state, action) => {
      let arr = [...current(state.items).filter((element)=>{
        return element.id===action.payload.item.id
      })]
      if(!arr.length){
        state.items = [...state.items,{
          brand:action.payload.item.brand,
          id: action.payload.item.id,
          price: action.payload.item.price,
          description:action.payload.item.description,
          count:1,
        }];
        
      }else{
        state.items = [...current(state.items).filter((element)=>{
          return element.id!==action.payload.item.id
        }),{
          brand:action.payload.item.brand,
          id: action.payload.item.id,
          price: action.payload.item.price,
          description:action.payload.item.description,
          count:arr[0].count+1,
        }]
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((ele) => {
        return ele.id !== action.payload.id;
      });
    },
    removeNumberCart: (state, action) => {
      let arr = current(state.items).filter((ele) => {
        return ele.id !== action.payload.id;
      });
      let arr1 = current(state.items).filter((ele) => {
        return ele.id === action.payload.id;
      });
     
      let cout = arr1?.[0]?.count-parseInt(action.payload.count)
      if(cout<=0){
        state.items=[...arr]
      }
      else{
          state.items=[...arr,{ brand:arr1[0].brand,
            id:arr1[0].id,
            price:arr1[0].price,
            description:arr1[0].description,
            count: arr1[0].count-action.payload.count,}]
      }

    },
    addNumberCart:(state,action)=>{
          let arr = [...current(state.items)]
        let arr1 = arr.filter((element)=>{
            return element.id===action.payload.id
        })
        state.items=[{
            brand:arr1[0].brand,
            id: arr1[0].id,
            price: arr1[0].price,
            description:arr1[0].description,
            count:arr1[0].count+parseInt(action.payload.count),
          },...arr.filter((element)=> element.id!==action.payload.id)]
         
    }
  },
});

export const { addCart, removeCart, removeNumberCart,addNumberCart } = cartSlice.actions;

export default cartSlice.reducer;
