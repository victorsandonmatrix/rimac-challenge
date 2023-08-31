export interface PlansResponse {
  list: { name: string; price: number; description: string[]; age: number }[]
}

export const getPlans = async () => {
  try {
    const res = await fetch(
      'https://rimac-front-end-challenge.netlify.app/api/plans.json'
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log('Error al traer datos del usuario')
  }
}
