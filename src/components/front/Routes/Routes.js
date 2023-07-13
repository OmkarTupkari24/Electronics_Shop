import React from 'react';
import Products from '../products/Products';
import {Route} from 'react-router-dom';


const Routes = () => {
  return (
    <div>
           <Route path='/' exact>
             <Products />
           </Route>
              
    
    </div>
  )
}

export default Routes;