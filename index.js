// Access json file in JS
const myfriend = require("./1_friends_data.json");

// Access json data
console.log(myfriend);
console.log(myfriend.friends[0].Name);

// Modify json data
myfriend.friends[0].Name = "Samir";
console.log(myfriend.friends[0]);

// Delete json data
delete myfriend.friends[0].Name;
console.log(myfriend);
