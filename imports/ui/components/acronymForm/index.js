'use strict';

import { Template }     from 'meteor/templating';

import './template.html';
import './style.scss';

Template.acronymForm.events({
  'submit .acronymForm'(event) {
    event.preventDefault();

    const target = event.target;
    const acronym = {
      text : target.text.value,
      desc : target.desc.value
    };

    Meteor.call('acronyms.insert', acronym);

    target.text.value = '';
    target.desc.value = '';
  }
});