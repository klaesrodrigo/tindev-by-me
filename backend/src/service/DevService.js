import axios from 'axios'
import Dev from '../model/Dev'
const { GITHUB_API_URL } = process.env

class DevService {
  async list (dev) {
    const loggedDev = await Dev.findById(dev)
    console.log(loggedDev)

    if (!loggedDev) {
      return { message: 'Dev not found.' }
    }

    const devs = await Dev.find({
      $and: [
        { _id: { $ne: dev } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    })

    return devs
  }

  async create ({ username }) {
    const existsDev = await Dev.findOne({ username })

    if (existsDev) {
      return existsDev
    }

    const { data: { name, bio, avatar_url: avatar } } = await axios.get(`${GITHUB_API_URL}users/${username}`)

    return Dev.create({
      name,
      username,
      bio,
      avatar
    })
  }
}

export default new DevService()
