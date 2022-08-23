import req from "express/lib/request";
import res from "express/lib/response";
import {getConnection} from "../database/connection";
import sql from 'mssql';

export const  getProducts = async(req,res)  =>   {

     const pool =  await getConnection();
     const result = await pool.request().query("SELECT cod_prod, nombre FROM FCPRODUC");
     console.log(result);
    res.json(result.recordset);
};

export const createnewProducts = (req,res) => {
      res.send("hola ")
};

export const listaprec = async(req,res) => {
    const { CODEMP, CODSUC , COD_PROD , CLAVE } = req.body

     if ( CLAVE != process.env.CLAVE ) {
        return res.status(400).json({Message: 'Ingresa Clave' })
     }
     console.log(CODEMP, CODSUC, COD_PROD)

      const pool =  await getConnection();
      let result2 = await pool.request()
         .input('CODEMP', sql.VarChar(3) ,CODEMP)
         .input('CODSUC', sql.VarChar(3) ,CODSUC)
         .input('COD_PROD', sql.VarChar(30) ,COD_PROD)
          .execute('SP_IN_IVA_PRODUCTO')
  
 //  console.log(result2);
     // .input('CODSUC', sql.VarChar(3) , '10')
     // .input('COD_PROD', sql.VarChar(30) , '101010200')
       //.output('output_parameter', sql.VarChar(50))
       //res.json(result2.recordset);
       res.json(result2);
};