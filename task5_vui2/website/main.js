window.addEventListener('load', function () {
  init();
});

function init() {
  const artyom = new Artyom();
  const commands = [
    {
      indexes: [
        'Wie lautet mein heutiger Stundenplan',
        'Was steht heute an'
      ],
      action: function () {
        const answer = 'Heute, Donnerstag, finden folgende Veranstaltungen statt: Streaminganwendungen von 9:45 bis 13:30 Uhr';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
    {
      indexes: [
        'Welcher Professor'
      ],
      action: function () {
        const answer = 'Streaminganwendungen findet bei Professor Hottong statt';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
    {
      indexes: [
        'Habe ich neue Mails'
      ],
      action: function () {
        const answer = 'Eine ungelesene Mail von Professor Rausch: Wichtige Information zur Aufgabe 5. Soll ich diese Vorlesen';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
    {
      indexes: [
        'Nein wann hat die Mensa heute geöffnet'
      ],
      action: function () {
        const answer = 'Von 11:30 bis 13:30 Uhr';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
    {
    indexes: [
      'Warte kurz'
    ],
    action: function () {
      const answer = 'Ich habe dich nicht verstanden.';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
    {
      indexes: [
        'Was gibt es zu essen'
      ],
      action: function () {
        const answer = 'In der Mensa gibt es heute Maultaschen oder vegetarische Semmelknödel.';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
    {
    indexes: [
      'Sonst gibt es nichts mehr'
    ],
    action: function () {
      const answer = 'Kein Problem. Schöner Tag heute';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
];
    document.querySelector('.startButton').addEventListener('click', () => {
  document
    .querySelector('.startScreen')
    .classList.remove('active', 'animate__animated', 'animate__fadeIn');
  document
    .querySelector('.conversation')
    .classList.add('active', 'animate__animated', 'animate__fadeIn');
  artyom.addCommands(commands);
  function startContinuousArtyom() {
    artyom.fatality();
    setTimeout(function () {
      artyom
        .initialize({
          lang: 'de-DE',
          continuous: true,
          listen: true,
          interimResults: true,
          debug: true,
        })
        .then(function () {
          console.log('Ready!');
        });
    }, 250);
  }
  startContinuousArtyom();
  const answer =
    'Hey Josh. Wie kann ich dir helfen?';
  artyom.say(answer);
  createNewMessageBox(answer, 'userOutput');
  artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
    if (isFinal) {
      createNewMessageBox(recognized, 'userInput');
    } else {
      console.log(recognized);
    }
  });
});

document.querySelector('.endButton').addEventListener('click', () => {
  document
    .querySelector('.startScreen')
    .classList.add('active', 'animate__animated', 'animate__fadeIn');
  document
    .querySelector('.conversation')
    .classList.remove('active', 'animate__animated', 'animate__fadeIn');
  artyom.say('Bis bald Josh');
  artyom.dontObey();
  document.querySelector('.conversation__messages').innerHTML = '';
  console.log('Closed!');
});
}

function createNewMessageBox(text, typeOfInput) {
const creatElem = document.createElement('section');
const addText = document.createTextNode(text);
const addClass = creatElem.classList.add(
  typeOfInput,
  'animate__animated',
  'animate__fadeIn'
);
creatElem.append(addText);
document.querySelector('.conversation__messages').appendChild(creatElem);
document.querySelector('.conversation__messages').lastElementChild.scrollIntoView();
}
