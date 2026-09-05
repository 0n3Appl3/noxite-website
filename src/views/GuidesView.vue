<!-- Save as src/views/GuidesView.vue -->
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import StyledHeading from '../components/StyledHeading.vue'

const tabs = ['Land Claiming', 'Chest Shop', 'Homes', 'Waypoints', 'Teleportation']
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
                <span v-if="tab === 'Waypoints'" class="ml-1 rounded-full bg-gold text-night text-xs px-2 py-0.5">New</span>
              </button>
            </Tab>
          </TabList>

          <TabPanels class="min-w-0">
            <!-- Land Claiming -->
            <TabPanel class="prose-none">
                <h2 class="text-2xl font-semibold">Land Claiming</h2>
                <p class="mt-3 text-night/70">Protecting your builds is an integral aspect of the survival multiplayer experience. Let's keep those griefers away from your land. It's easy!</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Create a New Claim</h4>
                <p class="mt-3 text-night/70">The first step is to create a new claim before you can start claiming land. Enter the following command.</p>
                <code class="command-block">/claim create [claim name]</code>
                <div class="callout callout-note"><strong>Note:</strong> Your claim names must be unique. For example, you cannot have multiple claims named 'My Base'.</div>
                <p class="text-night/70">You will see a confirmation GUI. Click "Yes" to create your claim.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Claim a Land Chunk</h4>
                <p class="mt-3 text-night/70">Enter the following command.</p>
                <code class="command-block">/claim chunk [claim name]</code>
                <p class="text-night/70">You will enter claiming mode, and a chunk map will appear on the right side of your screen. Find an unclaimed chunk of land and type "claim" in the server chat.</p>
                <div class="callout callout-note"><strong>Note:</strong> The term "chunk" refers to a 16x16 block area in Minecraft, so claiming chunks means to protect a 16x16 area of land.</div>
                <p class="text-night/70">Once again, a confirmation GUI will appear. Click "Yes" to claim the chunk.</p>
                <div class="callout callout-note"><strong>Note:</strong> You will remain in claiming mode until you type "cancel" in the server chat to exit without further changes.</div>
                <p class="text-night/70">You did it! You made a claim and claimed a chunk. Protect as many chunks as you want for your claim. If you own more than one claim, ensure you specified the correct one.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Delete a Claim</h4>
                <p class="mt-3 text-night/70">If you want to remove an entire claim, including its chunks, enter the following command.</p>
                <code class="command-block">/claim delete [claim name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Delete a Claimed Land Chunk</h4>
                <p class="mt-3 text-night/70">Just like removing claims, you can also remove claim chunks. Enter the following command. Enter the chunk name if you know which area you want to unclaim, otherwise leave it blank.</p>
                <code class="command-block">/claim deletechunk [chunk]</code>
                <p class="text-night/70">If you didn't specify a chunk, you will enter unclaiming mode. A chunk map will appear on the right side of your screen. Find an unclaimed chunk of land and type "remove" in the server chat.</p>
                <div class="callout callout-note"><strong>Note:</strong> You will remain in unclaiming mode until you type "cancel" in the server chat to exit without further changes.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Rename a Claim</h4>
                <p class="mt-3 text-night/70">Don't like the name of your claim? No problem, you can easily rename your claim by entering the following command.</p>
                <code class="command-block">/claim rename [claim name]</code>
                <p class="text-night/70">You will enter a claim renaming mode where you are instructed to type a new name for your claim in the server chat. This message will only be visible to you.</p>
                <p class="text-night/70">To exit this mode without changes, type "cancel" in the chat.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Display a Map of Claims</h4>
                <p class="mt-3 text-night/70">You can also view a map of which chunks have been claimed or not by entering the command below. Show the map by specifying "show" in the command and "hide" to hide the map.</p>
                <code class="command-block">/claim map [show/hide]</code>

                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Key</th><th class="px-4 py-3 text-left">Description</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 flex items-center gap-2"><span class="h-3 w-3 rounded-full inline-block" style="background-color:grey"></span>Wild</td><td class="px-4 py-3 text-night/70">That's free real estate! No one has claimed this chunk yet.</td></tr>
                      <tr><td class="px-4 py-3 flex items-center gap-2"><span class="h-3 w-3 rounded-full inline-block" style="background-color:lightgreen"></span>Owned</td><td class="px-4 py-3 text-night/70">You have claimed this chunk.</td></tr>
                      <tr><td class="px-4 py-3 flex items-center gap-2"><span class="h-3 w-3 rounded-full inline-block" style="background-color:orange"></span>Shared</td><td class="px-4 py-3 text-night/70">This means someone has given you access to their claim.</td></tr>
                      <tr><td class="px-4 py-3 flex items-center gap-2"><span class="h-3 w-3 rounded-full inline-block" style="background-color:red"></span>Others</td><td class="px-4 py-3 text-night/70">You do not have access to this claim.</td></tr>
                      <tr><td class="px-4 py-3 flex items-center gap-2"><span class="h-3 w-3 rounded-full inline-block" style="background-color:lightgray"></span>You</td><td class="px-4 py-3 text-night/70">This is your current chunk position on the map.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View a List of Your Claims</h4>
                <p class="mt-3 text-night/70">Self-explanatory. You can see all your claims by entering the following command.</p>
                <code class="command-block">/claim list</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Display Information About a Chunk</h4>
                <p class="mt-3 text-night/70">Curious to know more information about an area you are standing on? Enter the following command to display chunk information like the owner and claim name.</p>
                <code class="command-block">/claim chunkinfo</code>
                <div class="callout callout-note"><strong>Note:</strong> If you know the chunk ID, you can enter it in the command after the "chunkinfo" argument.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Manage Your Claims</h4>
                <p class="mt-3 text-night/70">There are six commands you need to know to manage your claims.</p>
                <p class="mt-4 font-semibold">Member Management</p>
                <p class="text-night/70">You can add and remove people from your claims by entering the following command.</p>
                <code class="command-block">/claim members [add/remove] [username] [claim name]</code>
                <div class="callout callout-note"><strong>Note:</strong> Adding a member will automatically grant chest access to the claim. Removing a member will yield the opposite effect.</div>
                <p class="text-night/70">To view who has access to your claim, enter the following command. A menu GUI will display player heads of all the members and clicking them revokes their access.</p>
                <code class="command-block">/claim members list [claim name]</code>

                <p class="mt-4 font-semibold">Chest Access Management</p>
                <p class="text-night/70">You can add and remove people's access to your claim's chests by entering the following command.</p>
                <code class="command-block">/claim chestaccess [add/remove] [username] [claim name]</code>
                <div class="callout callout-note"><strong>Note:</strong> This grants access to chests, barrels, enderchests, trapped chests and shulker boxes.</div>
                <p class="text-night/70">To view who has access to your chests, enter the following command. A menu GUI will display player heads of all the members and clicking them revokes their access.</p>
                <code class="command-block">/claim chestaccess list [claim name]</code>

                <p class="mt-4 font-semibold">Claim Settings</p>
                <p class="text-night/70">You can toggle different behaviours within your claim by entering the following command.</p>
                <code class="command-block">/claim settings [claim name]</code>

                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Setting</th><th class="px-4 py-3 text-left">Description (when enabled)</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold">Chest Protection</td><td class="px-4 py-3 text-night/70">Restricts who can access chests in your claim. See "Chest Access Management" to manage chest access.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Hostile Mob Spawn</td><td class="px-4 py-3 text-night/70">Allow hostile mobs to spawn in your claim. This will not affect already spawned hostile mobs. It only prevents future spawns.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Fire Spread</td><td class="px-4 py-3 text-night/70">Allows flammable blocks to disappear and spread to other flammable blocks.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">PvP</td><td class="px-4 py-3 text-night/70">Allows players to initiate combat.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Mob Griefing</td><td class="px-4 py-3 text-night/70">Allows mobs to interact in your claim. For example, endermen can pick and place blocks and creepers can destroy blocks when they explode.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Explosions</td><td class="px-4 py-3 text-night/70">Allows any type of explosive to destroy blocks.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Crop Griefing</td><td class="px-4 py-3 text-night/70">Allows players to trample crops.</td></tr>
                    </tbody>
                  </table>
                </div>

                <p class="mt-6 font-semibold">Transferring Claim Ownership</p>
                <p class="text-night/70">Hand over the keys to your claim by entering the following command.</p>
                <code class="command-block">/claim transfer [username] [claim name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
            </TabPanel>

            <!-- Chest Shop -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Chest Shop</h2>
                <p class="mt-3 text-night/70">Buying and selling items in multiplayer is different on Noxite. Other server economies would utilise some form of chest shop system and Noxite's version takes this concept and tweaks it slightly.</p>
                <p class="text-night/70">We will follow the natural flow of how to use this system from creation to management.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Create a New Shop</h4>
                <p class="mt-3 text-night/70">As mentioned, this chest shop system works differently compared to other chest shop plugins on other servers. You must <strong>hold a chest or barrel in your main hand</strong> when you enter the following command.</p>
                <code class="command-block">/shop create [shop name]</code>
                <div class="callout callout-note"><strong>Note:</strong> Your shop names must be unique. For example, you cannot have multiple shops named 'My Shop', but it is also possible that someone else has already taken your chosen shop name.</div>
                <p class="text-night/70">You will receive a success message saying you have created a new shop under that name. Notice that the name of the chest or barrel you were holding is now named after your shop.</p>
                <p class="text-night/70">Next, place the chest or barrel on the ground. A message will appear saying that you have established your chest shop.</p>
                <div class="callout callout-warning"><strong>Warning:</strong> Once you establish your shop, you cannot break the chest or barrel. This is to prevent accidentally dismantling your shop. If you want to relocate your shop, you must first remove the shop before breaking the chest and receive its contents, then create and establish a new shop.</div>
                <p class="text-night/70">When you right click the chest or barrel, a GUI will appear showing three menu items: Profits, Stock and Exit.</p>

                <div class="overflow-x-auto rounded-2xl shadow-pop mt-4">
                  <table class="w-full text-sm">
                    <thead class="bg-night text-cream">
                      <tr><th class="px-4 py-3 text-left">Item</th><th class="px-4 py-3 text-left">Description</th></tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-night/5">
                      <tr><td class="px-4 py-3 font-semibold">Profits</td><td class="px-4 py-3 text-night/70">This is where all the diamonds you make from the shop will be stored. You can withdraw and deposit diamonds like transferring items in a regular player inventory menu.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Stock</td><td class="px-4 py-3 text-night/70">View what items you are selling in the shop. You can remove items from your shop by clicking on the item you want to remove.</td></tr>
                      <tr><td class="px-4 py-3 font-semibold">Exit</td><td class="px-4 py-3 text-night/70">Closes the shop menu GUI when clicked.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Sell an Item</h4>
                <p class="mt-3 text-night/70">Ready to start making some diamonds? Make sure to <strong>hold the item you want to sell in your main hand</strong> when you enter the following command.</p>
                <code class="command-block">/shop sell [price] [shop name]</code>
                <p class="text-night/70">That item will be removed from your inventory and into your shop stock, which you can view by checking your chest shop.</p>
                <div class="callout callout-note"><strong>Note:</strong> Your shop has a limited amount of space, so be mindful of what items you want to sell.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Buy an Item</h4>
                <p class="mt-3 text-night/70">If you are looking to buy something from another player's chest shop, right click the chest or barrel to open a shop GUI, which displays all items the shop owner is selling. Hovering over each item will display the amount of diamonds you need to buy that item. Simply click the item you want to buy and the transaction is complete. The item will appear in your inventory.</p>
                <div class="callout callout-note"><strong>Note:</strong> If you have a full inventory, the item will drop below you to be picked up when you have enough space in your inventory.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Collect Your Profits</h4>
                <p class="mt-3 text-night/70">Simply click your chest shop to open the shop menu GUI. Then, click the "Profits" menu option to view the diamonds you earned. You can transfer the diamonds into your inventory like a regular player inventory.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Remove a Shop</h4>
                <p class="mt-3 text-night/70">If you no longer want to keep a shop, enter the following command.</p>
                <code class="command-block">/shop remove [shop name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View a List of Your Shops</h4>
                <p class="mt-3 text-night/70">This is particularly useful if you want to check the coordinates of every shop you own. It is also a quicker way to check your shop's stock without needing to physically be there.</p>
                <code class="command-block">/shop list</code>
            </TabPanel>

            <!-- Homes -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Homes</h2>
                <p class="mt-3 text-night/70">A lot of survival multiplayer servers would come packaged with this feature. For those still new to the Minecraft multiplayer experience, homes are a convenient method of "travel" and eliminate the hassle of going to your desired location on foot, horse, boat or flight.</p>
                <p class="text-night/70">Let's go over all the home commands. It's simple!</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Add a New Home</h4>
                <p class="mt-3 text-night/70">Go to the location you want to create a new home and enter the command below.</p>
                <code class="command-block">/home add [name]</code>
                <div class="callout callout-note"><strong>Note:</strong> Your home names must be unique. For example, you cannot have multiple homes named 'mansion', but it is also possible that someone else has already taken your chosen home name.</div>
                <div class="callout callout-warning"><strong>Warning:</strong> The server has limited the number of homes to <strong>5</strong> per player to encourage exploration. If you need to keep track of more locations, try using waypoints.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Teleport to Your Home</h4>
                <p class="mt-3 text-night/70">Specify the name of the home you want to teleport to and you will be at your destination instantly. There is no teleportation delay unlike other survival multiplayer servers where they use this annoyance as leverage to get you to donate money.</p>
                <code class="command-block">/home tp [name]</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Remove a Home</h4>
                <p class="mt-3 text-night/70">As for this command, you do not need to go to the location to delete a home. Just type the name of the home you want to remove.</p>
                <code class="command-block">/home remove [name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View a List of Your Homes</h4>
                <p class="mt-3 text-night/70">Like a kid at a candy shop, admire all the homes you currently own by entering the command below.</p>
                <code class="command-block">/home list</code>
            </TabPanel>

            <!-- Waypoints -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Waypoints <span class="ml-1 rounded-full bg-gold text-night text-xs px-2 py-0.5 align-middle">New Feature</span></h2>
                <p class="mt-3 text-night/70">Keep track of all your locations using waypoints. They are essentially homes without the teleportation feature, but then how do we get to our location? It is easy and a lot better than writing them down manually on a sheet of paper.</p>
                <p class="text-night/70">Just like what we did for homes, let's go over all the commands you need to know.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Add a New Waypoint</h4>
                <p class="mt-3 text-night/70">Go to the location you want to create a new waypoint and enter the command below.</p>
                <code class="command-block">/wp add [name]</code>
                <div class="callout callout-note"><strong>Note:</strong> Your waypoint names must be unique. For example, you cannot have multiple homes named 'mineshaft', but it is also possible that someone else has already taken your chosen waypoint name.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Track a Waypoint</h4>
                <p class="mt-3 text-night/70">Entering this command will display a tracker on top of your screen as a boss bar. It displays how far away you are from your waypoint and will automatically untrack when you get close enough to your destination.</p>
                <code class="command-block">/wp track [name]</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Remove a Waypoint</h4>
                <p class="mt-3 text-night/70">Just like the home removal command, you do not need to go to the location to delete a waypoint. Just type the name of the waypoint you want to remove.</p>
                <code class="command-block">/wp remove [name]</code>
                <div class="callout callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">View a List of Your Waypoints</h4>
                <p class="mt-3 text-night/70">Self-explanatory. You can see all your waypoints by entering this command.</p>
                <code class="command-block">/wp list</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Untrack Current Waypoint</h4>
                <p class="mt-3 text-night/70">If at any point you no longer decide to travel to your waypoint, you can manually untrack your current waypoint using the command below.</p>
                <code class="command-block">/wp untrack</code>
            </TabPanel>

            <!-- Teleportation -->
            <TabPanel>
                <h2 class="text-2xl font-semibold">Teleportation</h2>
                <p class="mt-3 text-night/70">Another feature that comes standard in survival multiplayer servers is player teleportation. Realistically, this is a must-have for when you want to play with friends or simply need to get a hold of another player.</p>
                <p class="text-night/70">There are three commands that you need to know.</p>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Send a Teleport Request</h4>
                <p class="mt-3 text-night/70">You are not given instant teleportation abilities. Instead, you have to send a request to teleport to someone.</p>
                <code class="command-block">/tp [player]</code>
                <div class="callout callout-note"><strong>Note:</strong> Unlike other servers, teleport requests do not have a time limit, so the recipient of the request can accept it at any time.</div>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Accept Teleport</h4>
                <p class="mt-3 text-night/70">Enter the command below to allow the player to teleport to you. How are your hospitality skills? Just kidding.</p>
                <code class="command-block">/tp accept</code>

                <h4 class="mt-8 font-display font-semibold border-b-2 border-night/10 pb-2">Deny Teleport</h4>
                <p class="mt-3 text-night/70">You could also be that guy and deny their request. Enter the command below.</p>
                <code class="command-block">/tp deny</code>
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
    </div>
</main>
</template>