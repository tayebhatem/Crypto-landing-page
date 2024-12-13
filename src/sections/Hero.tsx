
import Button from '../components/button'
import CoinTrendItem from '../components/CoinTrendItem'
import { coinsData } from '../constants'

const Hero = () => {
  return (
    <section className='pt-32 pb-20 relative bg-above-the-fold  overflow-x-clip    '>
   
        <div className='container mx-auto  max-md:px-6 px-12  relative z-10 space-y-32  '>
       <div className='flex items-center flex-col gap-y-14  '>
      <div className='text-center flex flex-col items-center justify-center gap-y-4'>
      <h1 className='h5 max-sm:h4 max-lg:h3 max-2xl:h2 h1 '>Start and Build Your Crypto Portfolio Here</h1>
        <p className='  max-md:s2 s1 max-w-[480px] '>
        Only at CryptoCap, you can build a good portfolio and learn 
        best practices about cryptocurrency.
        </p>
      </div>
        <Button>
       <div className='my-1 mx-6 '>
       Get Started
       </div>
        </Button>
       </div>


<div className='space-y-6'>
  <h5 className='h5'>Market Trend</h5>
  <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-6 '>
 {
  coinsData.slice(0,4).map((item)=>(
    <CoinTrendItem coinItem={item}/>
  ))
 }
  </div>
       </div >

        </div>
    </section>
  )
}

export default Hero
