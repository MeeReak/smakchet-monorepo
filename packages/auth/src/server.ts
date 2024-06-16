import app from "./app";
import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import getConfig from "./utils/createConfig";
import { Channel } from "amqplib";
import { createQueueConnection } from "./queues/connection";

const config = getConfig();

export let authChannel: Channel;

// READ FILE JWT PUBLIC KEY FIRST!
export const privateKey = fs.readFileSync(
  path.join(__dirname, "../private_key.pem"),
  "utf-8"
);

//conect to the moongo

const initialyRabbitmq = async () =>{
  try{
    authChannel= (await createQueueConnection()) as Channel
  }catch(error: unknown){
    console.log("Queue Error :",error )
  }
}

mongoose
  .connect(config.mongoUrl as string)
  .then(() => {
    //listen for requests
    initialyRabbitmq()
    app.listen(config.port, () => {
      console.log("Connect to mongose DB & Listen on port 3001");
    });
  })
  .catch((error: any | unknown) => {
    console.log(error);
  });
