

import express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './src/Schema.js';
import router from './src/routes/user.routes.js';
const app = express()
const port = process.env.PORT || 5000;



  app.use('/graphql', graphqlHTTP({

    schema,
    graphiql: true,
   

  }))



 
 
  // using as middleware
  app.use('/api/users', router)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});