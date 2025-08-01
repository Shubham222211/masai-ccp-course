

function timer(duration, complete) {
  setTimeout(() => {
    complete(`Timer of ${duration} ms finished`)
  }, duration)
}


timer(3000, (msg) => {
  console.log(msg)
});
