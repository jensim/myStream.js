/**
 * Tvshow model events
 */

'use strict';

import {EventEmitter} from 'events';
import Tvshow from './tvshow.model';
var TvshowEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TvshowEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Tvshow.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TvshowEvents.emit(event + ':' + doc._id, doc);
    TvshowEvents.emit(event, doc);
  }
}

export default TvshowEvents;
