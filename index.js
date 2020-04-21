const express = require("express")
const actionRouter = require("./data/helpers/actionRouter")
const projectRouter = require("./data/helpers/projectRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/actions", actionRouter)
server.use("/projects", projectRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})