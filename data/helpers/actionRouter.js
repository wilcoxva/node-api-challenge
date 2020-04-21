const express = require("express")
const actions = require("./actionModel")

const router = express.Router()

.get("/", (req, res, next) => {
    actions.get()
        .then((actions) => {
            res.status(200).json(actions)
        })
        .catch((error) => {
			next(error)
		})
})

.get("/:id", (req, res, next) => {
    actions.get(req.params.id)
        .then((actions) => {
            res.status(200).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

.post("/", (req, res, next) => {
    actions.insert(req.body)
        .then((projects) => {
            res.status(201).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.put("/:id", (req, res, next) => {
    actions.update(req.params.id, req.body)
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.delete("/:id", (req, res, next) => {
    actions.remove(req.params.id)
        .then(() => {
            res.status(201).json({
                message: "The action has been deleted",
            })
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router