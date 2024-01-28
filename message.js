var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log('good morning')
} else if (curHr < 18) {
  console.log('good afternoon')
} else {
  console.log('good evening')
}

