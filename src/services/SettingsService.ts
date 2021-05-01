import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsAtributes{
    username: string;
    chat:boolean
}


class SettingsService{
    private settingsRepository : Repository<Setting>;

    constructor(){
        this.settingsRepository =  getCustomRepository(SettingsRepository);
    }

    async create({chat, username}:ISettingsAtributes){
       
        const settingsAlreadyExist = await this.settingsRepository.findOne({username});

        if(settingsAlreadyExist)
            throw new Error("settings already exists!");
    
        const settings =  this.settingsRepository.create({
            username,
            chat
        });
    
        await this.settingsRepository.save(settings);
    
        return settings;    
    }

    async findByUsername(username:string){
       
        const setting = await this.settingsRepository.findOne({username});

    
        return setting;    
    }


    async update({chat, username}:ISettingsAtributes){
      
       await this.settingsRepository.createQueryBuilder()
        .update(Setting)
        .set({chat})
         .where("username = :username",{username})
        .execute();

    
    }


      
}

export {SettingsService}