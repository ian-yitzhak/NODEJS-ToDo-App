var confirm = require('confirm-dialog')

function click_me(){
	confirm('This action can not be undone!').then(function () {
  console.log('yes')
}, function () {
  console.log('no')
}).then(function () {
  return confirm('Are you sure?', {
    alert: true
  })
}).catch(function () {
  
})
}