import React from 'react';
import { FooterSection, FooterDesk } from './style';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
   <FooterSection>
    <FooterDesk>Copiright &copy; 2020 </FooterDesk>
  </FooterSection> 
    /*<Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="">Max Stoibern</A>,
          }}
        />
      </section>
    </Wrapper>*/
  );
}

export default Footer;
