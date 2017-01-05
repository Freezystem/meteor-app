'use strict';

import { FlowRouter }   from 'meteor/kadira:flow-router';
import { ReactiveVar }  from 'meteor/reactive-var';
import { Template }     from 'meteor/templating';
import { TAPi18n }      from 'meteor/tap:i18n';

import './template.html';
import './style.scss';

const { __ } = TAPi18n;

Template.nav.onCreated(function() {
  this.currentPath    = new ReactiveVar(FlowRouter.current().path);

  this.autorun(() => {
    FlowRouter.watchPathChange();
    this.currentPath.set(FlowRouter.current().path);
  });
});

Template.nav.helpers({
  links : [
    { href : '/', label : 'home' },
    { href : '/acronyms', label : 'acronyms' }
  ],
  langs         : Object.keys(TAPi18n.getLanguages()),
  getLangLabel  : lang => TAPi18n.getLanguages()[lang].name,
  getRouteLabel : label => __(`router.page.${label}`),
  isActive( path ) {
    let currentPath = Template.instance().currentPath.get();
    return currentPath && path === currentPath ? 'active' : '';
  }
});

Template.nav.events({
  'click .langs_switch'( event ) {
    event.preventDefault();

    $(event.target).dropdown('open');
  },
  'click .droplangs_item a'( event ) {
    let lang = $(event.target).attr('data-lang');

    TAPi18n.setLanguage(lang);
    $('html').attr('lang', lang);
  }
});