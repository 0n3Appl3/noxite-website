<script setup>
import StyledHeading from '../components/StyledHeading.vue'
</script>

<template>
<main class="page-full-height">
    <StyledHeading title="Player Guides" background="./src/assets/thing_1.png" />
    <div class="container-sm py-5">
        <div class="row">
            <div class="col-2 me-3">
                <div id="nav-tab" class="list-group me-3" role="tablist">
                    <a href="#land-claiming" id="nav-land-claiming-tab" class="list-group-item list-group-item-action nav-link active" data-bs-toggle="tab" data-bs-target="#nav-land-claiming" role="tab" aria-controls="nav-land-claiming" aria-selected="true">Land Claiming</a>
                    <a href="#chest-shop" id="nav-chest-shop-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-chest-shop" role="tab" aria-controls="nav-chest-shop" aria-selected="true">Chest Shop</a>
                    <a href="#homes" id="nav-homes-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-homes" role="tab" aria-controls="nav-homes" aria-selected="true">Homes</a>
                    <a href="#waypoints" id="nav-waypoints-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-waypoints" role="tab" aria-controls="nav-waypoints" aria-selected="true">Waypoints</a>
                    <a href="#teleportation" id="nav-teleportation-tab" class="list-group-item list-group-item-action nav-link" data-bs-toggle="tab" data-bs-target="#nav-teleportation" role="tab" aria-controls="nav-teleportation" aria-selected="true">Teleportation</a>
                </div>
            </div>
            <div id="nav-tabContent" class="col tab-content">
                <div id="nav-land-claiming" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-land-claiming-tab" tabindex="0">
                    <h5>Land Claiming</h5>
                    <p>test</p>
                </div>
                <div id="nav-chest-shop" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-chest-shop-tab" tabindex="0">
                    <h5><strong>Chest Shop</strong></h5>
                    <p>Buying and selling items in multiplayer is different on Noxite. Other server economies would utilise some form of chest shop system and Noxite's version takes this concept and tweaks it slightly.</p>
                    <p>We will follow the natural flow of how to use this system from creation to management.</p>
                    <br>
                    <h6>Creating a New Shop</h6>
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
                    <h6>Selling an Item</h6>
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
                    <h6>Buying an Item</h6>
                    <p>If you are looking to buy something from another player's chest shop, right click the chest or barrel to open a shop GUI, which displays all items the shop owner is selling. Hovering over each item will display the amount of diamonds you need to buy that item. Simply click the item you want to buy and the transaction is complete. The item will appear in your inventory.</p>
                    <div class="bs-callout"><strong>Note:</strong> If you have a full inventory, the item will drop below you to be picked up when you have enough space in your inventory.</div>
                    <br>
                    <h6>Collecting Your Profits</h6>
                    <p>Simply click your chest shop to open the shop menu GUI. Then, click the "Profits" menu option to view the diamonds you earned. You can transfer the diamonds into your inventory like a regular player inventory.</p>
                    <br>
                    <h6>Removing a Shop</h6>
                    <p>If you no longer want to keep a shop, enter the following command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/shop remove [shop name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6>View a List of Your Shops</h6>
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
                    <h6>Add a New Home</h6>
                    <p>Go to the location you want to create a new home and enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home add [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your home names must be unique. For example, you cannot have multiple homes named 'mansion', but it is also possible that someone else has already taken your chosen home name.</div>
                    <div class="bs-callout bs-callout-warning"><strong>Warning:</strong> The server has limited the number of homes to <strong>5</strong> per player to encourage exploration. If you need to keep track of more locations, try using waypoints.</div>
                    <br>
                    <h6>Teleport to Your Home</h6>
                    <p>Specify the name of the home you want to teleport to and you will be at your destination instantly. There is no teleportation delay unlike other survival multiplayer servers where they use this annoyance as leverage to get you to donate money.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home tp [name]</samp>
                        </div>
                    </div>
                    <br>
                    <h6>Remove a Home</h6>
                    <p>As for this command, you do not need to go to the location to delete a home. Just type the name of the home you want to remove.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home remove [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6>View a List of Your Homes</h6>
                    <p>Like a kid at a candy shop, admire all the homes you currently own by entering the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/home list</samp>
                        </div>
                    </div>
                </div>
                <div id="nav-waypoints" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-waypoints-tab" tabindex="0">
                    <h5><strong>Waypoints</strong></h5>
                    <p>Keep track of all your locations using waypoints. They are essentially homes without the teleportation feature, but then how do we get to our location? It is easy and a lot better than writing them down manually on a sheet of paper.</p>
                    <p>Just like what we did for homes, let's go over all the commands you need to know.</p>
                    <br>
                    <h6>Add a New Waypoint</h6>
                    <p>Go to the location you want to create a new home and enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp add [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Your waypoint names must be unique. For example, you cannot have multiple homes named 'mineshaft', but it is also possible that someone else has already taken your chosen waypoint name.</div>
                    <br>
                    <h6>Track a Waypoint</h6>
                    <p>Entering this command will display a tracker on top of your screen as a boss bar. It displays how far away you are from your waypoint and will automatically untrack when you get close enough to your destination.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp track [name]</samp>
                        </div>
                    </div>
                    <br>
                    <h6>Remove a Waypoint</h6>
                    <p>Just like the home removal command, you do not need to go to the location to delete a waypoint. Just type the name of the waypoint you want to remove.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp remove [name]</samp>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-danger"><strong>Danger:</strong> Be careful when executing this command. This action cannot be reversed.</div>
                    <br>
                    <h6>View a List of Your Waypoints</h6>
                    <p>Self-explanatory. You can see all your waypoints by entering this command.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/wp list</samp>
                        </div>
                    </div>
                    <br>
                    <h6>Untrack Current Waypoint</h6>
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
                    <h6>Send a Teleport Request</h6>
                    <p>You are not given instant teleportation abilities. Instead, you have to send a request to teleport to someone.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp [player]</samp>
                        </div>
                    </div>
                    <div class="bs-callout"><strong>Note:</strong> Unlike other servers, teleport requests do not have a time limit, so the recipient of the request can accept it at any time.</div>
                    <br>
                    <h6>Accept Teleport</h6>
                    <p>Enter the command below to allow the player to teleport to you. How are your hospitality skills? Just kidding.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp accept</samp>
                        </div>
                    </div>
                    <br>
                    <h6>Deny Teleport</h6>
                    <p>You could also be that guy and deny their request. Enter the command below.</p>
                    <div class="card">
                        <div class="card-body">
                            <samp>/tp deny</samp>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 me-3">
                <div class="me-3">
                    
                </div>
            </div>
        </div>
    </div>
</main>
</template>