import LikeService from '../service/LikeService'

class LikeController {
  async create (req, res) {
    try {
      const response = await LikeService.create({ ...req.params, ...req.headers })
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new LikeController()
