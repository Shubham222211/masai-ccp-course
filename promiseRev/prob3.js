


function checkEvenNumber(num) {
    
  return new Promise((resolve, reject) => {

    if (typeof num !== "number" || isNaN(num)) {

      reject(`${num} is odd or invalid`)

    } else if (num % 2 === 0) {

      resolve(`${num} is even`)
    } else {

      reject(`${num} is odd or invalid`)
    }
  });
}

    checkEvenNumber(10)
  .then((message) => console.log("Resolved:", message))

    .catch((error) => console.log("Rejected:", error))


checkEvenNumber(7)
  .then((message) => console.log("Resolved:", message))

  .catch((error) => console.log("Rejected:", error))

    checkEvenNumber("abc")
  .then((message) => console.log("Resolved:", message))

    .catch((error) => console.log("Rejected:", error))
