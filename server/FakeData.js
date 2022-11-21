const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "Canada",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "Brazil",
      }
    ]
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "Brazil",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "UnitedStates",
    friends: [
      {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "Canada",
        friends: [
          {
            id: 2,
            name: "Pedro",
            username: "PedroTech",
            age: 20,
            nationality: "Brazil",
          }
        ]
      }
    ]
  }
]

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Intersteller",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "superman",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "rocketry",
    yearOfPublication: 2022,
    isInTheaters: true,
  }
]

module.exports = {UserList, MovieList}