export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    ExploagroDB: {
        URI: process.env.EXPLOSERVICE_MONGODB_URI || 'mongodb://localhost/exploservice',
        USER: process.env.EXPLOSERVICE_MONGODB_USER,
        PASSWORD: process.env.EXPLOSERVICE_MONGODB_PASSWORD
    },
    ExploserviceDB: {
        URI: process.env.EXPLOAGRO_MONGODB_URI || 'mongodb://localhost/exploagro',
        USER: process.env.EXPLOAGRO_MONGODB_USER,
        PASSWORD: process.env.EXPLOAGRO_MONGODB_PASSWORD
    }
}