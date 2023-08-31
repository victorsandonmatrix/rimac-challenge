export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}')
}

export const setItem = async (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const resetStorage = () => {
  localStorage.clear()
}
