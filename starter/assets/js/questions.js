//array of objects, each object is a question
var quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],

    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],

    correctAnswer: "<script>",
  },
  // {
  // question:
  //     "What is the correct JavaScript syntax to change the content of the HTML element below?",
  //     choices: [
  //         "#demo.innerHTML = 'Hello World!';",
  //         "document.getElementByName("p").innerHTML = 'Hello World!';",
  //         "document.getElement("p").innerHTML = 'Hello World!'",
  //         "document.getElementById("demo").innerHTML = "Hello World!";",
  //     ],
  //     correctAnswer: "document.getElementById("demo").innerHTML = "Hello World!";",
  // },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "Both the <head> section and the <body> section are correct",
      "The <head> section",
      "The <body> section;",
      "The <footer> section",
    ],
    correctAnswer: "Both the <head> section and the <body> section are correct",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    correctAnswer: "<script src='xxx.js'>",
  },
];
// Export the quizData so that it can be imported in the main JavaScript file
window.quizData = quizData;
