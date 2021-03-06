import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

/**
 * pages
 */
import Main from './pages/Main';
import Header from './pages/Header';
import PostPage from './pages/PostPage';
import Mounting from './pages/Mounting';
import NoMounting from './pages/NoMounting';
import Footer from './pages/Footer';

/**
 * theme
 */
import * as BaseTheme from './themes/BaseTheme';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://relaxed-gecko-28.hasura.app/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={BaseTheme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path='/mounting'>
              <Mounting />
            </Route>
            <Route path='/not-mounting'>
              <NoMounting />
            </Route>
            <Route path='/post-mounting'>
              <PostPage />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
