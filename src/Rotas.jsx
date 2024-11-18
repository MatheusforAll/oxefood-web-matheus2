import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCliente from './Views/cliente/FormCliente';
import ListCliente from './Views/cliente/ListCliente';
import FormEntregador from './Views/entregador/FormEntregador';
import ListEntregador from './Views/entregador/ListEntregador';
import Home from './Views/home/Home';
import FormProduto from './Views/produto/FormProduto';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-cliente" element={ <ListCliente/> } />
            <Route path="/list-entregador" element={ <ListEntregador/> } />
            <Route path="/form-cliente" element={<FormCliente />} />
            <Route path="/form-produto" element={<FormProduto />} />
            <Route path="/form-entregador" element={<FormEntregador />} />
        </Routes>
    );
}

export default Rotas;
