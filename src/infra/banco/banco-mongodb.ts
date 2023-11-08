import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";
import mongoose from 'mongoose';
require('dotenv').config()
export default class BancoMongoDB implements FilmeRepositorioInterface {
    private filmeModel: any;
    constructor(){
        try{
        
    mongoose.connect(process.env.MONGODB_URL, );
    console.log("Conectado ao banco de dados")
    }catch(erro){
        console.log(erro)
    }
    this.filmeModel = mongoose.model('Filme', new mongoose.Schema({ 
        _id: Number,
        titulo: String,
        descricao: String,
        foto: String,
    }));
    public public salvar(filme:Filme): Promise<boolean> {
        const folmeDTO = {
            _id: filme.id,
            titulo: filme.titulo,
            descricao: filme.descricao,
            foto: filme.foto,
        }
    //     const filmeModel = new this.filmeModel(filme);
    //     return new Promise((resolve,reject)=>{
    //         reject(false)
    // })
    const filmeModel = new this.filmeModel(folmeDTO);
    const result = await filmeModel.save();
    return !!result;
    }
}


type Filme = {  
    id: number,
    titulo: string,
    descricao: string,
    foto: string,
}

