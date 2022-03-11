import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService {
  async getAll() {
    const res = await api.get('')
    logger.log(res.data)
    AppState.blogs = res.data
    logger.log(AppState.blogs)
  }

  setActive(blog) {
    AppState.activeBlog = blog
    logger.log(AppState.activeBlog)
  }

  async createPost(blogData) {
    const res = await api.post('', blogData)
    logger.log('New Blog Post', res.data)
    // AppState.blogs.unshift(res.data)
    AppState.blogss.push(new Project(res.data))
  }
}

export const blogsService = new BlogsService()