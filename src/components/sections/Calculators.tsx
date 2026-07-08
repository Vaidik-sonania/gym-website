import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculators() {
  // BMI State
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiResult, setBmiResult] = useState<null | { value: string, category: string, color: string }>(null);

  // Calorie State
  const [calAge, setCalAge] = useState('');
  const [calGender, setCalGender] = useState('male');
  const [calWeight, setCalWeight] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calActivity, setCalActivity] = useState('1.2');
  const [calGoal, setCalGoal] = useState('maintain');
  const [calResult, setCalResult] = useState<null | { total: number, protein: number, carbs: number, fat: number }>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(bmiHeight) / 100;
    const w = parseFloat(bmiWeight);
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      let category = '';
      let color = '';
      
      if (bmi < 18.5) { category = 'Underweight'; color = 'text-blue-400'; }
      else if (bmi < 24.9) { category = 'Normal'; color = 'text-green-500'; }
      else if (bmi < 29.9) { category = 'Overweight'; color = 'text-orange-500'; }
      else { category = 'Obese'; color = 'text-red-600'; }
      
      setBmiResult({ value: bmi.toFixed(1), category, color });
    }
  };

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(calWeight);
    const h = parseFloat(calHeight);
    const a = parseInt(calAge);
    
    if (w > 0 && h > 0 && a > 0) {
      // Mifflin-St Jeor Equation
      let bmr = (10 * w) + (6.25 * h) - (5 * a);
      bmr = calGender === 'male' ? bmr + 5 : bmr - 161;
      
      let tdee = bmr * parseFloat(calActivity);
      
      if (calGoal === 'lose') tdee -= 500;
      if (calGoal === 'gain') tdee += 500;
      
      // Macros: 30% Protein, 40% Carbs, 30% Fat
      const protein = (tdee * 0.3) / 4;
      const carbs = (tdee * 0.4) / 4;
      const fat = (tdee * 0.3) / 9;
      
      setCalResult({
        total: Math.round(tdee),
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fat: Math.round(fat)
      });
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Tools</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
            Know Your Numbers
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* BMI Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-white/10 p-8"
          >
            <h4 className="text-2xl font-display uppercase text-white mb-6">BMI Calculator</h4>
            <form onSubmit={calculateBMI} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Height (cm)</label>
                  <input type="number" required value={bmiHeight} onChange={e=>setBmiHeight(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-primary outline-none" placeholder="175" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Weight (kg)</label>
                  <input type="number" required value={bmiWeight} onChange={e=>setBmiWeight(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-primary outline-none" placeholder="70" />
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                Calculate BMI
              </button>
            </form>

            {bmiResult && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 border border-white/10 text-center bg-white/5"
              >
                <div className="text-gray-400 uppercase tracking-widest text-sm mb-2">Your BMI Is</div>
                <div className="text-5xl font-display text-white mb-2">{bmiResult.value}</div>
                <div className={`text-xl font-bold uppercase ${bmiResult.color}`}>{bmiResult.category}</div>
              </motion.div>
            )}
          </motion.div>

          {/* Calorie Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background border border-white/10 p-8"
          >
            <h4 className="text-2xl font-display uppercase text-white mb-6">Daily Calories</h4>
            <form onSubmit={calculateCalories} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                  <label className="block text-gray-400 text-sm mb-2">Age</label>
                  <input type="number" required value={calAge} onChange={e=>setCalAge(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-primary outline-none" />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-400 text-sm mb-2">Gender</label>
                  <select value={calGender} onChange={e=>setCalGender(e.target.value)} className="w-full bg-[#151515] border border-white/10 p-3 text-white focus:border-primary outline-none appearance-none">
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-400 text-sm mb-2">Wt (kg)</label>
                  <input type="number" required value={calWeight} onChange={e=>setCalWeight(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-primary outline-none" />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-400 text-sm mb-2">Ht (cm)</label>
                  <input type="number" required value={calHeight} onChange={e=>setCalHeight(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-primary outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Activity Level</label>
                  <select value={calActivity} onChange={e=>setCalActivity(e.target.value)} className="w-full bg-[#151515] border border-white/10 p-3 text-white focus:border-primary outline-none">
                    <option value="1.2">Sedentary</option>
                    <option value="1.375">Lightly Active</option>
                    <option value="1.55">Moderately Active</option>
                    <option value="1.725">Very Active</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Goal</label>
                  <select value={calGoal} onChange={e=>setCalGoal(e.target.value)} className="w-full bg-[#151515] border border-white/10 p-3 text-white focus:border-primary outline-none">
                    <option value="lose">Lose Weight</option>
                    <option value="maintain">Maintain</option>
                    <option value="gain">Build Muscle</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-primary text-white py-3 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors mt-2">
                Calculate Macros
              </button>
            </form>

            {calResult && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 border border-white/10 text-center bg-white/5"
              >
                <div className="text-3xl font-display text-primary mb-4">{calResult.total} <span className="text-lg text-white font-sans uppercase">kcal/day</span></div>
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-gray-400 text-xs uppercase mb-1">Protein</div>
                    <div className="text-white font-bold">{calResult.protein}g</div>
                  </div>
                  <div className="border-l border-r border-white/10">
                    <div className="text-gray-400 text-xs uppercase mb-1">Carbs</div>
                    <div className="text-white font-bold">{calResult.carbs}g</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase mb-1">Fat</div>
                    <div className="text-white font-bold">{calResult.fat}g</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
