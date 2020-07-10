/*
 * MainPage Messages
 *
 * This contains all the text for the MainPage component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MainPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MainPage component!',
  },
});
