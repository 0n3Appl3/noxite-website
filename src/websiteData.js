// Save as src/websiteData.js
export const features = [
  {
    id: 1,
    icon: 'ShieldCheckIcon',
    title: 'Land Claiming',
    description: 'Protect your builds with a simple chunk-claiming system. Add friends to your claim, control who can open your chests, and keep griefers out for good.'
  },
  {
    id: 2,
    icon: 'HomeIcon',
    title: 'Homes',
    description: 'Set up to five home points and teleport back instantly. No cooldowns, no waiting, and no donations required to skip the queue.'
  },
  {
    id: 3,
    icon: 'MapPinIcon',
    title: 'Waypoints',
    description: 'Track any of your homes without teleporting to it. A boss bar shows how far away you are until you arrive on foot.'
  },
  {
    id: 4,
    icon: 'MoonIcon',
    title: 'Sleep Voting',
    description: "Skip the night without waking the whole server. Once enough players vote to sleep, morning comes for everyone."
  },
  {
    id: 5,
    icon: 'CubeIcon',
    title: 'Near-Vanilla Experience',
    description: 'No pay-to-win, no gimmicks. Noxite runs a light plugin set focused on quality of life, so the game still feels like Minecraft.'
  },
  {
    id: 6,
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Discord Integration',
    description: "Chat with the server from your phone. Messages sync both ways between Discord and in-game chat, so you're never out of the loop."
  }
]

// Two hero-sized photos for the "About Noxite" showcase rows on the homepage.
// Each pairs with 3 of the `features` entries above (features[0-2] with the
// first image, features[3-5] with the second). Drop your own screenshots into
// src/assets/ - wide, landscape-ish shots work best since they're cropped to
// fill a ~520px-tall banner.
export const showcaseImages = [
  {
    id: 1,
    image: new URL('./assets/thing_1.png', import.meta.url).href,
    alt: 'A view of the Noxite spawn area'
  },
  {
    id: 2,
    image: new URL('./assets/thing_2.png', import.meta.url).href,
    alt: 'A player-built base on the Noxite server'
  }
]

export const donatorPerks = [
  {
    id: 1,
    icon: 'UserPlusIcon',
    title: 'Join When Full',
    description: 'Never get turned away at the door. Donators can join the server even when every player slot is taken.'
  },
  {
    id: 2,
    icon: 'HomeModernIcon',
    title: 'Unlimited Homes',
    description: 'Skip the 5-home limit entirely and set as many /home points as you need.'
  },
  {
    id: 3,
    icon: 'PaintBrushIcon',
    title: 'Coloured Nickname & Prefix',
    description: 'Style your name and chat prefix with full colour and formatting, previewed before you commit to it.'
  },
  {
    id: 4,
    icon: 'StarIcon',
    title: 'Donator Chat Tag',
    description: 'Stand out with your own donator-coloured name tag, visible to the whole server in chat.'
  },
  {
    id: 5,
    icon: 'GiftIcon',
    title: 'Hats & Skulls',
    description: 'Wear almost any item as a hat with /hat, or grab a decorative player head to display with /skull.'
  },
  {
    id: 6,
    icon: 'SparklesIcon',
    title: 'Colour on Signs & Items',
    description: 'Add colour and formatting to signs and anvil-renamed items, not just your chat messages.'
  }
]
export const faqs = [
  {
    id: 1,
    question: 'Why is it called Noxite?',
    answer: 'Simply, it is a cool name. Servers with "Craft", "SMP" and "PvP" in the name is getting old. The server\'s previous name, Appl3 PvP, came from an era when factions were a trendy gameplay style. Yes, you may know the name from the Noxcrew, but this server is not associated with them.'
  },
    {
    id: 2,
    question: 'What kind of plugins is this server using?',
    answer: 'Noxite\'s core functionality like homes, teleportation and land claiming utilise a custom-made plugin called One Engine. If you are a server owner or administrator and want to learn more, contact 0n3Appl3 for details.'
  },
  {
    id: 3,
    question: 'How long does it take to update the server to version 26.X?',
    answer: 'Optimistically, it takes up to four weeks. The server also uses plugins made by other developers, which may take longer to update to the latest version, so it is sometimes difficult to give an ETA.'
  },
  {
    id: 4,
    question: 'Where do I report server connection and plugin problems?',
    answer: 'Please let 0n3Appl3 know on the Noxite discord server, and he will resolve it at his earliest convenience.'
  },
  {
    id: 5,
    question: 'I want to be a moderator, where do I apply?',
    answer: 'Moderator applications are not available at this time. The server needs to be more busy to warrant a dedicated moderation team.'
  },
  {
    id: 6,
    question: 'Hello, I am from Planet Minecraft and I am reviewing your server. May I have OP?',
    answer: 'Nice try. This is not 2015 anymore.'
  }
]
export const rules = [
  {
    id: 1,
    title: 'Be kind to each other',
    description: 'Treat everyone the way you\'d want to be treated. We\'re all here to have fun, so let\'s keep things friendly and drama-free.'
  },
  {
    id: 2,
    title: 'Hands off other people\'s builds',
    description: 'Don\'t destroy, edit, or mess with someone else\'s creation without asking first. Their build, their rules.'
  },
  {
    id: 3,
    title: 'Don\'t take what isn\'t yours',
    description: 'Leave other players\' stuff alone unless they say it\'s okay to grab it. Simple as that.'
  },
  {
    id: 4,
    title: 'Play fair',
    description: 'No hacks, mods, or exploits that give you an unfair edge. Let\'s keep it a level playing field for everyone.'
  },
  {
    id: 5,
    title: 'Ask before you fight',
    description: 'PvP is only on if both sides are up for it. Not everyone\'s in the mood to throw hands, and that\'s fine.'
  },
  {
    id: 6,
    title: 'Keep builds all-ages friendly',
    description: 'Steer clear of anything offensive, discriminatory, or NSFW. Save that stuff for elsewhere.'
  },
  {
    id: 7,
    title: 'Go easy on the redstone',
    description: 'Big contraptions are awesome, but if one\'s tanking the server for everyone else, it\'s time to dial it back.'
  },
  {
    id: 8,
    title: 'Stick to approved mods',
    description: 'Only use client mods, texture packs, or resource packs the server\'s okay with. Not sure if something\'s fine? Just ask 0n3Appl3.'
  },
  {
    id: 9,
    title: 'No spam or ads',
    description: 'Keep the chat readable and on-topic. Nobody wants their screen flooded with copy-paste messages or shop plugs.'
  },
  {
    id: 10,
    title: 'Follow the staff\'s lead',
    description: 'Our team\'s here to keep things running smoothly, so please go along with the call when they step in.'
  },
  {
    id: 11,
    title: 'Spot something? Let us know',
    description: 'Bugs, glitches, rule-breakers - flag it for the staff. It genuinely helps make Noxite better for everyone.'
  }
]