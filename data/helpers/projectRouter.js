const express = require("express")
const projects = require("./projectModel")

const router = express.Router()

.get("/", (req, res) => {
    projects.get()
        .then((actions) => {
            res.statusCode(200).json(actions)
        })
        .catch((error) => {
			next(error)
		})
})

.get("/:id", (req, res) => {
    projects.get(req.params.id)
        .then((actions) => {
            res.statusCode(200).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

.post("/", (req, res) => {
    projects.insert(req.body)
        .then((actions) => {
            res.statusCode(201).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router