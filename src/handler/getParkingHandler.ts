import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { Parking } from "../entities/parking";

const factory = createFactory();
export const parkingsCollection : Parking []= [
  { id: 1, name: 'Manufacture'},
  { id: 2, name: 'Place Stan' },
]
const get_parking_handler = factory.createHandlers(async (c) => {
  try {
    return c.json({parkingsCollection}, 200);
  } catch (error) {
    console.error(error);
    throw new HTTPException(500);
  }
});

export default get_parking_handler;