import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Layout from "./components/Layout.jsx";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Lesson from "./pages/Lesson.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";


// Composant pour protéger les routes
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route element={<Layout />}>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/module/:id" element={
              <ProtectedRoute>
                <Lesson />
              </ProtectedRoute>
            } />
            <Route path="/quiz/:id" element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            } />
            <Route path="/result/:id" element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
