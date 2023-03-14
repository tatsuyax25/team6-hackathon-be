import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plotSchema = new Schema({
  name: {type: String, required: true},
  actions: [{ type: Schema.Types.ObjectId, ref: 'Action' , required: true}],
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  category: { type: String, enum: ['finance', 'fitness', 'family', 'social'] }, 
  userChoice: [{ type: String }],
  points: Number,
  active: Boolean
},{
  timestamps: true,
})

const Plot = mongoose.model('Plot', plotSchema)

export { Plot }
