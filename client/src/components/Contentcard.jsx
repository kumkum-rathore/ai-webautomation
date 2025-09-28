import React from 'react'
import FeatureCard from './FeatureCard'
import {ChartPie,Cog,BarChart3,Lightbulb,Blinds,Airplay} from 'lucide-react'

const Contentcard = () => {
  return (
    <div>
      <div className="flex flex-row gap-6 px-10 py-18">
        
        <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <FeatureCard
        icon={<Cog  className="w-12 h-12 text-pink-600 m-10 "  />}
        title="AI Insight Engine"
        description="Turn raw data into powerful predictions and strategic insights using machine learning and real-time analytics."
      /></div>

      <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
       <FeatureCard
        icon={<BarChart3 className="w-12 h-12 text-pink-600 m-10 "  />}
        title="Conversational AI Assistant
"
        description="Deploy human-like chatbots and virtual agents that understand context, emotion, and nuance in over 50 languages.



"
      />
      </div>
              <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">

       <FeatureCard
        icon={<ChartPie className="w-12 h-12 text-pink-600 m-10 "  />}
        title="AI Vision System
"
        description="Use computer vision to detect, recognize, and interpret visual data—ideal for manufacturing, retail, and healthcare.
."
      />
        </div>
</div><div className="mt-10 flex flex-row gap-6 px-10 py-18">
        <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">

      <FeatureCard
        icon={<Lightbulb className="w-12 h-12 text-pink-600 m-10 "  />}
        title="AI Compliance Monitor"
        description="Turn raw data into powerful predictions and strategic insights using machine learning and real-time analytics.



."
      />  </div>
        <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">

      <FeatureCard
        icon={<Blinds  className="w-12 h-12 text-pink-600 m-10 "  />}
        title="Workflow Automation"
        description="Deploy human-like chatbots and virtual agents that understand context, emotion, and nuance in over 50 languages.
."
      />  </div>
        <div className="bg-[#f5f5f6] rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">

      <FeatureCard
        icon={<Airplay className="w-12 h-12 text-pink-600 m-10 "  />}
        title="Document Intelligence
"
        description="Use computer vision to detect, recognize, and interpret visual data—ideal for manufacturing, retail, and healthcare.

."
      />  </div>
     </div>
</div>
  )
}

export default Contentcard
