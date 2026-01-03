import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { modulesData } from '../data/modules';
import { ArrowRight, BookOpen } from 'lucide-react';

const Lesson = () => {
  const { id } = useParams();
  const module = modulesData.find(m => m.id === id);

  if (!module) return <div>Module non trouvé</div>;

  // Simple parser pour le markdown basique du contenu (pour MVP sans librairie lourde)
  const renderContent = (text) => {
    return text.split('\n').map((line, idx) => {
      const cleanLine = line.trim();
      if (!cleanLine) return <br key={idx} />;
      if (cleanLine.startsWith('## ')) return <h2 key={idx} className="text-xl font-bold text-slate-900 mt-6 mb-3">{cleanLine.replace('## ', '')}</h2>;
      if (cleanLine.startsWith('* ')) return <li key={idx} className="ml-4 list-disc text-slate-700 mb-1">{cleanLine.replace('* ', '')}</li>;
      // Bold handling simple
      const parts = cleanLine.split('**');
      if (parts.length > 1) {
        return (
            <p key={idx} className="mb-2 text-slate-700 leading-relaxed">
                {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part)}
            </p>
        );
      }
      return <p key={idx} className="mb-2 text-slate-700 leading-relaxed">{cleanLine}</p>;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link to="/dashboard" className="text-sm text-slate-500 hover:text-brand-600">← Retour au tableau de bord</Link>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
            <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
                <BookOpen size={24} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-slate-900">{module.title}</h1>
                <p className="text-slate-500">Leçon</p>
            </div>
        </div>

        <div className="prose prose-slate max-w-none">
          {renderContent(module.lesson)}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <Link 
            to={`/quiz/${id}`}
            className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-sm"
          >
            Passer le Quiz <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
