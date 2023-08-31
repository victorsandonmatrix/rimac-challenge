import { useRouter } from 'next/navigation'

import { PlansResponse } from '@/fetch/getPlans'
import { PlanCard } from '../PlanCard/PlanCard'

import { Container } from './styles'

interface Props {
  age: number
  plans: PlansResponse
  choosedCard: number
}

export const Plans = ({ age, plans, choosedCard }: Props) => {
  const { push } = useRouter()
  const discount = choosedCard === 1 ? 1 : 0.95

  const choosePlan = (plan: (typeof plans.list)[0]) => {
    localStorage.setItem('choosedPlan', JSON.stringify(plan))
    push('success')
  }

  const calcPrice = (val: number) => {
    return val * discount
  }

  return (
    <Container hidden={choosedCard === 0}>
      {plans?.list.map((plan, i) => {
        return (
          plan.age <= age && (
            <PlanCard
              key={'key-plancard-' + i}
              isRecommended={i === 4}
              {...plan}
              price={calcPrice(plan.price)}
              onClick={() =>
                choosePlan({ ...plan, price: calcPrice(plan.price) })
              }
            />
          )
        )
      })}
    </Container>
  )
}
