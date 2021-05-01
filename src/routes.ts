import {  Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagessController = new MessagesController();


routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.úpdate)

routes.post("/users", usersController.create)

routes.post("/messages", messagessController.create)
routes.get("/messages", messagessController.showByUser)





export{routes}