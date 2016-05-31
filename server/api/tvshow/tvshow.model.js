'use strict';

import mongoose from 'mongoose';

var TvshowSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Tvshow', TvshowSchema);
