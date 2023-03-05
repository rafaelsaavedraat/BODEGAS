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

export const stockubi = async(req,res) => {
    const { CODEMP, CODSUC ,  CLAVE } = req.body

     if ( CLAVE != process.env.CLAVE ) {
        return res.status(400).json({Message: 'Ingresa Clave' })
     }
     console.log(CODEMP, CODSUC )

      const pool =  await getConnection();
      let result2 = await pool.request()
         .input('CODEMP', sql.VarChar(3) ,CODEMP)
         .input('CODSUC', sql.VarChar(3) ,CODSUC)
         .execute('SP_IN_STOCK_PRODUCTOS_API')
  
 //  console.log(result2);
     // .input('CODSUC', sql.VarChar(3) , '10')
     // .input('COD_PROD', sql.VarChar(30) , '101010200')
       //.output('output_parameter', sql.VarChar(50))
       //res.json(result2.recordset);
       res.json(result2);
};

export const ordencomp = async(req,res) => {
    const { CODEMP, CODSUC , TIPO , NUMERO , CLAVE } = req.body

     if ( CLAVE != process.env.CLAVE ) {
        return res.status(400).json({Message: 'Ingresa Clave' })
     }
     console.log(CODEMP, CODSUC )

      const pool =  await getConnection();
      let result2 = await pool.request()
         .input('CODEMP', sql.VarChar(3) ,CODEMP)
         .input('CODSUC', sql.VarChar(3) ,CODSUC)
         .input('TIPO'  , sql.VarChar(3) ,TIPO)
         .input('NUMERO', sql.Decimal    ,NUMERO)               
         .execute('SP_IN_CONS_ORDENCOMP_API')
  
 //  console.log(result2);
     // .input('CODSUC', sql.VarChar(3) , '10')
     // .input('COD_PROD', sql.VarChar(30) , '101010200')
       //.output('output_parameter', sql.VarChar(50))
       //res.json(result2.recordset);
       res.json(result2);
};

export const insertaubica = async(req,res) => {

   //const ubica = [{COD_PROD, CANTIDAD}];
   const ubica = [];
 
   const { CLAVE } = req.body
   const { LISTA } = req.body
   
   console.log(LISTA)
  if ( CLAVE != process.env.CLAVE ) {
      console.log("Ingrese clave" )
       return res.status(400).json({Message: 'Ingresa Clave' })
    }
        
    const pool =  await getConnection();
    //ubica.push(req.body.LISTA);
     console.log(LISTA.length);
    for (let index = 0; index < LISTA.length; index++) {
      let ls_tipo      = LISTA[index].TIPO;
      let ld_numero    = LISTA[index].NUMERO;
      let ls_cod_prod  = LISTA[index].COD_PROD;
      let ld_cantidad  = LISTA[index].CANTIDAD;
      let ls_lote      = LISTA[index].LOTE;
      let ls_ubicacion = LISTA[index].UBICACION;

      
      await pool
         .request()
         .input('TIPO'      , sql.VarChar(3)   ,ls_tipo)
         .input('NUMERO'    , sql.Decimal      ,ld_numero)  
         .input('COD_PROD'  , sql.VarChar(30)  ,ls_cod_prod) 
         .input('CANTIDAD'  , sql.Decimal      ,ld_cantidad) 
         .input('LOTE'       , sql.VarChar(20) ,ls_lote)  
         .input('UBICACION'  , sql.VarChar(20) ,ls_ubicacion)  
         .query(
            "INSERT INTO METADIST (TIPO,NUMERO,COD_PROD,CANTIDAD,LOTE,UBICACION) VALUES(@ls_tipo,@ld_numero,@ls_cod_prod,@ld_cantidad,@ls_lote,@ls_ubicacion) "
         );
        // .execute('SP_IN_CONS_ORDENCOMP_API')
  

      console.log('prodcutto:' ,ls_cod_prod)
      console.log('cantidad;' ,ld_cantidad)
    }

    console.log(ubica )
    res.json()
   
/*
     const pool =  await getConnection();
     let result2 = await pool.request()
        .input('CODEMP', sql.VarChar(3) ,CODEMP)
        .input('CODSUC', sql.VarChar(3) ,CODSUC)
        .input('TIPO'  , sql.VarChar(3) ,TIPO)
        .input('NUMERO', sql.Decimal    ,NUMERO)               
        .execute('SP_IN_CONS_ORDENCOMP_API')
 */
//  console.log(result2);
    // .input('CODSUC', sql.VarChar(3) , '10')
    // .input('COD_PROD', sql.VarChar(30) , '101010200')
      //.output('output_parameter', sql.VarChar(50))
      //res.json(result2.recordset);

    //  res.json(result2);
};