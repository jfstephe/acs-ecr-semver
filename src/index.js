'use strict';
const AwsLabelLister = require('./AwsLabelLister');
const LabelParser = require('./LabelParser');
const semver = require('semver');
const args = require('args');
let imageLabels = [];
let totalOutput = '';
let awsLabelLister = new AwsLabelLister();
let labelParser = new LabelParser();
args
  .option('repo', 'The name of the repository in the registry to query for labels.')
  .option('semver', 'The semver comparator to use to pick the correct label');

const flags = args.parse(process.argv)

if (!flags.repo || !flags.semver) {
  args.showHelp();
  return;
}

awsLabelLister.getLabels(flags.repo).then(labelsInJson => {
  let labels = labelParser.parse(labelsInJson);
  let maxSatisfying = semver.maxSatisfying(labels, flags.semver);
  let result = {
    maxSatisfyingLabel: maxSatisfying ? maxSatisfying : '',
    validLabels: labels
  };
  console.log(JSON.stringify(result));
});
