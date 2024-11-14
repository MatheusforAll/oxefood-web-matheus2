import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCliente from './Views/cliente/FormCliente';
import FormEntregador from './Views/entregador/FormEntregador';
import Home from './Views/home/Home';
import FormProduto from './Views/produto/FormProduto';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form-cliente" element={<FormCliente />} />
            <Route path="/form-produto" element={<FormProduto />} />
            <Route path="/form-entregador" element={<FormEntregador />} />
        </Routes>
    );
}

export default Rotas;
