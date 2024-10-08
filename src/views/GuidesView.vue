<script setup>
import StyledHeading from '../components/StyledHeading.vue'
</script>

<template>
<main class="page-full-height">
    <StyledHeading title="Player Guides" background="./src/assets/thing_1.png" />
    <div class="container-sm py-5">
        <div class="row">
            <div class="col-lg-2 me-3 pb-5">
                <div id="nav-tab" class="list-group" role="tablist">
                    <a href="#land-claiming" id="nav-land-claiming-tab" class="list-group-item list-group-item-action nav-link active" data-bs-toggle="tab" data-bs-target="#nav-land-claiming" role="tab" aria-controls="nav-land-claiming" aria-selected="true">Land Claiming</a>
                    <a href="#chest-shop" id="nav-chest-shop-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-chest-shop" role="tab" aria-controls="nav-chest-shop" aria-selected="true">Chest Shop</a>
                    <a href="#homes" id="nav-homes-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-homes" role="tab" aria-controls="nav-homes" aria-selected="true">Homes</a>
                    <a href="#waypoints" id="nav-waypoints-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-waypoints" role="tab" aria-controls="nav-waypoints" aria-selected="true">Waypoints <span class="badge rounded-pill text-bg-secondary">New</span></a>
                    <a href="#teleportation" id="nav-teleportation-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-teleportation" role="tab" aria-controls="nav-teleportation" aria-selected="true">Teleportation</a>
                </div>
            </div>
            <div id="nav-tabContent" class="col-lg tab-content">
                <div id="nav-land-claiming" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-land-claiming-tab" tabindex="0">
                    <h5><strong>Land Claiming</strong></h5>
                    <p>Protecting your builds is an integral aspect of the survival multiplayer experience. Let's keep those griefers away from your land. It's easy!</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Create a New Claim</h6>
                    <p>The first step is to create a new claim before you can start claiming land. Enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim create [claim name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your claim names must be unique. For example, you cannot have multiple claims named 'My Base'.</div>
                    <p>You will see a confirmation GUI. Click "Yes" to create your claim.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Claim a Land Chunk</h6>
                    <p>Enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim chunk [claim name]</samp>
                        </div>
                    </div>
                    <br>
                    <p>You will enter claiming mode, and a chunk map will appear on the right side of your screen. Find an unclaimed chunk of land and type "claim" in the server chat.</p>
                    <div class="bs-callout"><strong>Note:</strong> The term "chunk" refers to a 16x16 block area in Minecraft, so claiming chunks means to protect a 16x16 area of land.</div>
                    <p>Once again, a confirmation GUI will appear. Click "Yes" to claim the chunk.</p>
                    <div class="bs-callout"><strong>Note:</strong> You will remain in claiming mode until you type "cancel" in the server chat to exit without futher changes.</div>
                    <p>You did it! You made a claim and claimed a chunk. Protect as many chunks as you want for your claim. If you own more than one claim, ensure you specified the correct one.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Delete a Claim</h6>
                    <p>If you want to remove an entire claim, including its chunks, enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim delete [claim name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Delete a Claimed Land Chunk</h6>
                    <p>Just like removing claims, you can also remove claim chunks. Enter the following command. Enter the chunk name if you know which area you want to unclaim, otherwise leave it blank.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim deletechunk [chunk]</samp>
                        </div>
                    </div>
                    <br>
                    <p>If you didn't specify a chunk, you will enter unclaiming mode. A chunk map will appear on the right side of your screen. Find an unclaimed chunk of land and type "remove" in the server chat.</p>
                    <div class="bs-callout"><strong>Note:</strong> You will remain in unclaiming mode until you type "cancel" in the server chat to exit without futher changes.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Rename a Claim</h6>
                    <p>Don't like the name of your name? No problem, you can easily rename your claim by entering the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim rename [claim name]</samp>
                        </div>
                    </div>
                    <br>
                    <p>You will enter a claim renaming mode where you are instructed to type a new name for your claim in the server chat. This message will only be visible to you.</p>
                    <p>To exit this mode without changes, type "cancel" in the chat.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Display a Map of Claims</h6>
                    <p>You can also view a map of which chunks have been claimed or not by entering the following command below. Show the map by specifying "show" in the command and "hide" to hide the map.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim map [show/hide]</samp>
                        </div>
                    </div>
                    <br>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"><strong>Key</strong></th>
                                <th scope="col"><strong>Description</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="claim-map-block" style="background-color:grey;"></span>Wild</td>
                                <td>That's free real estate! No one has claimed this chunk yet.</td>
                            </tr>
                            <tr>
                                <td><span class="claim-map-block" style="background-color:lightgreen;"></span>Owned</td>
                                <td>You have claimed this chunk.</td>
                            </tr>
                            <tr>
                                <td><span class="claim-map-block" style="background-color:orange;"></span>Shared</td>
                                <td>This means someone has given you access to their claim.</td>
                            </tr>
                            <tr>
                                <td><span class="claim-map-block" style="background-color:red;"></span>Others</td>
                                <td>You do not have access to this claim.</td>
                            </tr>
                            <tr>
                                <td><span class="claim-map-block" style="background-color:lightgray;"></span>You</td>
                                <td>This is your current chunk position on the map.</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">View a List of Your Claims</h6>
                    <p>Self-explanatory. You can see all your claims by entering the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim list</samp>
                        </div>
                    </div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Display Information About a Chunk</h6>
                    <p>Curious to know more information about an area you are standing on? Enter the following command to display chunk information like the owner and claim name.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim chunkinfo</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> If you know the chunk ID, you can enter it in the command after the "chunkinfo" argument.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Manage Your Claims</h6>
                    <p>There are four commands you need to know to manage your claims.</p>
                    <strong>Member Management</strong>
                    <p>You can add and remove people from your claims by entering the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim members [add/remove] [username] [claim name]</samp>
                        </div>
                    </div>
                    <br>
                    <p>To view who has access to your claim, enter the following command. A menu GUI will display player heads of all the members and clicking them revokes their access.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim members list [claim name]</samp>
                        </div>
                    </div>
                    <br>
                    <strong>Claim Settings</strong>
                    <p>You can toggle different behaviours within your claim by entering the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim settings [claim name]</samp>
                        </div>
                    </div>
                    <br>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"><strong>Setting</strong></th>
                                <th scope="col"><strong>Description (when enabled)</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hostile Mob Spawn</td>
                                <td>Allow hostile mobs to spawn in your claim. This will not affect already spawned hostile mobs. It only prevents future spawns.</td>
                            </tr>
                            <tr>
                                <td>Fire Spread</td>
                                <td>Allows flammable blocks and to disappear and spread to other flammable blocks.</td>
                            </tr>
                            <tr>
                                <td>PvP</td>
                                <td>Allows players to initiate combat.</td>
                            </tr>
                            <tr>
                                <td>Mob Griefing</td>
                                <td>Allows mobs to interact in your claim. For example, endermen can pick and place blocks and creepers can destroy blocks when it explodes.</td>
                            </tr>
                            <tr>
                                <td>Explosions</td>
                                <td>Allows any type of explosive to destroy blocks.</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <strong>Transferring Claim Ownership</strong>
                    <p>Hand over the keys to your claim by entering the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/claim transfer [username] [claim name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                </div>
                <div id="nav-chest-shop" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-chest-shop-tab" tabindex="0">
                    <h5><strong>Chest Shop</strong></h5>
                    <p>Buying and selling items in multiplayer is different on Noxite. Other server economies would utilise some form of chest shop system and Noxite's version takes this concept and tweaks it slightly.</p>
                    <p>We will follow the natural flow of how to use this system from creation to management.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Create a New Shop</h6>
                    <p>As mentioned, this chest shop system works differently compared to other chest shop plugins on other servers. You must <strong>hold a chest or barrel in your main hand</strong> when you enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/shop create [shop name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your shop names must be unique. For example, you cannot have multiple shops named 'My Shop', but it is also possible that someone else has already taken your chosen shop name.</div>
                    <p>You will receive a success message saying you have created a new shop under that name. Notice that the name of the chest or barrel you were holding is now named after your shop.</p>
                    <p>Next, place the chest or barrel on the ground. A message will appear saying that you have established your chest shop.</p>
                    <div class="bs-callout bs-callout-warning"><strong>Warning:</strong> Once you establish your shop, you cannot break the chest or barrel. This is to prevent accidentally dismantling your shop. If you want to relocate your shop, you must first remove the shop before breaking the chest and receive its contents, then create and establish a new shop.</div>
                    <p>When you right click the chest or barrel, a GUI will appear showing three menu items: Profits, Stock and Exit.</p>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"><strong>Item</strong></th>
                                <th scope="col"><strong>Description</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Profits</td>
                                <td>This is where all the diamonds you make from the shop will be stored. You can withdraw and deposit diamonds like transferring items in a regular player inventory menu.</td>
                            </tr>
                            <tr>
                                <td>Stock</td>
                                <td>View what items you are selling in the shop. You can remove items from your shop by clicking on the item you want to remove.</td>
                            </tr>
                            <tr>
                                <td>Exit</td>
                                <td>Closes the shop menu GUI when clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Sell an Item</h6>
                    <p>Ready to start making some diamonds? Make sure to <strong>hold the item you want to sell in your main hand</strong> when you enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/shop sell [price] [shop name]</samp>
                        </div>
                    </div>
                    <br>
                    <p>That item will be removed from your inventory and into your shop stock, which you can view by checking your chest shop.</p>
                    <div class="bs-callout"><strong>Note:</strong> Your shop has a limited amount of space, so be mindful of what items you want to sell.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Buy an Item</h6>
                    <p>If you are looking to buy something from another player's chest shop, right click the chest or barrel to open a shop GUI, which displays all items the shop owner is selling. Hovering over each item will display the amount of diamonds you need to buy that item. Simply click the item you want to buy and the transaction is complete. The item will appear in your inventory.</p>
                    <div class="bs-callout"><strong>Note:</strong> If you have a full inventory, the item will drop below you to be picked up when you have enough space in your inventory.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Collect Your Profits</h6>
                    <p>Simply click your chest shop to open the shop menu GUI. Then, click the "Profits" menu option to view the diamonds you earned. You can transfer the diamonds into your inventory like a regular player inventory.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Remove a Shop</h6>
                    <p>If you no longer want to keep a shop, enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/shop remove [shop name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">View a List of Your Shops</h6>
                    <p>This is particularly useful if you want to check the coordinates of every shop you own. It is also a quicker way to check your shop's stock without needing to physically be there.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/shop list</samp>
                        </div>
                    </div>
                </div>
                <div id="nav-homes" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-homes-tab" tabindex="0">
                    <h5><strong>Homes</strong></h5>
                    <p>A lot of survival multiplayer servers would come packaged with this feature. For those still new to the Minecraft multiplayer experience, homes are a convenient method of "travel" and eliminates the hassle of going to your desired location on foot, horse, boat or flight.</p>
                    <p>Let's go over all the home commands. It's simple!</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Add a New Home</h6>
                    <p>Go to the location you want to create a new home and enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home add [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your home names must be unique. For example, you cannot have multiple homes named 'mansion', but it is also possible that someone else has already taken your chosen home name.</div>
                    <div class="bs-callout bs-callout-warning"><strong>Warning:</strong> The server has limited the number of homes to <strong>5</strong> per player to encourage exploration. If you need to keep track of more locations, try using waypoints.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Teleport to Your Home</h6>
                    <p>Specify the name of the home you want to teleport to and you will be at your destination instantly. There is no teleportation delay unlike other survival multiplayer servers where they use this annoyance as leverage to get you to donate money.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home tp [name]</samp>
                        </div>
                    </div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Remove a Home</h6>
                    <p>As for this command, you do not need to go to the location to delete a home. Just type the name of the home you want to remove.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home remove [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">View a List of Your Homes</h6>
                    <p>Like a kid at a candy shop, admire all the homes you currently own by entering the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home list</samp>
                        </div>
                    </div>
                </div>
                <div id="nav-waypoints" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-waypoints-tab" tabindex="0">
                    <h5><strong>Waypoints</strong> <span class="badge rounded-pill text-bg-secondary" style="font-weight:normal;">New Feature</span></h5>
                    <p>Keep track of all your locations using waypoints. They are essentially homes without the teleportation feature, but then how do we get to our location? It is easy and a lot better than writing them down manually on a sheet of paper.</p>
                    <p>Just like what we did for homes, let's go over all the commands you need to know.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Add a New Waypoint</h6>
                    <p>Go to the location you want to create a new waypoint and enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp add [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your waypoint names must be unique. For example, you cannot have multiple homes named 'mineshaft', but it is also possible that someone else has already taken your chosen waypoint name.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Track a Waypoint</h6>
                    <p>Entering this command will display a tracker on top of your screen as a boss bar. It displays how far away you are from your waypoint and will automatically untrack when you get close enough to your destination.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp track [name]</samp>
                        </div>
                    </div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Remove a Waypoint</h6>
                    <p>Just like the home removal command, you do not need to go to the location to delete a waypoint. Just type the name of the waypoint you want to remove.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp remove [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">View a List of Your Waypoints</h6>
                    <p>Self-explanatory. You can see all your waypoints by entering this command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp list</samp>
                        </div>
                    </div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Untrack Current Waypoint</h6>
                    <p>If at any point you no longer decide to travel to your waypoint, you can manually untrack your current waypoint using the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp untrack</samp>
                        </div>
                    </div>
                </div>
                <div id="nav-teleportation" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-teleportation-tab" tabindex="0">
                    <h5><strong>Teleportation</strong></h5>
                    <p>Another feature that comes standard in survival multiplayer servers is player teleportation. Realistically, this is a must-have for when you want to play with friends or simply need to get a hold of another player.</p>
                    <p>There are three commands that you need to know.</p>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Send a Teleport Request</h6>
                    <p>You are not given instant teleportation abilities. Instead, you have to send a request to teleport to someone.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp [player]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Unlike other servers, teleport requests do not have a time limit, so the recipient of the request can accept it at any time.</div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Accept Teleport</h6>
                    <p>Enter the command below to allow the player to teleport to you. How are your hospitality skills? Just kidding.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp accept</samp>
                        </div>
                    </div>
                    <br>
                    <h6 class="border-bottom pb-2 mb-4">Deny Teleport</h6>
                    <p>You could also be that guy and deny their request. Enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp deny</samp>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 me-3">
                <div class="me-3">
                    
                </div>
            </div>
        </div>
    </div>
</main>
</template>