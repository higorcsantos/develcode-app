import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1618847135819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: 'id',
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'birthDate',
                    type: 'date'
                },
                {
                    name: 'image',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
