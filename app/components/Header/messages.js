/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  product: {
    id: `${scope}.product`,
    defaultMessage: 'product',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'about',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'portfolio',
  },
  team: {
    id: `${scope}.team`,
    defaultMessage: 'team',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'contact',
  },
});
