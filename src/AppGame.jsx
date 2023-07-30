import { useEffect } from "react"
import { AppRouter } from "./router/AppRouter"
import { useContext } from "react"
import { QuestionContext } from "./context/QuestionContext"
import questionData from "./data/questions.json"

function AppGame() {
  const { question, setQuestion } = useContext(QuestionContext)
  useEffect(() => {
    console.log(question);
    if (question === undefined) {
      const questionsUnread = questionData.filter(question => !question.status)
        // .sort(() => 0.5 - Math.random())
        .sort(() => ((Math.floor(Math.random() * 3) - 1)))
        .slice(0, 8)
      setQuestion(questionsUnread)
    }
  }, [])
  return (
    <div className="bg-gradient-to-r from-[#A659FE] to-[#6F53FD] h-[100vh] flex justify-center items-center">
      <AppRouter />
    </div>
  )
}

export default AppGame
