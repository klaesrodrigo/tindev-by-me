import DevService from '../service/DevService'

class DevController {
  async create (req, res) {
    try {
      const dev = await DevService.create({ ...req.body })
      return res.json(dev)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new DevController()
