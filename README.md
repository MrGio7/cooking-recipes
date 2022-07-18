<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">cooking-recipes</h3>

---

<p align="center"> 
  Back-End, for an application that will be used for entry and display of cooking recipes.
    <br> 
  Client can request:
    <br>
  -The list of possible ingredients from the server
    <br>
  -List of all recipes
    <br>
  -Specific recipe by Id
    <br> <br>
  Also client can add recipe and ingredients.
</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Welcome to the cooking-recipes API! 🎉 Get familiar with available objects, try querying this graph using <a href='https://cooking-recipes-demo.herokuapp.com/'>Explorer</a>.

- [Apollo Studio Explorer](https://cooking-recipes-demo.herokuapp.com/) - Deployed Graphql Sandbox

Or you can also run local server.

### Prerequisites

To run server on local env you will need:

- nodejs
- git
- postgreSQL db url

### Installing

- install dependecies

```
npm install
```

- create .env file in the root directory and add

```
DATABASE_URL="postgreSQL db url"
```

- generate db

```
npx prisma migrate dev --name init
```

- done

## 🎈 Usage <a name="usage"></a>

- run

```
npm start
```

- open http://localhost:4000/

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - Database
- [Apollo Server](https://www.apollographql.com/docs/apollo-server) - Server Framework
- [GraphQL](https://graphql.org/) - A query language for API
- [NodeJs](https://nodejs.org/en/) - Server Environment
