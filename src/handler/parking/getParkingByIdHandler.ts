import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { AppDataSource } from "../../datasource";
import { parkings } from "../../entities/parking";


const factory = createFactory();
let theparking;

const get_parkingById_handler = factory.createHandlers(async (c) => {
  try {

    const id = Number(c.req.param('id')) // recuperer le param id 
    const parkingRepository = AppDataSource.getRepository(parkings);
    const lesparkings = await parkingRepository.find()
    theparking = lesparkings.find((parking) => parking.id === id); // faire la comparaison 

    if (!theparking) {
      throw new HTTPException(404, { message: `Parking ${id} does not exist` })
    }
    else 
    return c.json({ parking: theparking, message: `${id}` }, 200)
  } catch (error) {
    console.error(error);
    throw new HTTPException(500);
  }
});


export default get_parkingById_handler;



