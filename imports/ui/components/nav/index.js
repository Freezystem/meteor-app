'use strict';

import { FlowRouter }   from 'meteor/kadira:flow-router';
import { ReactiveVar }  from 'meteor/reactive-var';
import { Template }     from 'meteor/templating';

import './template.html';
import './style.scss';

Template.nav.onCreated(function() {
  this.currentPath = new ReactiveVar(FlowRouter.current().path);

  this.autorun(() => {
    FlowRouter.watchPathChange();
    this.currentPath.set(FlowRouter.current().path);
  });
});

Template.nav.helpers({
  links : [
    { href : '/', label : 'home'},
    { href : '/acronyms', label : 'acronyms'}
  ],
  isActive( path ) {
    let currentPath = Template.instance().currentPath.get();
    return currentPath && path === currentPath ? 'active' : '';
  }
});