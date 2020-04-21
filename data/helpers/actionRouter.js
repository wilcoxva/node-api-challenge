const express = require("express")
const actions = require("./actionModel")

const router = express.Router()

.get("/", (res, req) => {
    actions.get()
        .then((actions) => {
            res.statusCode(200).json(actions)
        })
        .catch((error) => {
			next(error)
		})
})

.get("/:id", (req, res) => {
    actions.get(req.params.id)
        .then((actions) => {
            res.statusCode(200).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router