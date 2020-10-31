const app = require('./app');
const mongoose = require('./database/database');

mongoose;
async function main(){
	await app.listen(app.get('port'));
	console.log(`SERVER IS RUNNING\nLOCALHOST: ${app.get('port')}\nDOCKER: 4000`);
}

main();