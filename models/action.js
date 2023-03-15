import mongoose from 'mongoose'

const Schema = mongoose.Schema

const actionSchema = new Schema({
  name: { type: String, required: true },
  plot: { type: Schema.Types.ObjectId, ref: 'Plot' },
  completed: { type: Boolean, required: true }, 
  reflection: String
},{
  timestamps: true,
})

const Action = mongoose.model('Action', actionSchema)

export { Action }
