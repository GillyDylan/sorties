<template>
    <div>
        <h1>{{ title }}</h1>
        <h4>Change title <button @click="changeTitle">here</button></h4>
        <p>Auth page, go to Feed <router-link to="/">here</router-link> </p>
    </div>
</template>

<script>
    export default {
        computed: {
            title () {
                return this.$store.getters.title
            }
        },
        methods: {
            changeTitle () {
                this.$store.dispatch('changeTitle', 'Cool, we finish for now!!')
            }
        }
    }
</script>