import {Request,Response} from 'express'
import { SettingsService } from '../services/SettingsService';


class SettingsController{
    
    
    async create(request:Request,response:Response):Promise<Response>{
        
        const { chat,username } = request.body;

        try {
            const settingsService = new SettingsService();
            const setting = await settingsService.create({chat,username});
        
            return response.json(setting);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }
    }

    async findByUsername(request:Request,response:Response):Promise<Response>{
        
        const {username } = request.params;

        try {
            const settingsService = new SettingsService();

            const setting = await settingsService.findByUsername(username);
        
            return response.json(setting);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }
    }

    async úpdate(request:Request,response:Response):Promise<Response>{
        
        const {chat } = request.body;
        const {username } = request.params;

        try {
            const settingsService = new SettingsService();

            const setting = await settingsService.update({username,chat});
        
            return response.json(setting);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }
    }


    
}

export {SettingsController}