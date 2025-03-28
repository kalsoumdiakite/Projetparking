import { Hono } from "hono";
import get_parking_handler from "../handler/parking/getParkingHandler";


const route = new Hono();

route.get("", ...get_parking_handler); 



export default route;