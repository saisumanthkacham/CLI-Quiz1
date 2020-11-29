const rls = require('readline-sync');

name = rls.question("what is your name? ");
console.log("\n Hello " + name + "," + " welcome to the quiz");
console.log("--------------------------------------");

var score = 0;
function quest(question, ans) {
  userans = rls.question(question);
  if (ans === userans) {
    score += 1;
    console.log("You are correct");
  }
  else {

    console.log("You are Wrong");
  }
  console.log(" score is " + score);
  console.log("--------------------------------------");
}


questi = [{
  q: "what is my name? ",
  a: "sumanth"
}, {
  q: "where do I live? ",
  a: "banswada"
}];

for (i = 0; i < questi.length; i++) {
  qn = questi[i];
  quest(qn.q, qn.a);
}
if (score >= 1) {
 
  console.log("YAYYYY!! Your total score is " + score);
}
else {
  console.log("your total score is " + score);
  console.log("OOPS!! Better luck next time :)");
}