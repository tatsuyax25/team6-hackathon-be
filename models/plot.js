import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plotSchema = new Schema({
  name: String,
  photo: String
},{
  timestamps: true,
})

const Plot = mongoose.model('Plot', plotSchema)

export { Plot }
