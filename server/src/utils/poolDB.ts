// import mysql, { PoolOptions } from "mysql2";

// const access: PoolOptions = {
//   port: 3306,
//   password: "Garocha10!",
//   host: "localhost",
//   user: "root",
//   database: "spark",
// };

// const createdPool = mysql.createPool(access);

// createdPool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       console.error("Database Connection Was Closed.");
//     }
//     if (err.code === "ER_CON_COUNT_ERROR") {
//       console.error("Database has too many connections.");
//     }
//     if (err.code === "ECONNREFUSED") {
//       console.error("Database connection was refused.");
//     }
//   }if(connection){
//     console.log('Pool connected');
//     connection.release();
//     return;
//   }
// });

// export const pool = createdPool.promise();

import Pool from "pg-pool";

const config = {
  user: "postgres",
  password: "Garocha10!",
  host: "localhost",
  port: 5432,
  database: "Spark",
};

export const pool = new Pool(config);


export async function execute (query:string){
    try{
      const res = await pool.query(query);
      return res.rows;
    }catch(err){
      console.log('err occuered in poolDB', err);
      throw err;
    }


}