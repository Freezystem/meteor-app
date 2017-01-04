'use strict';

import { Meteor }       from 'meteor/meteor';
import { Template }     from 'meteor/templating';
import { Materialize }  from 'meteor/poetic:materialize-scss';

import './template.html';
import './style.scss';

Template.acronymForm.events({
  'submit .acronymForm'(event) {
    event.preventDefault();

    const target = event.target;

    Meteor.call('Acronyms.methods.insert', {
        text : target.text.value.trim().toLowerCase(),
        desc : target.desc.value.trim().toLowerCase()
      },
      error => {
        error && Materialize.toast(error.reason ? error.reason : 'Sorry, an unknown error occurred', 3000, 'toast-error');
      }
    );

    target.text.value = '';
    target.desc.value = '';
  }
});