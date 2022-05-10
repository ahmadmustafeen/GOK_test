import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./Navigator";
import Home from "./container/Home";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
const client = new ApolloClient({
  uri: "https://graphmovies.herokuapp.com/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
