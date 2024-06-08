<script setup>
import { computed, onMounted, ref } from "vue";
import{ useRouter } from "vue-router"
import SingleRepo from "@/components/SingleRepo.vue"
import axios from "axios"
import { ArrowLeftCircleIcon } from "@heroicons/vue/20/solid"

const props = defineProps(["id"]);

const router = useRouter()

const id = computed(() => props.id)
// const name = computed(() => props.name)

const githubRepo = ref(null)



const getRepo = async (repo) => {
    try {
        const repoData = await axios.get(`https://api.github.com/repos/Samuel833/${repo}`, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        return await repoData
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getRepo(id.value)
    .then((repo) => {
        console.log(repo.data)
        githubRepo.value = repo.data
    }).catch((error) => {
        if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })

})

// getRepo().then((repo) => {
//     console.log(repo)
//     githubRepo.value = repo.data
// })
</script>


<template>
    <div v-if="githubRepo" class="mx-auto flex flex-col justify-center items-center">
        <h1>Name: {{ githubRepo.name }}</h1>
        <p> Description: {{ githubRepo.description }}</p>
        <p>{{ repo.language }}</p>
        <p>Star: {{ githubRepo.stargazers_count }}</p>
        <p>Fork: {{ githubRepo.forks_count }}</p>
        <p>Issues: {{ githubRepo.open_issues_count }}</p>
        <a class="text-indigo-600" :href="githubRepo.html_url">Open in Github</a>
    </div>
</template>