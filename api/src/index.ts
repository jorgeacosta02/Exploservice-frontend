import app from './app';
import { dbESConnection, dbEAConnection } from './database';

console.log('Executing index.ts');

console.log('Database connections from index.ts:', dbESConnection, dbEAConnection);

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
