# batman-touch

batman-touch is a simple shim to to add jQuery Mobile touch events to the
[Batman.js](http://batmanjs.org/) event vocaubulary.  For further on the
script itself, checkout
[chantastic/batman-touch](https://github.com/chantastic/batman-touch).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'batman-touch-rails'
```

And then execute:

```bash
$ bundle
```

## Usage

Include `batman-touch` and `jquery.mobile` in your `application.js` manifest:

```js
//= require jquery
//= require jquery_ujs
//= require jquery.mobile
//= require batman-touch
```

**Bring your own Batman.js**

There are a number of ways you could have batman included.  Just be sure to
have it loaded **before** batman-touch.
