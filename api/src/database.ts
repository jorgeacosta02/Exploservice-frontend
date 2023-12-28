console.log('Executing database.ts');
// Con dos bases de datos con asyn await

import mongoose from 'mongoose';
import config from './config/config';


// Conexión a la base de datos exploservice
const dbESURI = config.ExploagroDB.URI;
export const dbESConnection = mongoose.createConnection(dbESURI);

dbESConnection.once('open', () => {
    console.log('Mongodb connection established for database Exploservice');
});

dbESConnection.on('error', (err) => {
    console.error('Error in connection with database Exploservice:', err);
    process.exit(1);
});

// Conexión a la base de datos exploagro
const dbEAURI = config.ExploserviceDB.URI;
export const dbEAConnection = mongoose.createConnection(dbEAURI);

dbEAConnection.once('open', () => {
    console.log('Mongodb connection established for database Exploagro');
});

dbEAConnection.on('error', (err) => {
    console.error('Error in connection with database Exploagro:', err);
    process.exit(1);
});



//Mensajes para consola
// ...
dbESConnection.on('connected', () => {
    console.log('Connected to database Exploservice');
});

dbESConnection.on('disconnected', () => {
    console.log('Disconnected from database Exploservice');
});

dbESConnection.on('error', (err) => {
    console.error('Error in connection with database Exploservice:', err);
    process.exit(1);
});

dbEAConnection.on('connected', () => {
    console.log('Connected to database Exploagro');
});

dbEAConnection.on('disconnected', () => {
    console.log('Disconnected from database Exploagro');
});

dbEAConnection.on('error', (err) => {
    console.error('Error in connection with database Exploagro:', err);
    process.exit(1);
});

console.log('Database connections initiated');


// export { dbESConnection, dbEAConnection };





























// Con dos bases de datos sin asyn await

// import mongoose from 'mongoose';
// import config from './config/config';

// // Conexión a la base de datos exploservice
// const dbESURI = config.ExploagroDB.URI;
// mongoose.createConnection(dbESURI);

// const dbESConnection = mongoose.connection;

// dbESConnection.once('open', () => {
//     console.log('Mongodb connection established for database Exploservice');
// });

// dbESConnection.on('error', (err) => {
//     console.error('Error in connection with database Exploservice:', err);
//     process.exit(1);
// });

// // Conexión a la base de datso exploagro
// const dbEAURI = config.ExploserviceDB.URI; // Reemplaza "SecondDB" con el nombre real de tu segunda base de datos
// const dbEAConnection = mongoose.createConnection(dbEAURI);

// dbEAConnection.once('open', () => {
//     console.log('Mongodb connection established for database Exploagro');
// });

// dbEAConnection.on('error', (err) => {
//     console.error('Error in connection with database Exploagro:', err);
//     process.exit(1);
// });

// export { dbESConnection, dbEAConnection };




















// Con una base de datos 

// import mongoose from "mongoose";
// import config from "./config/config";

// // console.log(ConnectOptions)
// // const dbOptions: ConnectOptions = {
// //     useNewUrlParser: true,
// // }

// mongoose.connect(config.ExploagroDB.URI, /*dbOptions*/);

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('Mongodb connection stablished');
// })

// connection.on('error', err => {
//     console.log(err);
//     process.exit(0)
// })