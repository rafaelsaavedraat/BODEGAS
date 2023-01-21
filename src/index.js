import app from "./app"
import './database/connection'
app.listen(app.get('port'))
//   a

console.log('perro loco')
console.log(app.get('port'))
