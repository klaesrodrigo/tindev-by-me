import DevService from '../service/DevService'

class DevController {
  async list (req, res) {
    try {
      const devs = await DevService.list(req.headers.dev_id)
      return res.json(devs)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  }

  async create (req, res) {
    try {
      const dev = await DevService.create({ ...req.body })
      return res.json(dev)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  }
}

export default new DevController()
