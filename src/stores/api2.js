import axios from 'axios';
console.log(import.meta.env);
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    "Accept": "application/vnd.github+json",
    "Authorization": import.meta.env.VITE_GITHUB_TOKEN ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`: undefined
  }
})

export default {
  getRepos( options = {}) {
    return api.get(`/users/Samuel833/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 10,
        ...options
      }
    });
  },
  getRepo(repo) {
    return api.get(`/repos/Samuel833/${repo}`);
  },
};