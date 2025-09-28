import React from 'react'

const FeatureCard = ({icon ,title,description}) => {
  return (
    <div>
        <div className="bg-[#0f172a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 text-left  ">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
    </div>
  )
}

export default FeatureCard
