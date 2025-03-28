import { Hono } from 'hono'

import parkingRoutes from './routes/parkingRoutes'
import { AppDataSource } from './datasource'
import HomeRoutes from './routes/HomeRoutes'

// connexion 
AppDataSource.initialize()
 .then(()=>{
  console.log("Connexion établie");
 })
 .catch((error) => console.log(error))


const app = new Hono()
//retourne une réponse au format JSON pour toutes les erreurs 404
app.notFound((c) => {
    return c.json({ message: "This page does not exist" }, 404);
  });
 
  

app.route('/',HomeRoutes)


app.route('/parkings',parkingRoutes) // route Parking 



export default app
