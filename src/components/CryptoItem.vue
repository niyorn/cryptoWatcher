<template>
    <transition name="slide-fade" mode="in-out">
        <article class="cryptoItem">
            <div class="image-container">
                <img v-bind:src="imgUrl" alt="">
            </div>
            <div class="name-container">
                <span class="label">name</span>
                <h2>{{name}}</h2>
            </div>
            <div class="price-container">
                <span class="label">price</span>
                <span class="price">
                    ${{convertToDecimal(price)}}
                </span>
            </div>
            <div class="change-container">
                <div class="change change-24h">
                    <span class="label">24h change</span>
                    <span class="change-percentage" v-bind:class="[changeStatus]">
                        {{checkChange()}}
                        {{convertToDecimal(change)}}%
                    </span>
                </div>
            </div>
            <div class="rank-container">
                <span class="rank">{{rank}}</span>
            </div>
        </article>
    </transition>
</template>

<script>
    export default {
        name: "CryptoItem",
        props: {
            name: String,
            imgUrl: String,
            price: Number,
            change: {
                type: Number,
            },
            rank: Number
        },
        data() {
            return {
                changeStatus: ""
            }
        },
        computed: {},
        methods: {
            convertToDecimal(price) {
                return price.toFixed(3)
            },
            checkChange() { //Check to see if the changes are positive or negative
                let change = this.change

                if (change < 0) {
                    this.changeStatus = "negative";
                } else if (change > 0) {
                    this.changeStatus = "positive";
                } else {
                    this.changeStatus = "neutral";
                }
            }
        }

    }
</script>

<style lang="scss">
    .cryptoItem {
        background-color: var(--primary-color);
        color: var(--text-color);
        display: grid;
        grid-template-areas: "image price"
            "name change";
        grid-template-columns: 1fr 2fr;
        grid-gap: 1rem;
        padding: 1rem;
        position: relative;
        z-index: 0;
    }

    .label {
        opacity: 0.6;
    }

    .image-container {
        grid-area: image;

        img {
            width: 100%;
            height: 7rem;
            object-fit: contain;
        }
    }

    .name-container {
        grid-area: name;
        text-align: center;
    }

    .price-container {
        grid-area: price;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            text-align: center;
        }

        .price {
            font-size: 1.7em;
            color: rgb(255, 186, 100);

            @media screen and (min-width: 30rem) {
                font-size: 2.7rem;
            }
        }
    }

    .change-container {
        grid-area: change;

        text-align: center;

        .label {
            display: block;
        }

        .change {
            display: inline-block;
            width: 100%;

            span {
                display: block;
            }

            .change-percentage {
                font-size: 1em;

                &.positive {
                    color: var(--positive-change);
                }

                &.negative {
                    color: var(--negative-change);
                }

                &.neutral {
                    color: var(--neutral-change);
                }

                @media screen and (min-width: 30rem) {
                    font-size: 2em;
                }
            }
        }
    }

    .rank-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;

        .rank {
            font-size: 12em;
            color: rgba(0,0,0,0.12);
            font-weight: bold;
        }
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active, .slide-fade-leave-active{
        transition: all 0.4s ease-in-out;
    }

    .slide-fade-enter{
        transform: translateY(4rem);
        opacity: 0;
    }

    .slide-fade-leave-to {
        transform: scale(0.5);
        opacity: 0;
    }


</style>