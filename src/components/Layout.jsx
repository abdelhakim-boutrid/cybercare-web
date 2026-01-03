import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, LogOut } from 'lucide-react';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return <Outlet />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-brand-600 font-bold text-xl">
            <ShieldCheck className="h-8 w-8" />
            CyberCare
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-slate-900">{user.prenom} {user.nom}</p>
              <p className="text-xs text-slate-500 uppercase">{user.role}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Déconnexion"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
