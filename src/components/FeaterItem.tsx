
import { FeatureItemType } from '../types'
import Card from './card'
import { BsArrowRight } from 'react-icons/bs'

const FeaterItem = ({featerItem}:{featerItem:FeatureItemType}) => {
    const {id,title,text,icon,link}=featerItem
  return (
    <Card key={id}>
      <div className='space-y-8 '>
     <div className='space-y-4  '>
     <img src={`images/${icon}.svg`} className='size-20'/>
        <h6 className='h6'>
            {title}
        </h6>
        <p className='font-roboto text-light-subtitle'>
            {text}
        </p>
     </div>

        <a href={link} className='text-primary l1 flex flex-row items-center gap-x-2  '>
        See Explained
        <BsArrowRight/>
        </a>
      </div>
    </Card>
  )
}

export default FeaterItem
