import {describe,test,expect} from 'vitest'
import BancoMongoDB from './banco-em-memoria'
describe("Banco em memória",()=>{
    test("Deve salvar no banco em memória",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        const BancoMongoDB = new BancoMongoDB();
        const result = await BancoMongoDB.salvar(input)
        expect(result).toBe(true)
        expect(BancoMongoDB.dados).toHaveLength(1)
        expect(BancoMongoDB.dados).toEqual([input])
    })
})



