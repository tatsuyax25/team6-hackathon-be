import { Plot } from '../models/plot.js'
import { Profile } from '../models/profile.js'

const index = async (req, res) => {
  try {
    const plots = await Plot.find({})
    .populate('owner')
    .sort({createdAt: 'desc'})
    res.status(200).json(plots)
  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    req.body.owner = req.body.profile
    const plot = await Plot.create(req.body)
    const profile = await Profile.findByIdAndUpdate(req.user.profile,
      {$push: {plots: plot}},
      {new: true}
      )
      plot.owner = profile
      res.status(201).json(plot)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


export { index , create }
