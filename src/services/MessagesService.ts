import { getCustomRepository, Repository } from 'typeorm';
import { Message } from '../entities/Message';
import { MessagesRepository } from '../repositories/MessagesRepository';

interface IMessageAtributes{
    admin_id?:string;
    text:string;
    user_id:string
}


class MessagesService{
    private messageRepository : Repository<Message>;

    constructor(){
        this.messageRepository =  getCustomRepository(MessagesRepository);
    }
    
    async create({user_id,text,admin_id}:IMessageAtributes){
       
        const message =  this.messageRepository.create({
            user_id,text,admin_id
        });
    
        await this.messageRepository.save(message);
    
        return message;    
    }


    async listByUser(user_id:string){

        const messages =  this.messageRepository.find({
            where:{user_id},
            relations:["user"]
        })
    
        return messages;    
    }



      
}

export {MessagesService}