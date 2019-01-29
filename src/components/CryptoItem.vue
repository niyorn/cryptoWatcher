<template>
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
                    {{checkChange}}
                    {{convertToDecimal(change)}}%
                </span>
            </div>
        </div>
    </article>
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
            }
        },
        data() {
            return {
                changeStatus: ""
            }
        },
        computed: {
            convertDecimal: function(price){
                return price.toFixed(4)
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
        },
        methods: {
            convertToDecimal(price) {
                return price.toFixed(3)
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

        &:hover {
            background-color: var(--hover-background-color);
            color: black;
            cursor: pointer;
        }
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
</style>