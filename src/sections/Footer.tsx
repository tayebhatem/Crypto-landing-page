import Logo from "../components/Logo"
import { footerNavs, social } from "../constants"
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
   <footer className="py-16 border-t border-t-white/5">
    <div className="container  max-md:px-6 px-12 mx-auto grid gap-y-8 gap-x-4  max-lg:grid-cols-2 grid-cols-5">

        <div className="max-lg:col-span-1 col-span-2 space-y-6">
         <Logo/>
         <ul className="flex flex-row gap-x-3">
            {
                social.map((icon)=>(<li><a href="/"><Icon icon={icon} className="size-6 text-light-subtitle" /></a></li>))
            }
         </ul>
         <p className="font-roboto text-light-subtitle">2021 CoinMarketCap. All rights reserved</p>
        </div>

        {
         footerNavs.map((item,index)=>(
            <div key={index} className="space-y-6">
                <h6 className="font-semibold text-[18px] text-light-title capitalize">{item.title}</h6>

                <ul className="space-y-4">
                 {
                    item.navs.map((link)=>(<li className="cursor-pointer text-light-subtitle font-roboto"><a href="/">{link}</a></li>))
                 }
                </ul>
            </div>
         ))
        }
    </div>
   </footer>
  )
}

export default Footer
