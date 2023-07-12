var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hola Mundo')
  .pauseFor(300)
  .deleteChars(5)
  .typeString('<strong>Technolochicas</strong> ')
  .typeString('<strong><span style="color: red;">Saludos cordiales</span> </strong>')
  .pauseFor(1000)
  .start();