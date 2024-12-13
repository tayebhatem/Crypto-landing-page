import  { ReactNode } from 'react'

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-card py-[18px] px-5 overflow-hidden rounded-[18px] border border-white/5 '>
      {children}
    </div>
  )
}

export default Card
