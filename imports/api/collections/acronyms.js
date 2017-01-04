'use strict';

import { Meteor }           from 'meteor/meteor';
import { Mongo }            from 'meteor/mongo';
import { SimpleSchema }     from 'meteor/aldeed:simple-schema';
import { ValidatedMethod }  from 'meteor/mdg:validated-method';

const Acronyms = new Mongo.Collection('acronyms');

if ( Meteor.isServer ) {
  Meteor.publish('acronyms', () => {
    return Acronyms.find({});
  });
}

export const insertAcronym = new ValidatedMethod({
  name      : 'Acronyms.methods.insert',
  validate  : new SimpleSchema({
    text : { type : String },
    desc : { type : String }
  }).validator(),
  run( acronym ) {
    Acronyms.insert(acronym);
  }
});

export const deleteAcronym = new ValidatedMethod({
  name      : 'Acronyms.methods.delete',
  validate  : new SimpleSchema({
    id : { type : String }
  }).validator(),
  run( acronym ) {
    Acronyms.remove(acronym.id);
  }
});

export default Acronyms;
