/**
 * Episode model events
 */

'use strict';

import {EventEmitter} from 'events';
import Episode from './episode.model';
var EpisodeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EpisodeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Episode.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EpisodeEvents.emit(event + ':' + doc._id, doc);
    EpisodeEvents.emit(event, doc);
  }
}

export default EpisodeEvents;
