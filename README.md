# angular-gs-simple-messages

[![Build Status](https://secure.travis-ci.org/garbles/angular-gs-simple-messages.png?branch=master)](https://travis-ci.org/garbles/angular-gs-simple-messages)

Allows you store simple, interpolatable message templates in a single place like done in Rails with the `t` helper.

__NOTE: This plugin depends on [lodash](http://lodash.com/)__

### Installing

`bower install angular-gs-simple-messages`

### Using

Include the package in your application:

```javascript
var app = angular.module('app', ['gs.simple-messages']);
```

Create a value object to store your templates:

```javascript
app.value('templates', {
  gabe: {
    is: {
      the: {
        best: 'HELLO {{ name }}'
      }
    }
  }
})
```

Set the templates module as part of your configuration:

```javascript
app.config(function (messagesProvider) {
  messagesProvider.setTemplates('templates');
})
```

Use it like so:

```javascript
app.controller('SomeCtrl', function (messages) {
  messages('gabe.is.the.best', { name: 'GABE!' }); // => "HELLO GABE!"
  messages('gabe.is.the', { name: 'GABE!' }); // => throws error
});
```
