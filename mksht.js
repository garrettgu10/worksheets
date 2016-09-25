function in_array(array, id) {
    for(var i=0; i<array.length;i++) {
        return (array[i][0].id === id)
    }
    return false;
}

function showAnswers(){
  document.getElementById("buttonArea").innerHTML = "";
  document.getElementById("answers").innerHTML = document.getElementById("answers").value;
}

function makeSheet(){
  document.getElementById("textArea").innerHTML = "";
  document.getElementById("answers").value = "";
  document.getElementById("answers").innerHTML = "";
  var problems = parseInt(document.getElementById('numProblems').value);
  for(var i = 0; i < problems; i++){
    var question = questions[Math.floor(Math.random()*questions.length)];
    var nums = question.generateNums();
    var answer = question.ans(nums);
    var text = question.text;
    var wordTypes = question.wordTypes;
    var words = [];
    for(var j = 0; j < nums.length; j++){
      text = text.replace(new RegExp("NUM"+String(j),'g'),String(nums[j]));
    }
    for(var j = 0; j < question.wordTypes.length; j++){
      var word;
      do{
        word = randomWord(wordTypes[j]);
      }while(in_array(words, word)); // no duplicate words

      words[j] = word;
      text = text.replace(new RegExp("WRD"+String(j),'g'), words[j]);
    }
    document.getElementById("textArea").innerHTML += "<li>"+text+"</li><br />";
    document.getElementById("answers").value += "<li>" + question.ans(nums) + "</li><br />";
  }
  document.getElementById("buttonArea").innerHTML = "<button onClick = \"javascript: showAnswers()\">View answers</button>";
}
