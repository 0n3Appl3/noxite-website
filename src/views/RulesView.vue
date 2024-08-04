<script setup>
import StyledHeading from '../components/StyledHeading.vue'

const rules = [
    {
        id: 1,
        title: 'Be respectful and considerate',
        description: 'Treat all players with respect and maintain a friendly atmosphere. Avoid offensive language, harrassment, or any behaviour that may create a negative experience for others.',
    },
    {
        id: 2,
        title: 'No griefing',
        description: 'Do not destroy or modify other players\' creations without their consent. Respect their hard work and effort.',
    },
    {
        id: 3,
        title: 'No stealing',
        description: 'Respect other players\' belongings and do not take items or resources that are not yours, unless explicitly allowed by the owner.',
    },
    {
        id: 4,
        title: 'No cheating',
        description: 'Do not use any hacks, mods, or exploits that give you an unfair advantage over other players. Play the game fairly and maintain a level playing field.',
    },
    {
        id: 5,
        title: 'No PvP without consent',
        description: 'Do not engage in combat with other players unless both parties have agreed to it. Respect each player\'s choice to engage or avoid PvP.',
    },
    {
        id: 6,
        title: 'No offensive or innapropriate builds',
        description: 'Construct buildings and structures that are suitable for all audiences. Avoid building anything that promotes discrimination, racism, or contains explicit content.',
    },
    {
        id: 7,
        title: 'No excessive redstone lag',
        description: 'Avoid creating redstone contraptions or mechanisms that cause excessive server lag or slow down the gameplay for others.',
    },
    {
        id: 8,
        title: 'No unauthorised mods to your game client',
        description: 'Only use approved mods, texture packs, or resource packs that are allowed by the owner. Do not install or use any unauthorised software that may compromise the server or other players\' experiences. If you have any doubts, please contact 0n3Appl3.',
    },
    {
        id: 9,
        title: 'No spamming or advertising',
        description: 'Avoid excessive messaging, spamming, or advertising unrelated content in the chat. Keep the chat clean and relevant to the gameplay.',
    },
    {
        id: 10,
        title: 'Follow staff instructions',
        description: 'Respect and comply with the instructions given by server staff and administrators. They are responsible for maintaining a fair and enjoyable environment for all players.',
    },
    {
        id: 11,
        title: 'Report any issues',
        description: 'If you encounter any bugs, glitches, or rule violations, report them to the server staff or administrators promptly. Help create a better gaming experience for everyone.',
    },
]
</script>

<template>
<main class="page-full-height">
    <StyledHeading title="Server Rules" background="./src/assets/thing_5.png" />
    <div class="container-sm py-5">
        <h3>Keeping it clean</h3>
        <p>In order to keep this server as amazing as it is, everyone must obey the following rules. A lot of these are common sense and online etiquette, but it is still worth mentioning. These rules may change at any point and the moderation team have the final say.</p>
        <br>
        <div v-for="rule in rules" :key="rule.id">
            <h5>{{ rule.id }}. {{ rule.title }}</h5>
            <p>{{ rule.description }}</p>
        </div>
    </div>
</main>
</template>