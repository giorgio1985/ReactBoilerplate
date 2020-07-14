import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: blue;
  padding: 0.3em;
  margin: 1.2em;
  margin-left: 0.5em;
  float: left;
  padding-top: 5.1em;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  &:active {
    background: #grey;
    color: #fff;
  }
`;
