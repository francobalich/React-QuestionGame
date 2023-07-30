import { Card } from "../components/Card"
import { Fab } from "../components/Fab"

export const GameCard = () => {

  const createCards = (amount) => {
    const cards = [];
    let id = 1;
    while (id <= amount) {
      cards.push(<Card number={id} key={id} />)
      id++
    }
    return cards
  }

  return (
    <>
      <section className="flex flex-wrap w-[504px] h-[220px] justify-center items-center gap-2.5 inline-flex">
        {createCards(8)}
      </section>
      <Fab className="fixed right-8 bottom-8" color="blue" />
    </>
  )
}
