#!/usr/bin/env node
'use strict';
const commander = require('commander'); 
const parse = require('./lib/parse');

commander.version(require('./package.json').version)
         .option('-i, --input [value]', 'Enter a word you want to buchstabierify')  
         .option('-t, --type [value]', 'Enter a language acronym')              
         .parse(process.argv);

return parse({
    word: commander.input,
    type: commander.type || 'aut'
});