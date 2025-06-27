document.addEventListener("DOMContentLoaded", () => {
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

  // Function to generate a slug from a game name
  const generateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  // Game details mapping (including image paths, URLs, and descriptions)
  const gameDetails = {
    "Traffic Rider Unblocked": {
      image: "images/traffic-rider.png",
      url: "https://iframe.unblocked-76-games.org/traffic-rider-main",
      description: "Experience endless highway racing with realistic physics and multiple bikes.",
      genre: "RacingGame",
      keywords: "traffic, rider, unblocked, motorcycle, racing, highway",
    },
    "Flip Bros Unblocked": {
      image: "images/flip-bros.png",
      url: "https://iframe.unblocked-76-games.org/flip-bros-main",
      description: "Perform amazing flips and stunts with your character in this fun arcade game.",
      genre: "ArcadeGame",
      keywords: "flip, bros, unblocked, stunts, arcade, physics",
    },
    "Super Mario Bros Unblocked": {
      image: "images/super-mario-bros.png",
      url: "https://iframe.unblocked-76-games.org/super-mario-bros-main",
      description: "Relive the classic adventure of Super Mario Bros, jumping and stomping enemies.",
      genre: "AdventureGame",
      keywords: "super mario, bros, unblocked, platformer, classic, adventure",
    },
    "Temple Run 2 Unblocked": {
      image: "images/temple-run-2.png",
      url: "https://iframe.unblocked-76-games.org/temple-run-2-main",
      description: "Continue the thrilling endless running adventure, escaping dangerous idols.",
      genre: "ArcadeGame",
      keywords: "temple run, unblocked, endless runner, adventure, mobile",
    },
    "Traffic Rush Unblocked": {
      image: "images/traffic-rush.png",
      url: "https://iframe.unblocked-76-games.org/traffic-rush-main",
      description: "Navigate through heavy traffic, avoiding collisions and reaching your destination.",
      genre: "RacingGame",
      keywords: "traffic, rush, unblocked, car, driving, arcade",
    },
    "Earn To Die Unblocked": {
      image: "images/earn-to-die.png",
      url: "https://iframe.unblocked-76-games.org/earn-to-die-main",
      description: "Drive through a zombie apocalypse, upgrading your vehicle to survive.",
      genre: "ActionGame",
      keywords: "earn to die, unblocked, zombie, driving, survival, action",
    },
    "Jelly Truck Unblocked": {
      image: "images/jelly-truck.png",
      url: "https://iframe.unblocked-76-games.org/jelly-truck-main",
      description: "Drive a wobbly jelly truck through challenging terrains and obstacles.",
      genre: "RacingGame",
      keywords: "jelly, truck, unblocked, physics, driving, arcade",
    },
    "Highway Traffic Unblocked": {
      image: "images/highway-traffic.png",
      url: "https://iframe.unblocked-76-games.org/highway-traffic-main",
      description: "Race on a busy highway, dodging cars and collecting points.",
      genre: "RacingGame",
      keywords: "highway, traffic, unblocked, car, racing, endless",
    },
    "Battle Wheels Unblocked": {
      image: "images/battle-wheels.png",
      url: "https://iframe.unblocked-76-games.org/battle-wheels-main",
      description: "Engage in vehicular combat, destroying opponents with powerful weapons.",
      genre: "ActionGame",
      keywords: "battle, wheels, unblocked, vehicular combat, car, action",
    },
    "Masked Forces Unblocked": {
      image: "images/masked-forces.png",
      url: "https://iframe.unblocked-76-games.org/masked-forces-main",
      description: "A fast-paced multiplayer FPS with various game modes and customizable characters.",
      genre: "ActionGame",
      keywords: "masked forces, unblocked, fps, multiplayer, shooter",
    },
    "Truck Loader Unblocked": {
      image: "images/truck-loader-unblocked.jpeg",
      url: "https://iframe.unblocked-76-games.org/truck-loader-main",
      description: "Use a magnetic arm to load cargo onto trucks, solving physics puzzles.",
      genre: "PuzzleGame",
      keywords: "truck, loader, unblocked, physics, puzzle, cargo",
    },
    "Raft Wars Unblocked": {
      image: "images/Raft Wars Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/raft-wars-main",
      description: "Defend your raft from enemies using various weapons and tactics.",
      genre: "ActionGame",
      keywords: "raft, wars, unblocked, shooting, strategy, defense",
    },
    "Mad Day Unblocked": {
      image: "images/mad-day.png",
      url: "https://iframe.unblocked-76-games.org/mad-day-main",
      description: "Drive and shoot your way through hordes of aliens and obstacles.",
      genre: "ActionGame",
      keywords: "mad day, unblocked, driving, shooting, alien, action",
    },
    "Skibidi Shooter Unblocked": {
      image: "images/Skibidi Shooter Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/skibidi-shooter-main",
      description: "A fun and quirky shooter game with unique characters and challenges.",
      genre: "ActionGame",
      keywords: "skibidi, shooter, unblocked, funny, action, gun",
    },
    "Tunnel Rush Unblocked": {
      image: "images/Tunnel Rush Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/tunnel-rush-main",
      description: "Navigate through a fast-paced, ever-changing tunnel, avoiding obstacles.",
      genre: "ArcadeGame",
      keywords: "tunnel, rush, unblocked, endless, dodging, arcade",
    },
    "Tag Unblocked": {
      image: "images/Tag Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/tag-main",
      description: "Play a classic game of tag in a virtual environment, chasing or being chased.",
      genre: "CasualGame",
      keywords: "tag, unblocked, multiplayer, casual, chase",
    },
    "Bubble Shooter Unblocked": {
      image: "images/Bubble Shooter Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/bubble-shooter-main",
      description: "Pop colorful bubbles and clear the board in this classic and addictive puzzle game.",
      genre: "PuzzleGame",
      keywords: "bubble, shooter, unblocked, puzzle, match, classic",
    },
    "Basket Bros Unblocked": {
      image: "images/basket-bros.png",
      url: "https://iframe.unblocked-76-games.org/basket-bros-main",
      description: "Engage in fun and competitive basketball matches with unique characters.",
      genre: "SportsGame",
      keywords: "basket, bros, unblocked, basketball, sports, multiplayer",
    },
    "Dreadhead Parkour Unblocked": {
      image: "images/Dreadhead Parkour Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/dreadhead-parkour-main",
      description: "Perform amazing parkour moves and stunts across challenging levels.",
      genre: "ArcadeGame",
      keywords: "dreadhead, parkour, unblocked, stunts, running, arcade",
    },
    "BitLife Unblocked": {
      image: "images/BitLife Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/bitlife-main",
      description: "Live a virtual life, making choices that shape your destiny from birth to death.",
      genre: "SimulationGame",
      keywords: "bitlife, unblocked, life simulator, text-based, choices",
    },
    "Bloxorz Unblocked": {
      image: "images/Bloxorz Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/bloxorz-main",
      description: "Roll the block to the exit hole, solving intricate spatial puzzles.",
      genre: "PuzzleGame",
      keywords: "bloxorz, unblocked, puzzle, spatial, logic, block",
    },
    "1v1 Lol Unblocked": {
      image: "images/1v1 Lol Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/1v1-lol-main",
      description: "Engage in fast-paced 1v1 building and shooting battles.",
      genre: "ActionGame",
      keywords: "1v1 lol, unblocked, shooter, building, multiplayer, battle royale",
    },
    "Geometry Dash Unblocked": {
      image: "images/Geometry Dash Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/geometry-dash-main",
      description: "Jump and fly your way through dangerous passages and spiky obstacles.",
      genre: "ArcadeGame",
      keywords: "geometry dash, unblocked, rhythm, platformer, arcade",
    },
    "Among Us Unblocked": {
      image: "images/Among Us Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/among-us-main",
      description: "Work together to complete tasks, but beware of the impostor among you.",
      genre: "CasualGame",
      keywords: "among us, unblocked, multiplayer, social deduction, impostor",
    },
    "Funny Shooter 2 Unblocked": {
      image: "images/Funny Shooter 2 Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/funny-shooter-2-main",
      description: "A hilarious and action-packed first-person shooter with quirky enemies.",
      genre: "ActionGame",
      keywords: "funny shooter, unblocked, fps, action, humor",
    },
    "Level Devil Unblocked": {
      image: "images/Level Devil Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/level-devil-main",
      description: "A tricky platformer where everything is designed to trick you and make you rage.",
      genre: "PlatformGame",
      keywords: "level, devil, unblocked, platformer, tricky, challenge",
    },
    "Moto X3M Unblocked": {
      image: "images/Moto X3M Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/moto-x3m-main",
      description: "Perform stunts and race through challenging obstacle courses on your dirt bike.",
      genre: "RacingGame",
      keywords: "moto x3m, unblocked, motorcycle, stunts, racing, dirt bike",
    },
    "Hills Of Stell": {
      image: "images/hills-of-steel.png",
      url: "https://iframe.unblocked-76-games.org/hills-of-steel-main", // Updated URL
      description: "Drive monster trucks over challenging terrains, performing stunts and overcoming obstacles.",
      genre: "RacingGame",
      keywords: "hills, stell, monster truck, racing, stunts, game, online, free",
    },
    "Retro Bowl Unblocked": {
      image: "images/Retro Bowl Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/retro-bowl-main",
      description: "Manage your American football team and lead them to victory in this retro-style game.",
      genre: "SportsGame",
      keywords: "retro bowl, unblocked, football, sports, management, pixel art",
    },
    "8 Ball Pool Unblocked": {
      image: "images/8-ball-pool.png",
      url: "https://iframe.unblocked-76-games.org/8-ball-pool-main",
      description: "Play the classic 8 Ball Pool game online against opponents.",
      genre: "CasualGame",
      keywords: "8 ball pool, unblocked, billiards, pool, multiplayer, casual",
    },
    "Master Chess Unblocked": {
      image: "images/Master Chess Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/master-chess-main",
      description: "Play a game of chess against the computer or a friend.",
      genre: "StrategyGame",
      keywords: "master chess, unblocked, board game, strategy, logic",
    },
    "Odd Bot Out Unblocked": {
      image: "images/Odd Bot Out Unblocked.png",
      url: "https://iframe.unblocked-76-games.org/odd-bot-out-main",
      description: "Guide a peculiar robot through a series of challenging puzzles.",
      genre: "PuzzleGame",
      keywords: "odd bot out, unblocked, robot, puzzle, logic",
    },
    "Drift Hunters Unblocked": {
      image: "images/drift-hunters.png",
      url: "https://iframe.unblocked-76-games.org/drift-hunters-main",
      description: "Experience realistic car drifting physics and customize your drift car.",
      genre: "RacingGame",
      keywords: "drift hunters, unblocked, drifting, car, racing, simulation",
    },
    "Flappy Bird Unblocked": {
      image: "images/flappy-bird.png",
      url: "https://flappybirdgame.github.io/file/", // Specific URL
      description: "Tap to make the bird fly and navigate through pipes in this notoriously difficult game.",
      genre: "ArcadeGame",
      keywords: "flappy bird, unblocked, arcade, tapping, classic",
    },
    "Stick Merge Unblocked": {
      image: "images/stick-merge.png",
      url: "https://iframe.unblocked-76-games.org/stick-merge-main",
      description: "Merge stick figures to create more powerful units and defeat enemies.",
      genre: "ActionGame",
      keywords: "stick merge, unblocked, idle, merge, action, strategy",
    },
    "Stickman Hook Unblocked": {
      image: "images/stickman-hook.png",
      url: "https://iframe.unblocked-76-games.org/stickman-hook-main",
      description: "Swing through levels using your grappling hook, performing acrobatic moves.",
      genre: "ArcadeGame",
      keywords: "stickman hook, unblocked, swinging, physics, arcade",
    },
    "Subway Surfers Unblocked": {
      image: "images/subway-surfers.png",
      url: "https://iframe.unblocked-76-games.org/subway-surfers-main",
      description: "Run, jump, and surf through the subway, dodging trains and collecting coins.",
      genre: "ArcadeGame",
      keywords: "subway surfers, unblocked, endless runner, arcade, mobile",
    },
    "Poor Bunny Unblocked": {
      image: "images/poor-bunny.png",
      url: "https://iframe.unblocked-76-games.org/poor-bunny-main",
      description: "Help the poor bunny avoid traps and collect carrots in this challenging platformer.",
      genre: "ArcadeGame",
      keywords: "poor bunny, unblocked, platformer, arcade, traps",
    },
    "Jumping Shell Unblocked": {
      image: "images/jumping-shell.png",
      url: "https://iframe.unblocked-76-games.org/jumping-shell-main",
      description: "Control a jumping shell, navigating through obstacles and collecting items.",
      genre: "ArcadeGame",
      keywords: "jumping shell, unblocked, arcade, platformer, physics",
    },
    "Red Ball 4 Unblocked": {
      image: "images/red-ball-4.png",
      url: "https://iframe.unblocked-76-games.org/red-ball-4-main", // Added from list
      description: "Guide the red ball through challenging levels, avoiding obstacles and defeating enemies.",
      genre: "PlatformGame",
      keywords: "red ball, platformer, adventure, puzzle, game, online, free",
    },
    "Monkey Mart Unblocked": {
      image: "images/monkey-mart.png",
      url: "https://iframe.unblocked-76-games.org/monkey-mart-main",
      description: "Manage a bustling monkey mart, growing produce and serving customers.",
      genre: "SimulationGame",
      keywords: "monkey mart, unblocked, management, simulation, casual",
    },
    "OvO Unblocked": {
      image: "images/ovo.png",
      url: "https://unblocked-ovo.github.io/game/", // Specific URL
      description: "A fast-paced parkour platformer where you control a stick figure.",
      genre: "ArcadeGame",
      keywords: "ovo, unblocked, parkour, platformer, stickman, arcade",
    },
    "Roblox Online": {
      image: "images/roblox-online.jpeg",
      url: "https://roblox-unblock.github.io/r/among-us",
      description: "Unleash your creativity and explore millions of user-generated games in Roblox Online.",
      genre: "ArcadeGame",
      keywords: "roblox, online, unblocked, sandbox, multiplayer, creation",
    },
  }

  // Play Now button functionality
  const playNowBtn = document.getElementById("play-now-btn")
  const gameOverlay = document.getElementById("game-overlay")
  const gameFrame = document.getElementById("game-frame")

  if (playNowBtn) {
    playNowBtn.addEventListener("click", () => {
      // Create and load the iframe
      const mainGameUrl = gameDetails["Roblox Online"].url || "https://play.wgplayground.com/ifr/placeholder"
      const gameIframe = document.createElement("iframe")
      gameIframe.src = mainGameUrl
      gameIframe.width = "100%"
      gameIframe.height = "100%"
      gameIframe.frameBorder = "0"
      gameIframe.allowFullscreen = true
      gameIframe.style.border = "none"

      // Add the iframe to the game frame
      gameFrame.appendChild(gameIframe)

      // Hide the overlay with animation
      gameOverlay.style.opacity = "0"
      setTimeout(() => {
        gameOverlay.style.display = "none"
      }, 500)
    })
  }

  // Function to get all games from all categories
  function getAllGames() {
    let allGames = []
    for (const category in gameCategories) {
      allGames = allGames.concat(gameCategories[category])
    }
    return allGames
  }

  // Function to shuffle array (Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Function to create a hot game card
  function createHotGameCard(gameName) {
    const gameCard = document.createElement("div")
    gameCard.classList.add("hot-game-card")
    gameCard.setAttribute("data-game", gameName)

    const gameInfo = gameDetails[gameName]
    const hasImage = gameInfo && gameInfo.image
    let gameUrl = `games/${generateSlug(gameName)}.html` // Default URL

    // Redirect Roblox Online to the homepage
    if (gameName === "Roblox Online") {
      gameUrl = "index.html"
    }

    gameCard.innerHTML = `
<div class="hot-game-image">
  ${hasImage ? `<img src="${gameInfo.image}" alt="${gameName}">` : ""}
  <div class="hot-game-overlay">
    <i class="fas fa-play-circle"></i>
  </div>
</div>
<p>${gameName}</p>
`

    gameCard.addEventListener("click", () => {
      window.location.href = gameUrl
    })

    return gameCard
  }

  // Function to load random hot games
  function loadRandomHotGames(numGames = 8) {
    const hotGamesGrid = document.getElementById("hot-games-grid")
    if (!hotGamesGrid) return

    // Clear existing games
    hotGamesGrid.innerHTML = ""

    // Get all games and shuffle them
    const allGames = getAllGames()
    const shuffledGames = shuffleArray(allGames)

    // Select the first 'numGames' games
    const selectedGames = shuffledGames.slice(0, numGames)

    // Create and append game cards
    selectedGames.forEach((game) => {
      const gameCard = createHotGameCard(game)
      hotGamesGrid.appendChild(gameCard)
    })
  }

  // Load random hot games initially
  loadRandomHotGames(8)

  // Refresh hot games periodically (every 24 hours)
  const HOT_GAMES_REFRESH_INTERVAL = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  setInterval(loadRandomHotGames, HOT_GAMES_REFRESH_INTERVAL)

  // Add this after the hot games functionality
  // Hot Games click functionality (for any statically defined hot game cards)
  const hotGameCards = document.querySelectorAll(".hot-game-card")

  if (hotGameCards) {
    hotGameCards.forEach((card) => {
      card.addEventListener("click", function () {
        const gameName = this.getAttribute("data-game")
        if (gameName) {
          let gameUrl = `games/${generateSlug(gameName)}.html`
          if (gameName === "Roblox Online") {
            gameUrl = "index.html"
          }
          window.location.href = gameUrl
        }
      })
    })
  }

  // Fullscreen functionality
  const fullscreenBtn = document.querySelector(".fullscreen-btn")
  const gameContent = document.querySelector(".game-content")
  const gameIframe = document.querySelector(".game-content iframe")

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", function () {
      if (!document.fullscreenElement) {
        if (gameContent.requestFullscreen) {
          gameContent.requestFullscreen()
        } else if (gameContent.mozRequestFullScreen) {
          /* Firefox */
          gameContent.mozRequestFullScreen()
        } else if (gameContent.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          gameContent.webkitRequestFullscreen()
        } else if (gameContent.msRequestFullscreen) {
          /* IE/Edge */
          gameContent.msRequestFullscreen()
        }
        this.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen'
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari & Opera */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen()
        }
        this.innerHTML = '<i class="fas fa-expand"></i> Fullscreen'
      }
    })
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector("nav")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      nav.classList.toggle("active")

      // Change icon based on menu state
      const icon = this.querySelector("i")
      if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target)
    const isClickOnToggle = mobileMenuToggle.contains(event.target)

    if (nav.classList.contains("active") && !isClickInsideNav && !isClickOnToggle) {
      nav.classList.remove("active")
      const icon = mobileMenuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Create pixel dots background
  function createPixelDots() {
    const pixelDotsContainer = document.querySelector(".pixel-dots")
    if (!pixelDotsContainer) return

    // Clear existing dots
    pixelDotsContainer.innerHTML = ""

    // Create random dots
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement("div")
      dot.classList.add("pixel-dot")
      dot.style.position = "absolute"
      dot.style.width = "4px"
      dot.style.height = "4px"
      dot.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
      dot.style.borderRadius = "50%"

      // Random position
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`

      // Random animation delay
      dot.style.animation = `twinkle 3s infinite ${Math.random() * 3}s`

      pixelDotsContainer.appendChild(dot)
    }
  }

  // Add animation keyframes for twinkling dots
  const style = document.createElement("style")
  style.textContent = `
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`
  document.head.appendChild(style)

  createPixelDots()

  // Add click events to game cards
  const gameCards = document.querySelectorAll(".game-card")

  gameCards.forEach((card) => {
    card.addEventListener("click", function (event) {
      // Add a ripple effect when clicked
      const ripple = document.createElement("div")
      ripple.classList.add("ripple")
      this.appendChild(ripple)

      // Position the ripple at the click position
      const rect = this.getBoundingClientRect()
      ripple.style.left = `${event.clientX - rect.left}px`
      ripple.style.top = `${event.clientY - rect.top}px`

      // Remove the ripple after animation completes
      setTimeout(() => {
        ripple.remove()
      }, 600)

      // Get game name
      const gameName = this.querySelector("p").textContent
      let gameUrl = `games/${generateSlug(gameName)}.html`

      // Redirect Roblox Online to the homepage
      if (gameName === "Roblox Online") {
        gameUrl = "index.html"
      }

      // Navigate to game detail page
      window.location.href = gameUrl
    })
  })

  // Add ripple effect styles
  const rippleStyle = document.createElement("style")
  rippleStyle.textContent = `
.ripple {
position: absolute;
background-color: rgba(255, 255, 255, 0.3);
border-radius: 50%;
transform: scale(0);
animation: ripple 0.6s linear;
pointer-events: none;
width: 100px;
height: 100px;
}

@keyframes ripple {
to {
transform: scale(4);
opacity: 0;
}
}
`
  document.head.appendChild(rippleStyle)

  // Popular games list (10 games from different categories)
  const popularGames = [
    "Roblox Online", // Changed from Hole.io
    "Traffic Rider Unblocked",
    "Flip Bros Unblocked",
    "Super Mario Bros Unblocked",
    "Temple Run 2 Unblocked",
    "Earn To Die Unblocked",
    "Jelly Truck Unblocked",
    "Masked Forces Unblocked",
    "Truck Loader Unblocked",
    "Tunnel Rush Unblocked",
    "Flappy Bird Unblocked",
  ]

  // Number of games to show initially and on each "Load More" click
  const GAMES_PER_LOAD = 6

  // Track how many games are currently shown in each category
  const shownGames = {
    puzzle: 0,
    match: 0,
    action: 0,
    adventure: 0,
    strategy: 0,
    simulation: 0,
    racing: 0,
    sports: 0,
    arcade: 0,
    casual: 0,
  }

  // Function to create a game card
  function createGameCard(gameName) {
    const gameCard = document.createElement("div")
    gameCard.classList.add("game-card")

    const gameInfo = gameDetails[gameName]
    const hasImage = gameInfo && gameInfo.image
    let gameUrl = `games/${generateSlug(gameName)}.html`

    // Redirect Roblox Online to the homepage
    if (gameName === "Roblox Online") {
      gameUrl = "index.html"
    }

    gameCard.innerHTML = `
<div class="card-image">
${hasImage ? `<img src="${gameInfo.image}" alt="${gameName}">` : ""}
<div class="play-overlay">
<i class="fas fa-play-circle"></i>
</div>
</div>
<p>${gameName}</p>
`

    gameCard.addEventListener("click", function (event) {
      // Add a ripple effect when clicked
      const ripple = document.createElement("div")
      ripple.classList.add("ripple")
      this.appendChild(ripple)

      // Position the ripple at the click position
      const rect = this.getBoundingClientRect()
      ripple.style.left = `${event.clientX - rect.left}px`
      ripple.style.top = `${event.clientY - rect.top}px`

      // Remove the ripple after animation completes
      setTimeout(() => {
        ripple.remove()
      }, 600)

      // Navigate to game detail page
      window.location.href = gameUrl
    })

    return gameCard
  }

  // Function to load popular games
  function loadPopularGames() {
    const grid = document.getElementById("popular-games-grid")
    if (!grid) return

    // Clear the grid first
    grid.innerHTML = ""

    // Add popular games to the grid
    popularGames.forEach((game) => {
      const gameCard = createGameCard(game)
      grid.appendChild(gameCard)
    })
  }

  // Function to load games for a specific category
  function loadGamesForCategory(category) {
    const grid = document.getElementById(`${category}-grid`)
    const games = gameCategories[category]
    const startIndex = shownGames[category]
    const endIndex = Math.min(startIndex + GAMES_PER_LOAD, games.length)

    // Add games to the grid
    for (let i = startIndex; i < endIndex; i++) {
      const gameCard = createGameCard(games[i])
      grid.appendChild(gameCard)
    }

    // Update shown games count
    shownGames[category] = endIndex

    // Disable "Load More" button if all games are shown
    const loadMoreBtn = document.querySelector(`.load-more-btn[data-category="${category}"]`)
    if (loadMoreBtn && endIndex >= games.length) {
      loadMoreBtn.disabled = true
      loadMoreBtn.textContent = "All Games Loaded"
    }
  }

  // Load popular games
  loadPopularGames()

  // Initialize all categories
  Object.keys(gameCategories).forEach((category) => {
    shownGames[category] = 0 // Reset shown games count for each category
    loadGamesForCategory(category)
  })

  // Add event listeners to "Load More" buttons
  document.querySelectorAll(".load-more-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")
      loadGamesForCategory(category)
    })
  })

  // Function to refresh hot games when user returns to the page
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // Only refresh if it's been at least 1 hour since the last refresh
      const lastRefresh = localStorage.getItem("lastHotGamesRefresh")
      const now = Date.now()

      if (!lastRefresh || now - Number.parseInt(lastRefresh) > 60 * 60 * 1000) {
        loadRandomHotGames()
        localStorage.setItem("lastHotGamesRefresh", now.toString())
      }
    }
  })

  // Store initial refresh time
  localStorage.setItem("lastHotGamesRefresh", Date.now().toString())
})
