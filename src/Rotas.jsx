import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCliente from './Views/cliente/FormCliente';
import ListCliente from './Views/cliente/ListCliente';
import FormEntregador from './Views/entregador/FormEntregador';
import ListEntregador from './Views/entregador/ListEntregador';
import Home from './Views/home/Home';
import FormProduto from './Views/produto/FormProduto';
import ListProduto from './Views/produto/ListProduto';
import FormVenda from './Views/venda/FormVenda';
import ListVenda from './Views/venda/ListVenda';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-cliente" element={ <ListCliente/> } />
            <Route path="/list-entregador" element={ <ListEntregador/> } />
            <Route path="/list-produto" element={ <ListProduto/> } />
            <Route path="/list-venda" element={ <ListVenda/> } />
            <Route path="/form-cliente" element={<FormCliente/>} />
            <Route path="/form-produto" element={<FormProduto/>} />
            <Route path="/form-entregador" element={<FormEntregador />} />
            <Route path="/form-venda" element={<FormVenda/>} />
        </Routes>
    );
}

export default Rotas;
