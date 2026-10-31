<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import StyledHeading from '../components/StyledHeading.vue'

const tabs = ['General', 'Land Claiming', 'Homes', 'Waypoints', 'Teleportation', 'Donator Perks']
</script>

<template>
<main class="page-full-height pb-16">
    <StyledHeading title="Player Guides" background="./src/assets/thing_1.png" />

    <div class="mx-auto max-w-6xl px-4 py-12">
      <TabGroup>
        <div class="grid md:grid-cols-[220px_1fr] gap-8">
          <TabList class="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            <Tab v-for="tab in tabs" :key="tab" v-slot="{ selected }" as="template">
              <button
                class="whitespace-nowrap text-left rounded-2xl px-4 py-3 font-display font-semibold text-sm transition-colors"
                :class="selected ? 'bg-coral text-white shadow-pop' : 'bg-white text-night/70 hover:bg-coral-light'"
              >
                {{ tab }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="min-w-0">
            <!-- General Gameplay -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">General</h2>
                <p class="mt-3 text-night/70">A rundown of the everyday quality-of-life features on Noxite such as sleep voting, private messaging, random teleporting and how AFK detection works.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Sleep Voting</h4>
                <p class="mt-3 text-night/70">Instead of everyone needing to sleep to skip the night, Noxite uses a vote system. Once someone gets in bed, other online players can vote to fast-forward to morning.</p>
                <code class="command-block">/sleep</code>
                <div class="callout callout-note"><strong>Note:</strong> You need at least one player in bed before voting opens. Once enough votes are in (roughly half the players currently in the overworld), it becomes morning for everyone and the storm clears.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Private Messages</h4>
                <p class="mt-3 text-night/70">Send a message directly to another online player without cluttering public chat.</p>
                <code class="command-block">/msg [player] [message]</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Random Teleport</h4>
                <p class="mt-3 text-night/70">Not sure where to explore next? Get teleported to a random location in the overworld.</p>
                <code class="command-block">/wild</code>
                <div class="callout callout-note"><strong>Note:</strong> Only works in the overworld, and avoids landing you in lava, water, cacti, or magma blocks.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Back to Your Death Location</h4>
                <p class="mt-3 text-night/70">Died somewhere out in the wild? Teleport straight back to recover your items.</p>
                <code class="command-block">/back</code>
                <div class="callout callout-note"><strong>Note:</strong> Only works once per death. Using it again before dying elsewhere would not do anything, since the location clears after you return.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Server Spawn</h4>
                <p class="mt-3 text-night/70">Teleport back to the server's spawnpoint from anywhere.</p>
                <code class="command-block">/spawn</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">AFK Detection</h4>
                <p class="mt-3 text-night/70">If you go inactive for a while, the server marks you as AFK so other players know not to expect a response. Chatting, running commands, or moving a short distance clears the status immediately.</p>
                <div class="callout callout-warning"><strong>Warning:</strong> Staying AFK for too long will eventually get you kicked from the server to free up your player slot.</div>
            </TabPanel>

            <!-- Land Claiming -->
            <TabPanel class="prose-none">
                <h2 class="text-2xl font-semibold">Land Claiming</h2>
                <p class="mt-3 text-night/70">Protecting your builds is an integral part of the survival experience. Claiming works by chunk (a 16x16 area) and every chunk you claim belongs to a named "claim group" that you can expand over time.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim a Chunk</h4>
                <p class="mt-3 text-night/70">Stand in the chunk you want to protect and enter the following command.</p>
                <code class="command-block">/claim land [claim name]</code>
                <div class="callout callout-note"><strong>Note:</strong> If the name matches an existing claim group of yours, the chunk is added to it, but only if it shares an edge with a chunk you already own in that group (touching diagonally does not count). If the name is new, a fresh claim group is created. Names can contain spaces, but are limited to 32 characters.</div>
                <p class="text-night/70">A few things to keep in mind:</p>
                <ul class="mt-2 list-disc space-y-1 pl-6 text-night/70">
                  <li>You cannot claim within 5 chunks of the server spawn.</li>
                  <li>Each claim group stays within a single world.</li>
                  <li>Words used by claim commands (such as <code class="command-block inline">list</code>, <code class="command-block inline">map</code> or <code class="command-block inline">info</code>) cannot be used as claim names.</li>
                </ul>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim Blocks</h4>
                <p class="mt-3 text-night/70">Claiming costs claim blocks. Every player starts with 400, each chunk costs 100, and you earn 40 more every 10 minutes you spend online. A message appears above your hotbar each time you earn some. Check your balance any time.</p>
                <code class="command-block">/claim balance</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View and Manage Your Claims</h4>
                <p class="mt-3 text-night/70">Open a menu of every claim group you own, plus any you have been made a Manager of.</p>
                <code class="command-block">/claim list</code>
                <p class="text-night/70">Click a claim to open its trust list. From there you can:</p>
                <ul class="mt-2 list-disc space-y-1 pl-6 text-night/70">
                  <li>Click a player's head to change their role or untrust them.</li>
                  <li>Click the emerald to trust a new player. Only players currently online are shown.</li>
                  <li>Click the comparator to jump straight to the claim's options.</li>
                  <li>Click the barrier to abandon the claim (owner only).</li>
                </ul>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Trust Levels</h4>
                <p class="mt-3 text-night/70">When you trust a player on a claim, you choose one of four roles. Each role includes everything the one above it can do.</p>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Role</th><th class="px-4 py-3 text-left">Access</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold">Visitor</td><td class="px-4 py-3 text-night/70">Can use doors, trapdoors, fence gates, buttons, levers and pressure plates, trade with villagers, use utility blocks (crafting tables, anvils, grindstones, etc.), read books on lecterns, and open visitor chests.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Container</td><td class="px-4 py-3 text-night/70">Includes Visitor access. Can also open chests, barrels, furnaces, hoppers, and other containers, and use beds and note blocks.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Builder</td><td class="px-4 py-3 text-night/70">Includes Container access. Can also break and place blocks.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Manager</td><td class="px-4 py-3 text-night/70">Includes Builder access. Can also trust/untrust players and edit claim options.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="callout callout-note"><strong>Note:</strong> Players without any role cannot interact with anything inside your claim, including doors and buttons.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Visitor Chests</h4>
                <p class="mt-3 text-night/70">Want to share a single chest, such as a community supply or a shop, without giving out Container access? Look at the chest, barrel or shulker box and run the following command. Run it again to turn it off.</p>
                <code class="command-block">/claim visitorchest</code>
                <div class="callout callout-note"><strong>Note:</strong> Requires owner or Manager trust. Only players with at least the Visitor role can use a visitor chest. The flag is removed automatically if the container is broken.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim Options</h4>
                <p class="mt-3 text-night/70">Each claim group has toggleable settings, editable by Managers from the options menu (found via <code class="command-block inline">/claim list</code>, or directly for the claim you are standing on). All options start disabled on a new claim.</p>
                <code class="command-block">/claim options</code>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Setting</th><th class="px-4 py-3 text-left">Description (when enabled)</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold">Hostile Mob Spawning</td><td class="px-4 py-3 text-night/70">Allows hostile mobs to naturally spawn inside your claim.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Fire Spread</td><td class="px-4 py-3 text-night/70">Allows fire to spread and burn flammable blocks in your claim.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">PvP</td><td class="px-4 py-3 text-night/70">Allows players to fight each other inside your claim.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Mob Griefing</td><td class="px-4 py-3 text-night/70">Allows mobs to change blocks in your claim (e.g. endermen picking up blocks).</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Explosions</td><td class="px-4 py-3 text-night/70">Allows explosions (creepers, TNT, etc.) to destroy blocks in your claim.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Crop Trampling</td><td class="px-4 py-3 text-night/70">Allows players and mobs to trample farmland by walking on it.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Block Untrusted Players</td><td class="px-4 py-3 text-night/70">Stops players with no role from entering your claim, whether on foot, by teleport, through a portal, or riding a vehicle.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="callout callout-note"><strong>Note:</strong> With Block Untrusted Players enabled, anyone already inside the claim is not trapped, and every trusted role (even Visitor) can still enter. Teleport requests, <code class="command-block inline">/home tp</code> and <code class="command-block inline">/wild</code> will not drop you into a claim that blocks you.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim Map</h4>
                <p class="mt-3 text-night/70">Toggle a sidebar map that shows a 7x7 grid of chunks centred on you. It updates as you move between chunks.</p>
                <code class="command-block">/claim map</code>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Colour</th><th class="px-4 py-3 text-left">Meaning</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold" style="color:#5eeb98">Green</td><td class="px-4 py-3 text-night/70">A claim you own.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold" style="color:#f0b446">Yellow</td><td class="px-4 py-3 text-night/70">A claim you are trusted on.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold" style="color:#eb3b4c">Red</td><td class="px-4 py-3 text-night/70">A claim owned by someone else.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold" style="color:#9c9c9c">Light grey</td><td class="px-4 py-3 text-night/70">Unclaimed land.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold" style="color:#4d4d4d">Dark grey</td><td class="px-4 py-3 text-night/70">Too close to spawn to be claimed.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-3 text-night/70">Your own chunk is marked with a <strong>◆</strong>.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Entering and Leaving Claims</h4>
                <p class="mt-3 text-night/70">Whenever you cross a claim border, a message appears above your hotbar showing the claim's name and owner. The colour tells you where you stand: green if it is yours, yellow if you are trusted, and red if you are not.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Spawn Protection</h4>
                <p class="mt-3 text-night/70">The area around the server spawn is protected for everyone. You cannot claim there, break or place blocks, edit signs, or fight other players, and explosions and mob griefing will not damage it.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Live Server Map</h4>
                <p class="mt-3 text-night/70">Every claim is also drawn on the <a href="https://map.noxite.co.nz" target="_blank" rel="noopener" class="underline font-semibold">live server map</a> under the "Land Claims" layer. Each player's claims share a colour, and hovering over one shows its name, owner and size. New and abandoned claims appear within a few seconds.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Other Useful Commands</h4>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Command</th><th class="px-4 py-3 text-left">Description</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim rename [name]</td><td class="px-4 py-3 text-night/70">Renames the claim group you are standing in (owner only). Names must be unique among your claims.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim abandon [name]</td><td class="px-4 py-3 text-night/70">Releases every chunk in the named claim group and refunds 50% of the claim blocks spent, after a confirmation prompt.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim info</td><td class="px-4 py-3 text-night/70">Shows the name, owner, creation date, chunk count and trusted player count of the claim you are standing in.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim help</td><td class="px-4 py-3 text-night/70">Shows the in-game claim help pages.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="callout callout-danger"><strong>Danger:</strong> Abandoning a claim group cannot be undone. You only get a partial refund of the claim blocks you spent on it.</div>
            </TabPanel>

            <!-- Homes -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Homes</h2>
                <p class="mt-3 text-night/70">Set your own personal teleport points and jump back to them instantly. No cooldowns, no waiting.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Set a Home</h4>
                <p class="mt-3 text-night/70">Stand where you want your home to be and enter the command below.</p>
                <code class="command-block">/home set [name]</code>
                                <div class="callout callout-warning"><strong>Warning:</strong> You are limited to <strong>5</strong> homes by default. See the Donator Perks tab for how to lift this limit.</div>
                <p class="text-night/70">Setting a home under a name you've already used updates that home's location instead of creating a new one.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Teleport to a Home</h4>
                <code class="command-block">/home tp [name]</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Remove a Home</h4>
                <code class="command-block">/home remove [name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed. If you were tracking that home as a waypoint, tracking stops automatically.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View a List of Your Homes</h4>
                <code class="command-block">/home list</code>
            </TabPanel>

            <!-- Waypoints -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Waypoints</h2>
                <p class="mt-3 text-night/70">Not sure how to walk to one of your homes? Track it with a waypoint instead of teleporting straight there.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Track a Home</h4>
                <p class="mt-3 text-night/70">Waypoints are tied to your existing homes. Set one first with <code class="command-block inline">/home set</code>, then track it with the following command.</p>
                <code class="command-block">/home waypoint [name]</code>
                <p class="text-night/70">A boss bar appears at the top of your screen showing the distance remaining. It fills up as you get closer and disappears once you are within range of your destination, with a sound to let you know you've arrived.</p>
                <div class="callout callout-note"><strong>Note:</strong> Tracking a new home automatically replaces whichever waypoint you were tracking before. You can only track one at a time. The home must also be in the same world you are currently in.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Stop Tracking</h4>
                <p class="mt-3 text-night/70">Run the same command with no name to stop tracking your current waypoint.</p>
                <code class="command-block">/home waypoint</code>
            </TabPanel>

            <!-- Teleportation -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Teleportation</h2>
                <p class="mt-3 text-night/70">Want to get to a friend instantly? Send them a teleport request rather than walking, boating, or flying over.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Send a Teleport Request</h4>
                <code class="command-block">/tp [player]</code>
                <div class="callout callout-note"><strong>Note:</strong> Requests do not expire, so the recipient can accept or deny whenever they are ready.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Accept or Deny a Request</h4>
                <p class="mt-3 text-night/70">Use whichever command feels quicker to type. Both pairs do the same thing.</p>
                <code class="command-block">/tp accept</code>
                <code class="command-block">/tpaccept</code>
                <code class="command-block">/tp deny</code>
                <code class="command-block">/tpdeny</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Help Page</h4>
                <code class="command-block">/tp help</code>
            </TabPanel>

            <!-- Donator Perks -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Donator Perks</h2>
                <p class="mt-3 text-night/70">Donating supports server hosting and unlocks a handful of extra quality-of-life perks. None of these affect gameplay balance and they are purely cosmetic or convenience-based.</p>
                <p class="mt-3 text-night/70">Interested in donating? Check the <RouterLink to="/" class="underline font-semibold">homepage</RouterLink> for details.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Join When Full</h4>
                <p class="mt-3 text-night/70">Never get turned away at the door. Donators can join the server even when every player slot is taken.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Unlimited Homes</h4>
                <p class="mt-3 text-night/70">Regular players are capped at 5 homes. Donators can set as many as they like with <code class="command-block inline">/home set</code>, no extra steps required.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Coloured Nicknames & Prefixes</h4>
                <p class="mt-3 text-night/70">Donators can use MiniMessage colour and formatting codes when setting a nickname or prefix.</p>
                <code class="command-block">/nickname set &lt;color:#f0b446&gt;MyName</code>
                <code class="command-block">/prefix set &lt;color:#5eeb98&gt;VIP</code>
                <div class="callout callout-note"><strong>Note:</strong> Use <code class="command-block inline">/nickname preview</code> or <code class="command-block inline">/prefix preview</code> first to check how it looks before committing.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Colour on Signs & Items</h4>
                <p class="mt-3 text-night/70">Donators can add colour and formatting to signs and to items renamed in an anvil. The two work differently, so make sure you use the right style for each.</p>

                <h5 class="mt-6 font-display font-semibold">Signs</h5>
                <p class="mt-2 text-night/70">Type <code class="command-block inline">&amp;</code> followed by a code anywhere in a line of sign text. The codes apply to the text that comes after them, so you can combine a colour with a style (colour first, then style), and <code class="command-block inline">&amp;r</code> clears everything.</p>
                <code class="command-block">&amp;6&amp;lShop &amp;r&amp;7open daily</code>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Code</th><th class="px-4 py-3 text-left">Effect</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;0 to &amp;9, &amp;a to &amp;f</td><td class="px-4 py-3 text-night/70">Colours, e.g. <code class="command-block inline">&amp;c</code> is red, <code class="command-block inline">&amp;a</code> is green and <code class="command-block inline">&amp;9</code> is blue.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;l</td><td class="px-4 py-3 text-night/70">Bold</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;o</td><td class="px-4 py-3 text-night/70">Italic</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;n</td><td class="px-4 py-3 text-night/70">Underline</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;m</td><td class="px-4 py-3 text-night/70">Strikethrough</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;k</td><td class="px-4 py-3 text-night/70">Obfuscated (scrambled, constantly changing text)</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">&amp;r</td><td class="px-4 py-3 text-night/70">Reset all colour and formatting</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="callout callout-note"><strong>Note:</strong> Codes must be lowercase (<code class="command-block inline">&amp;c</code>, not <code class="command-block inline">&amp;C</code>). Sign codes cannot produce custom hex colours. Signs near the server spawn are protected and cannot be edited.</div>

                <h5 class="mt-6 font-display font-semibold">Renaming Items</h5>
                <p class="mt-2 text-night/70">Rename an item in an anvil as normal, but use MiniMessage tags instead of <code class="command-block inline">&amp;</code> codes. This is the same style used for nicknames and prefixes, and it supports any hex colour. The coloured name appears in the result slot before you pay for it.</p>
                <code class="command-block">&lt;red&gt;Fiery Sword</code>
                <code class="command-block">&lt;color:#f0b446&gt;&lt;bold&gt;Golden Pickaxe</code>
                <code class="command-block">&lt;gradient:#ff5555:#5555ff&gt;Cool Blade</code>
                <div class="callout callout-note"><strong>Note:</strong> Items renamed this way are not italic like a normal anvil rename, unless you add <code class="command-block inline">&lt;italic&gt;</code> yourself. If you leave the name box unchanged, the item is left alone.</div>

                <h5 class="mt-6 font-display font-semibold">Item Lore</h5>
                <p class="mt-2 text-night/70">You can also add description lines under an item's name. Start the anvil text with one of these prefixes and the item's name is kept as it is.</p>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Prefix</th><th class="px-4 py-3 text-left">Effect</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-mono text-xs">[l]</td><td class="px-4 py-3 text-night/70">Adds the text after it as a new lore line at the bottom. MiniMessage colours and formatting work here too.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">[r]</td><td class="px-4 py-3 text-night/70">Removes the last lore line. Anything typed after the prefix is ignored.</td></tr>
                    </tbody>
                  </table>
                </div>
                <code class="command-block">[l]&lt;gray&gt;Forged in the Nether</code>
                <div class="callout callout-note"><strong>Note:</strong> Each rename adds or removes one line, so run it again to add more lines or to keep removing them.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Donator Chat Tag</h4>
                <p class="mt-3 text-night/70">Your name is automatically shown in a donator colour in chat, so you stand out from regular players. No command needed.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Hats & Skulls</h4>
                <p class="mt-3 text-night/70">Wear almost any item as a hat by holding it and running the following command.</p>
                <code class="command-block">/hat</code>
                <div class="callout callout-note"><strong>Note:</strong> You'll need to remove your current helmet slot item first.</div>
                <p class="text-night/70">Grab a decorative copy of another online player's head to display.</p>
                <code class="command-block">/skull [player]</code>
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
    </div>
</main>
</template>