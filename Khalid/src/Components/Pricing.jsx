import React, { useState } from 'react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Beginner Plan",
      monthly: 500,
      yearly: 5000,
      description: "Best for beginners to start their fitness journey",
      Features: [
        { text: "Access to basic equipment", available: true },
        { text: "One Personal Trainer session", available: true },
        { text: "Dietary consultation", available: false },
        { text: "Access to premium class", available: false },
      ]
    },
    {
      name: "Premium Plan",
      monthly: 800,
      yearly: 8500,
      description: "Perfect for advance users with extra perks.",
      Features: [
        { text: "Access to basic equipment", available: true },
        { text: "One Personal Trainer session", available: true },
        { text: "Dietary consultation", available: false },
        { text: "Access to premium class", available: true },
      ]
    },
    {
      name: "Pro Plan",
      monthly: 1000,
      yearly: 10000,
      description: "Ideal for professionals aiming for peak performance",
      Features: [
        { text: "Unlimited Gym access", available: true },
        { text: "Daily Personal training", available: true },
        { text: "Dietary consultation", available: true },
        { text: "Access to premium class", available: true },
      ]
    },
  ]

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Pricing Plans
        </h2>
        <p className="text-lg text-gray-400 mt-3">
          Choose the plan that fits you best.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-6 py-3 rounded-full font-semibold ${
            !isYearly ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setIsYearly(true)}
          className={`px-6 py-3 rounded-full font-semibold ${
            isYearly ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative max-w-sm w-full p-8 rounded-2xl bg-gray-800 shadow-lg transform transition-all duration-500
              ${
                index === 1
                  ? "border-4 border-purple-600 bg-gray-700 scale-105"
                  : "border-2 border-gray-700"
              }
              hover:scale-105 hover:shadow-2xl hover:border-purple-500`}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
            <p className="text-lg text-gray-400 mb-6">{plan.description}</p>

            <p className="text-4xl font-extrabold text-white mb-4">
              ${isYearly ? plan.yearly : plan.monthly}
              <span className="text-lg text-gray-400">
                /{isYearly ? "year" : "month"}
              </span>
            </p>

            <ul className="space-y-3">
              {plan.Features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.available ? (
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                      ✓
                    </span>
                  ) : (
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                      ✗
                    </span>
                  )}
                  <span className="text-gray-300">{feature.text}</span>

                </li>
              ))}
            </ul>

            <button className='w-full bg-purple-600 text-white py-3 m-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition duration-300'>Choose Plans</button>
          </div>
        ))}
      </div>
    </div>
  )
}
