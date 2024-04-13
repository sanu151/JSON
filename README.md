# JSON

JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format. It's widely used for data exchange between applications, servers, and web browsers. Here's a breakdown of its key aspects:

**Structure:**

- JSON data is represented as a collection of key-value pairs.
  - Keys are strings used to identify values.
  - Values can be of various data types:
    - Strings (text enclosed in double quotes)
    - Numbers (integers or floating-point numbers)
    - Booleans (true or false)
    - Arrays (ordered lists of values)
    - Objects (nested collections of key-value pairs)
    - null (represents the absence of a value)

**Example:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "isStudent": true,
  "hobbies": ["reading", "coding", "music"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": 12345
  }
}
```

**Key Features:**

- **Readability:** JSON data is human-readable, making it easier to understand and edit compared to binary formats.
- **Lightweight:** It's a compact format, minimizing data size for transmission or storage.
- **Language Independence:** JSON is language-independent, meaning it can be parsed and generated by different programming languages.
- **Flexibility:** JSON can represent a wide variety of data structures due to its nested objects and arrays.

**Common Uses:**

- **Web APIs:** JSON is a popular format for exchanging data between web servers and client-side JavaScript applications using APIs (Application Programming Interfaces).
- **Data Storage:** JSON is often used for storing structured data in files or databases due to its efficiency and ease of manipulation.
- **Configuration Files:** JSON can be used to store configuration settings for applications, websites, or servers.

**Learning Resources:**

- **MDN Web Docs - JSON:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- **JSON.org:** [https://www.json.org/](https://www.json.org/)

# **JSON viewer :** https://codebeautify.org/jsonviewer

**What can you do with JSON Viewer?**

- Beautify / Format your JSON.
- Parse and Display / Explore your JSON String to JSON tree view.
- Minify / Compress your JSON.
- Validate your JSON and help you to fix an error.
- JSON Converter Online transforms into the following formats:
- Convert your JSON structure into XML format.
- Convert and export your JSON to CSV format.
- Hover over the image URL, and this JSON visualizer will display the image.
- Once you have created JSON Data, you can download it as a file or save it as a link and Share it.
- JSON Viewer works well on Windows, MAC, Chrome, and Firefox.
- JSON Pretty Print / Pretty JSON Tool to Prettify JSON data.

# **json path finder website** - https://jsonpathfinder.com/

_This tool will help you find all available JSONPaths in a JSON document, view them in an object tree, identify the different input expressions and extract the matching piece of JSON data against the input expression._

Following are few example jsonpath expressions and results for the above sample json data:

| JSONPath Expression              | Description                                                                                                                                                              | Result                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `$.students`                     | Selects all student objects within the main JSON data.                                                                                                                   | An array containing two student objects (Supriyo Das and Rupa Bayen). |
| `$.students[0].name`             | Selects the `name` property of the first student object in the `students` array.                                                                                         | "Supriyo Das"                                                         |
| `$.students[1].middleName`       | Selects the `middleName` property of the second student object in the `students` array.                                                                                  | null (since there's no middle name specified)                         |
| `$.students[*].age`              | Selects the `age` property of all student objects within the `students` array (wildcard `*` for all elements).                                                           | An array containing the ages of both students (36 and 27).            |
| `$.students[?(@.age > 30)].name` | Filters the `students` array to select students with age greater than 30 and then selects their `name` property.                                                         | "Supriyo Das" (only Supriyo has an age greater than 30).              |
| `$.students[0].languages[1]`     | Selects the second element (index 1) within the `languages` array of the first student object.                                                                           | "English"                                                             |
| `$.students[1].friends[0].name`  | Selects the `name` property of the first friend (index 0) in the `friends` array of the second student object.                                                           | "Suparna"                                                             |
| `$.students..age`                | Uses a recursive expression to select the `age` property of all student objects, including nested ones within the `friends` array (double dot `..` for all descendants). | An array containing all age values (36, 18, 17, 27, 26, 27).          |


# Fake JSON data (Fake API)
**JSON Placeholder : https://jsonplaceholder.typicode.com/guide/**

*Free fake and reliable API for testing and prototyping.*
