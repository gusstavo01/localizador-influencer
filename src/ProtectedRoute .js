import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
        // Usuário não autenticado é redirecionado para a página de login
        return <Navigate to="/login" />;
    }
    return children;
}
export default ProtectedRoute;