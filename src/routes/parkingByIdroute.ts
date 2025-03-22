import { Hono } from "hono";

import get_parkingById_handler from "../handler/getParkingByIdHandler";

const route = new Hono();


route.get("", ...get_parkingById_handler); 

export default route;