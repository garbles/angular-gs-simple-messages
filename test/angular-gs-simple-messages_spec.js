describe('angular-gs-simple-messages', function () {
  beforeEach(function () {
    angular.module('fakeModule', ['gs.simple-messages'])
    .config(function (messagesProvider) {
      messagesProvider.setTemplates('fakeTemplates');
    })
    .value('fakeTemplates', {
      gabe: {
        is: {
          the: {
            best: 'HELLO {{ name }}'
          }
        }
      }
    });

    module('fakeModule');
  });

  var messages;

  beforeEach(inject(function (_messages_) {
    messages = _messages_;
  }));

  it('retrieves the appropriate template and then renders it', function () {
    name = 'GABE!';
    message = messages('gabe.is.the.best', {name: name});
    expect(message).toEqual('HELLO ' + name);
  });

  it('it throws an exception if the message you want to fetch is not a string', function () {
    function raiseMe () {
      messages('gabe.is.the', {});
    }

    expect(raiseMe).toThrow();
  });

});
