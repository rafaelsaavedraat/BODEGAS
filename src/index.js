import app from "./app"
import './database/connection'
app.listen(app.get('port'))
//

console.log('perro loco')
console.log(app.get('port'))
