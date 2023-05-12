import req from "express/lib/request";
import res from "express/lib/response";
import {getConnection} from "../database/connection";
import sql from 'mssql';




export const  getmetadist = async(req,res)  =>   {

     const pool =  await getConnection();
     const result = await pool.request().query("SELECT TIPO,NUMERO,COD_PROD,CANTIDAD,LOTE,UBICACION FROM METADIST");
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


export const ventasdina = async(req,res) => {
   const { CODEMP, CODSUC , FECHA_DESDE, FECHA_HASTA, CLIENTE, VEND , UNIDADES, Q1, Q2, COD_PROD,  CLAVE } = req.body


   console.log(CODEMP, CODSUC , FECHA_DESDE, FECHA_HASTA, CLIENTE, VEND , UNIDADES, Q1, Q2, COD_PROD,  CLAVE )

    if ( CLAVE != process.env.CLAVE ) {
       return res.status(400).json({Message: 'Ingresa Clave' })
    }
    console.log(CODEMP, CODSUC )

     const pool =  await getConnection();
     let result2 = await pool.request()
        .input('CODEMP', sql.VarChar(3) ,CODEMP)
        .input('CODSUC', sql.VarChar(3) ,CODSUC)
        .input('FECHA_DESDE'  , sql.VarChar(10) ,FECHA_DESDE)
        .input('FECHA_HASTA', sql.VarChar(10)    ,FECHA_HASTA) 
        .input('CLIENTE', sql.VarChar(15)    ,CLIENTE)   
        .input('VEND', sql.VarChar(15)    ,VEND)   
        .input('UNIDADES', sql.VarChar(15)    ,UNIDADES) 
        .input('Q1', sql.Int ,Q1)
        .input('Q2', sql.Int ,Q2) 
        .input('COD_PROD', sql.VarChar(20)    ,COD_PROD)                
        .execute('SP_FA_INFORME_VENTAS_API_DINA')
 

      res.json(result2);
};

export const insertaubica = async(req,res) => {

   //const ubica = [{COD_PROD, CANTIDAD}];
   const ubica = [];
  
   const { CLAVE , TIPO , NUMERO } = req.body
   const { LISTA } = req.body
   
   console.log(LISTA)
  if ( CLAVE != process.env.CLAVE ) {
      console.log("Ingrese clave" )
       return res.status(400).json({Message: 'Ingresa Clave' })
    }

       
    const pool =  await getConnection();
    await pool
    .request()
    .input('TIPO'      , sql.VarChar(3)   ,TIPO)
    .input('NUMERO'    , sql.Decimal      ,NUMERO)  
     .query(
       "DELETE FROM METADIST WHERE TIPO= @TIPO AND NUMERO = @NUMERO  "
    );

    //ubica.push(req.body.LISTA);
     console.log(LISTA.length);
    for (let index = 0; index < LISTA.length; index++) {
    
      let COD_PROD     = LISTA[index].COD_PROD;
      let CANTIDAD  = LISTA[index].CANTIDAD;
      let LOTE      = LISTA[index].LOTE;
      let UBICACION = LISTA[index].UBICACION;

      console.log(COD_PROD);
      await pool
         .request()
         .input('TIPO'      , sql.VarChar(3)   ,TIPO)
         .input('NUMERO'    , sql.Decimal      ,NUMERO)  
         .input('COD_PROD'  , sql.VarChar(30)  ,COD_PROD) 
         .input('CANTIDAD'  , sql.Decimal      ,CANTIDAD) 
         .input('LOTE'       , sql.VarChar(20) ,LOTE)  
         .input('UBICACION'  , sql.VarChar(20) ,UBICACION)  
         .query(
            "INSERT INTO METADIST (TIPO,NUMERO,COD_PROD,CANTIDAD,LOTE,UBICACION) VALUES(@TIPO,@NUMERO,@COD_PROD,@CANTIDAD,@LOTE,@UBICACION) "
         );
        // .execute('SP_IN_CONS_ORDENCOMP_API')
  

      //console.log('prodcutto:' ,ls_cod_prod)
     // console.log('cantidad;' ,ld_cantidad)
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

export const ventasper = async(req,res) => {
   const { CODEMP, CODSUC , CLAVE, REPORTE, FILTRO, PERIODO , MES } = req.body


   console.log(CODEMP, CODSUC , CLAVE, REPORTE, FILTRO, PERIODO , MES)

    if ( CLAVE != process.env.CLAVE ) {
       return res.status(400).json({Message: 'Ingresa Clave' })
    }
    console.log(CODEMP, CODSUC )

     const pool =  await getConnection();
     let result2 = await pool.request()
        .input('CODEMP', sql.VarChar(3) ,CODEMP)
        .input('CODSUC', sql.VarChar(3) ,CODSUC)
        .input('REPORTE'  , sql.VarChar(20) ,REPORTE)
        .input('FILTRO', sql.VarChar(20)    ,FILTRO) 
        .input('PERIODO', sql.Int ,PERIODO)
        .input('MES', sql.VarChar(20)    ,MES)                
        .execute('SP_FA_INFORME_VENTAS_API_PER')
 
        res.json(result.recordset);
     // res.json(result2);
};
