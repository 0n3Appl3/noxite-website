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
                <p class="mt-3 text-night/70">Don't know where to explore next? Get teleported to a random location in the overworld.</p>
                <code class="command-block">/wild</code>
                <div class="callout callout-note"><strong>Note:</strong> Only works in the overworld, and avoids landing you in lava, water, cacti, or magma blocks.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Back to Your Death Location</h4>
                <p class="mt-3 text-night/70">Died somewhere out in the wild? Teleport straight back to recover your items.</p>
                <code class="command-block">/back</code>
                <div class="callout callout-note"><strong>Note:</strong> Only works once per death. Using it again before dying elsewhere won't do anything, since the location clears after you return.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Server Spawn</h4>
                <p class="mt-3 text-night/70">Teleport back to the server's spawnpoint from anywhere.</p>
                <code class="command-block">/spawn</code>
                <div class="callout callout-note"><strong>Note:</strong> Setting and locating the spawnpoint (<code class="command-block inline">/spawn set</code> and <code class="command-block inline">/spawn locate</code>) requires staff permissions, so those aren't covered here.</div>

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
                <code class="command-block">/claim [claim name]</code>
                <div class="callout callout-note"><strong>Note:</strong> If the name matches an existing claim group of yours, the chunk is added to it, but only if it's adjacent to a chunk you already own in that group. If the name is new, a fresh claim group is created.</div>
                <p class="text-night/70">Claiming costs claim blocks, which you earn automatically just by being online. Check your balance any time with <code class="command-block inline">/claim balance</code>.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View and Manage Your Claims</h4>
                <p class="mt-3 text-night/70">Open a menu of everything you own with the following command.</p>
                <code class="command-block">/claim list</code>
                <p class="text-night/70">From here, click a claim to see its details, then manage who is trusted on it, add new trusted players, and jump straight to that claim's options.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Trust Levels</h4>
                <p class="mt-3 text-night/70">When you trust a player on a claim, you choose one of three roles:</p>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Role</th><th class="px-4 py-3 text-left">Access</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold">Container</td><td class="px-4 py-3 text-night/70">Can open chests, barrels, furnaces, and other containers.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Builder</td><td class="px-4 py-3 text-night/70">Includes Container access. Can also break and place blocks.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Manager</td><td class="px-4 py-3 text-night/70">Includes Builder access. Can also trust/untrust players and edit claim options.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim Options</h4>
                <p class="mt-3 text-night/70">Each claim group has toggleable settings, editable by Managers from the options menu (found via <code class="command-block inline">/claim list</code>, or directly for the claim you're standing on).</p>
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
                      <tr><td class="px-4 py-3 font-semibold">Mob Griefing</td><td class="px-4 py-3 text-night/70">Allows mobs to change blocks in your claim (e.g. endermen picking up blocks, creepers breaking blocks).</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Explosions</td><td class="px-4 py-3 text-night/70">Allows explosions (creepers, TNT, etc.) to destroy blocks in your claim.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Crop Trampling</td><td class="px-4 py-3 text-night/70">Allows players and mobs to trample farmland by walking on it.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Other Useful Commands</h4>
                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Command</th><th class="px-4 py-3 text-left">Description</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim map</td><td class="px-4 py-3 text-night/70">Toggles a sidebar map showing claim ownership in the chunks around you, updating as you move.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim rename [name]</td><td class="px-4 py-3 text-night/70">Renames the claim group you're currently standing in (must be the owner).</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim abandon [name]</td><td class="px-4 py-3 text-night/70">Releases every chunk in a claim group and refunds a percentage of the claim blocks spent, after a confirmation prompt.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim info</td><td class="px-4 py-3 text-night/70">Shows details about the chunk you're standing in, including its owner and trusted player count.</td></tr>
                      <tr><td class="px-4 py-3 font-mono text-xs">/claim balance</td><td class="px-4 py-3 text-night/70">Shows your current claim block balance and how many chunks it's worth.</td></tr>
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
                                <div class="callout callout-warning"><strong>Warning:</strong> You're limited to <strong>5</strong> homes by default. See the Donator Perks tab for how to lift this limit.</div>
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
                <p class="text-night/70">A boss bar appears at the top of your screen showing the distance remaining. It fills up as you get closer and disappears once you're within range of your destination, with a sound to let you know you've arrived.</p>
                <div class="callout callout-note"><strong>Note:</strong> Tracking a new home automatically replaces whichever waypoint you were tracking before. You can only track one at a time. The home must also be in the same world you're currently in.</div>

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
                <div class="callout callout-note"><strong>Note:</strong> Requests don't expire, so the recipient can accept or deny whenever they're ready.</div>

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
                <p class="mt-3 text-night/70">Donating supports server hosting and unlocks a handful of extra quality-of-life perks. None of these affect gameplay balance and they're purely cosmetic or convenience-based.</p>
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
                <p class="mt-3 text-night/70">Donators can use legacy colour codes (<code class="command-block inline">&amp;</code> followed by a colour character, e.g. <code class="command-block inline">&amp;c</code>) when writing on signs and renaming items in an anvil.</p>

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