import sql from 'mssql';

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
};

 export async function getConnection() {
     try {
        const pool =  await sql.connect(dbSettings);
        return pool;
     } catch (error) {
         console.error(error);
     }
    
   // const result =  await  pool.request().query("SELECT 1");
   // console.log(result);
      

};

//getConnection();


