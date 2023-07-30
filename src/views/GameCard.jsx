import { useEffect } from "react"
import { Card } from "../components/Card"
import { Fab } from "../components/Fab"
import questionData from '../data/questions.json'
import { useState } from "react"

//background: linear-gradient(90deg, #A659FE 0%, #6F53FD 100%);
export const GameCard = () => {
  const [questions, setQuestions] = useState([])

  const createCards = (amount) => {
    const cards = [];
    let id = 1;
    while (id <= amount) {
      cards.push(<Card number={id} key={id} />)
      id++
    }
    return cards
  }

  useEffect(() => {
    const questionsUnread = questionData.filter(question => !question.status)
      // .sort(() => 0.5 - Math.random())
      .sort(() => ((Math.floor(Math.random() * 3) - 1)))
      .slice(0, 8)
    setQuestions(questionsUnread)
    //TODO: Add useContext
  }, [])

  return (
    <>
      <section className="flex flex-wrap w-[504px] h-[220px] justify-center items-center gap-2.5 inline-flex">

        {createCards(8)}
      </section>
      <Fab className="fixed right-8 bottom-8" color="blue" />
    </>
  )
}
