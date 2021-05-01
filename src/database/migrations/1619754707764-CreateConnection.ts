import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnection1619754707764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name:"connections",
                    columns:[
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true

                        },
                        {
                            name:"socket_id",
                            type:"varchar",
                            
                        },
                        {
                            name:"admin_id",
                            type:"uuid",  
                            isNullable:true                     
                        },
                        {
                            name:"user_id",
                            type:"uuid",
                        },
                        {
                            name:"created_at",
                            type:"timestamp",
                            default:"now()"                           
                        },
                        {
                            name:"updated_at",
                            type:"timestamp",
                            default:"now()"                           
                        }
                    ],
                    foreignKeys:[
                        {
                            name:"FKUser",
                            referencedTableName:"users",
                            referencedColumnNames:["id"],
                            columnNames:["user_id"],
                            onDelete:"SET NULL",
                            onUpdate:"SET NULL"
                        }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("connections")
    }
}
