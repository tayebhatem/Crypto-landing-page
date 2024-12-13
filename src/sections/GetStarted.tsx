import Button from "../components/button"
import StepItem from "../components/StepItem"
import { setpsData } from "../constants"


const GetStarted = () => {
  return (
  <section className="py-20 relative bg-above-the-fold  overflow-x-clip ">
    <div className="container  mx-auto max-md:grid-cols-1 grid grid-cols-2 max-md:gap-x-4 gap-y-10 relative z-10  max-md:px-6 px-12 ">
    <div className="space-y-[40px]">
     <div>
     <h3 className="max-lg:h4 h3 text-light-title py-[10px] max-md:text-center">How To Get Started</h3>
        <p className="max-lg:s2 s1 text-light-subtitle py-[10px] max-md:max-w-full max-md:text-center max-w-sm">
        Simple and easy way to start your investment 
        in cryptocurrency
        </p>
     </div>
       <div className="w-full flex max-md:justify-center">
       <Button >
        Get Started
        </Button>
       </div>
    </div>

    <div className="space-y-6">
        {
            setpsData.map((item)=>(
               <StepItem stepItem={item}/>
            ))
        }
    </div>
    </div>
  </section>
  )
}

export default GetStarted
