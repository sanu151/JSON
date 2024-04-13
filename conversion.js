const myData = {
  id: 1,
  fullname: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Stringify to JSON data
const stringifyData = JSON.stringify(myData);
console.log(stringifyData);

// Parsing JSON data to JS object
const parseData = JSON.parse(stringifyData);

for (x in parseData) {
  console.log(`${x} : ${parseData[x]}`);
}
