import ArticleItem from "../components/ArticleItem"
import { articles } from "../constants"


const LearnCryptocurency = () => {
  return (
   <section className='py-20'>
     <div className='container mx-auto max-md:px-6 px-12 space-y-16'>
      <div>
      <h3 className='h3  text-center py-2.5'>Learn About Cryptocurrency</h3>
      <p className='s1  text-center py-1.5'>Learn all about cryptocurrency to start investing</p>
      </div>
       <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-6">
        <div className="rounded-[18px] max-sm:col-span-1 col-span-2 overflow-hidden relative">
        <img src={'/images/Thumbnail-0.svg'} className="w-full h-full"/>
        <div className="bg-[#260144]/75 absolute top-0 left-0 w-full h-full flex items-end z-10 p-8">
       <div>
       <h3 className="max-sm:h4 h3 ">All about Investing in NFTs and related risks</h3>
       <span className='font-roboto text-xs text-light-subtitle bg-white/5 rounded p-1.5'>CRYPTO BASIC</span>
       </div>
        </div>
        </div>
        {
            articles.map((item)=>(<ArticleItem articleItem={item} key={item.id}/>))
        }
     </div>

    <div>
    <a href='/' className='text-primary underline font-semibold cursor-pointer '>
     See All Articles
           </a>
    </div>
       
     </div>
    
   </section>
  )
}

export default LearnCryptocurency
