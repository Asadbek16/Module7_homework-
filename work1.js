function printOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ": " + obj[key]);
      }
    }
  }
  
  let person = {
    name: "Andrei",
    age: 30,
    gender: "male"
  };
  
  printOwnProperties(person);