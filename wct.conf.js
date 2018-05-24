/* global require */
var path = require('path');
var mapping = {};
var __dirname;
var rootPath = (__dirname).split(path.sep).slice(-1)[0];

var ret = {
  'suites': ['test'],
  'webserver': {
    'pathMappings': []
  },
  'verbose': true,
  'plugins': {
    'local': {
      'browsers': ['chrome']
    },
    'sauce': {
      'disabled': true
    },
    'istanbul': {
      'dir': './coverage',
      'reporters': ['text-summary', 'lcov'],
      'include': [
        '**/' + rootPath + '.html'
      ],
      'exclude': [],
      'thresholds': {
        'global': {
          'statements': 80
        }
      }
    }
  }
};

mapping['/components/' + rootPath + '/bower_components'] = 'bower_components';
ret.webserver.pathMappings.push(mapping);

var module;
module.exports = ret;
