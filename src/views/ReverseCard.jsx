import { useContext } from "react"
import { Fab } from "../components"
import { useNavigate } from "react-router-dom"
import { QuestionContext } from "../context/QuestionContext"
import { useParams } from "react-router-dom"

export const ReverseCard = () => {
  const { question } = useContext(QuestionContext)
  let { id } = useParams();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className="w-[80%] bg-yellow-200 rounded-[21px] shadow flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-evenly items-center">
        <p className="text-center text-[28px] font-medium tracking-wider" >{question[id].question}</p>
        <p>Por: {question[id].author}</p>
      </div>
      <Fab onClick={handleClick} />
    </div >
  )
}
