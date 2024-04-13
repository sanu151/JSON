// Access data from 3_dummy_data.json
const data = require("./3_dummy_data.json");

//Parse json data using 'for in' loop
for (x in data) {
  console.log(x);
  console.log(data[x]);
}
