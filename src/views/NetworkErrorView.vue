<template>
    <div>
        <h1>Network Error</h1>
        <p>There was an error fetching data from the server. Please try again later.</p> <br>
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="$router.go(-2)">Reload</a>
    </div>
</template>