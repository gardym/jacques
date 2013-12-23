var vm = require('vm');

var inContext = function inContext(accessor, json) {
  if(!isAnArrayAccessor(accessor)) {
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

module.exports = {
  inContext: inContext
};
