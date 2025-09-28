import React from 'react'
import FeatureCard from './FeatureCard'
import { Sparkles, Plug, BarChart3 ,AlignHorizontalJustifyEnd ,Blinds} from "lucide-react";
const FeatueCards = () => {
  return (
    <>
<div className="flex flex-row gap-6 px-10 py-18">
         <FeatureCard
        icon={<Sparkles className="w-12 h-12 m-10 text-purple-400" />}
        title="Explainable AI"
        description="Our transparent models offer insights into how decisions are made giving your workflows control and accountability."
      />

      <FeatureCard
        icon={<Plug className="w-12 h-12 text-blue-400 m-10 " />}
        title="Seamless Integration"
        description="Easily connects with your existing tools and platforms, no complex setup, just smooth performance."
      />

      <FeatureCard
        icon={<AlignHorizontalJustifyEnd  className="w-12 h-12 text-pink-400 m-10 "  />}
        title="Actionable Analytics"
        description="Turn raw data into clear, visualized metrics and trends. Make informed choices backed by AI-driven insights."
      />
</div><div className="mt-10 flex flex-row gap-6 px-10 py-18">
       <FeatureCard

       
        icon={<BarChart3 className="w-12 h-12 text-pink-400 m-10 "  />}
        title="Scalable AI Infrastructure"
        description="Break language barriers with AI that understands and responds in 50+ languages.Our transparent models offer insights into how decisions are made giving your workflows.

"
      />

      <FeatureCard
        icon={<Blinds  className="w-12 h-12 text-pink-400 m-10 "  />}
        title="AI-Powered Workflow Automation"
        description="Eliminates repetitive tasks by intelligently managing complex business processes.Our transparent models offer insights into how decisions are made giving your workflows you control and accountability.

."
      />
      
    </div>
    </>
  )
}

export default FeatueCards
