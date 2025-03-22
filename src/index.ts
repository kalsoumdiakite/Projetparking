import { Hono } from 'hono'
import { parkingsCollection } from './handler/getParkingHandler'
import parkingByIdroute from './routes/parkingByIdroute'
import parkingRoutes from './routes/parkingRoutes'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/parkings',parkingRoutes)
app.route('/parkings/:id',parkingByIdroute)

export default app
