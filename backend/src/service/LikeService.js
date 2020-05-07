import Dev from '../model/Dev'

class LikeService {
  async create ({ dev_id, target_id }) {
    const devLogged = await Dev.findById(dev_id)
    const devTarget = await Dev.findById(target_id)

    if (!devTarget) {
      throw new Error('Dev not exists')
    }

    if (devTarget.likes.includes(devLogged._id)) {
      console.log('Deu match!!!')
    }

    devLogged.likes.push(devTarget._id)
    await devLogged.save()
    return devLogged
  }
}

export default new LikeService()
