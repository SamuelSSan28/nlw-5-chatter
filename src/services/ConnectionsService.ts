import { getCustomRepository, Repository,Equal } from 'typeorm';
import { Connection } from '../entities/Connection';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionAtributes{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}


class ConnectionsService{
    private connectionRepository : Repository<Connection>;

    constructor(){
        this.connectionRepository =  getCustomRepository(ConnectionsRepository);
    }
    
    async create({socket_id, user_id, admin_id, id}:IConnectionAtributes){
       
        const connection =  this.connectionRepository.create({
            socket_id, user_id, admin_id, id
        });
    
        await this.connectionRepository.save(connection);
    
        return connection;    
    }


    async listByUser(user_id:string){

        const connections =  this.connectionRepository.find({
            where:{user_id},
            relations:["user"]
        })
    
        return connections;    
    }


    async findByUserId(user_id:string){
       
        const connection = await this.connectionRepository.findOneOrFail({user_id});
    
        return connection;    
    }
    

    async findAllWithoutAdmin(){
        const connections = await this.connectionRepository.find({
            where:{admin_id:null},
            relations:["user"]
        });

        return connections
    }


    async setAdminId(user_id:string,admin_id:string){
        await this.connectionRepository.createQueryBuilder()
        .update(Connection)
        .set({admin_id})
         .where("user_id = :user_id",{user_id})
        .execute();
    }

    async findBySocketID(socket_id: string) {
        const connection = await this.connectionRepository.findOne({socket_id})
        
        return connection;
    }


      
}

export {ConnectionsService}