import Router from "express"

const router = new Router()

router.get("/user", (req, res) => {
  res.json({ message: "ok" })
})

router.post("/user", (req, res) => {
  res.json({ ...req })
})

export default router
