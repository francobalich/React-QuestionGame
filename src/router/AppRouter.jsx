import { Route } from 'react-router-dom'
import { GameCard, QuestionForm, ReverseCard } from '../views'
import { Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<GameCard />} />
      <Route path='/add' element={<QuestionForm />} />
      <Route path='/question/:id' element={<ReverseCard />} />
    </Routes>
  )
}
