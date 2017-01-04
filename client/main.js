'use strict';

import { Meteor }       from 'meteor/meteor';

import setLanguage      from '../imports/startup/client/i18n';
import '../imports/startup/client/router';

Meteor.startup(() => {
  setLanguage();
});