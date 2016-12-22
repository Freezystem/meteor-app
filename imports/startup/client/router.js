'use strict';

import { FlowRouter }   from 'meteor/kadira:flow-router';
import { BlazeLayout }  from 'meteor/kadira:blaze-layout';

import '../../ui/pages';
import '../../ui/components';

FlowRouter.notFound = {
  name : 'notFound',
  action() {
    BlazeLayout.render('root', {
      nav   : 'nav',
      page  : 'notFound'
    });
  }
};

const homePage = FlowRouter.route('/', {
  name : 'home',
  action() {
    BlazeLayout.render('root', {
      nav   : 'nav',
      page  : 'home'
    });
  }
});

const acronymsPage = FlowRouter.route('/acronyms',{
  name  : 'acronyms',
  action() {
    BlazeLayout.render('root', {
      nav   : 'nav',
      page  : 'acronyms'
    });
  }
});