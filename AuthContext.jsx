import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({}); // { moduleId: { score: int, attempts: int, lastDate: string } }

  // Charger depuis le localStorage au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem('cybercare_user');
    const storedProgress = localStorage.getItem('cybercare_progress');
    
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedProgress) setProgress(JSON.parse(storedProgress));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('cybercare_user', JSON.stringify(userData));
    // Initialiser la progression si vide
    if (!localStorage.getItem('cybercare_progress')) {
        setProgress({});
    }
  };

  const logout = () => {
    setUser(null);
    setProgress({});
    localStorage.removeItem('cybercare_user');
    localStorage.removeItem('cybercare_progress');
  };

  const saveResult = (moduleId, score) => {
    const currentModuleProgress = progress[moduleId] || { attempts: 0, score: 0 };
    
    const newProgress = {
      ...progress,
      [moduleId]: {
        score: Math.max(score, currentModuleProgress.score), // On garde le meilleur score
        attempts: currentModuleProgress.attempts + 1,
        lastScore: score,
        lastDate: new Date().toISOString()
      }
    };

    setProgress(newProgress);
    localStorage.setItem('cybercare_progress', JSON.stringify(newProgress));
  };

  return (
    <AuthContext.Provider value={{ user, progress, login, logout, saveResult }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);