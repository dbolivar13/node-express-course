const practice2 = require('./practice2')
const os = require('os')
const {writeFile} = require('fs')


writeFile('./content/practice.txt', 
`Here is the result : ${practice2.sentence}, ${os.userInfo().username}`, 
(err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('done with this task')
    }
  )


