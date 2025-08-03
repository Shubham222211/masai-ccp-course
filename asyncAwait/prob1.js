


function timer(durt, onComplete) {
  setTimeout(() => {
    const ans = ` ${durt} ms completed`
    onComplete(ans)
  }, durt)
}


timer(2000, (ans) => {
  console.log(ans)
})
