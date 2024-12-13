import ArticleItem from "../components/ArticleItem"
import { articles } from "../constants"
import {motion} from 'framer-motion'

const LearnCryptocurency = () => {
  return (
   <section className='py-20'>
     <div className='container mx-auto max-md:px-6 px-12 space-y-16'>
     <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}>
      <h3 className='h3  text-center py-2.5'>Learn About Cryptocurrency</h3>
      <p className='s1  text-center py-1.5'>Learn all about cryptocurrency to start investing</p>
      </motion.div>
      
       <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-6">

        <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        className="rounded-[18px] max-sm:col-span-1 col-span-2 overflow-hidden relative">
        <img src={'/images/Thumbnail-0.svg'} className="w-full h-full"/>
        <div className="bg-[#260144]/75 absolute top-0 left-0 w-full h-full flex items-end z-10 p-8">
       <div>
       <h3 className="max-sm:h4 h3 ">All about Investing in NFTs and related risks</h3>
       <span className='font-roboto text-xs text-light-subtitle bg-white/5 rounded p-1.5'>CRYPTO BASIC</span>
       </div>
        </div>
        </motion.div>
        {
            articles.map((item)=>(
                <motion.div 
                key={item.id}
                initial={{ y: 100, opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }} 
         viewport={{ once: true, amount: 0.5 }} 
         transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                >

                    <ArticleItem articleItem={item} />
                </motion.div>
            ))
        }
     </div>

    <motion.div
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    viewport={{ once: true, amount: 0.5 }} 
    transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
    
    >
    <a href='/' className='text-primary underline font-semibold cursor-pointer '>
     See All Articles
           </a>
    </motion.div>
       
     </div>
    
   </section>
  )
}

export default LearnCryptocurency
