import  { useState } from 'react'
import { categories, coinsData } from '../constants'
import clsx from 'clsx'
import CryptoTable from '../components/table'
import { BiSearch } from 'react-icons/bi'
import { CointItemType } from '../types'

const Market = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
   const [coinsFilterData, setCoinsFilterData] = useState<CointItemType[]>(coinsData)
   const handlSearchCoins=(text:string)=>{
    const filteredCoins = coinsData.filter((coin) =>
        coin.name.toLowerCase().includes(text.toLowerCase()) ||
        coin.caption.toLowerCase().includes(text.toLowerCase())
      );
      setCoinsFilterData(filteredCoins);
   }
  return (
   <section>
    <div className='container mx-auto space-y-8 max-md:px-6 px-12'>
        <h3 className='h3'>Market Update</h3>

        <div className='space-y-[22px]'>
            <p className='s1'>Cryptocurrency Categories</p>
           <div className='flex flex-row items-center gap-10 flex-wrap'>
           <ul className='flex flex-row items-center gap-x-3 overflow-hidden max-xl:order-last'>
                {
                    categories.map((category)=>(
                        <li 
                        onClick={()=>setSelectedCategory(category)}
                        className={clsx(' px-3 py-[10px] rounded-md cursor-pointer  text-nowrap c1 font-roboto',category!==selectedCategory?'bg-white/5 border border-white/5 text-lightSubtitle':'text-[#211631] bg-light-grey font-medium ')}>
                            {category}

                        </li>
                    ))
                }
            </ul>
           <div className='bg-card border border-white/10 text-light-subtitle rounded-lg p-[10px] flex flex-row items-center gap-x-3 flex-1 '>
           <BiSearch className='size-6'/>
            <input 
            type='text' 
            className='bg-transparent outline-none border-none' placeholder='Search coin...'
            onChange={(e) => handlSearchCoins(e.target.value)}
            />
           </div>
            
           </div>

           <CryptoTable coinData={coinsFilterData}/>

         
        </div>

       <div>
       <a href='/' className='text-primary underline font-semibold cursor-pointer '>
           See All Coins
           </a>
       </div>
    </div>
   </section>
  )
}

export default Market
