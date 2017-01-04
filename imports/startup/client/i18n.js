'use strict';

import { TAPi18n }  from 'meteor/tap:i18n';

const getUserLanguage = () => window.navigator.userLanguage || window.navigator.language;

export default function setLanguage () {
  TAPi18n.setLanguage(getUserLanguage())
    .done(() => {
      $('html').attr('lang', getUserLanguage());
    })
    .fail(error => {
      console.error('unable to set language:', error);
    });
};