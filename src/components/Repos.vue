<template>
  <div>
    <h1 class="text-center text-3xl mb-2">MY REPOSITORIES</h1>
    <!-- <form role="search">
      <label for="search" class="hidden-visually">Search: </label>
      <input type="text" name="search" id="search" v-model="search" />
      <button type="submit">Search</button>
    </form> -->
    <div class="album py-5 bg-light">
      <div class="" v-cloak>
        <div class="row">
          <div v-if="!displayData">Loading...</div>
          <div class="col-md-4" v-for="post in displayData" v-bind:key="post.name">
            <div class="card mb-4 box-shadow post-cards h-28 text-center">
              <div class="card-body h-full flex justify-between items-center">
                <p class="card-text">
                  
                  {{ post.name }}
                    
                  
                </p>
                <p>
                  <span aria-hidden="true" class="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-600 hover:text-white hover:bg-indigo-600 ring-1 ring-indigo-600 hover:ring-indigo-600 ">
                    <router-link
                      :to="{ name: 'SingleRepoView', params: { id: post.name, name: post.owner.login } }"
                    >   
                      View More
                    </router-link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav class="isolate flex justify-center -space-x-px rounded-md shadow-sm" aria-label="Pagination" >
          <button
            type="button"
            :to="{ name: 'home', 
            query: { page: page - 1 } }"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-indigo-600 focus:z-20 focus:outline-offset-0"
            v-if="page != 1"
            @click="page--"
          >
            <<
          </button>
          <button
            type="button"
            :class="`hover:bg-blue text-indigo-600 ${page === pageNumber
                    ? 'bg-indigo-600 text-neutral-50'
                    : 'bg-neutral-200 '
                  } transition-colors duration-300 relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-indigo-600 focus:z-20 focus:outline-offset-0`"
            v-for="pageNumber in pages"
            :key="pageNumber"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button>
          <button
            type="button"
            :to="{ name: 'Home', query: { page: page + 1 } }"
            @click="page++"
            v-if="page < pages.length"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-indigo-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            >>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import axios from 'axios'
export default {
  name: 'news',
  data() {
    return {
      posts: [],
      baseUrl: 'https://api.github.com/users/Samuel833/repos',
      page: 1,
      perPage: 6,
      pages: []
    }
  },
  mounted() {
    this.getRepos()
  },
  computed: {
    displayData() {
      return this.pagination(this.posts)
    }
  },
  watch: {
    posts() {
      this.PageSet()
    }
  },
  methods: {
    getRepos() {
      axios
        .get(this.baseUrl, {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        })
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    },
    PageSet() {
      var numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    pagination(posts) {
      var page = this.page
      var perPage = this.perPage
      var from = page * perPage - perPage
      var to = page * perPage
      return posts.slice(from, to)
    }
  }
}
</script>
