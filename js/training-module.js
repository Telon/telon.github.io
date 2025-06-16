// js/training-module.js

// Träningsplaner
const trainingPlans = {
    monday: `
> Måndag – Bröst & Triceps
- Pushups 4x12
- Hantelpress 3x10
- Triceps dips 3x12
- Liggande flyes 3x10
`,
    tuesday: `
> Tisdag – Löpning
- 5 km lugn jogg
- Dynamisk rörlighet efteråt
`,
    wednesday: `
> Onsdag – Rygg & Biceps
- Hantelrodd 4x10
- Pull-ups / Negativa 3x max
- Bicep curls 3x12
`,
    thursday: `
> Torsdag – Vila / Stretch
- Foam rolling
- Rörlighet med pinne
`,
    friday: `
> Fredag – Ben & Mage
- Goblet squats 4x12
- Utfall 3x10/sida
- Toe taps 3x20
`,
    saturday: `
> Lördag – Intervaller
- 10x200m (90% fart)
- Nedvarvning 1 km + stretch
`,
    sunday: `
> Söndag – Axlar & Core
- Axelpress 3x10
- Sidolyft 3x12
- Planka 3x1 min
`
};

// Funktion för att ladda träningsdagen
window.loadTrainingDay = function(day) {
    const terminal = document.getElementById('trainingTerminal');
    const status = document.getElementById('trainingStatus');
    terminal.innerHTML = ''; // Rensa befintligt innehåll
    const trainingText = trainingPlans[day] || '[ERROR] Ingen data för dagen.';

    const lines = trainingText.trim().split('\n');

    // Lägg till dagens titel
    if (lines.length > 0) {
        const dayTitleSpan = document.createElement('span');
        dayTitleSpan.className = 'training-day-title';
        dayTitleSpan.textContent = lines[0];
        terminal.appendChild(dayTitleSpan);
    }

    // Loopa igenom resten av raderna (övningarna och andra rader)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('-')) {
            // Detta är en övningsrad
            const exerciseText = line.substring(1).trim();
            const exerciseSpan = document.createElement('span');
            exerciseSpan.className = 'exercise-item';
            exerciseSpan.textContent = `> ${exerciseText}`; // Visa med '>' som i menyn
            
            // Just nu gör klicket bara en konsollogg.
            exerciseSpan.onclick = () => { 
                console.log(`Klickade på: ${exerciseText}`);
            };
            
            exerciseSpan.style.cursor = 'pointer'; // Behåll pekaren för klickbarhet
            exerciseSpan.style.opacity = '1'; // Full opacitet
            
            terminal.appendChild(exerciseSpan);

        } else if (line !== '') { // Hantera andra textrader som inte är tomma
            const regularTextSpan = document.createElement('span');
            regularTextSpan.style.display = 'block';
            regularTextSpan.style.marginBottom = '5px';
            regularTextSpan.textContent = line;
            terminal.appendChild(regularTextSpan);
        }
    }

    terminal.scrollTop = terminal.scrollHeight;
    status.textContent = `[OK] Loaded ${day}.plan`;
};