import { StepsType } from "../types"
import Card from "./card"

const StepItem = ({stepItem}:{stepItem:StepsType}) => {
    const {id,icon,text,title}=stepItem
  return (
   <Card key={id}>
    <div className="flex flex-row items-center gap-x-4">
        <img src={`/images/${icon}.svg`} className="max-sm:size-12 max-lg:size-14 size-20"/>
      <div>
      <h6 className="h6 text-light-title py-[10px]">{title}</h6>
        <p className="font-roboto max-sm:text-sm text-light-subtitle">
            {text}
        </p>
      </div>
    </div>
   </Card>
  )
}

export default StepItem
