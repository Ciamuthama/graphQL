const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
   
    graphiql: true  // Enables the GraphiQL interface for testing
  }));
const port = 3000;  // You can use any port number here
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`);
  });
      