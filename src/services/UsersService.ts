import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';


class UsersService{
    private usersRepository : Repository<User>;

    constructor(){
        this.usersRepository =  getCustomRepository(UsersRepository);
    }
    
    async create(email:string){
       
        const userAlreadyExist = await this.usersRepository.findOne({email});

        if(userAlreadyExist)
            throw new Error("User already exists!");
    
        const user =  this.usersRepository.create({
            email
        });
    
        await this.usersRepository.save(user);
    
        return user;    
    }

    async index(email:string){
       
        const user = await this.usersRepository.findOne({email});
    
        return user;    
    }
      
}

export {UsersService}