import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plotSchema = new Schema({
  name: String,
  subGoals: [{ObjectId, }]
},{
  timestamps: true,
})

const Plot = mongoose.model('Plot', plotSchema)

export { Plot }