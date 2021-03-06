'use strict';

import { Session }      from 'meteor/session';
import { FlowRouter }   from 'meteor/kadira:flow-router';
import { ReactiveVar }  from 'meteor/reactive-var';
import { Template }     from 'meteor/templating';
import { Materialize }  from 'meteor/poetic:materialize-scss';
import { TAPi18n }      from 'meteor/tap:i18n';

import './template.html';
import './style.scss';

const { __ } = TAPi18n;
const { toast } = Materialize;

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
    $(event.target).dropdown('open');
  },
  'click .droplangs_item a'( event ) {
    let lang = $(event.target).attr('data-lang');

    TAPi18n.setLanguage(lang)
      .done(() => {
        Session.setPersistent('uiLang', lang);
        $('html').attr('lang', lang);
      })
      .fail(error => {
        toast(`${__('component.nav.switch_lang_fail')}: ${error}`, 3000, 'toast-error');
      });
  }
});