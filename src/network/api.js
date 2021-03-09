import axiosInstance, { CATEGORIES_URL, PRANK_IDEAS_URL } from './config.js'

export default {
  fetchCategoris(filters) {
    return axiosInstance.get(`${CATEGORIES_URL}?${filters}`)
  },

  fetchPrankIdeas(categorySlug, page, limit) {
    return axiosInstance.get(
      `${PRANK_IDEAS_URL}/${categorySlug}?page=${page}&limit=${limit}`
    )
  }
}
