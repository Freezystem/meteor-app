"use strict";

import { Template }     from 'meteor/templating';

import Acronyms         from '../../api/collections/acronyms';

import './template.html';
import './style.scss';

Template.acronym.events({
  'click .delete'() {
    Meteor.call('acronyms.remove', this._id);
  }
});