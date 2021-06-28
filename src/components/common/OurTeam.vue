<script>
    import { team } from "@/data";

    export default {
        name: "OurTeam",
        props: {
            membersToShow: {
                type: Number,
                default: 6,
            },
        },
        computed: {
            teamInfo() {
                return team.splice(0, this.membersToShow);
            },
        },
        methods: {
            getImageUrl(name, type = "jpg") {
                return require(`@/assets/images/team/${name}.${type}`);
            },
        },
    };
</script>

<template>
    <div class="team">
        <div class="container">
            <div class="team__inner">
                <div class="team__card" v-for="department in teamInfo" :key="department.title">
                    <h3 class="team__title">{{ department.title }}</h3>

                    <article
                        class="team-card"
                        v-for="member in department.members"
                        :key="member.name"
                    >
                        <div class="team-card__image">
                            <picture>
                                <source
                                    type="image/webp"
                                    :srcset="getImageUrl(member.image, 'webp')"
                                />
                                <img
                                    class="team-card__image-img"
                                    :src="getImageUrl(member.image)"
                                    :alt="member.name"
                                />
                            </picture>
                        </div>
                        <div class="team-card__text">
                            <span class="team-card__name">{{ member.name }}</span>
                            <span class="team-card__role">{{ member.post }}</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .team {
        background-color: $color-dark-gray;
        color: #ffffff;
        &__inner {
            display: flex;
            flex-wrap: wrap;
        }
        &__title {
            margin: 0 0 15px;
            font-size: 28px;
            text-align: center;
        }
        &__card {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            margin-bottom: 15px;
        }
        &__footer {
            padding: 10px 0;
            text-align: center;
        }
        &__resume {
            display: block;
            font-size: 20px;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }

    .team-card {
        display: flex;
        align-items: center;
        padding-bottom: 30px;
        &__image {
            flex-basis: 35%;
            max-width: 35%;
        }
        &__text {
            flex-basis: 65%;
            max-width: 65%;
            padding: 10px 10px 10px 20px;
        }
        &__name,
        &__role {
            display: block;
            margin-bottom: 10px;
        }
        &__name {
            font-size: 22px;
        }
        &__role {
            color: $color-medium-gray;
            font-size: 18px;
        }
    }

    @media (max-width: $desktop-small) {
        .team {
            &__card {
                flex-basis: 50%;
                max-width: 50%;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .team {
            &__inner {
                display: block;
            }
            &__card {
                max-width: 100%;
            }
            &__title {
                margin-bottom: 10px;
                font-size: 20px;
            }
        }

        .team-card {
            &__name {
                font-size: 18px;
            }
            &__role {
                font-size: 16px;
            }
        }
    }
</style>
