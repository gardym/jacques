var vm = require('vm');

var inContext = function inContext(accessor, json) {
  if(!isAnArrayAccessor(accessor) && !empty(accessor)) {
    accessor = "." + accessor;
  }

  var env = JSON.parse(environmentalize(json))
  return vm.runInNewContext("environment" + accessor, env);
}

function environmentalize(contents) {
  return "{ \"environment\": " + contents + "}";
}

function isAnArrayAccessor(accessor) {
  return accessor[0] === "[";
}

function empty(accessor) {
  return accessor === "";
}

module.exports = {
  inContext: inContext
};
