import React from 'react'
import FeatureCards from './FeatureCards'
import Button from './animated/Buttons'
import Partofallsection from "./Partofallsection"
const Featuresection=()=> {
  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-28 text-center">
<Partofallsection
ptitle={"Built Intelligence Inside"}
ptag={"Our AI Capabilities "}
psubtitle={"From automation to innovation our cutting-edge AI solutions help businesses work smarter, move faster, and grow stronger."}



/>
      <FeatureCards/>

      <Button/>
    </section>
    
  )
}

export default Featuresection
