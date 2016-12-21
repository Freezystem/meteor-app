"use strict";

import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { check }  from 'meteor/check';

const Acronyms = new Mongo.Collection('acronyms');

if (Meteor.isServer) {
  Meteor.publish('acronyms', () => {
    return Acronyms.find();
  });
}

Meteor.methods({
  'acronyms.insert'({ text, desc }) {
    check(text, String);
    check(desc, String);

    Acronyms.insert({
      text : text,
      desc : desc
    });
  },
  'acronyms.remove'(acronymId) {
    check(acronymId, String);

    Acronyms.remove(acronymId);
  }
});

export default Acronyms;
