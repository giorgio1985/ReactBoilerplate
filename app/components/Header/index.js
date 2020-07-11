import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import { TopHeader, InnerHeader } from './style';

function Header() {
  return (
    <div>
      <TopHeader>
        <InnerHeader />
      </TopHeader>
      <NavBar>
        <HeaderLink to="/contact">
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
