import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ prenom: '', nom: '', role: 'Infirmier(e)' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.prenom && formData.nom) {
      login(formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-brand-50 p-4 rounded-full mb-4">
            <ShieldCheck className="h-12 w-12 text-brand-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Bienvenue sur CyberCare</h1>
          <p className="text-slate-500 text-center mt-2">Formation cybersécurité pour le personnel hospitalier</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.prenom}
              onChange={(e) => setFormData({...formData, prenom: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.nom}
              onChange={(e) => setFormData({...formData, nom: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Rôle</label>
            <select 
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option>Infirmier(e)</option>
              <option>Médecin</option>
              <option>Administratif</option>
              <option>Direction</option>
              <option>Autre</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-sm mt-4"
          >
            Commencer la formation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;