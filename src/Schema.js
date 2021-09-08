
import { json } from 'express';
import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } from 'graphql';

import fetch from 'node-fetch';

const  BASE_URL = 'http://localhost:5000/api/users/'

  function getUserByURL(relativeURL){
    return fetch(`${BASE_URL}${relativeURL}`)
    .then(res => res.json())
    .then(json => json.user);
  }

const UserType = new GraphQLObjectType({
  name: 'Users',
  description: '.....',
  
  fields: () => ({
  
    firstName: {
      type: GraphQLString,
      resolve: user => user.first_name,
    },
  
    lastName: {
      type: GraphQLString,
      resolve: user => user.last_name,
    },
  
    email: {type: GraphQLString},
    username: {type: GraphQLString},
    //id: globalIdField('Users'),
    id : {type : GraphQLString},
  
    friends: {
      type: new GraphQLList(UserType),
      resolve: user => user.friends.map(getUserByURL),
    },
  }),
  // interfaces: [ nodeInterface ],
  });
  

const Querytpe  = new GraphQLObjectType ({
  name :'Query',
  description : "This is Query run here....",

  fields : () =>({
      user : {
          type : UserType,
          args : {
              id : { type : GraphQLString},

          },

          resolve : (root, args) => getUserByURL(`/usersinfo/1/`),
          // fetch(`${BASE_URL}/usersinfo/${args.id}/`)
          // .then(res => res.json())
          // .then(json => json.user)
      }
  })


})

export default new GraphQLSchema({
    query : Querytpe,
});

