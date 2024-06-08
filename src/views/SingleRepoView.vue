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
        console.log(err.message)
    }
}

onMounted(() => {
    getRepo(id.value)
    .then((repo) => {
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
</script>

<template>
    <section v-if="githubRepo" class="py-5">
        <div class="my-10 flex items-center justify-start gap-x-6">      
            <a @click="router.go(-1)" class="rounded-md bg-indigo-600 px-3.5 hover:cursor-pointer flex items-center py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> <ArrowLeftCircleIcon class="h-8 w-auto" />Back to list </a>
        </div>
        <div class="mx-auto flex flex-col justify-center items-center">
            <h1>{{ githubRepo.name }}</h1>
            <p> Description: {{ githubRepo.description }}</p>
            <p>Language: {{ githubRepo.language }}</p>
            <p>Star: {{ githubRepo.stargazers_count }}</p>
            <p>Fork: {{ githubRepo.forks_count }}</p>
            <p>Issues: {{ githubRepo.open_issues_count }}</p>
            <a class="text-indigo-600" :href="githubRepo.html_url">Open in Github</a>           
        </div>
    </section>
</template>
