import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Home";
import QuemSomos from "./components/QuemSomos";
import Precos from "./components/Precos";
import Servicos from "./components/Servicos";
import TelaCadastro from "./components/TelaCadastro";
import TelaCadastroEmpresa from "./components/TelaCadastro/empresa";
import TelaLogin from "./components/TelaLogin";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Metricas from "./components/Dashboard/Metricas";
import MeuPerfil from "./components/Dashboard/MeuPerfil";
import DataIntagram from "./components/Dashboard/FormIntagram";
import ProtectedRoute from './ProtectedRoute ';
const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Header />
                        <QuemSomos />
                        <Precos />
                        <Servicos />
                        <Footer />
                    </div>
                } />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/empresa" element={<TelaCadastroEmpresa />} />
                
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/metricas/:nomePerfil" element={<ProtectedRoute><Metricas /></ProtectedRoute>} />
                <Route path="/meu-perfil" element={<ProtectedRoute><MeuPerfil /></ProtectedRoute>} />
                <Route path="/authInstagram" element={<ProtectedRoute><DataIntagram/></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default MainRoutes;
