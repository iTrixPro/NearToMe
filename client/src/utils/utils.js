export const clearInputs = (inputs) => {
  console.log(inputs)
  for (const key in inputs) {
    inputs[key].clear()
  }
}