'use strict';

import { Meteor }       from 'meteor/meteor';
import { Template }     from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Materialize }  from 'meteor/poetic:materialize-scss';
import { TAPi18n }      from 'meteor/tap:i18n';

import './template.html';
import './style.scss';

const { __ }    = TAPi18n;
const { toast } = Materialize;

Template.acronymForm.onCreated(function() {
  this.form = new ReactiveDict();

  this.form.set('text','');
  this.form.set('desc','');
});

Template.acronymForm.helpers({
  getPlaceholder : () => {
    let acronym = Template.instance().form.get('text').toUpperCase();
    return acronym ?
      __('component.acronym_form.acronym_meaning_dirty_placeholder', acronym)
      : __('component.acronym_form.acronym_meaning_empty_placeholder');
  }
});

Template.acronymForm.events({
  'submit .acronymForm'( event ) {
    event.preventDefault();

    const target = event.target;

    Meteor.call('Acronyms.methods.insert', {
        text : target.text.value.trim().toLowerCase(),
        desc : target.desc.value.trim().toLowerCase()
      },
      error => {
        error && toast(error.reason ? error.reason : __('component.acronym_form.unknown_submit_error'), 3000, 'toast-error');
      }
    );

    target.text.value = '';
    target.desc.value = '';
  },
  'keyup #acronymText, change #acronymText'( event ) {
    Template.instance().form.set('text', event.currentTarget.value);
  },
  'keyup #acronymDesc, change #acronymDesc'( event ) {
    Template.instance().form.set('desc', event.currentTarget.value);
  }
});