
function startTask() {

    
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve("Task A completed")
    }, 1000)

  })

}


function processTask(prevOutput) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(`Task B processed: ${prevOutput}`)
    }, 1500);
  })

}


function finalizeTask(prevOutput) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(`Final result: ${prevOutput}`);
    }, 500)
  })
}

startTask()
  .then((taskAResult) => {

    console.log(taskAResult)
    return processTask(taskAResult)
  })
  .then((taskBResult) => {
    console.log(taskBResult)

    return finalizeTask(taskBResult)
  })
  .then((finalResult) => {

    console.log(finalResult)
  })
  
  .catch((err) => {
    console.error("Something went wrong:", err)


  })
