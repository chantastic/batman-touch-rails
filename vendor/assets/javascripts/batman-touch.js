(function() {
  var event, events, registerEvent, _i, _len;

  events = ['scrollstart', 'scrollstop', 'swipe', 'swipeleft', 'swiperight', 'tap', 'taphold'];

  registerEvent = function(eventName) {
    var _ref;
    if ((typeof window !== "undefined" && window !== null ? (_ref = window.jQuery) != null ? _ref.fn[eventName] : void 0 : void 0) != null) {
      return Batman.DOM[eventName] = function(node, callback, view) {
        return Batman.DOM.events.click(node, callback, view, eventName);
      };
    } else {
      throw new Error("Missing jQuery Event: '" + eventName + "'");
    }
  };

  if (((typeof window !== "undefined" && window !== null ? window.Batman : void 0) != null) && ((typeof window !== "undefined" && window !== null ? window.jQuery : void 0) != null)) {
    for (_i = 0, _len = events.length; _i < _len; _i++) {
      event = events[_i];
      registerEvent(event);
    }
  }

  if ((typeof window !== "undefined" && window !== null ? window.Batman : void 0) == null) {
    throw new ReferenceError("Batman is not defined");
  }

  if ((typeof window !== "undefined" && window !== null ? window.jQuery : void 0) == null) {
    throw new ReferenceError("jQuery is not defined");
  }

}).call(this);
