import { Link } from "react-router-dom";

export const Card = ({number}) => {

  const handleSelectCard=()=>{
  }
  return (
    <Link to={`/question/${number}`} onClick={handleSelectCard} className="bg-blue-400 w-[100px] h-[100px] flex rounded-[24px] border-white border-4 justify-center items-center text-6xl text-white hover:brightness-110" >
      <p className="">{number}</p>
    </Link>
  )
}
