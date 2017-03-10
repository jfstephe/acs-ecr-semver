'use strict';
const spawn = require( 'child_process' ).spawn;
let imageLabels = [];
let totalOutput = '';

module.exports = function() {
  this.getLabels = function(registryName) {
    let promise = new Promise((resolve, reject) => {
      const ls = spawn( './src/listRepoTags.sh', [ registryName ] );
      ls.stdout.on( 'data', data => {
        totalOutput += data;
      });

      ls.on('close', code => {
        totalOutput = totalOutput.replace('Login Succeeded', '');
        resolve(totalOutput);
      });
    });
    return promise;
  }
};