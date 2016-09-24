words = [];
var noun = 0;
var verb = 1;
var adj = 2;
var boyname = 3;
var girlname = 4;
words[noun] = ["time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city", "community", "name", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "level", "office", "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"];
words[verb] = ["be", "have", "do", "say", "go", "can", "get", "would", "make", "know", "will", "think", "take", "see", "come", "could", "want", "look", "use", "find", "give", "tell", "work", "may", "should", "call", "try", "ask", "need", "feel", "become", "leave", "put", "mean", "keep", "let", "begin", "seem", "help", "talk", "turn", "start", "might", "show", "hear", "play", "run", "move", "like", "live", "believe", "hold", "bring", "happen", "must", "write", "provide", "sit", "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change", "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow", "add", "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider", "appear", "buy", "wait", "serve", "die", "send", "expect", "build", "stay", "fall", "cut", "reach", "kill", "remain"];
words[adj] = ["other", "new", "good", "high", "old", "great", "big", "American", "small", "large", "national", "young", "different", "black", "long", "little", "important", "political", "bad", "white", "real", "best", "right", "social", "only", "public", "sure", "low", "early", "able", "human", "local", "late", "hard", "major", "better", "economic", "strong", "possible", "whole", "free", "military", "true", "federal", "international", "full", "special", "easy", "clear", "recent", "certain", "personal", "open", "red", "difficult", "available", "likely", "short", "single", "medical", "current", "wrong", "private", "past", "foreign", "fine", "common", "poor", "natural", "significant", "similar", "hot", "dead", "central", "happy", "serious", "ready", "simple", "left", "physical", "general", "environmental", "financial", "blue", "democratic", "dark", "various", "entire", "close", "legal", "religious", "cold", "final", "main", "green", "nice", "huge", "popular", "traditional", "cultural"];
words[boyname] = ["Aiden", "Jackson", "Ethan", "Liam", "Mason", "Noah", "Lucas", "Jacob", "Jayden", "Jack", "Logan", "Ryan", "Caleb", "Benjamin", "William", "Michael", "Alexander", "Elijah", "Matthew", "Dylan", "James", "Owen", "Connor", "Brayden", "Carter", "Landon", "Joshua", "Luke", "Daniel", "Gabriel", "Nicholas", "Nathan", "Oliver", "Henry", "Andrew", "Gavin", "Cameron", "Eli", "Max", "Isaac", "Evan", "Samuel", "Grayson", "Tyler", "Zachary", "Wyatt", "Joseph", "Charlie", "Hunter", "David", "Anthony", "Christian", "Colton", "Thomas", "Dominic", "Austin", "John", "Sebastian", "Cooper", "Levi", "Parker", "Isaiah", "Chase", "Blake", "Aaron", "Alex", "Adam", "Tristan", "Julian", "Jonathan", "Christopher", "Jace", "Nolan", "Miles", "Jordan", "Carson", "Colin", "Ian", "Riley", "Xavier", "Hudson", "Adrian", "Cole", "Brody", "Leo", "Jake", "Bentley", "Sean", "Jeremiah", "Asher", "Nathaniel", "Micah", "Jason", "Ryder", "Declan", "Hayden", "Brandon", "Easton", "Lincoln", "Harrison"];
words[girlname] = ["Sophia", "Emma", "Olivia", "Isabella", "Ava", "Lily", "Zoe", "Chloe", "Mia", "Madison", "Emily", "Ella", "Madelyn", "Abigail", "Aubrey", "Addison", "Avery", "Layla", "Hailey", "Amelia", "Hannah", "Charlotte", "Kaitlyn", "Harper", "Kaylee", "Sophie", "Mackenzie", "Peyton", "Riley", "Grace", "Brooklyn", "Sarah", "Aaliyah", "Anna", "Arianna", "Ellie", "Natalie", "Isabelle", "Lillian", "Evelyn", "Elizabeth", "Lyla", "Lucy", "Claire", "Makayla", "Kylie", "Audrey", "Maya", "Leah", "Gabriella", "Annabelle", "Savannah", "Nora", "Reagan", "Scarlett", "Samantha", "Alyssa", "Allison", "Elena", "Stella", "Alexis", "Victoria", "Aria", "Molly", "Maria", "Bailey", "Sydney", "Bella", "Mila", "Taylor", "Kayla", "Eva", "Jasmine", "Gianna", "Alexandra", "Julia", "Eliana", "Kennedy", "Brianna", "Ruby", "Lauren", "Alice", "Violet", "Kendall", "Morgan", "Caroline", "Piper", "Brooke", "Elise", "Alexa", "Sienna", "Reese", "Clara", "Paige", "Kate", "Nevaeh", "Sadie", "Quinn", "Isla", "Eleanor"];

function randomWord(type){
  return words[type][Math.floor(Math.random()*words[type].length)];
}

questions = [
  {
  text: "If you had NUM0 WRD2 WRD0s and you divided them among NUM1 WRD3 WRD1s, how many WRD2 WRD0s would each WRD3 WRD1 get?",
  items: [noun,noun,adj,adj],
  ans: function(nums){
    return nums[0]/nums[1];
  },
  genNums: function(){
    var two = parseInt(Math.floor(Math.random()*10+1));
    var one = two*parseInt(Math.floor(Math.random()*10+1));
    return [one, two];
  }
  },
  {
  text: "WRD3 has to WRD0 NUM0 WRD2 WRD1s. If he can WRD0 NUM1 WRD2 WRD1s in each hour, how many hours will it take for him to WRD0 all NUM0 WRD2 WRD1s?",
  items: [verb,noun,adj,boyname],
  ans: function(nums){
    return nums[0]/nums[1];
  },
  genNums: function(){
    var two = parseInt(Math.floor(Math.random()*10+1));
    var one = two*parseInt(Math.floor(Math.random()*10+1));
    return [one, two];
  }
  },
  {
  text: "How many WRD3 WRD0s are in a WRD5 WRD2 if there are NUM0 WRD3 WRD0s in a WRD4 WRD1 and NUM1 WRD4 WRD1s in a WRD5 WRD2?",
  items: [noun,noun,noun,adj,adj,adj],
  ans: function(nums){
    return nums[0]*nums[1];
  },
  genNums: function(){
    var two = parseInt(Math.floor(Math.random()*10+1));
    var one = parseInt(Math.floor(Math.random()*10+1));
    return [one, two];
  }
  }
]
