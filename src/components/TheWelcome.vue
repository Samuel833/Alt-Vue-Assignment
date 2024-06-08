<script setup>

</script>

<template>
   <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-40 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-xl leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Hello!
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to my Github Repositories</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">To get started click on the button below</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link :to="{ name: 'repos'}" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
