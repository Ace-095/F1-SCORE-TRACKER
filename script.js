// API Base URL - Using HTTPS and CORS proxy if needed
const API_BASE_URL = 'https://api.jolpi.ca/ergast/f1';

// Team color mapping
const TEAM_COLORS = {
    'Ferrari': '#E8002D',
    'Red Bull': '#1E41FF',
    'Mercedes': '#00D2BE',
    'McLaren': '#FF8700',
    'Alpine': '#0090FF',
    'Aston Martin': '#00665E',
    'AlphaTauri': '#2B4562',
    'Haas': '#FFFFFF',
    'Alfa Romeo': '#900000',
    'Williams': '#005AFF'
};

// Comprehensive F1 News Pool (50+ articles - will be randomized on each load)
const F1_NEWS_POOL = [
    { id: 1, title: "Max Verstappen Clinches Third Consecutive Championship", excerpt: "Red Bull Racing's Max Verstappen secures his third Formula 1 World Championship title with dominant performances throughout the season.", category: "Championship", date: "2024-10-20", link: "#" },
    { id: 2, title: "Ferrari Announces Major Technical Partnership", excerpt: "Scuderia Ferrari reveals groundbreaking technical collaboration ahead of 2025 season, focusing on aerodynamics and power unit development.", category: "Teams", date: "2024-10-18", link: "#" },
    { id: 3, title: "Las Vegas Grand Prix Returns with Stunning Night Race", excerpt: "The iconic Las Vegas Strip Circuit prepares for another spectacular night race under the bright lights of the entertainment capital.", category: "Races", date: "2024-10-15", link: "#" },
    { id: 4, title: "McLaren's Lando Norris Sets New Lap Record", excerpt: "British driver Lando Norris achieves record-breaking lap time during qualifying, showcasing McLaren's impressive pace improvements.", category: "Drivers", date: "2024-10-12", link: "#" },
    { id: 5, title: "Formula 1 Unveils 2025 Season Calendar", excerpt: "The complete 2025 F1 calendar is revealed, featuring 24 races across five continents with new venues and classic circuits.", category: "Calendar", date: "2024-10-10", link: "#" },
    { id: 6, title: "Mercedes AMG Petronas Reveals W15 Upgrade Package", excerpt: "Mercedes introduces significant upgrades to their challenger, aiming to return to championship-winning form in the upcoming races.", category: "Technology", date: "2024-10-08", link: "#" },
    { id: 7, title: "Charles Leclerc Signs Multi-Year Extension with Ferrari", excerpt: "Monaco's Charles Leclerc commits his future to Scuderia Ferrari with a lucrative contract extension, aiming to bring championship glory back to Maranello.", category: "Drivers", date: "2024-10-05", link: "#" },
    { id: 8, title: "Lewis Hamilton Reflects on Historic Career Milestone", excerpt: "Seven-time world champion Lewis Hamilton celebrates 300+ Grand Prix starts, marking an unprecedented achievement in Formula 1 history.", category: "Championship", date: "2024-10-03", link: "#" },
    { id: 9, title: "Red Bull Racing Dominates Constructor Championship", excerpt: "Red Bull Racing secures another constructor's championship with record-breaking points margin, showcasing their technical superiority.", category: "Teams", date: "2024-09-30", link: "#" },
    { id: 10, title: "Saudi Arabia Grand Prix Introduces New Track Layout", excerpt: "Jeddah Corniche Circuit receives significant modifications ahead of the night race, promising faster lap times and more overtaking opportunities.", category: "Races", date: "2024-09-28", link: "#" },
    { id: 11, title: "Fernando Alonso Makes Surprise Return to Podium", excerpt: "Veteran driver Fernando Alonso claims an unexpected podium finish, proving age is just a number in Formula 1 racing.", category: "Drivers", date: "2024-09-25", link: "#" },
    { id: 12, title: "Aston Martin Announces New Factory Expansion", excerpt: "Aston Martin F1 team reveals plans for state-of-the-art factory expansion, investing millions in infrastructure and technology.", category: "Teams", date: "2024-09-22", link: "#" },
    { id: 13, title: "Monaco Grand Prix Celebrates 80th Anniversary", excerpt: "The legendary Monaco Grand Prix marks its 80th anniversary with special celebrations and a spectacular race weekend.", category: "Races", date: "2024-09-20", link: "#" },
    { id: 14, title: "George Russell Claims Maiden Pole Position", excerpt: "British driver George Russell secures his first-ever Formula 1 pole position in dramatic qualifying session at Silverstone.", category: "Drivers", date: "2024-09-18", link: "#" },
    { id: 15, title: "Williams Racing Unveils Revolutionary Aero Package", excerpt: "Williams F1 team introduces groundbreaking aerodynamic innovations that could reshape Formula 1 car design philosophy.", category: "Technology", date: "2024-09-15", link: "#" },
    { id: 16, title: "Singapore Grand Prix Night Race Spectacle", excerpt: "Marina Bay Circuit hosts another breathtaking night race under the Singapore skyline, featuring dramatic twists and turns.", category: "Races", date: "2024-09-12", link: "#" },
    { id: 17, title: "Oscar Piastri Wins Rookie of the Year Award", excerpt: "McLaren's Oscar Piastri receives recognition for outstanding debut season, impressing with consistent performances and podium finishes.", category: "Drivers", date: "2024-09-10", link: "#" },
    { id: 18, title: "F1 Introduces New Safety Regulations", excerpt: "Formula 1 announces enhanced safety measures and regulations for the upcoming season, prioritizing driver protection.", category: "Safety", date: "2024-09-08", link: "#" },
    { id: 19, title: "Spa-Francorchamps Circuit Renovations Complete", excerpt: "Belgian Grand Prix circuit completes major renovations, improving track safety and spectator facilities ahead of race weekend.", category: "Races", date: "2024-09-05", link: "#" },
    { id: 20, title: "Carlos Sainz Secures Podium Hat-Trick", excerpt: "Ferrari's Carlos Sainz achieves three consecutive podium finishes, demonstrating remarkable consistency and pace.", category: "Drivers", date: "2024-09-03", link: "#" },
    { id: 21, title: "Alpine F1 Team Launches New Livery Design", excerpt: "Alpine reveals stunning new car livery featuring vibrant blue and pink colors, representing their French heritage and modern identity.", category: "Teams", date: "2024-09-01", link: "#" },
    { id: 22, title: "Japanese Grand Prix Returns to Fuji Speedway", excerpt: "Formula 1 confirms return to iconic Fuji Speedway for Japanese Grand Prix, adding another classic circuit to the calendar.", category: "Races", date: "2024-08-28", link: "#" },
    { id: 23, title: "Yuki Tsunoda Signs Contract Extension", excerpt: "Japanese driver Yuki Tsunoda commits future to AlphaTauri, continuing his development in Formula 1 racing.", category: "Drivers", date: "2024-08-25", link: "#" },
    { id: 24, title: "Formula 1 Announces Carbon Neutrality Goals", excerpt: "F1 reveals ambitious environmental initiatives, aiming for complete carbon neutrality by 2030 with sustainable fuel technologies.", category: "Technology", date: "2024-08-22", link: "#" },
    { id: 25, title: "British Grand Prix Breaks Attendance Records", excerpt: "Silverstone Circuit reports record-breaking attendance figures, with over 400,000 fans attending the iconic British Grand Prix weekend.", category: "Races", date: "2024-08-20", link: "#" },
    { id: 26, title: "Esteban Ocon Achieves Career-Best Result", excerpt: "Alpine's Esteban Ocon secures his best-ever Formula 1 result, finishing in second place after a masterful drive.", category: "Drivers", date: "2024-08-18", link: "#" },
    { id: 27, title: "Haas F1 Team Partners with Major Sponsor", excerpt: "Haas Formula 1 team announces significant sponsorship deal, securing financial stability for multiple seasons ahead.", category: "Teams", date: "2024-08-15", link: "#" },
    { id: 28, title: "Hungarian Grand Prix Showcases Wet Weather Drama", excerpt: "Hungaroring circuit delivers thrilling race in wet conditions, with multiple safety car periods and strategic masterclasses.", category: "Races", date: "2024-08-12", link: "#" },
    { id: 29, title: "Pierre Gasly Joins Alpine Racing Team", excerpt: "French driver Pierre Gasly makes switch to Alpine F1 team, reuniting with compatriot Esteban Ocon for all-French lineup.", category: "Drivers", date: "2024-08-10", link: "#" },
    { id: 30, title: "F1 Sprint Race Format Gets Positive Reviews", excerpt: "Formula 1's sprint race format receives overwhelming positive feedback from teams, drivers, and fans alike.", category: "Calendar", date: "2024-08-08", link: "#" },
    { id: 31, title: "Italian Grand Prix at Monza Celebrates Tradition", excerpt: "The Temple of Speed hosts another emotional Italian Grand Prix, with Tifosi creating unforgettable atmosphere in Monza.", category: "Races", date: "2024-08-05", link: "#" },
    { id: 32, title: "Alexander Albon Extends Williams Contract", excerpt: "Thai-British driver Alex Albon commits long-term future to Williams Racing, becoming key part of team's rebuilding project.", category: "Drivers", date: "2024-08-03", link: "#" },
    { id: 33, title: "Mercedes Reveals New Wind Tunnel Facility", excerpt: "Mercedes AMG Petronas opens cutting-edge wind tunnel facility, representing massive investment in aerodynamic research.", category: "Technology", date: "2024-08-01", link: "#" },
    { id: 34, title: "Austrian Grand Prix at Red Bull Ring Thrills Fans", excerpt: "Red Bull Ring delivers action-packed race with multiple overtakes and strategic battles throughout the field.", category: "Races", date: "2024-07-28", link: "#" },
    { id: 35, title: "Logan Sargeant Makes F1 Debut", excerpt: "American driver Logan Sargeant makes his Formula 1 debut, adding to the growing American presence in the sport.", category: "Drivers", date: "2024-07-25", link: "#" },
    { id: 36, title: "Ferrari Celebrates 1000th Grand Prix Entry", excerpt: "Scuderia Ferrari marks historic milestone with 1000th Formula 1 Grand Prix entry, cementing their legendary status.", category: "Teams", date: "2024-07-22", link: "#" },
    { id: 37, title: "Canadian Grand Prix Returns to Montreal", excerpt: "Circuit Gilles Villeneuve hosts thrilling Canadian Grand Prix with unpredictable weather and dramatic racing action.", category: "Races", date: "2024-07-20", link: "#" },
    { id: 38, title: "Daniel Ricciardo Makes Comeback Performance", excerpt: "Australian driver Daniel Ricciardo delivers impressive comeback performance, reminding fans of his race-winning capabilities.", category: "Drivers", date: "2024-07-18", link: "#" },
    { id: 39, title: "Formula 1 Expands to New Markets", excerpt: "F1 announces expansion into new territories, bringing the sport to emerging markets and growing global fanbase.", category: "Calendar", date: "2024-07-15", link: "#" },
    { id: 40, title: "Spanish Grand Prix at Circuit de Barcelona", excerpt: "Barcelona hosts another strategic race with tire management and pit stop strategies playing crucial roles in the outcome.", category: "Races", date: "2024-07-12", link: "#" },
    { id: 41, title: "Miami Grand Prix Becomes Instant Classic", excerpt: "Miami International Autodrome hosts second edition of Grand Prix, with celebrities and fans creating electric atmosphere.", category: "Races", date: "2024-07-10", link: "#" },
    { id: 42, title: "Zhou Guanyu Achieves Points Finish", excerpt: "Chinese driver Zhou Guanyu scores valuable points for Alfa Romeo, continuing his development in Formula 1.", category: "Drivers", date: "2024-07-08", link: "#" },
    { id: 43, title: "AlphaTauri Introduces New Performance Package", excerpt: "AlphaTauri F1 team unveils significant upgrades aimed at moving up the constructor standings.", category: "Technology", date: "2024-07-05", link: "#" },
    { id: 44, title: "Emilia Romagna Grand Prix Showcases Passion", excerpt: "Imola circuit hosts emotional race with passionate Italian fans creating incredible atmosphere throughout the weekend.", category: "Races", date: "2024-07-03", link: "#" },
    { id: 45, title: "Valtteri Bottas Reflects on F1 Journey", excerpt: "Finnish driver Valtteri Bottas shares insights from his Formula 1 career, discussing wins, challenges, and future plans.", category: "Drivers", date: "2024-07-01", link: "#" },
    { id: 46, title: "McLaren Reveals State-of-the-Art Simulator", excerpt: "McLaren F1 team unveils new driver-in-loop simulator, enhancing driver training and car development capabilities.", category: "Technology", date: "2024-06-28", link: "#" },
    { id: 47, title: "Australian Grand Prix Returns to Albert Park", excerpt: "Melbourne's Albert Park circuit hosts thrilling season opener with massive crowds and spectacular racing action.", category: "Races", date: "2024-06-25", link: "#" },
    { id: 48, title: "Kevin Magnussen Secures Shock Pole Position", excerpt: "Haas driver Kevin Magnussen claims unexpected pole position in dramatic qualifying session, causing major upset.", category: "Drivers", date: "2024-06-22", link: "#" },
    { id: 49, title: "Formula 1 Launches Drive to Survive Season 6", excerpt: "Netflix's popular F1 docuseries returns with new season, giving fans behind-the-scenes access to teams and drivers.", category: "Media", date: "2024-06-20", link: "#" },
    { id: 50, title: "Bahrain Grand Prix Kicks Off New Season", excerpt: "Formula 1 season begins at Bahrain International Circuit with new regulations and fierce competition from the start.", category: "Races", date: "2024-06-18", link: "#" }
];

// Global variables
let availableSeasons = [];
let currentSelectedYear = {
    drivers: 'current',
    constructors: 'current',
    races: 'current'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeYearSelectors();
    loadAvailableSeasons();
    loadHomeView();
});

// Load available seasons from API
async function loadAvailableSeasons() {
    try {
        const response = await fetch(`${API_BASE_URL}/seasons.json?limit=100`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            mode: 'cors'
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.MRData && data.MRData.SeasonTable && data.MRData.SeasonTable.Seasons) {
                availableSeasons = data.MRData.SeasonTable.Seasons.map(s => s.season).reverse();
                populateYearSelectors();
            }
        }
    } catch (error) {
        console.warn('Could not load seasons list:', error);
        // Generate years manually if API fails
        const currentYear = new Date().getFullYear();
        availableSeasons = [];
        for (let year = currentYear; year >= 1950; year--) {
            availableSeasons.push(year.toString());
        }
        populateYearSelectors();
    }
}

function populateYearSelectors() {
    const selectors = ['drivers-year-select', 'constructors-year-select', 'races-year-select'];
    selectors.forEach(selectorId => {
        const select = document.getElementById(selectorId);
        if (select) {
            // Keep "Current Season" option and add years
            select.innerHTML = '<option value="current">Current Season</option>';
            availableSeasons.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                select.appendChild(option);
            });
            
            // Add event listener
            select.addEventListener('change', (e) => {
                const viewType = selectorId.replace('-year-select', '');
                currentSelectedYear[viewType] = e.target.value;
                loadViewData(viewType);
            });
        }
    });
}

function initializeYearSelectors() {
    // Will be populated after seasons are loaded
}

// Navigation handling
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-item');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });
}

function switchView(viewName) {
    // Update active nav button
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
        loadViewData(viewName);
    }
}

function loadViewData(viewName) {
    switch (viewName) {
        case 'home':
            loadHomeView();
            break;
        case 'drivers':
            loadDrivers();
            break;
        case 'constructors':
            loadConstructors();
            break;
        case 'races':
            loadRaces();
            break;
    }
}

// Load Home View with Randomized News
function loadHomeView() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    newsContainer.innerHTML = '';

    // Shuffle and select 6 random news items
    const shuffled = [...F1_NEWS_POOL].sort(() => Math.random() - 0.5);
    const selectedNews = shuffled.slice(0, 6);

    selectedNews.forEach(news => {
        const newsCard = createNewsCard(news);
        newsContainer.appendChild(newsCard);
    });
}

function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';

    const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    card.innerHTML = `
        <div class="news-card-header">
            <span class="news-card-date">${formattedDate}</span>
            <span class="news-card-category">${news.category}</span>
        </div>
        <h3 class="news-card-title">${news.title}</h3>
        <p class="news-card-excerpt">${news.excerpt}</p>
        <a href="${news.link}" class="news-card-link" target="_blank" rel="noopener">
            Read More
            <span>→</span>
        </a>
    `;

    return card;
}

// Fetch Drivers Championship (with year support)
async function loadDrivers() {
    const loadingEl = document.getElementById('drivers-loading');
    const contentEl = document.getElementById('drivers-content');
    
    if (!loadingEl || !contentEl) return;

    try {
        loadingEl.classList.remove('hidden');
        contentEl.innerHTML = '';

        const year = currentSelectedYear.drivers;
        const endpoint = year === 'current' 
            ? `${API_BASE_URL}/current/driverStandings.json`
            : `${API_BASE_URL}/${year}/driverStandings.json`;

        const response = await fetch(endpoint, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            mode: 'cors'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.MRData && data.MRData.StandingsTable && data.MRData.StandingsTable.StandingsLists) {
            const standings = data.MRData.StandingsTable.StandingsLists[0];
            const drivers = standings.DriverStandings || [];

            if (drivers.length === 0) {
                contentEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem; font-size: 1.2rem;">No driver standings available for this season.</p>';
                return;
            }

            drivers.forEach((driverStanding) => {
                const driver = driverStanding.Driver;
                const constructor = driverStanding.Constructors[0];
                
                const driverCard = createDriverCard(
                    driverStanding.position,
                    driver.givenName,
                    driver.familyName,
                    constructor.name,
                    driverStanding.points,
                    driverStanding.wins || 0,
                    constructor.name
                );
                
                contentEl.appendChild(driverCard);
            });
        } else {
            throw new Error('Invalid data structure');
        }
    } catch (error) {
        console.error('Error loading drivers:', error);
        contentEl.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--f1-red);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">⚠️ Error loading drivers data</p>
                <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem;">${error.message}</p>
                <button onclick="loadDrivers()" style="margin-top: 1rem; padding: 1rem 2rem; background: var(--f1-red); border: none; border-radius: 8px; color: white; font-family: 'Titillium Web', sans-serif; font-weight: 700; font-size: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 20px rgba(255, 24, 1, 0.5);">Retry</button>
            </div>
        `;
    } finally {
        loadingEl.classList.add('hidden');
    }
}

function createDriverCard(position, firstName, lastName, constructor, points, wins, constructorName) {
    const card = document.createElement('div');
    card.className = 'driver-card';
    card.setAttribute('data-constructor', constructorName);
    
    // Apply team color if available
    if (TEAM_COLORS[constructorName]) {
        card.style.borderLeftColor = TEAM_COLORS[constructorName];
    }

    card.innerHTML = `
        <div class="driver-rank">${position}</div>
        <div class="driver-info">
            <div class="driver-name">
                <span class="driver-first-name">${firstName}</span>
                <span class="driver-last-name">${lastName}</span>
            </div>
            <div class="driver-constructor">${constructor}</div>
            ${wins > 0 ? `<div class="driver-wins">🏆 ${wins} Win${wins > 1 ? 's' : ''}</div>` : ''}
        </div>
        <div class="driver-points">${points}</div>
    `;

    return card;
}

// Fetch Constructors Championship (with year support)
async function loadConstructors() {
    const loadingEl = document.getElementById('constructors-loading');
    const contentEl = document.getElementById('constructors-content');
    
    if (!loadingEl || !contentEl) return;

    try {
        loadingEl.classList.remove('hidden');
        contentEl.innerHTML = '';

        const year = currentSelectedYear.constructors;
        const endpoint = year === 'current' 
            ? `${API_BASE_URL}/current/constructorStandings.json`
            : `${API_BASE_URL}/${year}/constructorStandings.json`;

        const response = await fetch(endpoint, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            mode: 'cors'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.MRData && data.MRData.StandingsTable && data.MRData.StandingsTable.StandingsLists) {
            const standings = data.MRData.StandingsTable.StandingsLists[0];
            const constructors = standings.ConstructorStandings || [];

            if (constructors.length === 0) {
                contentEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem; font-size: 1.2rem;">No constructor standings available for this season.</p>';
                return;
            }

            constructors.forEach(constructorStanding => {
                const constructor = constructorStanding.Constructor;
                
                const constructorCard = createConstructorCard(
                    constructor.name,
                    constructorStanding.points,
                    constructorStanding.wins,
                    constructor.name
                );
                
                contentEl.appendChild(constructorCard);
            });
        } else {
            throw new Error('Invalid data structure');
        }
    } catch (error) {
        console.error('Error loading constructors:', error);
        contentEl.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--f1-red);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">⚠️ Error loading constructors data</p>
                <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem;">${error.message}</p>
                <button onclick="loadConstructors()" style="margin-top: 1rem; padding: 1rem 2rem; background: var(--f1-red); border: none; border-radius: 8px; color: white; font-family: 'Titillium Web', sans-serif; font-weight: 700; font-size: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 20px rgba(255, 24, 1, 0.5);">Retry</button>
            </div>
        `;
    } finally {
        loadingEl.classList.add('hidden');
    }
}

function createConstructorCard(name, points, wins, constructorName) {
    const card = document.createElement('div');
    card.className = 'constructor-card';
    card.setAttribute('data-constructor', constructorName);
    
    // Apply team color via CSS custom property for hover glow effect
    if (TEAM_COLORS[constructorName]) {
        const teamColor = TEAM_COLORS[constructorName];
        card.style.setProperty('--team-color', teamColor);
        const r = parseInt(teamColor.slice(1, 3), 16);
        const g = parseInt(teamColor.slice(3, 5), 16);
        const b = parseInt(teamColor.slice(5, 7), 16);
        card.style.setProperty('--team-color-glow', `rgba(${r}, ${g}, ${b}, 0.3)`);
    }

    card.innerHTML = `
        <div class="constructor-name">${name}</div>
        <div class="constructor-details">
            <div class="constructor-stat">
                <span class="constructor-stat-label">Wins</span>
                <span class="constructor-stat-value">${wins}</span>
            </div>
        </div>
        <div class="constructor-points">
            <span class="constructor-stat-label">Total Points</span>
            <span class="constructor-total-points">${points}</span>
        </div>
    `;

    return card;
}

// Fetch Race Results (with year support)
async function loadRaces() {
    const loadingEl = document.getElementById('races-loading');
    const contentEl = document.getElementById('races-content');
    
    if (!loadingEl || !contentEl) return;

    try {
        loadingEl.classList.remove('hidden');
        contentEl.innerHTML = '';

        const year = currentSelectedYear.races;
        let racesMap = new Map();

        // Fetch race schedule for the selected year
        try {
            const scheduleEndpoint = year === 'current' 
                ? `${API_BASE_URL}/current.json`
                : `${API_BASE_URL}/${year}.json`;
                
            const scheduleResponse = await fetch(scheduleEndpoint, {
                method: 'GET',
                headers: { 'Accept': 'application/json' },
                mode: 'cors'
            });
            
            if (scheduleResponse.ok) {
                const scheduleData = await scheduleResponse.json();
                if (scheduleData.MRData && scheduleData.MRData.RaceTable && scheduleData.MRData.RaceTable.Races) {
                    scheduleData.MRData.RaceTable.Races.forEach(race => {
                        racesMap.set(parseInt(race.round), {
                            round: race.round,
                            raceName: race.raceName,
                            circuitName: race.Circuit.circuitName,
                            date: race.date,
                            hasResult: false
                        });
                    });
                }
            }
        } catch (scheduleError) {
            console.warn('Could not fetch race schedule:', scheduleError);
        }

        // Fetch race results for completed races
        // Fetch results for each race individually to get all races
        const raceRounds = Array.from(racesMap.keys()).sort((a, b) => a - b);
        
        // Fetch results for each race round
        const raceResultsPromises = raceRounds.map(async (round) => {
            try {
                const resultsEndpoint = year === 'current' 
                    ? `${API_BASE_URL}/current/${round}/results.json`
                    : `${API_BASE_URL}/${year}/${round}/results.json`;
                
                const response = await fetch(resultsEndpoint, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' },
                    mode: 'cors'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    
                    if (data.MRData && data.MRData.RaceTable && data.MRData.RaceTable.Races && data.MRData.RaceTable.Races.length > 0) {
                        const race = data.MRData.RaceTable.Races[0];
                        
                        if (race.Results && race.Results.length > 0) {
                            // Find the winner (position 1)
                            const winner = race.Results.find(r => r.position === '1') || race.Results[0];
                            
                            if (racesMap.has(round)) {
                                const raceData = racesMap.get(round);
                                raceData.winner = winner.Driver;
                                raceData.constructor = winner.Constructor.name;
                                raceData.hasResult = true;
                            }
                        }
                    }
                }
            } catch (error) {
                // Silently fail for individual race - race might not have results yet
                console.debug(`No results for race round ${round}`);
            }
        });
        
        // Wait for all race results to be fetched
        await Promise.all(raceResultsPromises);

        // Convert map to array and sort by round
        const races = Array.from(racesMap.values()).sort((a, b) => parseInt(a.round) - parseInt(b.round));

        if (races.length === 0) {
            contentEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem; font-size: 1.2rem;">No race data available for this season.</p>';
            return;
        }

        races.forEach(race => {
            const raceCard = createRaceCard(
                race.round,
                race.raceName,
                race.circuitName,
                race.hasResult ? race.winner : null,
                race.hasResult ? race.constructor : null,
                race.date,
                race.hasResult
            );
            
            contentEl.appendChild(raceCard);
        });
    } catch (error) {
        console.error('Error loading races:', error);
        contentEl.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--f1-red);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">⚠️ Error loading race data</p>
                <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem;">${error.message}</p>
                <button onclick="loadRaces()" style="margin-top: 1rem; padding: 1rem 2rem; background: var(--f1-red); border: none; border-radius: 8px; color: white; font-family: 'Titillium Web', sans-serif; font-weight: 700; font-size: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 20px rgba(255, 24, 1, 0.5);">Retry</button>
            </div>
        `;
    } finally {
        loadingEl.classList.add('hidden');
    }
}

function createRaceCard(round, raceName, circuitName, winner, constructor, date, hasResult) {
    const card = document.createElement('div');
    card.className = 'race-card';

    let resultHTML = '';
    if (hasResult && winner) {
        resultHTML = `
            <div class="race-winner">${winner.givenName} ${winner.familyName}</div>
            <div class="race-winner-constructor">${constructor}</div>
        `;
    } else {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        resultHTML = `<div class="race-date">${formattedDate}</div>`;
    }

    card.innerHTML = `
        <div class="race-round">${round}</div>
        <div>
            <div class="race-name">${raceName}</div>
        </div>
        <div>
            <div class="race-circuit">${circuitName}</div>
        </div>
        <div class="race-result">
            ${resultHTML}
        </div>
    `;

    return card;
}
