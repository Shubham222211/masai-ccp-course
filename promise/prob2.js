

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() >= 0.5

      if (success) {
        resolve("Fetched data success")
      } else {
        reject("Failed to fetch");
      }
    }, 1000)
  });
}
