if(Array.from(document.querySelectorAll('*'))
  .some(e => e._reactRootContainer !== undefined))
  console.log('React.js');
if(!!document.querySelector('script[id=__NEXT_DATA__]'))
  console.log('Next.js');
if(!!document.querySelector('[id=___gatsby]'))
  console.log('Gatsby.js');
if(!!window.angular ||
   !!document.querySelector('.ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]') ||
   !!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))
  console.log('Angular.js');
if (!!window.getAllAngularRootElements ||
    !!window.ng?.coreTokens?.NgZone)
  console.log('Angular 2+');
if(!!window.Backbone) console.log('Backbone.js');
if(!!window.Ember) console.log('Ember.js');
if(!!window.Vue) console.log('Vue.js');
if(!!window.Meteor) console.log('Meteor.js');
if(!!window.Zepto) console.log('Zepto.js');
if(!!window.jQuery) console.log('jQuery.js');
