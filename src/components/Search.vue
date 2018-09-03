<template>
    <header>
        <span class="name">CryptoWatcher</span>

        <button v-show="!search" v-on:click="search = true" class="search-button">Search</button>
        <button v-show="search" v-on:click="search = false" class="search-button">X</button>
        <form v-show= "search" class="search">
            <label for="search-input">Search</label>
            <input id="search-input" autofocus type="text" placeholder="Search: Bitcoin, Ethereum etc...">
        </form>
    </header>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            search: false
        }
        
    }
}
</script>

<style lang="scss">
    header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 2;
        background-color: black;
        color: white;
        font-size: 2em;
        padding: 0.7rem 1.4rem;

        .name {
            display: block;
            font-weight: bold;
        }

        .search-button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: right;
            font-size: 1em;
            width: 5.7rem;
            margin-left: auto;
            padding: 0.7rem;
            border: none;
            background-color: transparent;
            color: white;
        }

        .search {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 1rem;

            label {
                display: block;
                width: 100%;
                font-size: 0.5em;
                opacity: 0.7;
                visibility: hidden;
            }

            input {
                display: block;
                width: 100%;
                height: auto;
                padding: 1rem;
                font-size: 2rem;
                text-align: center;
                color: white;
                background-color: transparent;
                outline: none;
                border: none;
            }

            // input[type='text'] { font-size: 24px; }

            button{
                padding: 1rem;
            }
        }
    }
</style>

