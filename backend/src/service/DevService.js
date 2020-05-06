// const { GITHUB_API_URL } = process.env

class DevService {
  async create ({ username }) {
    return { username }
  }
}

export default new DevService()
