'use strict';

import mongoose from 'mongoose';

var SeriesSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  urls: Array
});

export default mongoose.model('Series', SeriesSchema);
