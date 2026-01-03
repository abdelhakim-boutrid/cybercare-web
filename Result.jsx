import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { modulesData } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { progress } = useAuth();
  
  const module = modulesData.find(m => m.id === id);
  
  if (!state || !module) return <Navigate to="/dashboard" />;
  
  const { score, total, userAnswers } = state;
  const percentage = (score / total) * 100;
  const isSuccess = score >= 3;

  // Logique de recommandation
  let recommendation = null;
  
  // 1. Si échec actuel, recommander de refaire ce module
  if (!isSuccess) {
    recommendation = {
        text: "Nous vous recommandons de relire la leçon et de réessayer ce module.",
        link: `/module/${id}`,
        label: "Revoir la leçon",
        icon: RotateCcw
    };
  } else {
    // 2. Sinon, chercher le module avec le pire score ou le premier non fait
    const otherModules = modulesData.filter(m => m.id !== id);
    const weakModule = otherModules.sort((a, b) => {
        const scoreA = progress[a.id]?.score || 0;
        const scoreB = progress[b.id]?.score || 0;
        return scoreA - scoreB;
    })[0];

    if (weakModule) {
        const weakScore = progress[weakModule.id]?.score;
        recommendation = {
            text: weakScore !== undefined 
                ? `Continuez avec le module "${weakModule.title}" pour améliorer votre score.`
                : `Continuez votre formation avec le module "${weakModule.title}".`,
            link: `/module/${weakModule.id}`,
            label: "Module suivant",
            icon: ArrowRight
        };
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className={`p-8 rounded-xl text-center border ${isSuccess ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-4">
            {isSuccess ? <CheckCircle className="text-green-500 w-12 h-12" /> : <AlertTriangle className="text-red-500 w-12 h-12" />}
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{score} / {total}</h1>
        <p className={`text-lg font-medium ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
            {isSuccess ? 'Félicitations ! Module validé.' : 'Module non validé. Il faut 3/5 minimum.'}
        </p>
      </div>

      {/* Corrections */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-semibold text-slate-700">
            Corrections détaillées
        </div>
        <div className="divide-y divide-slate-100">
            {module.questions.map((q, idx) => {
                const isCorrect = userAnswers[idx] === q.answer;
                return (
                    <div key={idx} className="p-4 sm:p-6">
                        <div className="flex gap-3">
                            <div className="mt-1">
                                {isCorrect ? <CheckCircle size={20} className="text-green-500" /> : <XCircle size={20} className="text-red-500" />}
                            </div>
                            <div>
                                <p className="font-medium text-slate-900 mb-2">{q.question}</p>
                                <p className="text-sm text-slate-500 mb-2">
                                    Votre réponse : <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{q.options[userAnswers[idx]]}</span>
                                </p>
                                {!isCorrect && (
                                    <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                                        Bonne réponse : {q.options[q.answer]}
                                    </p>
                                )}
                                <p className="text-sm text-slate-600 italic">
                                    ℹ️ {q.explanation}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      {/* Recommandation */}
      {recommendation && (
        <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h3 className="font-bold text-brand-900 mb-1">Recommandation</h3>
                <p className="text-brand-700 text-sm">{recommendation.text}</p>
            </div>
            <Link 
                to={recommendation.link}
                className="whitespace-nowrap flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
                {recommendation.label} <recommendation.icon size={18} />
            </Link>
        </div>
      )}

      <div className="text-center pt-4">
        <Link to="/dashboard" className="text-slate-500 hover:text-slate-800 font-medium">Retour au tableau de bord</Link>
      </div>
    </div>
  );
};

export default Result;