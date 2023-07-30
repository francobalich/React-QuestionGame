
import { twMerge } from "tailwind-merge"
import check from "../assets/check.svg"
import plus from "../assets/plus.svg"

export const Fab = ({ onClick, color = "green", className="" }) => {

  return (
    <button onClick={onClick} className={twMerge("pb-1 rounded-lg shadow border-white border-4 justify-center items-center gap-2.5 hover:brightness-110", color === "green" ? 'bg-lime-600' : 'bg-sky-400',className)} >
      <div className={twMerge("w-9 h-9 rounded shadow justify-center items-center flex", color === "green" ? 'bg-lime-500' : 'bg-cyan-300')} >
        <img src={color === "green" ? check : plus} />
      </div>
    </button>
  )
}
