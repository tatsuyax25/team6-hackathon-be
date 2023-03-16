import { Action } from '../models/action.js'
import { Plot } from '../models/plot.js'

const index = async (req, res) => {
    try {
        const actions = await Action.find({})
        .sort({createdAt: 'desc'})
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json(error)
    }
}

const findById = async (req, res) => {
    try {
        const action = await Action.findById(req.params.id)
        res.status(200).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
}

const findByPlotId = async (req, res) => {
    try {
        const actions = await Action.find({ "plot": req.params.id})
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json(error)
    }
}

const create = async (req, res) => {
    try {
        req.body.plot = req.params.plotId
        const action = await Action.create(req.body)
        const plot = await Plot.findById(req.body.plot)
        plot.actions.push(action._id)
        console.log(plot.actions)
        plot.save()
        res.status(200).json(plot)
    } catch (error) {
        res.status(500).json(error)
    }
}

const update = async (req, res) => {
    try {
        const action = await Action.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
}

export { index, findById, findByPlotId, create, update }
