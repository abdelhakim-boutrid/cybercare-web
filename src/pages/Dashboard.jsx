import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { modulesData } from '../data/modules';
import * as Icons from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
  const { user, progress } = useAuth();

  // Sécurise progress au cas où il est null/undefined
  const progressSafe = progress ?? {};
  const totalModules = modulesData.length;
  const completedModules = Object.keys(progressSafe).length;

  const totalScore = Object.values(progressSafe).reduce(
    (acc, curr) => acc + (curr?.score ?? 0),
    0
  );

  const maxPossibleScore = totalModules * 5;
  const globalPercentage =
    maxPossibleScore > 0
      ? Math.round((totalScore / maxPossibleScore) * 100)
      : 0;

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium">Score Global</h3>
          <p className="text-3xl font-bold text-brand-600 mt-1">
            {globalPercentage}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium">
            Modules complétés
          </h3>
          <p className="text-3xl font-bold text-brand-600 mt-1">
            {completedModules} / {totalModules}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
          <h3 className="text-slate-500 text-sm font-medium mb-2">
            Progression
          </h3>
          <ProgressBar current={completedModules} total={totalModules} />
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Modules de formation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulesData.map((module) => {
            const Icon = Icons[module.icon] || Icons.Shield; // fallback si l’icône n’existe pas
            const modProgress = progressSafe[module.id];
            const isDone = (modProgress?.score ?? 0) >= 3; // Réussi si score >= 3/5

            return (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className={`group bg-white p-6 rounded-xl border transition-all hover:shadow-md flex items-start gap-4
                  ${
                    isDone
                      ? 'border-green-200 bg-green-50/30'
                      : 'border-slate-200 hover:border-brand-300'
                  }
                `}
              >
                <div
                  className={`p-3 rounded-lg ${
                    isDone
                      ? 'bg-green-100 text-green-600'
                      : 'bg-brand-50 text-brand-600'
                  }`}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {module.title}
                    </h3>

                    {modProgress && (
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          isDone
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {modProgress.score}/5
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                    {module.description}
                  </p>

                  <div className="mt-3 text-xs font-medium text-brand-600">
                    {modProgress ? 'Refaire le module' : 'Commencer le module'}{' '}
                    →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
