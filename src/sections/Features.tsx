import Button from "../components/button"
import FeaterItem from "../components/FeaterItem"
import { featuresData } from "../constants"


const Features = () => {
  return (
    <section className="py-20 relative bg-features overflow-x-clip ">
     <div className="container mx-auto space-y-20 max-md:px-6 px-12">
     <div className="space-y-4 ">
    
     <h3 className="h3 text-center">
    CryptoCap Amazing Faetures
    </h3>
    <p className="s1 text-center">
    Explore sensational features to prepare your best investment in cryptocurrency
    </p>
     </div>
     <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3  grid-cols-4 gap-6">
      {
        featuresData.map((item)=>(
            <FeaterItem featerItem={item}/>
        ))
      }
        </div>

        <div className="flex max-md:flex-col max-md:gap-y-4 flex-row max-lg:gap-x-4 py-5 max-lg:px-8  px-[60px] justify-between items-center rounded-xl border-[1px] border-white/10 relative z-10">
           <div className="max-w-lg space-y-2">
           <h5 className="max-sm:h6 h5 text-light-title">New In Cryptocurrency?</h5>
            <p className="max-lg:s2 s1 text-light-subtitle">
            We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.
            </p>
           </div>

          <div className="max-md:w-full">
          <Button >
          <div className="py-1 text-nowrap">
          Learn & Explore Now
            </div>
           </Button>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Features
