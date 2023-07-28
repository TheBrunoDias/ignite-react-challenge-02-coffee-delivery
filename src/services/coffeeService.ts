export interface Coffee {
  id: string
  title: string
  image_url: string
  categories: string[]
  description: string
  price: number
}

export const coffeeService = {
  list: async function () {
    const response = await fetch('/api/coffees.json')

    return (await response.json()) as Coffee[]
  },
  findById: async function (id: string) {
    const list = await this.list()

    return list.find((i) => i.id === id)
  },
}
