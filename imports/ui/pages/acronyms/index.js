'use strict';

import { Template }     from 'meteor/templating';

import Acronyms         from '../../../api/collections/acronyms';

import './template.html';

Template.acronyms.onCreated(function () {
  this.autorun(() => {
    this.subscribe('acronyms');
  });
});

Template.acronyms.helpers({
  acronyms  : () => Acronyms.find({}, { sort : { text : 1}})
});