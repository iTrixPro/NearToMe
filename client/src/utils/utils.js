let calendar = []
export const clearInputs = (inputs) => {
  console.log(inputs)
  for (const key in inputs) {
    inputs[key].clear()
  }
}

export const setCalendar = (data) => {
  calendar = []
  calendar.push(data)
}

export const getCalendar = () => {
  return calendar
}