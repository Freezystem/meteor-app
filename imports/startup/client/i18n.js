'use strict';

import { Session }  from 'meteor/session';
import { TAPi18n }  from 'meteor/tap:i18n';

export const getUserLanguage = () =>
  Session.get('uiLang') || window.navigator.userLanguage || window.navigator.language;

export default function setLanguage () {
  TAPi18n.setLanguage(getUserLanguage())
    .done(() => {
      Session.setPersistent('uiLang', TAPi18n.getLanguage());
      $('html').attr('lang', TAPi18n.getLanguage());
    })
    .fail(error => {
      console.error('unable to set language:', error);
    });
};