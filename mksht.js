function makeSheet(){
  document.getElementById("textArea").innerHTML = "";
  var problems = parseInt(document.getElementById('numProblems').value);
  for(var i = 0; i < problems; i++){
    var question = questions[Math.floor(Math.random()*questions.length)];
    var nums = question.generateNums();
    var answer = question.ans(nums);
    var text = question.text;
    var wordTypes = question.wordTypes;
    for(var j = 0; j < nums.length; j++){
      text = text.replace(new RegExp("NUM"+String(j),'g'),String(nums[j]));
    }
    for(var j = 0; j < question.wordTypes.length; j++){
      text = text.replace(new RegExp("WRD"+String(j),'g'),randomWord(wordTypes[j]));
    }
    document.getElementById("textArea").innerHTML += String(i+1)+ ". "+text+" <b>"+String(question.ans(nums))+"</b><br />";
  }
}
