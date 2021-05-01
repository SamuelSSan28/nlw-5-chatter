import {Request,Response} from 'express'
import { MessagesService } from '../services/MessagesService';


class MessagesController{
    
    async create(request:Request,response:Response):Promise<Response>{
        
        const { user_id,text,admin_id } = request.body;

        try {
            const messagesService = new MessagesService();

            const messages= await messagesService.create({user_id,text,admin_id});
        
            return response.json(messages);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }
    }

    async showByUser(request:Request,response:Response):Promise<Response>{
        
        const { user_id } = request.body;

        try {
            const messagesService = new MessagesService();

            const messages = await messagesService.listByUser(user_id);
        
            return response.json(messages);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }

    }
}

export {MessagesController}