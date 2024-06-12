import { IUser } from "@user/databases/@types/user.interface";
import { UserServices } from "../services/user.service";
import {
  Controller,
  Put,
  Route,
  Path,
  Body,
  Post,
  Middlewares,
  Get,
  Request,
} from "tsoa"; // Import necessary decorators
import { verifyToken } from "@user/middlewares/tokenValidation";
import axios from "axios";
import { prettyPrintJson } from "@user/utils/beautifulLog";
import mongoose from "mongoose";
import APIError from "@user/Errors/api-error";
import { StatusCode } from "@user/utils/consts";

const userService = new UserServices();

@Route("/v1/user")
export class UserController extends Controller {
  @Get("/info/{id}")
  public async getSser(@Path() id: string): Promise<any> {
    try {
      console.log("Get /");
      return await userService.findUserById(id);
    } catch (error: unknown) {
      throw error;
    }
  }

  @Post("/favorite/{id}")
  @Middlewares(verifyToken)
  public async addFavoEvent(
    @Request() request: any,
    @Path() id: string
  ): Promise<any> {
    try {
      console.log("Post /:id");
      const user = await userService.findUserById(request.id);

      // Validate objectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid event ID format");
      }

      const event = await axios.get(`http://event:3004/v1/events?id=${id}`); // fetch event data from event service

      // Check for existing favorite using findIndex
      const existingFavoriteIndex = user?.favorites.findIndex((item) =>
        item.equals(event.data[0]._id)
      );

      if (existingFavoriteIndex !== -1) {
        // Remove event from favorites
        user?.favorites.splice(existingFavoriteIndex!, 1);
        await user?.save();

        return {
          message: "Event removed from favorites successfully",
          data: user,
        };
      }

      // Add event to favorites
      user?.favorites.push(event.data[0]._id);
      await user?.save();

      return {
        message: "Event added to favorites successfully",
        data: user,
      };
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
      // You can customize the error response here based on error type
      throw new APIError(
        "Error adding/removing favorite",
        StatusCode.BadRequest
      );
    }
  }

  @Get("/favorite")
  @Middlewares(verifyToken)
  public async findFavoEvent(@Request() request: any): Promise<any> {
    try {
      console.log("Get /favorite");
      const user = await userService.findUserById(request.id);

      const eventIds = user?.favorites;

      //loop find the event id
      const eventPromises = eventIds!.map(async (id) => {
        try {
          const response = await axios.get(`http://event:3004/v1/events/${id}`);
          console.log(
            `Response for id ${id}: ${prettyPrintJson(response.data)}`
          );
          return response.data;
        } catch (error) {
          console.error(`Error fetching data for id ${id}:`, error);
          return null; // or handle differently if needed
        }
      });

      const events = (await Promise.all(eventPromises)).filter(
        (event) => event !== null
      );

      return {
        message: "Favorite events found successfully",
        data: events, // not wokring yet
      };
    } catch (error: unknown) {
      throw new APIError(
        "Error fetching favorite events",
        StatusCode.BadRequest
      );
    }
  }

  @Post("/")
  public async CreateUser(@Body() RequestBody: IUser): Promise<any> {
    try {
      console.log("Post /");
      const user = await userService.createUser(RequestBody);

      return {
        message: "User profile create successfully",
        data: user,
      };
    } catch (error: unknown) {
      throw new APIError("Error during user creation", StatusCode.BadRequest);
    }
  }

  @Put("/{id}")
  @Middlewares(verifyToken) // Apply verifyToken middleware before UpdateProfile
  public async UpdateProfile(
    @Path() id: string,
    @Body() userProfileData: IUser
  ): Promise<any> {
    try {
      console.log("Put /:id");
      // Call UserService to update user profile using userId from the request object
      const updatedUserProfile = await userService.updateUserProfile(
        id,
        userProfileData
      );

      return {
        message: "User profile updated successfully",
        userProfile: updatedUserProfile,
      };
    } catch (error: unknown) {
      throw new APIError("Error during user creation", StatusCode.BadRequest);
    }
  }

  @Get("/role")
  @Middlewares(verifyToken)
  public async findrole(@Request() request: any) {
    try {
      if (!request.role) {
        throw new APIError("Role not found in request", StatusCode.BadRequest);
      }
      const roles = request.role;
      console.log("Role found in request:", roles);
      return {
        data: roles,
      };
    } catch (error: unknown) {
      console.error("Error fetching role:", error);
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError("Error fetching role", StatusCode.BadRequest);
    }
  }

  // use {} for param not :
  @Get("/{id}")
  public async findUserByAuthId(@Path() id: string): Promise<any> {
    try {
      console.log("Get /:id");
      const user = await userService.findUserByAuthId(id);

      return {
        message: "User profile found successfully",
        data: user,
      };
    } catch (error: unknown) {
      throw new APIError("Error during user creation", StatusCode.BadRequest);
    }
  }
}
