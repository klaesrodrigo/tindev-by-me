import DevService from '../service/DevService'

class DevController {
  async create (req, res) {
    const dev = await DevService.create({ ...req.body })
    return res.json(dev)
  }
}

export default new DevController()
