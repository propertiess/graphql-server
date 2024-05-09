import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const profile = {
  name: 'John',
  age: 30,
  bio: 'I am a software engineer',
};

const books = [
  {
    name: 'Book 1',
    author: 'Author 1',
    year: 2010,
    genre: 'Fantasy',
    description: 'Book 1 description',
    image: 'https://example.com/book1.jpg',
    link: 'https://example.com/book1',
  },
  {
    name: 'Book 2',
    author: 'Author 2',
    year: 2015,
    genre: 'Science Fiction',
    description: 'Book 2 description',
    image: 'https://example.com/book2.jpg',
    link: 'https://example.com/book2',
  },
];

const typeDefs = `#graphql
  type Query {
    profile: Profile
    books: [Book]
  }

  type Profile {
    name: String
    age: Int
    bio: String
  }

  type Book {
    name: String
    author: String
    year: Int
    genre: String
    description: String
    image: String
    link: String
  }
`;

const resolvers = {
  Query: {
    profile: () => profile,
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 5000,
  },
});
console.log(`🚀 Server ready at ${url}`);
