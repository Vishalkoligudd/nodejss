const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response',(name,id)=>{
    console.log(`data received with name ${name}" and id ${id}`);
})

customEmitter.emit('response','john',23)