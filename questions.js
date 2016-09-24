questions = [
  {
    text: "If you had NUM0 WRD2 WRD0s and you divided them among NUM1 WRD3 WRD1s, how many WRD2 WRD0s would each WRD3 WRD1 get?",
    wordTypes: [noun,noun,adj,adj],
    ans: function(nums){
      return nums[0]/nums[1];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*10+1));
      var one = two*parseInt(Math.floor(Math.random()*10+1));
      return [one, two];
    }
  },
  {
    text: "WRD3 has to WRD0 NUM0 WRD2 WRD1s. If he can WRD0 NUM1 WRD2 WRD1s in each hour, how many hours will it take for him to WRD0 all NUM0 WRD2 WRD1s?",
    wordTypes: [verb,noun,adj,boyname],
    ans: function(nums){
      return nums[0]/nums[1];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*10+1));
      var one = two*parseInt(Math.floor(Math.random()*10+1));
      return [one, two];
    }
  },
  {
    text: "How many WRD3 WRD0s are in a WRD5 WRD2 if there are NUM0 WRD3 WRD0s in a WRD4 WRD1 and NUM1 WRD4 WRD1s in a WRD5 WRD2?",
    wordTypes: [noun,noun,noun,adj,adj,adj],
    ans: function(nums){
      return nums[0]*nums[1];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*10+1));
      var one = parseInt(Math.floor(Math.random()*10+1));
      return [one, two];
    }
  }
];
