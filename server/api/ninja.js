// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  // handle query params
  // eslint-disable-next-line no-undef
  const { name } = getQuery(event)

  // handle post data
  // eslint-disable-next-line no-undef
  const { age } = await readBody(event)

  return {
    message: `Hello, ${name}! Your are ${age} years old`,
  }
})
