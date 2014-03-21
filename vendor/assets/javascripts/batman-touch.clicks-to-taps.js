(function() {
  Batman.DOM.primaryInteractionEventName = 'tap';

  Batman.DOM.events.click = function(node, callback, view, eventName, preventDefault) {
    if (eventName == null) {
      eventName = 'tap';
    }
    if (preventDefault == null) {
      preventDefault = true;
    }
    return Batman.DOM.events.primaryInteractionEvent(node, callback, view, eventName, preventDefault);
  };

}).call(this);
