import React, { useState } from 'react';
import { LineChart, BarChart, Home, Lightbulb, DollarSign, TrendingDown } from 'lucide-react';

interface EnergyData {
  date: string;
  usage: number;
  cost: number;
}

interface Suggestion {
  title: string;
  description: string;
  savings: number;
}

function App() {
  const [monthlyUsage, setMonthlyUsage] = useState<number>(0);
  const [currentBill, setCurrentBill] = useState<number>(0);

  const mockEnergyData: EnergyData[] = [
    { date: '2024-01', usage: 930, cost: 140 },
    { date: '2024-02', usage: 850, cost: 128 },
    { date: '2024-03', usage: monthlyUsage || 800, cost: currentBill || 120 },
  ];

  const suggestions: Suggestion[] = [
    {
      title: 'LED Lighting Upgrade',
      description: 'Replace traditional bulbs with LED alternatives',
      savings: 15,
    },
    {
      title: 'Smart Thermostat',
      description: 'Install a programmable thermostat for optimal temperature control',
      savings: 25,
    },
    {
      title: 'Insulation Check',
      description: 'Improve home insulation to reduce heating/cooling costs',
      savings: 20,
    },
  ];

  const predictedBill = (currentBill || 120) * 0.95; // Simple 5% reduction prediction

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-gray-800">Energy Optimizer</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Current Usage</h3>
              <LineChart className="h-5 w-5 text-blue-500" />
            </div>
            <input
              type="number"
              value={monthlyUsage}
              onChange={(e) => setMonthlyUsage(Number(e.target.value))}
              className="w-full p-2 border rounded"
              placeholder="Enter kWh"
            />
            <p className="mt-2 text-sm text-gray-600">kWh this month</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Current Bill</h3>
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <input
              type="number"
              value={currentBill}
              onChange={(e) => setCurrentBill(Number(e.target.value))}
              className="w-full p-2 border rounded"
              placeholder="Enter amount"
            />
            <p className="mt-2 text-sm text-gray-600">$ this month</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Predicted Bill</h3>
              <TrendingDown className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">${predictedBill.toFixed(2)}</p>
            <p className="mt-2 text-sm text-gray-600">Next month estimate</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Potential Savings</h3>
              <BarChart className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              ${(currentBill - predictedBill).toFixed(2)}
            </p>
            <p className="mt-2 text-sm text-gray-600">Monthly savings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Usage History</h3>
            <div className="space-y-4">
              {mockEnergyData.map((data) => (
                <div key={data.date} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">{data.date}</span>
                  <div className="flex space-x-8">
                    <span className="text-blue-600">{data.usage} kWh</span>
                    <span className="text-green-600">${data.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimization Suggestions</h3>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <h4 className="font-semibold text-gray-800">{suggestion.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{suggestion.description}</p>
                  <p className="text-green-600 font-medium">
                    Potential savings: ${suggestion.savings}/month
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
