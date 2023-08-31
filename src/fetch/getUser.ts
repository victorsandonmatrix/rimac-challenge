export interface UserResponse {
  name: string
  lastName: string
  birthDay: string
}

export const getUser = async () => {
  try {
    const res = await fetch(
      'https://rimac-front-end-challenge.netlify.app/api/user.json'
    )
    const data = res.json()
    return data
  } catch (error) {
    console.log('Error al traer datos del usuario')
  }
}
