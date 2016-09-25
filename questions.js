questions = [
  {
    text: "If you had NUM0 WRD2 WRD0s and you divided them among NUM1 WRD3 WRD1s, how many WRD2 WRD0s would each WRD3 WRD1 get?",
    wordTypes: [noun,noun,adj,adj],
    ans: function(nums){
      return nums[0]/nums[1];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*12+1));
      var one = two*parseInt(Math.floor(Math.random()*12+1));
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
      var two = parseInt(Math.floor(Math.random()*12+1));
      var one = two*parseInt(Math.floor(Math.random()*12+1));
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
      var two = parseInt(Math.floor(Math.random()*12+1));
      var one = parseInt(Math.floor(Math.random()*12+1));
      return [one, two];
    }
  },
  {
    text: "You collect WRD0 WRD1s. Suppose you start off with NUM0 WRD0 WRD1s, and WRD2 gives you NUM1 more WRD0 WRD1s. How many WRD0 WRD1s do you have now?",
    wordTypes: [adj,noun,girlname],
    ans: function(nums){
      return nums[0]+nums[1];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*60+1));
      var one = parseInt(Math.floor(Math.random()*40+1));
      return [one, two];
    }
  },
  {
    text: "You collect WRD0 WRD1s. Suppose you start off with NUM0 WRD0 WRD1s, and WRD2 gives you NUM1 more WRD0 WRD1s. Then WRD3 takes away NUM2 of your WRD0 WRD1s. How many WRD0 WRD1s do you have now?",
    wordTypes: [adj,noun,boyname,girlname],
    ans: function(nums){
      return nums[0]+nums[1]-nums[2];
    },
    generateNums: function(){
      var two = parseInt(Math.floor(Math.random()*60+1));
      var one = parseInt(Math.floor(Math.random()*40+1));
      var three = parseInt(Math.floor(Math.random()*(two+one)+1))
      return [one, two, three];
    }
  },
  {
    text: "WRD0 has NUM0 WRD1 WRD2s, and WRD3 has NUM1 times the number of WRD0's WRD1 WRD2s. WRD4 has NUM2 more WRD1 WRD2s than WRD3 does. How many WRD1 WRD2s does WRD4 have?",
    wordTypes: [boyname, adj, noun, girlname, girlname],
    ans: function(nums){
      return (nums[0]*nums[1])+nums[2];
    },
    generateNums: function(){
      var one = parseInt(Math.floor(Math.random()*12+1));
      var two = parseInt(Math.floor(Math.random()*12+1));
      var three = parseInt(Math.floor(Math.random()*(60)+1))
      return [one, two, three];
    }
  }
];
