// This script generates all the game HTML files from the template
// Run this script with Node.js to create all the game files

const fs = require("fs")
const path = require("path")

// Game categories
const gameCategories = {
  puzzle: ["Truck Loader Unblocked", "Bloxorz Unblocked", "Odd Bot Out Unblocked", "Bubble Shooter Unblocked"],
  match: [],
  action: [
    "Earn To Die Unblocked",
    "Battle Wheels Unblocked",
    "Masked Forces Unblocked",
    "Raft Wars Unblocked",
    "Mad Day Unblocked",
    "Skibidi Shooter Unblocked",
    "1v1 Lol Unblocked",
    "Funny Shooter 2 Unblocked",
    "Stick Merge Unblocked",
  ],
  adventure: ["Super Mario Bros Unblocked"],
  strategy: ["Master Chess Unblocked"],
  simulation: ["BitLife Unblocked", "Monkey Mart Unblocked"],
  racing: [
    "Traffic Rider Unblocked",
    "Traffic Rush Unblocked",
    "Jelly Truck Unblocked",
    "Highway Traffic Unblocked",
    "Moto X3M Unblocked",
    "Drift Hunters Unblocked",
    "Hills Of Stell",
  ],
  sports: ["Basket Bros Unblocked", "Retro Bowl Unblocked"],
  arcade: [
    "Flip Bros Unblocked",
    "Temple Run 2 Unblocked",
    "Tunnel Rush Unblocked",
    "Dreadhead Parkour Unblocked",
    "Geometry Dash Unblocked",
    "Flappy Bird Unblocked",
    "Stickman Hook Unblocked",
    "Poor Bunny Unblocked",
    "Jumping Shell Unblocked",
    "OvO Unblocked",
    "Subway Surfers Unblocked",
    "Roblox Online", // Changed from Hole.io
  ],
  casual: [
    "Tag Unblocked",
    "Among Us Unblocked",
    "8 Ball Pool Unblocked",
    "Red Ball 4 Unblocked",
    "Level Devil Unblocked",
  ],
}

// Get all games
const allGames = []
for (const category in gameCategories) {
  allGames.push(...gameCategories[category])
}

// Function to generate a slug from a game name
const generateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

// Game images mapping (using placeholder images with queries)
const gameImages = {
  "Traffic Rider Unblocked": "../images/traffic-rider.png",
  "Flip Bros Unblocked": "../images/flip-bros.png",
  "Super Mario Bros Unblocked": "../images/super-mario-bros.png",
  "Temple Run 2 Unblocked": "../images/temple-run-2.png",
  "Traffic Rush Unblocked": "../images/traffic-rush.png",
  "Earn To Die Unblocked": "../images/earn-to-die.png",
  "Jelly Truck Unblocked": "../images/jelly-truck.png",
  "Highway Traffic Unblocked": "../images/highway-traffic.png",
  "Battle Wheels Unblocked": "../images/battle-wheels.png",
  "Masked Forces Unblocked": "../images/masked-forces.png",
  "Truck Loader Unblocked": "../images/truck-loader-unblocked.jpeg",
  "Raft Wars Unblocked": "../images/Raft Wars Unblocked.png",
  "Mad Day Unblocked": "../images/mad-day.png",
  "Skibidi Shooter Unblocked": "../images/Skibidi Shooter Unblocked.png",
  "Tunnel Rush Unblocked": "../images/Tunnel Rush Unblocked.png",
  "Tag Unblocked": "../images/Tag Unblocked.png",
  "Bubble Shooter Unblocked": "../images/Bubble Shooter Unblocked.png",
  "Basket Bros Unblocked": "../images/basket-bros.png",
  "Dreadhead Parkour Unblocked": "../images/Dreadhead Parkour Unblocked.png",
  "BitLife Unblocked": "../images/BitLife Unblocked.png",
  "Bloxorz Unblocked": "../images/Bloxorz Unblocked.png",
  "1v1 Lol Unblocked": "../images/1v1 Lol Unblocked.png",
  "Geometry Dash Unblocked": "../images/Geometry Dash Unblocked.png",
  "Among Us Unblocked": "../images/Among Us Unblocked.png",
  "Funny Shooter 2 Unblocked": "../images/Funny Shooter 2 Unblocked.png",
  "Level Devil Unblocked": "../images/Level Devil Unblocked.png",
  "Moto X3M Unblocked": "../images/Moto X3M Unblocked.png",
  "Retro Bowl Unblocked": "../images/Retro Bowl Unblocked.png",
  "8 Ball Pool Unblocked": "../images/8-ball-pool.png",
  "Master Chess Unblocked": "../images/Master Chess Unblocked.png",
  "Odd Bot Out Unblocked": "../images/Odd Bot Out Unblocked.png",
  "Drift Hunters Unblocked": "../images/drift-hunters.png",
  "Flappy Bird Unblocked": "../images/flappy-bird.png",
  "Stick Merge Unblocked": "../images/stick-merge.png",
  "Stickman Hook Unblocked": "../images/stickman-hook.png",
  "Subway Surfers Unblocked": "../images/subway-surfers.png",
  "Poor Bunny Unblocked": "../images/poor-bunny.png",
  "Jumping Shell Unblocked": "../images/jumping-shell.png",
  "Red Ball 4 Unblocked": "../images/red-ball-4.png",
  "Monkey Mart Unblocked": "../images/monkey-mart.png",
  "OvO Unblocked": "../images/ovo.png",
  "Roblox Online": "../images/roblox-online.jpeg", // Changed from Hole.io
  "Hills Of Stell": "../images/hills-of-steel.png",
}

// Game URLs mapping (using a generic placeholder URL)
const gameURLs = {
  "Traffic Rider Unblocked": "https://iframe.unblocked-76-games.org/traffic-rider-main",
  "Flip Bros Unblocked": "https://iframe.unblocked-76-games.org/flip-bros-main",
  "Super Mario Bros Unblocked": "https://iframe.unblocked-76-games.org/super-mario-bros-main",
  "Temple Run 2 Unblocked": "https://iframe.unblocked-76-games.org/temple-run-2-main",
  "Traffic Rush Unblocked": "https://iframe.unblocked-76-games.org/traffic-rush-main",
  "Earn To Die Unblocked": "https://iframe.unblocked-76-games.org/earn-to-die-main",
  "Jelly Truck Unblocked": "https://iframe.unblocked-76-games.org/jelly-truck-main",
  "Highway Traffic Unblocked": "https://iframe.unblocked-76-games.org/highway-traffic-main",
  "Battle Wheels Unblocked": "https://iframe.unblocked-76-games.org/battle-wheels-main",
  "Masked Forces Unblocked": "https://iframe.unblocked-76-games.org/masked-forces-main",
  "Truck Loader Unblocked": "https://iframe.unblocked-76-games.org/truck-loader-main",
  "Raft Wars Unblocked": "https://iframe.unblocked-76-games.org/raft-wars-main",
  "Mad Day Unblocked": "https://iframe.unblocked-76-games.org/mad-day-main",
  "Skibidi Shooter Unblocked": "https://iframe.unblocked-76-games.org/skibidi-shooter-main",
  "Tunnel Rush Unblocked": "https://iframe.unblocked-76-games.org/tunnel-rush-main",
  "Tag Unblocked": "https://iframe.unblocked-76-games.org/tag-main",
  "Bubble Shooter Unblocked": "https://iframe.unblocked-76-games.org/bubble-shooter-main",
  "Basket Bros Unblocked": "https://iframe.unblocked-76-games.org/basket-bros-main",
  "Dreadhead Parkour Unblocked": "https://iframe.unblocked-76-games.org/dreadhead-parkour-main",
  "BitLife Unblocked": "https://iframe.unblocked-76-games.org/bitlife-main",
  "Bloxorz Unblocked": "https://iframe.unblocked-76-games.org/bloxorz-main",
  "1v1 Lol Unblocked": "https://iframe.unblocked-76-games.org/1v1-lol-main",
  "Geometry Dash Unblocked": "https://iframe.unblocked-76-games.org/geometry-dash-main",
  "Among Us Unblocked": "https://iframe.unblocked-76-games.org/among-us-main",
  "Funny Shooter 2 Unblocked": "https://iframe.unblocked-76-games.org/funny-shooter-2-main",
  "Level Devil Unblocked": "https://iframe.unblocked-76-games.org/level-devil-main",
  "Moto X3M Unblocked": "https://iframe.unblocked-76-games.org/moto-x3m-main",
  "Hills Of Stell": "https://iframe.unblocked-76-games.org/hills-of-steel-main", // Updated URL
  "Retro Bowl Unblocked": "https://iframe.unblocked-76-games.org/retro-bowl-main",
  "8 Ball Pool Unblocked": "https://iframe.unblocked-76-games.org/8-ball-pool-main",
  "Master Chess Unblocked": "https://iframe.unblocked-76-games.org/master-chess-main",
  "Odd Bot Out Unblocked": "https://iframe.unblocked-76-games.org/odd-bot-out-main",
  "Drift Hunters Unblocked": "https://iframe.unblocked-76-games.org/drift-hunters-main",
  "Flappy Bird Unblocked": "https://flappybirdgame.github.io/file/", // Specific URL
  "Stick Merge Unblocked": "https://iframe.unblocked-76-games.org/stick-merge-main",
  "Stickman Hook Unblocked": "https://iframe.unblocked-76-games.org/stick-hook-main",
  "Subway Surfers Unblocked": "https://iframe.unblocked-76-games.org/subway-surfers-main",
  "Poor Bunny Unblocked": "https://iframe.unblocked-76-games.org/poor-bunny-main",
  "Jumping Shell Unblocked": "https://iframe.unblocked-76-games.org/jumping-shell-main",
  "Red Ball 4 Unblocked": "https://iframe.unblocked-76-games.org/red-ball-4-main",
  "Monkey Mart Unblocked": "https://iframe.unblocked-76-games.org/monkey-mart-main",
  "OvO Unblocked": "https://unblocked-ovo.github.io/game/", // Specific URL
  "Roblox Online": "https://roblox-unblock.github.io/r/among-us",
}

// Game template
const gameTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Play GAME_TITLE - Roblox Online</title>
<link rel="stylesheet" href="../styles.css">
<link rel="stylesheet" href="../game-detail.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
<!-- Header/Navigation -->
<header>
<div class="container">
    <div class="logo">
        <h1><a href="../" class="logo-link">Roblox Online</a></h1>
    </div>
    <nav>
        <ul>
            <li class="dropdown">
                <a href="#" class="nav-link">Genres <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="../puzzle.html">Puzzle</a>
                    <a href="../match.html">Match</a>
                    <a href="../action.html">Action</a>
                    <a href="../adventure.html">Adventure</a>
                    <a href="../strategy.html">Strategy</a>
                    <a href="../simulation.html">Simulation</a>
                    <a href="../racing.html">Racing</a>
                    <a href="../sports.html">Sports</a>
                    <a href="../arcade.html">Arcade</a>
                    <a href="../casual.html">Casual</a>
                </div>
            </li>
            <li><a href="../about.html" class="nav-link">About</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li class="dropdown">
                <a href="#" class="nav-link">Legal <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="../disclaimer.html">Disclaimer</a>
                    <a href="../terms.html">Terms & Conditions</a>
                    <a href="../privacy.html">Privacy Policy</a>
                </div>
            </li>
        </ul>
    </nav>
    <div class="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
    </div>
</div>
</header>

<!-- Main Content -->
<main>
<div class="container">
    <div class="game-detail-container">
        <div class="game-detail-header">
            <h1 id="game-title">GAME_TITLE</h1>
            <div class="game-actions">
                <button class="action-btn like-btn"><i class="far fa-heart"></i> Like</button>
                <button class="action-btn share-btn"><i class="fas fa-share-alt"></i> Share</button>
            </div>
        </div>
        
        <div class="game-detail-layout">
            <div class="game-container">
                <div class="game-wrapper">
                    <div class="game-content">
                        <div id="game-frame" class="game-frame">
                            <!-- Game iframe will be loaded here -->
                        </div>
                        <div id="game-overlay" class="game-overlay">
                            <div class="game-preview">
                                <img src="GAME_IMAGE_PATH" alt="GAME_TITLE Preview" class="preview-image" id="game-preview-image">
                                <div class="blur-overlay"></div>
                            </div>
                            <button id="play-now-btn" class="play-now-btn">
                                <i class="fas fa-play-circle"></i> Play Now
                            </button>
                        </div>
                    </div>
                    <div class="game-footer">
                        <h3 id="game-title-footer">GAME_TITLE</h3>
                        <button class="fullscreen-btn"><i class="fas fa-expand"></i> Fullscreen</button>
                    </div>
                </div>
            </div>
            
            <div class="hot-games-container">
                <h3 class="hot-games-title">Hot Games</h3>
                <div class="hot-games-grid" id="detail-hot-games-grid">
                    <!-- Hot games will be dynamically loaded by JavaScript -->
                </div>
            </div>
        </div>
        
        <div class="game-info">
            <div class="game-description">
                <h2>About This Game</h2>
                <div id="game-description">
                    <p>GAME_TITLE is an exciting game where you can test your skills and have fun. The objective is to score as many points as possible while avoiding obstacles and completing challenges.</p>
                    
                    <p>With intuitive controls and progressively difficult levels, this game offers hours of entertainment for players of all skill levels.</p>
                </div>
            </div>
            
            <div class="game-controls">
                <h2>Controls</h2>
                <ul>
                    <li><span class="key">W</span> or <span class="key">↑</span> - Move Up</li>
                    <li><span class="key">A</span> or <span class="key">←</span> - Move Left</li>
                    <li><span class="key">S</span> or <span class="key">↓</span> - Move Down</li>
                    <li><span class="key">D</span> or <span class="key">→</span> - Move Right</li>
                    <li><span class="key">Space</span> - Action / Jump</li>
                </ul>
            </div>
        </div>
        
        <div class="related-games">
            <h2>You Might Also Like</h2>
            <div class="related-games-grid">
                <!-- Related games will be dynamically added here -->
            </div>
        </div>
    </div>
</div>
</main>

<!-- Footer -->
<footer>
<div class="container">
    <div class="footer-content">
        <div class="footer-logo">
            <h2>Roblox Online</h2>
        </div>
        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About Us</a></li>
                <li><a href="../contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-categories">
            <h3>Game Categories</h3>
            <ul>
                <li><a href="../puzzle.html">Puzzle</a></li>
                <li><a href="../match.html">Match</a></li>
                <li><a href="../action.html">Action</a></li>
                <li><a href="../adventure.html">Adventure</a></li>
                <li><a href="../strategy.html">Strategy</a></li>
                <li><a href="../simulation.html">Simulation</a></li>
                <li><a href="../racing.html">Racing</a></li>
                <li><a href="../sports.html">Sports</a></li>
                <li><a href="../arcade.html">Arcade</a></li>
                <li><a href="../casual.html">Casual</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Roblox Online. All rights reserved.</p>
    </div>
</div>
</footer>

<script src="../game-detail.js"></script>
</body>
</html>`

// Create games directory if it doesn't exist
const gamesDir = path.join(__dirname, "games")
if (!fs.existsSync(gamesDir)) {
  fs.mkdirSync(gamesDir)
  console.log("Created games directory")
}

// Generate HTML files for each game
allGames.forEach((game) => {
  const slug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const filePath = path.join(gamesDir, `${slug}.html`)

  // Replace placeholders in the template
  const gameHtml = gameTemplate
    .replace(/GAME_TITLE/g, game)
    .replace(
      /GAME_IMAGE_PATH/g,
      gameImages[game] || `../images/placeholder.svg?height=120&width=200&query=${slug}+game`,
    )

  // Write the file
  fs.writeFileSync(filePath, gameHtml)
  console.log(`Generated: ${filePath}`)
})

console.log(`Successfully generated ${allGames.length} game HTML files.`)
