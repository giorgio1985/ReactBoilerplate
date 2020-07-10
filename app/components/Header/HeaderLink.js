import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: black;
  padding: 0.30em;
  margin: 1.2em;
  margin-left: 3em;
  float: left;
  padding-top: 5.1em;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  &:active {
    background: #grey;
    color: #fff;
  }
`



/*display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  } */
