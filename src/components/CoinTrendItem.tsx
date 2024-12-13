
import { CointItemType } from '../types'
import Card from './card'


const CoinTrendItem = ({coinItem}:{coinItem:CointItemType}) => {
    const {logo,id,caption,name,lastPrice,change,marketState}=coinItem
  return (
    <Card key={id}>
        <div className='space-y-[17px]'>

       
   <div className='flex flex-row items-center justify-between'>
   <div className='flex flex-row items-center gap-x-4'>
    <img src={logo} className='object-contain max-sm:size-10 size-12' alt='coin'/> 
    <p className='font-semibold text-[18px] text-light-title uppercase'>{name}</p>
    <div className='bg-gery rounded px-[6px] py-1 text[#1D1429] font-semibold text-[10px] uppercase'>{caption}</div>
    </div>
   <a href='/'>
   <img src='/images/see-more-ic.svg' className='object-contain max-sm:size-10'/>
   </a>
   </div>
  <div className='h-[1px] bg-light-title opacity-10 w-full '/>

  <div className='flex flex-row justify-between'>
 <div>
 <p className='font-roboto font-medium text-[24px] text-light-title'>
{lastPrice}
 </p>
 <p className='s1'>
    {change}%
 </p>
    </div>

    <img src={marketState} className='object-contain'/>
  </div>
  </div>
    </Card>
  )
}

export default CoinTrendItem
