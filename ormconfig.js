module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'gamecred',
    synchronize: true,
    entities: ['dist/modules/**/*.entity.js'],
};
