import {MigrationInterface, QueryRunner} from "typeorm";

export class addBrandStatusColumn1691882263742 implements MigrationInterface {
    name = "addBrandStatusColumn1691882263742";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`brand\` ADD \`status\` enum ('IN_PROGRESS', 'DATA_READY', 'MODEL_TRAINING', 'READY') NOT NULL DEFAULT 'IN_PROGRESS'`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`brand\` DROP COLUMN \`status\``);
    }
}
