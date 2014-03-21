# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'batman/touch/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "batman-touch-rails"
  spec.version       = Batman::Touch::Rails::VERSION
  spec.authors       = ["Michael Chan"]
  spec.email         = ["mijoch@gmail.com"]
  spec.description   = %q{A Rails wrapper for jQuery events in Batman.js}
  spec.summary       = %q{A Rails wrapper for the batman-touch shim: jQuery Mobile touch-events extension for Batman.js}
  spec.homepage      = "https://github.com/chantastic/batman-touch"
  spec.license       = "MIT"

  spec.files         = Dir["{lib,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 3.1"
  spec.add_development_dependency "rake"

  spec.add_dependency 'jquery_mobile_rails', '~> 1.4.1'
end
