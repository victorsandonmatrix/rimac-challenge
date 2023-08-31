'use client'
import { FC, useEffect, useState } from 'react'

import { Plans } from '../Plans/Plans'
import { ChooseForCard } from '../ChooseForCard/ChooseForCard'

import { UserResponse } from '@/fetch/getUser'
import { PlansResponse } from '@/fetch/getPlans'

interface Props {
  user: UserResponse
  plans: PlansResponse
}

export const ChoosePlan: FC<Props> = ({ user, plans }) => {
  const [choosedCard, setChoosedCard] = useState(0)

  const calcUserAge = () => {
    const year = new Date(user.birthDay).getFullYear()
    const age = new Date().getFullYear() - year
    return age
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
      <ChooseForCard
        choosedCard={choosedCard}
        setChoosedCard={setChoosedCard}
      />

      <Plans age={calcUserAge()} plans={plans} choosedCard={choosedCard} />
    </>
  )
}
