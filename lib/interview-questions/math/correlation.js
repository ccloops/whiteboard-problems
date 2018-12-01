'use strict';

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);
console.log('pizza' in map);
console.log(['touched tree']);

for(var event in map)
  console.log('The correlation for \'' + event + '\' is ' + map[event]);
console.log(map);

// function gatherCorrelations(journal) {
//   var phis = {};
//   for(var entry = 0; entry < journal.length; entry++) {
//     var events = journal[entry].events;
//     for(var i = 0; i < events.length; i++) {
//       var event = events[i];
//       if(!(event in phis))
//         phis[event] = phi(tableFor(event, journal));
//     }
//   }
//   return phis;
// }
// var correlations = gatherCorrelations(JOURNAL);
// console.log(correlations.pizza);