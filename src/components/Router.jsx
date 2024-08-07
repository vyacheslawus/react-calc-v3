import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { ProductPage } from './ProductPage/ProductPage';
import { DetailsPage } from './DetailsPage/DetailsPage';
import { CreatePage } from './CreatePage/CreatePage';
import { LoginPage } from './LoginPage/LoginPage';
import { products } from '../data';
import CreateProductForm from './CreateProductForm/CreateProductForm';

export const Routerr = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* <Route element={<LoginPage />} path='/' /> */}
        <Route element={<App />} path='/' />
        <Route element={<ProductPage />} path={`/product/:id`}/>
        <Route element={<DetailsPage />} path={`/product/:id/details`} />
        <Route element={<CreatePage />} path={'/create-new-recipe'} ></Route>
        <Route element={<div>Page not found</div>} path='*' />



      </Routes>
    </BrowserRouter>

  )
}