function createEmptyObject() {
    return Object.create(null);
  }

  let emptyObject = createEmptyObject();
console.log(emptyObject); // {}
console.log(emptyObject.toString()) // TypeError: