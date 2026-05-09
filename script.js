// ================================
// LISTA SFIDE PER OGNI GIOCO
// ================================

const challenges = {

    tutti: [
        {
            title: "No Heal Challenge",
            desc: "Gioca un'intera partita senza curarti mai.",
            difficulty: "hard",
            icon: "💀",
            xp: 50
        },
        {
            title: "Pistola Only",
            desc: "Usa solo armi secondarie per tutta la partita.",
            difficulty: "hard",
            icon: "🔫",
            xp: 50
        },
        {
            title: "Speed Run",
            desc: "Completa una missione il più velocemente possibile.",
            difficulty: "medium",
            icon: "⚡",
            xp: 30
        },
        {
            title: "Pacifista",
            desc: "Vinci una partita facendo meno kill possibili.",
            difficulty: "hard",
            icon: "🕊️",
            xp: 50
        },
        {
            title: "Primo Sangue",
            desc: "Fai la prima kill della partita.",
            difficulty: "easy",
            icon: "🩸",
            xp: 10
        },
        {
            title: "Gioca con un amico",
            desc: "Invita un amico e giocate insieme almeno 3 partite.",
            difficulty: "easy",
            icon: "👥",
            xp: 10
        },
        {
            title: "Mira alla Testa",
            desc: "Fai almeno 5 headshot in una partita.",
            difficulty: "medium",
            icon: "🎯",
            xp: 30
        },
        {
            title: "Sopravvissuto",
            desc: "Arriva tra gli ultimi 3 senza uccidere nessuno.",
            difficulty: "hard",
            icon: "🏆",
            xp: 50
        },
        {
            title: "Cambio Classe",
            desc: "Gioca con un personaggio o classe che non usi mai.",
            difficulty: "easy",
            icon: "🔄",
            xp: 10
        },
        {
            title: "No HUD",
            desc: "Disattiva l'interfaccia e gioca una partita intera.",
            difficulty: "hard",
            icon: "🙈",
            xp: 50
        },
        {
            title: "Clutch Master",
            desc: "Vinci un round da solo in inferiorità numerica.",
            difficulty: "hard",
            icon: "💪",
            xp: 50
        },
        {
            title: "Sessione Relax",
            desc: "Gioca 30 minuti senza arrabbiarti. Zero Rage.",
            difficulty: "medium",
            icon: "😌",
            xp: 30
        }
    ],

    fortnite: [
        {
            title: "Solo Piccone",
            desc: "Fai almeno 1 kill usando solo il piccone.",
            difficulty: "hard",
            icon: "⛏️",
            xp: 50
        },
        {
            title: "Costruttore Pazzo",
            desc: "Costruisci una fortezza enorme prima final circle.",
            difficulty: "medium",
            icon: "🏗️",
            xp: 30
        },
        {
            title: "Loot Run",
            desc: "Apri 20 casse in una singola partita.",
            difficulty: "easy",
            icon: "📦",
            xp: 10
        },
        {
            title: "Victory Royale",
            desc: "Vinci una partita in modalità solo.",
            difficulty: "hard",
            icon: "👑",
            xp: 50
        },
        {
            title: "No Build",
            desc: "Gioca senza costruire neanche una struttura.",
            difficulty: "medium",
            icon: "🚫",
            xp: 30
        },
        {
            title: "Solo Shotgun",
            desc: "Usa solo shotgun per tutta la partita.",
            difficulty: "medium",
            icon: "💥",
            xp: 30
        }
    ],

    valorant: [
        {
            title: "Ace!",
            desc: "Fai un Ace (5 kill in un round).",
            difficulty: "hard",
            icon: "🔥",
            xp: 50
        },
        {
            title: "Solo Sheriff",
            desc: "Gioca un match intero usando solo la Sheriff.",
            difficulty: "hard",
            icon: "🤠",
            xp: 50
        },
        {
            title: "Agente Nuovo",
            desc: "Gioca 3 partite con un agente che non usi mai.",
            difficulty: "easy",
            icon: "🧪",
            xp: 10
        },
        {
            title: "Flash Master",
            desc: "Flasha almeno 10 nemici in un match.",
            difficulty: "medium",
            icon: "💡",
            xp: 30
        },
        {
            title: "Clutch King",
            desc: "Vinci un round 1v3 o più.",
            difficulty: "hard",
            icon: "👑",
            xp: 50
        },
        {
            title: "Zero Morti",
            desc: "Completa almeno 3 round senza morire.",
            difficulty: "medium",
            icon: "🛡️",
            xp: 30
        }
    ],

    minecraft: [
        {
            title: "Speedrun Diamanti",
            desc: "Trova diamanti entro i primi 15 minuti di gioco.",
            difficulty: "medium",
            icon: "💎",
            xp: 30
        },
        {
            title: "Costruisci una Casa Figa",
            desc: "Dedica 1 ora a costruire la casa dei tuoi sogni.",
            difficulty: "easy",
            icon: "🏠",
            xp: 10
        },
        {
            title: "Uccidi il Drago",
            desc: "Sconfiggi l'Ender Dragon in survival.",
            difficulty: "hard",
            icon: "🐉",
            xp: 50
        },
        {
            title: "Vegetariano",
            desc: "Sopravvivi un giorno intero mangiando solo pane e mele.",
            difficulty: "easy",
            icon: "🍎",
            xp: 10
        },
        {
            title: "Nether Trip",
            desc: "Vai nel Nether e torna vivo con almeno 10 blaze rod.",
            difficulty: "medium",
            icon: "🔥",
            xp: 30
        },
        {
            title: "No Armatura",
            desc: "Sopravvivi una notte senza armatura in difficoltà Hard.",
            difficulty: "hard",
            icon: "😱",
            xp: 50
        }
    ],

    lol: [
        {
            title: "Perfect CS",
            desc: "Fai almeno 80 CS entro il minuto 10.",
            difficulty: "hard",
            icon: "🎯",
            xp: 50
        },
        {
            title: "Zero Deaths",
            desc: "Finisci una partita con 0 morti.",
            difficulty: "hard",
            icon: "🛡️",
            xp: 50
        },
        {
            title: "Campione Nuovo",
            desc: "Gioca con un campione che non hai mai usato.",
            difficulty: "easy",
            icon: "🆕",
            xp: 10
        },
        {
            title: "Ward Master",
            desc: "Piazza almeno 20 ward in una partita.",
            difficulty: "easy",
            icon: "👁️",
            xp: 10
        },
        {
            title: "Penta Kill",
            desc: "Fai una Penta Kill.",
            difficulty: "hard",
            icon: "💥",
            xp: 50
        },
        {
            title: "Jungle Diff",
            desc: "Gioca Jungle e fai almeno 3 gank riusciti prima del minuto 10.",
            difficulty: "medium",
            icon: "🌿",
            xp: 30
        }
    ],

    cod: [
        {
            title: "Nuke Incoming",
            desc: "Fai 20 kill di fila senza morire.",
            difficulty: "hard",
            icon: "☢️",
            xp: 50
        },
        {
            title: "Coltello Only",
            desc: "Gioca una partita usando il coltello.",
            difficulty: "hard",
            icon: "🔪",
            xp: 50
        },
        {
            title: "Quick Scope",
            desc: "Fai 10 kill con il cecchino in quick scope.",
            difficulty: "medium",
            icon: "🎯",
            xp: 30
        },
        {
            title: "Obiettivo First",
            desc: "Gioca 3 partite concentrandoti solo sull'obiettivo.",
            difficulty: "easy",
            icon: "🚩",
            xp: 10
        },
        {
            title: "No Killstreak",
            desc: "Gioca senza usare nessun killstreak.",
            difficulty: "medium",
            icon: "🚫",
            xp: 30
        },
        {
            title: "Search and Destroy",
            desc: "Vinci una partita di S&D facendo almeno 8 kill.",
            difficulty: "medium",
            icon: "💣",
            xp: 30
        }
    ],

    rocketleague: [
        {
            title: "Aerial Goal",
            desc: "Segna un gol in volo.",
            difficulty: "hard",
            icon: "🚀",
            xp: 50
        },
        {
            title: "Hat Trick",
            desc: "Segna 3 gol in una partita.",
            difficulty: "medium",
            icon: "⚽",
            xp: 30
        },
        {
            title: "Assist King",
            desc: "Fai almeno 5 assist in una partita.",
            difficulty: "medium",
            icon: "🤝",
            xp: 30
        },
        {
            title: "Zero Boost",
            desc: "Gioca un match intero senza usare il boost.",
            difficulty: "hard",
            icon: "🐌",
            xp: 50
        },
        {
            title: "Goalie",
            desc: "Gioca da portiere e fai almeno 8 salvataggi.",
            difficulty: "medium",
            icon: "🧤",
            xp: 30
        },
        {
            title: "Freestyle",
            desc: "Segna un gol facendo una rotazione in aria.",
            difficulty: "hard",
            icon: "🌀",
            xp: 50
        }
    ],

    apexlegends: [
        {
            title: "Champion!",
            desc: "Vinci una partita.",
            difficulty: "medium",
            icon: "🏆",
            xp: 30
        },
        {
            title: "Damage Dealer",
            desc: "Fai più di 2000 danni in una partita.",
            difficulty: "hard",
            icon: "💥",
            xp: 50
        },
        {
            title: "Nuovo Main",
            desc: "Gioca 5 partite con una leggenda che non usi mai.",
            difficulty: "easy",
            icon: "🆕",
            xp: 10
        },
        {
            title: "Hot Drop",
            desc: "Atterrate nella zona più calda e sopravvivi.",
            difficulty: "medium",
            icon: "🔥",
            xp: 30
        },
        {
            title: "Revive Hero",
            desc: "Rianima i tuoi compagni almeno 5 volte.",
            difficulty: "easy",
            icon: "💚",
            xp: 10
        },
        {
            title: "Solo vs Trio",
            desc: "Distruggi una squad intera da solo.",
            difficulty: "hard",
            icon: "😈",
            xp: 50
        }
    ]
};


// ================================
// VARIABILI GLOBALI
// ================================

let selectedGame = 'tutti';
let currentChallenge = null;
let isDailyChallenge = true;
let challengeCompleted = false;

let defaultPlayerData = {
    xp: 0,
    level: 1,
    totalChallenges: 0,
    hardChallenges: 0,
    streak: 0,
    bestStreak: 0,
    lastPlayedDate: null,
    completedToday: false,
    history: [],
    unlockedBadges: []
};

let playerData = JSON.parse(JSON.stringify(defaultPlayerData));


// ================================
// INIZIALIZZAZIONE
// ================================

function init() {
    try {
        loadData();
        displayDate();
        generateDailyChallenge();
        updateXPBar();
        updateStats();
        updateBadges();
        updateHistory();
        checkStreak();
        startCountdown();
        checkSkipCooldown();
        checkRandomCooldown();
    } catch (error) {
        console.error('Errore durante init:', error);
        // Se c'è un errore, resetta i dati
        localStorage.clear();
        playerData = JSON.parse(JSON.stringify(defaultPlayerData));
        displayDate();
        generateDailyChallenge();
        updateXPBar();
        updateStats();
        updateHistory();
        startCountdown();
    }

    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2000);
}


// ================================
// SALVATAGGIO / CARICAMENTO DATI
// ================================

function saveData() {
    localStorage.setItem('gamingChallengeData', JSON.stringify(playerData));
}

function loadData() {
    const saved = localStorage.getItem('gamingChallengeData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);

            // Controlla che i dati siano validi
            if (typeof parsed.totalChallenges === 'undefined') {
                // Dati vecchi/corrotti, resetta
                console.log('Dati corrotti trovati, reset...');
                localStorage.clear();
                playerData = JSON.parse(JSON.stringify(defaultPlayerData));
            } else {
                playerData = parsed;
            }
        } catch (e) {
            console.log('Errore parsing dati, reset...');
            localStorage.clear();
            playerData = JSON.parse(JSON.stringify(defaultPlayerData));
        }
    }
}


// ================================
// DATA DI OGGI
// ================================

function displayDate() {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const dateString = today.toLocaleDateString('it-IT', options);
    document.getElementById('today-date').textContent = '📅 ' + dateString;
}


// ================================
// GENERAZIONE SFIDA DEL GIORNO
// ================================

function generateDailyChallenge() {
    const gameList = challenges[selectedGame];

    const today = new Date();
    const dayNumber = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = dayNumber % gameList.length;

    currentChallenge = gameList[index];
    isDailyChallenge = true;
    challengeCompleted = false;

    displayChallenge(currentChallenge);

    if (playerData.completedToday && playerData.lastPlayedDate === getTodayString()) {
        disableCompleteButton();
        challengeCompleted = true;
    } else {
        enableCompleteButton();
    }
}


// ================================
// MOSTRA LA SFIDA
// ================================

function displayChallenge(challenge) {
    document.getElementById('challenge-icon').textContent = challenge.icon;
    document.getElementById('challenge-title').textContent = challenge.title;
    document.getElementById('challenge-desc').textContent = challenge.desc;
    document.getElementById('reward-amount').textContent = challenge.xp;

    var diffEl = document.getElementById('difficulty');

    if (challenge.difficulty === 'easy') {
        diffEl.textContent = '🟢 FACILE';
        diffEl.className = 'difficulty easy';
    } else if (challenge.difficulty === 'medium') {
        diffEl.textContent = '🟡 MEDIO';
        diffEl.className = 'difficulty medium';
    } else {
        diffEl.textContent = '🔴 DIFFICILE';
        diffEl.className = 'difficulty hard';
    }

    var card = document.getElementById('challenge-card');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'slideDown 0.5s ease';
}


// ================================
// SELEZIONA GIOCO
// ================================

function selectGame(game) {
    selectedGame = game;

    var allBtns = document.querySelectorAll('.game-btn');
    allBtns.forEach(function(btn) {
        btn.classList.remove('active');
    });

    document.getElementById('btn-' + game).classList.add('active');

    var gameNames = {
        tutti: '🎯 Gioco: Tutti',
        fortnite: '🏗️ Gioco: Fortnite',
        valorant: '🔫 Gioco: Valorant',
        minecraft: '⛏️ Gioco: Minecraft',
        lol: '🧙‍♂️ Gioco: League of Legends',
        cod: '💀 Gioco: Call of Duty',
        rocketleague: '🚗 Gioco: Rocket League',
        apexlegends: '🦅 Gioco: Apex Legends'
    };

    document.getElementById('selected-game').textContent = gameNames[game];

    generateDailyChallenge();
}


// ================================
// COMPLETA SFIDA
// ================================

function completeChallenge() {
    // Se questa sfida specifica è già stata completata, blocca
    if (challengeCompleted) {
        return;
    }

    // Se è la daily e l'hai già completata oggi, blocca
    if (isDailyChallenge && playerData.completedToday && playerData.lastPlayedDate === getTodayString()) {
        return;
    }

    // Segna questa sfida come completata
    challengeCompleted = true;

    // 1. Aggiungi XP
    playerData.xp += currentChallenge.xp;

    // 2. Incrementa sfide totali
    playerData.totalChallenges++;

    // 3. Se era difficile, incrementa il contatore
    if (currentChallenge.difficulty === 'hard') {
        playerData.hardChallenges++;
    }

    // 4. Controlla se sale di livello
    checkLevelUp();

    // 5. Se è la sfida daily, aggiorna lo streak e segna completata
    if (isDailyChallenge) {
        updateStreak();
        playerData.completedToday = true;
        playerData.lastPlayedDate = getTodayString();
    }

    // 6. Aggiungi allo storico
    addToHistory(currentChallenge);

    // 7. Controlla badge
    checkBadges();

    // 8. Aggiorna tutto il display
    updateXPBar();
    updateStats();
    updateBadges();
    updateHistory();

    // 9. Mostra messaggio di successo
    showSuccessMessage();

    // 10. Disabilita il bottone
    disableCompleteButton();

    // 11. Riproduci suono
    playSound('sound-complete');

    // 12. Salva i dati
    saveData();
}

function generateRandomChallenge() {
    var gameList = challenges[selectedGame];
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * gameList.length);
    } while (gameList[randomIndex].title === currentChallenge.title && gameList.length > 1);

    currentChallenge = gameList[randomIndex];
    isDailyChallenge = false;
    challengeCompleted = false;

    displayChallenge(currentChallenge);
    enableCompleteButton();
}

// ================================
// SFIDA CASUALE
// ================================

function randomChallenge() {
    var lastRandom = localStorage.getItem('lastRandomTime');

    if (lastRandom) {
        var timePassed = Date.now() - parseInt(lastRandom);
        var thirtyMin = 30 * 60 * 1000;

        if (timePassed <thirtyMin) {
            return;
        }
    }

    localStorage.setItem('lastRandomTime', Date.now().toString());

    var gameList = challenges[selectedGame];
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * gameList.length);
    } while (gameList[randomIndex].title === currentChallenge.title && gameList.length > 1);

    currentChallenge = gameList[randomIndex];
    isDailyChallenge = false;
    challengeCompleted = false;

    displayChallenge(currentChallenge);
    enableCompleteButton();

    startRandomCooldown();
}


// ================================
// SALTA SFIDA
// ================================

function skipChallenge() {
    var lastSkip = localStorage.getItem('lastSkipTime');

    if (lastSkip) {
        var timePassed = Date.now() - parseInt(lastSkip);
        var threeHours = 3 * 60 * 60 * 1000;

        if (timePassed < threeHours) {
            return;
        }
    }

    localStorage.setItem('lastSkipTime', Date.now().toString());

    var btn = document.getElementById('btn-skip');
    btn.classList.add('disabled');
    btn.disabled = true;
    btn.textContent = '⏭️ Salta (avvio...)';

    var gameList = challenges[selectedGame];
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * gameList.length);
    } while (gameList[randomIndex].title === currentChallenge.title && gameList.length > 1);

    currentChallenge = gameList[randomIndex];
    isDailyChallenge = false;
    challengeCompleted = false;

    displayChallenge(currentChallenge);
    enableCompleteButton();

    var card = document.getElementById('challenge-card');
    card.classList.add('shake');
    setTimeout(function() {
        card.classList.remove('shake');
    }, 500);

    setTimeout(function() {
        startSkipCooldown();
    }, 100);
}

function startRandomCooldown() {
        var btn = document.getElementById('btn-random');
        btn.classList.add('disabled');
        btn.disabled = true;

        var cooldownInterval = setInterval(function() {
            var lastRandom = localStorage.getItem('lastRandomTime');

            if (!lastRandom) {
                clearInterval(cooldownInterval);
                enableRandomButton();
                return;
            }

            var timePassed = Date.now() - parseInt(lastRandom);
            var thirtyMin = 30 * 60 * 1000;
            var timeLeft = thirtyMin - timePassed;

            if (timeLeft <= 0) {
                clearInterval(cooldownInterval);
                enableRandomButton();
            } else {
                var minutes = Math.floor(timeLeft / (1000 * 60));
                var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                var timeString =
                    String(minutes).padStart(2, '0') + ':' +
                    String(seconds).padStart(2, '0');

                btn.innerHTML = '🔁 Sfida Casuale <span class="random-timer">' + timeString + '</span>';
            }
        }, 1000);
    }

function enableRandomButton() {
        var btn = document.getElementById('btn-random');
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn.textContent = '🔁 Sfida Casuale';
        localStorage.removeItem('lastRandomTime');
    }

function checkRandomCooldown() {
        var lastRandom = localStorage.getItem('lastRandomTime');

        if (lastRandom) {
            var timePassed = Date.now() - parseInt(lastRandom);
            var thirtyMin = 30 * 60 * 1000;

            if (timePassed < thirtyMin) {
                startRandomCooldown();
            } else {
                enableRandomButton();
            }
        }
    }

function startSkipCooldown() {
    var btn = document.getElementById('btn-skip');
    btn.classList.add('disabled');
    btn.disabled = true;

    var cooldownInterval = setInterval(function() {
        var lastSkip = localStorage.getItem('lastSkipTime');

        if (!lastSkip) {
            clearInterval(cooldownInterval);
            enableSkipButton();
            return;
        }

        var timePassed = Date.now() - parseInt(lastSkip);
        var threeHours = 3 * 60 * 60 * 1000;
        var timeLeft = threeHours - timePassed;

        if (timeLeft <= 0) {
            clearInterval(cooldownInterval);
            enableSkipButton();
        } else {
            var hours = Math.floor(timeLeft / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            var timeString =
                String(hours).padStart(2, '0') + ':' +
                String(minutes).padStart(2, '0') + ':' +
                String(seconds).padStart(2, '0') + '';

            btn.innerHTML = '⏭️ Salta <span class="skip-timer">' + timeString + '</span>';
        }
    }, 1000);
}

function enableSkipButton() {
    var btn = document.getElementById('btn-skip');
    btn.classList.remove('disabled');
    btn.disabled = false;
    btn.textContent = '⏭️ Salta';
    localStorage.removeItem('lastSkipTime');
}


function checkSkipCooldown() {
    var lastSkip = localStorage.getItem('lastSkipTime');

    if (lastSkip) {
        var timePassed = Date.now() - parseInt(lastSkip);
        var threeHours = 3 * 60 * 60 * 1000;

        if (timePassed < threeHours) {
            startSkipCooldown();
        } else {
            enableSkipButton();
        }
    }
}

// ================================
// SISTEMA LIVELLI
// ================================

function checkLevelUp() {
    var xpNeeded = playerData.level * 100;

    while (playerData.xp >= xpNeeded) {
        playerData.xp -= playerData.level * 100;
        playerData.level++;
        xpNeeded = playerData.level * 100;

        playSound('sound-levelup');
    }
}

function getXPNeeded() {
    return playerData.level * 100;
}


// ================================
// AGGIORNA BARRA XP
// ================================

function updateXPBar() {
    var xpNeeded = getXPNeeded();
    var percentage = (playerData.xp / xpNeeded) * 100;

    document.getElementById('xp-bar').style.width = percentage + '%';
    document.getElementById('xp-text').textContent = 'XP: ' + playerData.xp + ' / ' + xpNeeded;
    document.getElementById('level').textContent = 'Livello: ' + playerData.level;

    updateRank();
}


// ================================
// SISTEMA RANGHI
// ================================

function updateRank() {
    var rankIcon, rankName;

    if (playerData.level >= 20) {
        rankIcon = '👑';
        rankName = 'Leggenda';
    } else if (playerData.level >= 15) {
        rankIcon = '💎';
        rankName = 'Diamante';
    } else if (playerData.level >= 10) {
        rankIcon = '🥇';
        rankName = 'Oro';
    } else if (playerData.level >= 5) {
        rankIcon = '🥈';
        rankName = 'Argento';
    } else {
        rankIcon = '🥉';
        rankName = 'Bronzo';
    }

    document.getElementById('rank-icon').textContent = rankIcon;
    document.getElementById('rank-name').textContent = rankName;
}


// ================================
// SISTEMA STREAK
// ================================

function checkStreak() {
    var today = getTodayString();
    var yesterday = getYesterdayString();

    if (playerData.lastPlayedDate === yesterday) {
        // Ha giocato ieri, lo streak continua
    } else if (playerData.lastPlayedDate !== today) {
        // Non ha giocato ieri né oggi, resetta streak
        playerData.streak = 0;
        saveData();
    }

    document.getElementById('streak-count').textContent = playerData.streak;
}

function updateStreak() {
    var today = getTodayString();
    var yesterday = getYesterdayString();

    if (playerData.lastPlayedDate === yesterday || playerData.lastPlayedDate === null) {
        playerData.streak++;
    } else if (playerData.lastPlayedDate !== today) {
        playerData.streak = 1;
    }

    if (playerData.streak > playerData.bestStreak) {
        playerData.bestStreak = playerData.streak;
    }

    document.getElementById('streak-count').textContent = playerData.streak;
}


// ================================
// STORICO SFIDE
// ================================

function addToHistory(challenge) {
    var today = new Date();
    var dateStr = today.getDate() + ' ' + today.toLocaleDateString('it-IT', { month: 'short' });

    playerData.history.unshift({
        date: dateStr,
        name: challenge.title,
        xp: challenge.xp
    });

    if (playerData.history.length > 20) {
        playerData.history.pop();
    }
}

function updateHistory() {
    var list = document.getElementById('history-list');

    if (!playerData.history || playerData.history.length === 0) {
        list.innerHTML = '<li class="history-empty">Nessuna sfida completata ancora...</li>';
        return;
    }

    var html = '';

    playerData.history.forEach(function(item) {
        html += '<li class="history-item">';
        html += '  <span class="history-date">' + item.date + '</span>';
        html += '  <span class="history-name">' + item.name + '</span>';
        html += '  <span class="history-xp">+' + item.xp + ' XP</span>';
        html += '</li>';
    });

    list.innerHTML = html;
}


// ================================
// STATISTICHE
// ================================

function updateStats() {
    document.getElementById('stat-total').textContent = playerData.totalChallenges || 0;
    document.getElementById('stat-xp').textContent = ((playerData.level - 1) * 100 + playerData.xp) || 0;
    document.getElementById('stat-best-streak').textContent = playerData.bestStreak || 0;
    document.getElementById('stat-hard').textContent = playerData.hardChallenges || 0;
}


// ================================
// BADGE / ACHIEVEMENT
// ================================

function checkBadges() {
    if (!playerData.unlockedBadges) {
        playerData.unlockedBadges = [];
    }

    var badges = [
        { id: 'badge-first', condition: playerData.totalChallenges >= 1 },
        { id: 'badge-five', condition: playerData.totalChallenges >= 5 },
        { id: 'badge-ten', condition: playerData.totalChallenges >= 10 },
        { id: 'badge-twentyfive', condition: playerData.totalChallenges >= 25 },
        { id: 'badge-fifty', condition: playerData.totalChallenges >= 50 },
        { id: 'badge-streak3', condition: playerData.streak >= 3 },
        { id: 'badge-streak7', condition: playerData.streak >= 7 },
        { id: 'badge-level5', condition: playerData.level >= 5 }
    ];

    badges.forEach(function(badge) {
        if (badge.condition && !playerData.unlockedBadges.includes(badge.id)) {
            playerData.unlockedBadges.push(badge.id);

            var el = document.getElementById(badge.id);
            if (el) {
                el.classList.remove('locked');
                el.classList.add('unlocked', 'just-unlocked');

                setTimeout(function() {
                    el.classList.remove('just-unlocked');
                }, 600);
            }

            playSound('sound-badge');
        }
    });
}

function updateBadges() {
    if (!playerData.unlockedBadges) {
        playerData.unlockedBadges = [];
        return;
    }

    playerData.unlockedBadges.forEach(function(badgeId) {
        var el = document.getElementById(badgeId);
        if (el) {
            el.classList.remove('locked');
            el.classList.add('unlocked');
        }
    });
}


// ================================
// COUNTDOWN PROSSIMA SFIDA
// ================================

function startCountdown() {
    // Aggiorna subito una volta
    updateCountdown();

    // Poi ogni secondo
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    var now = new Date();

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    var diff = tomorrow - now;

    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var timeString =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.getElementById('countdown-timer').textContent = timeString;
}


// ================================
// MESSAGGIO SUCCESSO
// ================================

function showSuccessMessage() {
    var msg = document.getElementById('success-message');
    msg.classList.add('show');

    setTimeout(function() {
        msg.classList.remove('show');
    }, 3000);
}


// ================================
// BOTTONE COMPLETATA
// ================================

function disableCompleteButton() {
    var btn = document.getElementById('btn-complete');
    btn.classList.add('disabled');
    btn.textContent = '✅ Già Completata!';
}

function enableCompleteButton() {
    var btn = document.getElementById('btn-complete');
    btn.classList.remove('disabled');
    btn.textContent = '✅ Completata!';
}


// ================================
// SUONI
// ================================

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(function() {
            // Ignora errori audio
        });
    }
}


// ================================
// RESET PROGRESSI
// ================================

function resetProgress() {
    var conferma = confirm('Sei sicuro? Perderai tutti i tuoi progressi!');

    if (conferma) {
        playerData = JSON.parse(JSON.stringify(defaultPlayerData));
        saveData();
        localStorage.removeItem('lastSkipTime');
        localStorage.removeItem('lastRandomTime');
        location.reload();
    }
}


// ================================
// FUNZIONI UTILITÀ
// ================================

function getTodayString() {
    var today = new Date();
    return today.getFullYear() + '-' +
        String(today.getMonth() + 1).padStart(2, '0') + '-' +
        String(today.getDate()).padStart(2, '0');
}

function getYesterdayString() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.getFullYear() + '-' +
        String(yesterday.getMonth() + 1).padStart(2, '0') + '-' +
        String(yesterday.getDate()).padStart(2, '0');
}


// ================================
// AVVIA TUTTO!
// ================================

window.addEventListener('DOMContentLoaded', init);
