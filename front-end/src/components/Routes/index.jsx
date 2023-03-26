import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NovoUsuario from '../NovoUsuario';

const Novo = () =>{
    return(
        <div><h1>Novo</h1></div>
    );
}

const Routes2 = () => {
    return(        
        <Routes>
            <Route exact path='/' Component={Novo}/>
            <Route exact path='/sapatos' Component={NovoUsuario}/>
        </Routes>
     );
}
export default Routes2;