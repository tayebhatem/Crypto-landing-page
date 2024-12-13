
import { ArticleItemType } from '../types'
import Card from './card'


const ArticleItem = ({articleItem}:{articleItem:ArticleItemType}) => {
    const {text,thumbnail,title,caption}=articleItem

  return (
   <Card >
    <div className='-mr-7 -ml-7 -mt-[18px]  '>
    <img src={`/images/${thumbnail}.svg`} className='object-cover w-full '/>
    </div>
   
    <div className='space-y-3 pt-6'>
     <span className='font-roboto text-xs text-light-subtitle bg-white/5 rounded p-1.5'>{caption}</span>
     <p className='l1'>{title}</p>
     <p className='font-roboto text-[14px] text-light-subtitle line-clamp-2'>{text}</p>
    </div>
   </Card>
  )
}

export default ArticleItem
