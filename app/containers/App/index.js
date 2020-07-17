/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Contact from '../Contact';
import Team from '../Team';
import Portfolio from '../Portfolio';
import About from '../About';
import Product from '../Product';
import Login from '../Login';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1468px + 16px * 2);
  margin: auto;
  display: flex;
  min-height: 100%;
  padding: 0 6px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate!"
        defaultTitle="React.js Boilerplate!"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
/*


*/
