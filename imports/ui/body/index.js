"use strict";

import { Template }     from 'meteor/templating';
import { ReactiveVar }  from 'meteor/reactive-var';

import Acronyms         from '../../api/collections/acronyms';

import './template.html';
import '../menu';
import '../acronymForm';
import '../acronym';

Template.body.onCreated(function () {
  this.state    = new ReactiveDict();
  this.counter  = new ReactiveVar(0);

  Meteor.subscribe('acronyms');
});

Template.body.helpers({
  hello     : 'Hy world!',
  counter   : () => Template.instance().counter.get(),
  acronyms  : () => Acronyms.find({}, { sort : { text : 1}})
});

Template.body.events({
  'click .test'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  }
});