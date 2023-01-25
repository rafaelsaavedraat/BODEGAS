import req from "express/lib/request";
import res from "express/lib/response";
import {getConnection} from "../database/connection";
import sql from 'mssql';

export const sobrepago = async(req,res) => {
    const { CODEMP, CODSUC , DESDE , HASTA , EMPLEADO, CLAVE } = req.body
    console.log(CODEMP, CODSUC, EMPLEADO)
     if ( CLAVE != process.env.CLAVE ) {
        return res.status(400).json({Message: 'Ingresa Clave' })
     }
     

      const pool =  await getConnection();
      let result2 = await pool.request()
         .input('CODEMP', sql.VarChar(3) ,CODEMP)
         .input('CODSUC', sql.VarChar(3) ,CODSUC)
         .input('DESDE', sql.VarChar(10) ,DESDE)
         .input('HASTA', sql.VarChar(10) ,HASTA)
         .input('EMPLEADO', sql.VarChar(10) ,EMPLEADO)
          .execute('SP_RP_IMPRIME_SOBRES_WEBH1')
  
   
     // .input('CODSUC', sql.VarChar(3) , '10')
     // .input('COD_PROD', sql.VarChar(30) , '101010200')
       //.output('output_parameter', sql.VarChar(50))
       res.json(result2);
};