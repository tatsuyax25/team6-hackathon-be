import { Plot } from '../models/plot.js'
import { Profile } from '../models/profile.js'

const index = async (req, res) => {
  try {
    const plots = await Plot.find({})
    .populate('owner')
    .populate('actions')
    .sort({createdAt: 'desc'})
    res.status(200).json(plots)
  } catch (error) {
    res.status(500).json(error)
  }
}

const findById = async (req, res) => {
  try {
    const plot = await Plot.findById(req.params.id)
    .populate("actions")
    res.status(200).json(plot)
  } catch (error) {
    res.status(500).json(error)
  }
}

const findByProfileId = async (req, res) => {
  try {
    const plots = await Plot.find( { "owner": req.params.id } )
    .populate("actions")
    res.status(200).json(plots)
  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const plot = await Plot.create(req.body)
    const profile = await Profile.findByIdAndUpdate(req.user.profile,
      {$push: {plots: plot}},
      {new: true}
    )
    res.status(201).json(plot)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const plot = await Plot.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    )
    .populate('owner')
    res.status(200).json(plot)
  } catch(error) {
    res.status(500).json(error)
  }
}


export { index , findById, findByProfileId, create , update }
