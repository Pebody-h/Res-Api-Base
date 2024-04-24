let animalsData = [
  {
    id: 1,
    nombre: "León",
    especie: "Panthera leo",
    habitat: "Sabana",
    edad: 8,
    peso_kg: 200
  },
  {
    id: 2,
    nombre: "Tigre",
    especie: "Panthera tigris",
    habitat: "Selva",
    edad: 6,
    peso_kg: 180
  },
  {
    id: 3,
    nombre: "Elefante",
    especie: "Loxodonta africana",
    habitat: "Savana y bosques",
    edad: 15,
    peso_kg: 5000
  },
  {
    id: 4,
    nombre: "Gorila",
    especie: "Gorilla gorilla",
    habitat: "Selva",
    edad: 12,
    peso_kg: 200
  },
  {
    id: 5,
    nombre: "Jirafa",
    especie: "Giraffa camelopardalis",
    habitat: "Sabana",
    edad: 10,
    peso_kg: 1200
  }
]

const getAnimals = (req, res) => {
  res.status(200).json(animalsData)
}

const getAnimalById = (req, res) => {
  const idAnimal = parseInt(req.params.id) 
  let result = 0
  animalsData.map((a,i) => {
    if (a.id === idAnimal) {result = i; error = false}
  })
  res.send(animalsData[result])
}

const postAnimal = (req, res) => {
  const {id, nombre, especie, habitat, peso_kg} = req.body
  animalsData.push({ id, nombre, especie, habitat, peso_kg })
  res.send('Animal añadido correctamente')
}

const deleteAnimal = (req, res) => {
  const idAnimal = parseInt(req.params.id) 
  animalsData =  animalsData.filter(animal => animal.id !== idAnimal)
  res.send("Animal eliminado correctamente")
}

module.exports = {
  getAnimals,
  getAnimalById,
  postAnimal,
  deleteAnimal
}