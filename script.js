function toggleMenu() {
  var x = document.querySelector("nav ul");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    } 
  });
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => {observer.observe(el)})

const correctAnswers = ["b", "b", "c", "d", "d", "b", "a", "a", "c", "a"];

const form = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value
  ];
  let score = 0;
  let resultHTML = "<h2>Ergebnis</h2>";
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
      resultHTML += "<p>Frage " + (i + 1) + ": <strong>Richtig</strong></p>";
    } else {
      resultHTML += "<p>Frage " + (i + 1) + ": <strong>Falsch</strong> (richtige Antwort: " + correctAnswers[i] + ")</p>";
    }
  }
  resultHTML += "<p>Du hast " + score + " von 10 Fragen richtig beantwortet.</p>";
  if (score === 10) {
    resultHTML += "<p>Sehr gut! Note 1.</p>";
  } else if (score >= 8) {
    resultHTML += "<p>Gut! Note 2.</p>";
  } else if (score >= 6) {
    resultHTML += "<p>Befriedigend. Note 3.</p>";
  } else if (score >= 4) {
    resultHTML += "<p>Ausreichend. Note 4.</p>";
  } else {
    resultHTML += "<p>Durchgefallen.</p>";
  }
  resultDiv.innerHTML = resultHTML;
  submitButton.disabled = true;
});



// Höhe des Viewports berechnen
const viewportHeight = window.innerHeight;

// Funktion zum Überprüfen der Scroll-Position
function checkScrollPosition() {
  // Höhe des gescrollten Bereichs berechnen
  const scrolledHeight = window.pageYOffset;


  // Wenn der Benutzer an der Spitze der Seite ist, Border Radius auf 0 setzen
  if (scrolledHeight === 0) {
    document.documentElement.style.setProperty('--scrollbar-radius', '0');
  } else {
    // Andernfalls Border Radius auf 10 setzen
    document.documentElement.style.setProperty('--scrollbar-radius', '15px');
  }
  if (scrolledHeight === document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    document.documentElement.style.setProperty('--scrollbar-radius-down', '0px');
  } else {
    document.documentElement.style.setProperty('--scrollbar-radius-down', '15px');
  }
}

// Event-Listener hinzufügen, um Änderungen der Scroll-Position zu erkennen
window.addEventListener('scroll', () => {
  // Verzögerung hinzufügen, um die Leistung zu verbessern
  setTimeout(checkScrollPosition, 100);
});

// CSS-Variable initialisieren
document.documentElement.style.setProperty('--scrollbar-radius', '0');

// CSS-Regel hinzufügen, um den Übergang zu animieren
const style = document.createElement('style');
style.innerHTML = `
::-webkit-scrollbar-thumb {
  transition: border-radius 0.2s ease-in-out;
}
`;
document.head.appendChild(style);


// Speichert die aktuellen Themes
var themes = ["dark", "light", "blue", "high-contrast", "pink", "red", "sky"];
var currentTheme = 0;
const themeButton = document.getElementById("themeButton");

// Ändert das aktuelle Theme
function toggleTheme() {
  // Wechselt zum nächsten Theme
  currentTheme = (currentTheme + 1) % themes.length;

  // Ändert das HTML-Element "root", um das Theme anzuwenden
  document.documentElement.className = themes[currentTheme];
  switch (currentTheme) {
    case 0:
      themeButton.innerHTML = '🌙'
      break;
    case 1:
      themeButton.innerHTML = '🌞'
      break;
    case 2:
      themeButton.innerHTML = '🌊'
      break;
    case 3:
      themeButton.innerHTML = '🌕'
      break;
    case 4:
      themeButton.innerHTML = '🐷'
      break;
    case 5:
      themeButton.innerHTML = '🌋'
      break;
    case 6:
      themeButton.innerHTML = '🥶'
      break;

  }
}


videos = [
  ["Tabellen erstellen", "Erklärvideo1_alternative.mp4", "Um Daten in eine Datenbank einzutragen, müssen sie ganz einfach oben Links auf Ansicht und in die in die Entwurfsansicht wechseln. Hier können sie in der Spalte Feldname unter ID in die einzelnen Zellen klicken und sie Beschriften. In Unserem Beispiel erstellen wir eine neue Spalte mit einer Liste aus Namen. Dazu wählen wir den Feldatentyp „Kurzer Text“. Um nun unter der neu erstellten Spalte schreiben zu können gehen wir zurück in die Datenblatt Ansicht und können nun  in der Spalte Namen unsere Daten eingeben . Das Feld ID wird automatisch ein Wert zugewiesen"],
  ["Primärschlüssel", "Erklärvideo2.mp4", "Ein Primärschlüssel ist ein essenzieller Bestandteil von Datenbanken. Ein Primärschlüssel muss immer einzigartig sein. Dies ist durch den Autowert einfach möglich. Immer wenn sie in Access eine neue Tabelle erstellen, wird automatisch das Feld ID mit dem Felddatentyp Autowert generiert. Wie zum Beispiel das jeder Kunde eine Einzigartige kundenID bekommt."],
  ["Felddatentypen", "Erklärvideo3.mp4", "In Access gibt es insgesamt 14 Verschiedene Felddatentypen. Die Wichtigsten sind der Kurze bzw. Lange Text, die Zahl, das Datum/Uhrzeit und der Autowert. Der Kurzen und Lange Text speichern. Die Namen der Datentypen sind ziemlich selbsterklärend. Der Kurze und Lange Text speichert Text, die Zahl speichert Zahlen, Datum/Uhrzeit speichert ein Datum und eine Uhrzeit. Der Autowert zählt automatisch von 1 an nach oben. Dies ist für den Primärschlüssel wichtig."],
  ["Abfragen", "Erklärvideo6.mp4", "Wir als Unternehmen wollen eine Abfrage erstellen, wo wir Alle Kunden aus München auflisten. Diese abfrage wird erstellt in dem wir auf „Erstellen-Abfrageentwurf klicken. danach gehen wir auf die rechte Seite und wählen die Tabelle Kunden. In diesem Fenster wählen wir jetzt unser Kriterium und die Sachen, die wir aufgelistet haben wollen, also Name und Nachname. Damit wir nun alle Kunden in München finden fügen wir in der Spalte Ort das Kriterium München hinzu. Nun gehen wir oben links auf ausführen und wie sie sehen, sehen sie nun eine Liste von Kunden aus München"],
  ["Formulare", "Erklärvideo4.mp4", "Jemand aus unserem Unternehmen hat geheiratet und einen anderen Nachnamen.Um das zu ändern wollen wir auch für die Zukunft Formulare erstellen. Um ein  Formular zu erstellen Klicken wir auf erstellen und auf Formularassistent. Dort wählen wir dann die Sachen aus die wir ändern wollen. Damit wir das Formular auch in Zukunft benutzen können wählen wir hier Name Nachname Anschrift Ort und Postleitzahl aus. Danach nehmen wir das Layout einspaltig. Und gehen dann auf Fertigstellen. Nun suchen wir unten die Person die Geheiratet hat und in unserem Fall ist das der Tim und ändern nun hier in der Zeile Nachname ihren Nachnamen ein. Und wenn wir nun in die Tabelle Personal gehen sehen wir das der Nachname von Tim geändert wurde "],
  ["Berichte", "Erklärvideo5.mp4", "Folgt(?)"],
]
let currentVideo = 0
let currentTime = 0
let isPaused = false
let isDragging = false;


const title = document.getElementById("titlename");
const video = document.getElementById("video");
const pause = document.getElementById("play-pause");
const volumeBtn = document.getElementById("volume");
const volumeBar = document.getElementById("volumeBar");
const volumeChanger = document.getElementById("VolumeChanger");
const progress = document.getElementById("progressbar");
const transcript = document.getElementById("transcript");

video.volume = 1;

volumeBar.style.display = "none"
volumeBtn.style.width = "5%";


function loadVideo() {
  console.log(videos[currentVideo])
  video.setAttribute("src", videos[currentVideo][1]);
  video.currentTime = 0;
  pause.innerHTML = '<i class="fa-solid fa-play"></i>'
  title.innerHTML = videos[currentVideo][0]
  transcript.innerHTML = videos[currentVideo][2];
}

function togglePause() {
  console.log(video.paused);
  if (!video.paused) {
    pause.innerHTML = '<i class="fa-solid fa-play"></i>'
    video.pause();
  } else {
    pause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    video.play();
  }
}

function nextVideo() {
  currentVideo++;
  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }
  loadVideo();
}

function previousVideo() {
  currentVideo--;
  if (currentVideo <= -1) {
    currentVideo = videos.length - 1;
  }
  loadVideo();
}

volumeChanger.addEventListener("mouseenter", () => {
  volumeBar.style.display = "flex";
  volumeBtn.style.width = "5%";
});

volumeChanger.addEventListener("mouseleave", () => {
  volumeBar.style.display = "none"
  volumeBtn.style.width = "5%";
});

// Add keyboard control
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    event.preventDefault();
    const increment = event.code === "ArrowUp" ? 0.1 : -0.1;
    const newVolume = Math.min(Math.max(video.volume + increment, 0), 1);
    video.volume = newVolume;
    volumeBar.volume = video.volume * 100
  }
});

// Add fullscreen button functionality
const fullscreenBtn = document.getElementById("fullscreen");
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

volumeBar.addEventListener("input", () => {
  console.log(volumeBar.value)
  video.volume = volumeBar.value / 100;
  if (volumeBar.value >= 75) {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else if (volumeBar.value >= 25) {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
  } else if (volumeBar.value != 0) {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }

});

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const percentage = (currentTime / duration) * 100;
  progress.value = percentage;
  if(!video.duration){
    progress.value = 0
  }
});

progress.addEventListener("input", () => {
  const percentage = progress.value;
  const duration = video.duration;
  const currentTime = (percentage / 100) * duration;
  video.currentTime = currentTime;
});

loadVideo()


const taskholder = document.getElementById("taskholder")
const TaskTitle = document.getElementById("TaskTitle")
const TaskImage = document.getElementById("TaskImage")
const TaskText = document.getElementById("TaskText")
const TaskControllBar = document.getElementById("TaskControllBar")
const nextTask = document.getElementById("NextTask")
const TaskBefore = document.getElementById("TaskBefore")
const Lösung = document.getElementById("Lösung")

let currentTaskID = 0

const tasks = [
  ["Abfragen", "nix", 'Herr Schmidt möchte gerne erfahren, welche Kunden ein Zahlungsniveau von "Unzureichend" haben. Erstellen sie für Herr Schmidt eine Abfrage, durch welche der Vorname, Nachname, die Email und die Telefonnummer aller Kunden, welche ein Zahlungsniveau von "Unzureichend" haben, angezeigt werden.', "Schauen Sie sich unsere Erklärvideos an. Alle nötigen Informationen finden sie dort.", "Lösung1.png"],
  ["Abfragen2", "nix", 'Frau Johanna Böhme hat gekündigt. Erstellen Sie eine Abfrage, um ihre Daten aus der Datenbank zu löschen.', "Um Daten aus einer Tabelle durch eine Abfrage zu löschen, wählen sie in den menü Abfrageentwurf Löschen."],
  ["Abfragen3", "nix", 'Leo Austermühle (Kunde) ist in die Königsstraße 35 gezogen. Erstellen Sie eine Abfrage, um seine Daten zu berichtigen.', "Um Daten aus einer Tabelle durch eine Abfrage zu ändern, wählen sie in den menü Abfrageentwurf Aktualisieren."],
  ["Abfragen4", "nix", "Für das nächste Meeting möchte Herr Schmidt gerne die Durchschnittlichen Verkaufskosten aller Produkte und die Durchschnittlichen Herstellungskosten aller Produkte erfahren. Erstellen Sie eine Abfrage, durch welche er diese Informationen erfährt.", "Klicken sie in dem Menü Abfrageentwurf auf Summen, um Funktionen wie den Mittelwert zu nutzen."],
  ["Abfragen5", "nix", "Herr Schmidt möchte gerne wissen, ob er mit Allen Produkten profit macht. Erstellen Sie eine Abfrage, in welcher alle Produkte, welche keinen Profit abwerfen, angezeigt werden.", "Sie können in dem Kriterium auch Mathematische Operationen durchführen. z.B. '[Artikel].[LVP] > 100' zeigt an, wo der LVP Größer als 100 ist."],
  ["Formulare1", "nix", "Herr Schmidt möchte die Daten seines Personals gerne einfacher bearbeiten können. Erstellen sie ein Bericht, das es ermöglicht, die Daten des Personals zu bearbeiten.", "Verwenden sie den Formularassistenten, um ein Formular zu erstellen."],
  ["Formulare2", "nix", "Herr Schmidt hätte gerne eine einfachere Möglichkeit, den Rabatt und das Skonto für die einzelnen Produkte anzupassen. Erstellen sie ein Formular mit welchem sie den Rabatt und das Skonto für die Produkte anpassen können.", "Verwenden sie den Formularassistenten, um ein Formular zu erstellen."],
  ["Berichte1", "nix", "Erstellen sie einen Bericht, in welchen der Vorname, Nachname und das Zahlungsniveau der Kunden angezeigt wird.", "Verwenden sie den Berichtassistenten, um ein Bericht zu erstellen."],
  ["Berichte2", "nix", "Die Buchhaltung wünscht sich eine Einfache möglichkeit, die IBan und Bic der einzelnen Mitarbeiter einzusehen.", "Verwenden sie den Berichtassistenten, um ein Bericht zu erstellen."]
]

function NextTask(){
  currentTaskID++;
  if(currentTaskID >= tasks.length){
    currentTaskID = 0
  }
  refreshTasks()
}

function BeforeTask(){
  currentTaskID--;
  if(currentTaskID < 0){
    currentTaskID = tasks.length - 1
  }
  refreshTasks()
}

function LösungAnzeigen(){
  TaskImage.setAttribute("src", tasks[currentTaskID][4])
}

function tipp(){
  alert(tasks[currentTaskID][3])
}

function refreshTasks(){
  TaskTitle.innerHTML = tasks[currentTaskID][0]
  if(tasks[currentTaskID][1] != "nix"){
    TaskImage.setAttribute("src", tasks[currentTaskID][1])
  }else{
    TaskImage.setAttribute("src", "")
  }
  TaskText.innerHTML = tasks[currentTaskID][2]
}
refreshTasks()