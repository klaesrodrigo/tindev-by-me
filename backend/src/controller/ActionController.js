import ActionService from '../service/ActionService'

class ActionController {
  async like (req, res) {
    try {
      const response = await ActionService.like({ ...req.params, ...req.headers })
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async dislike (req, res) {
    try {
      const response = await ActionService.dislike({ ...req.params, ...req.headers })
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new ActionController()
