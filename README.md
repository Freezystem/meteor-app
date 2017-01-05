##Meteor App

[![Dependency Status](https://david-dm.org/freezystem/meteor-app.svg)](https://david-dm.org/freezystem/meteor-app)
[![devDependency Status](https://david-dm.org/freezystem/meteor-app/dev-status.svg)](https://david-dm.org/freezystem/meteor-app#info=devDependencies)

> Just a simple app to learn meteor best practices.

###Features

Here is the features I intend to have in this project :

- [x] Styling with SASS
- [x] Routing
- [x] Translation
- [x] Optimized Pub/Sub
- [ ] Collection Schema
- [ ] Database Migration
- [ ] Advanced form
- [ ] Authentication
- [ ] Tests

###What's in

Style
- [fourseven:scss](https://atmospherejs.com/fourseven/scss)
- [seba:minifiers-autoprefixer](https://atmospherejs.com/seba/minifiers-autoprefixer)

Methods
- [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema)
- [mdg:validated-method](https://atmospherejs.com/mdg/validated-method)

Routing and templating
- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router)
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout)

Reactive
- [Session](https://atmospherejs.com/meteor/session)
- [u2622:persistent-session](https://atmospherejs.com/u2622/persistent-session)
- [reactive-dict](https://atmospherejs.com/meteor/reactive-dict)
- [reactive-var](https://atmospherejs.com/meteor/reactive-var)

Tests
- [practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha)

Translation
- [tap:i18n](https://atmospherejs.com/tap/i18n)

###Meteor Scripts

####Run app in development
```
git clone https://github.com/Freezystem/meteor-app.git
cd meteor-app
meteor npm install
meteor
```

####Run tests
```
npm run test
```