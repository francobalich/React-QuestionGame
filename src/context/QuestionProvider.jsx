import { useState } from "react"
import { QuestionContext } from "./QuestionContext"

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState()
  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}
