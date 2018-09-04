<template>
    <header id="top">
        <a href="#top" class="logo">CryptoWatcher</a>

        <button v-show="!search" v-on:click="search = true" class="search-button open">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512"
                enable-background="new 0 0 512 512" width="512px" height="512px">
                <g>
                    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                        fill="#FFFFFF" />
                </g>
            </svg>
        </button>
        <button v-show="search" v-on:click="search = false" class="search-button close">X</button>
        <form v-show="search" class="search">
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
        background-color: var(--background-color);
        color: white;
        font-size: 2em;
        padding: 0.7rem 1.4rem;

        .logo {
            display: block;
            font-weight: bold;
            text-decoration: none;
            color: white;
        }

        .search-button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: right;
            font-size: 1em;
            width: 5.7rem;
            height: 5.7rem;
            margin-left: auto;
            padding: 0.7rem;
            border: none;
            background-color: transparent;
            color: white;

            &.open {
                transform: scale(0.6);
            }

            &:hover {
                cursor: pointer;
            }
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
                text-align: center;
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

            button {
                padding: 1rem;
            }
        }
    }
</style>