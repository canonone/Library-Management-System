"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniitializeDataSource = iniitializeDataSource;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const dataSource = new typeorm_1.DataSource({
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [process.env.DB_ENTITIES],
    synchronize: true,
    ssl: process.env.DB_SSL === 'true',
});
async function iniitializeDataSource() {
    if (!dataSource.isInitialized) {
        try {
            await dataSource.initialize();
        }
        catch (error) {
            console.error('initialization failed', error.message);
            process.exit(1);
        }
    }
    return dataSource;
}
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map