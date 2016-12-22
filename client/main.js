'use strict';

import { Template }     from 'meteor/templating';
import { ReactiveVar }  from 'meteor/reactive-var';

import '../imports/startup/client/router';

Template.body.onCreated(function () {
  this.counter  = new ReactiveVar(0);
});

Template.body.helpers({
  hello     : 'Hy world!',
  counter   : () => Template.instance().counter.get()
});

Template.body.events({
  'click .test'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  }
});