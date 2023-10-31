import BancoEmMemoria from "../infra/banco-em-memoria"
class salvarFilme{
    private banco = new BancoEmMemoria()
    constructor(){}
    public execute(input:Input):Output|undefined{
        const {id,titulo, descricao, foto } = input

        //salvar no banco
        const resultado = this.banco.salvar({id,titulo, descricao, foto })
        if(!resultado){
            return {id,titulo, descricao, foto }
        }
        //retornar o resultado


    }
}
export default salvarFilme

type Input = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string
}






