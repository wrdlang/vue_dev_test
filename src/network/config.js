import axios from 'axios'

export default axios.create({
  baseURL: 'https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/',
  timeout: 3000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})

export const CATEGORIES_URL = 'category'
export const PRANK_IDEAS_URL = 'prank-idea'
