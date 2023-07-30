import { useNavigate } from "react-router-dom";

export const Card = ({number}) => {
  const navigate = useNavigate()

  const handleSelectCard=()=>{
    console.log(`Clic en la carta ${number}.`);
    navigate(`/question/${number}`)
  }
  return (
    <button onClick={handleSelectCard} className="bg-blue-400 w-[100px] h-[100px] flex rounded-[24px] border-white border-4 justify-center items-center text-6xl text-white hover:brightness-110" >
      <p className="">{number}</p>
    </button>
  )
}
