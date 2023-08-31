import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { ChoosePlan } from '@/components/ChoosePlan/ChoosePlan'

import { UserResponse, getUser } from '@/fetch/getUser'
import { PlansResponse, getPlans } from '@/fetch/getPlans'

import { Container } from './styles'

export default async function Home() {
  const user: UserResponse = await getUser()
  const plans: PlansResponse = await getPlans()

  return (
    <MainLayout>
      <Container>
        <p className="home_title">{user.name} ¿Para quién deseas cotizar?</p>

        <p className="home_paragraph">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>

        <ChoosePlan user={user} plans={plans} />
      </Container>
    </MainLayout>
  )
}
