import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { parkings } from "../../entities/parking";
import  { AppDataSource} from "../../datasource";


const factory = createFactory();


let get_parking_handler = factory.createHandlers(async (c) => {
  try {
    const parkingRepository = AppDataSource.getRepository(parkings);
   const lesparkings = await parkingRepository.find()

   return c.json({lesparkings}, 200);
  } catch (error) {
    console.error(error);
   
    throw new HTTPException(500);
  }
});

export default get_parking_handler;