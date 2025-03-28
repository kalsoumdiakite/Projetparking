import "reflect-metadata";
import { DataSource } from "typeorm";
import { parkings } from "./entities/parking";


export const AppDataSource = new DataSource ({
   type:"mysql" ,
   host : process.env.DATABASE_HOST,
   port:Number(process.env.DATA_BASE_PORT),
   username: process.env.DATABASE_USER,
   password : process.env.DATABASE_PASSWORD,
   database : process.env.DATABASE_NAME,
   entities : [parkings],
   synchronize: false, 
   logging : false 


})