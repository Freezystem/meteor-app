"use strict";

import { Template }     from 'meteor/templating';

import './template.html';

Template.menu.helpers({
  links : [
    { href : '#home', label : 'home'},
    { href : '#about', label : 'about'},
    { href : '#contact', label : 'contact'}
  ]
});