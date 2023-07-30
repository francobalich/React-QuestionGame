import { Card } from "../components/Card"
//background: linear-gradient(90deg, #A659FE 0%, #6F53FD 100%);
export const GameCard = () => {
  return (
    <section className="flex flex-wrap w-[504px] h-[220px] justify-center items-center gap-2.5 inline-flex">
        <Card number={1} />
        <Card number={2} />
        <Card number={3} />
        <Card number={4} />
        <Card number={5} />
        <Card number={6} />
        <Card number={7} />
        <Card number={8} />
    </section>
  )
}
