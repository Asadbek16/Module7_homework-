function checkPropertyExists(str, obj) {
    return str in obj;
  }


  let person = {
    name: "Andrei",
    age: 30,
    gender: "male"
  };
  
  console.log(checkPropertyExists("name", person)); // true
  console.log(checkPropertyExists("height", person)); // false 