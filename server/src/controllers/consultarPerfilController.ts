import { Response, Request } from "express";
import { query } from '../config/database';

export const consultarPerfil = async(req:Request, res:Response):Promise<void> => {
     const {nomePerfil} = req.params;
     try {
        const perfil = await query(`SELECT * FROM influencer WHERE perfil = $1`, [nomePerfil]);
        if(perfil.rows.length ) {
        res.status(200).json(perfil.rows);
     }else {
        res.status(404).json({message: "Perfil não encontrado"});
     }
    
    }catch(error) {
        console.error('Error ao consultar perfil: ',error);
        res.status(500).json({message: "Erro interno do servidor"});
    }
}