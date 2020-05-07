import axios from 'axios'
import Dev from '../model/Dev'
const { GITHUB_API_URL } = process.env

class DevService {
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
