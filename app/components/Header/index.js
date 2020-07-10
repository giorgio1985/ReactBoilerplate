import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import logo from './logo.png';
import messages from './messages';
import {TopHeader, InnerHeader } from './style';

function Header() {
  return (
    <div>
    <TopHeader>
     <InnerHeader></InnerHeader> 
      </TopHeader>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.team} />
        </HeaderLink>
        <HeaderLink to="/">
          <FormattedMessage {...messages.portfolio} />
        </HeaderLink>
        <HeaderLink to="/">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
        <HeaderLink to="/">
          <FormattedMessage {...messages.product} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
/*
<A href="/">
        <Img src={logo} alt="Personal - Logo" />
       </A>

*/