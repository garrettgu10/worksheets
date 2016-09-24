function makeSheet(){
  for(var i = 0; i < 10; i++){
    var question = questions[Math.floor(Math.random()*questions.length)];
    var nums = question.genNums();
    var answer = question.ans(nums);
    var text = question.text;
    var wordTypes = question.items;
    for(var j = 0; j < nums.length; j++){
      text = text.replace(new RegExp("NUM"+String(j),'g'),String(nums[j]));
    }
    for(var j = 0; j < question.items.length; j++){
      text = text.replace(new RegExp("WRD"+String(j),'g'),randomWord(wordTypes[j]));
    }
    document.write(text+" <b>"+String(question.ans(nums))+"</b><br />");
  }
}
