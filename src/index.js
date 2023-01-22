import app from "./app"
import './database/connection'
app.listen(app.get('port'))
//   a H

console.log('perro loco')
console.log(app.get('port'))
 