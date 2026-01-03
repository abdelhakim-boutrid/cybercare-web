import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modulesData } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveResult } = useAuth();
  
  const module = modulesData.find(m => m.id === id);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // Array of user answers (indices)
  const [selectedOption, setSelectedOption] = useState(null);

  if (!module) return <div>Quiz non trouvé</div>;

  const currentQuestion = module.questions[currentQIndex];

  const handleNext = () => {
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQIndex < module.questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Fin du quiz
      const score = newAnswers.reduce((acc, answer, idx) => {
        return answer === module.questions[idx].answer ? acc + 1 : acc;
      }, 0);
      
      saveResult(id, score);
      
      // Navigation vers résultats avec state
      navigate(`/result/${id}`, { 
        state: { 
          score, 
          total: module.questions.length,
          userAnswers: newAnswers 
        } 
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
       <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Question {currentQIndex + 1}/{module.questions.length}</span>
            <span>{module.title}</span>
        </div>
        <ProgressBar current={currentQIndex + 1} total={module.questions.length} />
       </div>

       <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
         <h2 className="text-xl font-bold text-slate-900 mb-6">{currentQuestion.question}</h2>

         <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all
                        ${selectedOption === idx 
                            ? 'border-brand-500 bg-brand-50 text-brand-800 ring-1 ring-brand-500' 
                            : 'border-slate-200 hover:bg-slate-50'
                        }
                    `}
                >
                    {option}
                </button>
            ))}
         </div>

         <div className="mt-8 flex justify-end">
            <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {currentQIndex === module.questions.length - 1 ? 'Terminer' : 'Suivant'}
            </button>
         </div>
       </div>
    </div>
  );
};

export default Quiz;