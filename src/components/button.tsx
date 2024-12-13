import { ReactNode } from "react"


const Button = ({children}:{children:ReactNode}) => {
  return (
   <button className="bg-primary outline-none border-none rounded-[10px] shadow-sm hover:shadow-md text-white px-6 py-3 l1 hover:bg-primary/90 transition-all duration-500">
    {children}
   </button>
  )
}

export default Button
