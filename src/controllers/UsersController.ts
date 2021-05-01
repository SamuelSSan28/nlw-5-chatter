import {Request,Response} from 'express'
import { UsersService } from '../services/UsersService';


class UsersController{
    
    async create(request:Request,response:Response){
        
        const { email } = request.body;

        try {
            const service = new UsersService()

            const user = await service.create(email);
        
            return response.json(user);
            
        } catch (error) {
            return response.status(400).json({error:error.message});
        }
    }
}

export {UsersController}