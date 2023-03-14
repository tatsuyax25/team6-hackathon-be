import mongoose from 'mongoose'

const Schema = mongoose.Schema

const actionSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true }, //do we want to let people create incomplete activities?
  reflection: String
},{
  timestamps: true,
})

const Action = mongoose.model('Action', actionSchema)

export { Action }
