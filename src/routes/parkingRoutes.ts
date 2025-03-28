import { Hono } from "hono";
import get_parking_handler from "../handler/parking/getParkingHandler";
import get_parkingById_handler from "../handler/parking/getParkingByIdHandler";

const route = new Hono();

route.get("", ...get_parking_handler); 

route.all((c) => {
    return c.json({ message: "Method not allowed" }, 405); // tte autre  verbe va générer un 405
  });
route.get("/:id", ...get_parkingById_handler); 
route.all((c) => {
    return c.json({ message: "Method not allowed" }, 405); // tte autre  verbe va générer un 405
  });



export default route;