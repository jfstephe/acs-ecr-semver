let semver = require('semver');
'use strict';
let imageLabels = [];
let totalOutput = '';

module.exports = function() {
  this.parse = function(labelJsonAsString) {
    let json = JSON.parse(labelJsonAsString);
    let imageTags = json.imageIds.filter(function(x) { return x.imageTag && semver.valid(x.imageTag);}).map(function(x) {return x.imageTag;})
    return imageTags;
  }
};
