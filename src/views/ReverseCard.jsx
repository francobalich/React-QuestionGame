import { useEffect } from "react"
import { useState } from "react"
import { Fab } from "../components/Fab"
import { useNavigate } from "react-router-dom"

export const ReverseCard = () => {
  const [question, setQuestion] = useState("")
  const [author, setAuthor] = useState("")

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    setQuestion("¿Qué tal el stream de hoy?")
    setAuthor("Franco Balich")
  }, [])

  return (
    <div className="w-[80%] h-52 bg-yellow-200 rounded-[21px] shadow flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-evenly items-center">
        <p className="text-center text-[28px] font-medium tracking-wider" >{question}</p>
        <p>Por: {author}</p>
      </div>
      <Fab onClick={handleClick} />
    </div >
  )
}
