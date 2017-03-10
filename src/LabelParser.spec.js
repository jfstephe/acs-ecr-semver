'use strict';
let LabelParser = require('./LabelParser');
let labelParser = new LabelParser();
let awsOutput;
let result;

describe('Given a valid sample response from AWS containing semver compatible imageTags', function() {
  beforeEach(() => {
    awsOutput = '{ "imageIds":' + 
      '[ { "imageTag": "1.2.3",' + 
      '    "imageDigest": "blah" },' +
      '  { "imageDigest": "blah" },' +
      '  { "imageTag": "Not a semver label 1--2",' +
      '   "imageDigest": "blah" }' +
      ']}';
  });
  describe('When it is parsed', () => {
    beforeEach(() => {
      result = labelParser.parse(awsOutput);
    });
    it('Then it should return all the non-empty compatible imageTags', function() {
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual('1.2.3');
    });
  });
});

describe('Given a valid sample response from AWS that doesn\'t contain semver compatible imageTags', function() {
  beforeEach(() => {
    awsOutput = '{ "imageIds":' + 
      '[ { "imageTag": "",' + 
      '    "imageDigest": "blah" },' +
      '  { "imageDigest": "blah" },' +
      '  { "imageTag": "Not a semver label 1--2",' +
      '   "imageDigest": "blah" }' +
      ']}';
  });
  describe('When it is parsed', () => {
    beforeEach(() => {
      result = labelParser.parse(awsOutput);
    });
    it('Then it should return an empty array', function() {
      expect(result.length).toEqual(0);
    });
  });
});

describe('Given a invalid json', function() {
  beforeEach(() => {
    awsOutput = '{ 12123123';
  });
  describe('When it is parsed', () => {
    it('Then it should return all the non-empty compatible imageTags', function() {
      expect(() => {labelParser.parse(awsOutput);}).toThrow();
    });
  });
});