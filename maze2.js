#! /usr/bin/env node

var commander = require('commander');

commander
  .version('.0.0.0.1')
  .option('--leave')
  .option('--play')
  .option('--man')
  .option('--girl')
  .option('--wine')
  .option('--whiskey')
  .parse(process.argv);

if (commander.leave) { console.log('FINE F OFF')};

if (commander.play) { console.log('Welcome to the bar! You just walked in and there are two people, an old man and a young girl, who do you talk to? Type --man or --girl to make your choice.')};

if (commander.man) { console.log('He frowns at you and walks away! Type --play to start over or --leave to quit.')};

if (commander.girl) { console.log('She smiles at you and asks you to buy her a drink, what kind of drink will you choose? Type --whiskey or --wine to make your choice.')};

if (commander.whisky) { console.log('She LOVES WHISKEY! You win!')};

if (commander.sexOnTheBeach) { console.log('She hates wine, you lose. Type --play to start over, or --leave to quit.')};
