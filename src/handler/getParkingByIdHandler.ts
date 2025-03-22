import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { parkingsCollection } from "./getParkingHandler";
import { Parking } from "../entities/parking";

const factory = createFactory();
 let theparking;

const get_parkingById_handler = factory.createHandlers(async (c) => {
  try {
   
const id = Number(c.req.param('id')) // recuperer le param id 
 theparking = parkingsCollection.find((parking) => parking.id===id); // faire la comparaison 
return c.json(theparking,200)
  } catch (error) {
    console.error(error);
    throw new HTTPException(500);
  }
});

export default get_parkingById_handler;



