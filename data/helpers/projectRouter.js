const express = require("express")
const projects = require("./projectModel")

const router = express.Router()

.get("/", (req, res, next) => {
    projects.get()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
			next(error)
		})
})

.get("/:id", (req, res, next) => {
    projects.get(req.params.id)
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.get("/:id/actions", (req, res, next) => {
    projects.getProjectActions(req.params.id)
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.post("/", (req, res, next) => {
    projects.insert(req.body)
        .then((projects) => {
            res.status(201).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.put("/:id", (req,res, next) => {
    projects.update(req.params.id, req.body)
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            next(error)
        })
})

.delete("/:id", (req, res, next) => {
    projects.remove(req.params.id)
        .then(() => {
            res.status(200).json({
				message: "The project has been deleted",
			})
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router