
import './App.css';
import Items from './component/Items';
import Nav from './component/Nav';
import { Routes,Route } from 'react-router-dom';
import store from './redux/store';
import CartContainer from './component/CartContainer';
import { Provider } from 'react-redux';

function App() {
  
  return (
   <>
   <Provider store={store}>
   <Nav/>
   <Routes >
    <Route index element={<Items />}/>
    <Route path='/*'  element={<Items />}/>
    <Route path='/cart' element={<CartContainer/>}/>
   
   </Routes>
   </Provider>
   </>
  );
}

export default App;
