function addEntry(squirrel) {
  var entry = { events: [], squirrel: squirrel };
  for(var i = 0; i < arguments.length; i++) {
    entry.events.push(arguments[i]);
  }
  journal.push(entry);
}

addEntry(true, 'work', 'touched tree', 'pizza', 'running', 'television');