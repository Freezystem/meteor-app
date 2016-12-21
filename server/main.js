'use strict';

import { Meteor } from 'meteor/meteor';
// import OT         from 'opentok';

// import TB_API     from './tokbox/config';

// Mongo Collections
import '../imports/api/collections/acronyms';

let session;

Meteor.startup(() => {

  // code to run on server at startup
  // session = new OT(TB_API.KEY, TB_API.SECRET);
  //
  // session.connect(TB_API.TOKEN, e => {
  //   if ( e ) {
  //     console.log('error : ', e);
  //   }
  //   else {
  //     session.publish();
  //   }
  // });


});
