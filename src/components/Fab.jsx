
import { twMerge } from "tailwind-merge"
import check from "../assets/check.svg"
import plus from "../assets/plus.svg"

export const Fab = ({ onClick, color="green" }) => {
  const validateColor=()=>{
    return color==="green"
  }
  return (
    <button onClick={onClick} className={twMerge("w-[41px] h-[45px] pb-[7px]  rounded-lg shadow border-white border-[3px] justify-center items-center gap-2.5 hover:brightness-110", color === "green" ? 'bg-lime-600' : 'bg-cyan-300')} >
      <div div className="w-[35px] h-[35px] bg-lime-500 rounded-[5px] shadow justify-center items-center flex" >
        <img src={validateColor?check:plus} />
      </div>
    </button>
  )
}
