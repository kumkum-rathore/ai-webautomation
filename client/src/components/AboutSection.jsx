import React from 'react'
import Partofallsection from './Partofallsection'
import FeatureCard from './FeatureCard'

const AboutSection = () => {
  return (
    <div>
            <section className="flex flex-col items-center justify-center pt-20 pb-28 text-center">

      <Partofallsection
ptitle={"Built Intelligence Inside"}
ptag={"Our AI Capabilities "}
psubtitle={"From automation to innovation our cutting-edge AI solutions help businesses work smarter, move faster, and grow stronger."}



/>

<div className="flex flex-row gap-6 px-10 py-18">
         <FeatureCard
icon={<img src="https://img.freepik.com/free-vector/hand-drawn-ai-investing-illustration_23-2151176741.jpg?semt=ais_incoming&w=740&q=80" alt="AI Icon" className='w-30 h-30'/>}
        title="Explainable AI"
        description="Our transparent models offer insights into how decisions are made giving your workflows control and accountability."
      />


</div>
</section>
    </div>
  )
}

export default AboutSection
