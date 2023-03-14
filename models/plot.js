import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plotSchema = new Schema({
  name: String,
  actions: [{ type: Schema.Types.ObjectId, ref: 'Action' }],
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  category: { type: String, enum: [] }, //come back and fill out the list of categories,
  points: Number,
  active: Boolean
},{
  timestamps: true,
})

const Plot = mongoose.model('Plot', plotSchema)

export { Plot }
