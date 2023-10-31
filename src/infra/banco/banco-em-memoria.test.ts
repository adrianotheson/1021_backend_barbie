import { describe, test, expect } from "vitest";
describe("banco em memoria", () => {
    test("deve salvar um banco em memoria", () => {
        const input = {
            id: 1,
            titulo: "test",
            descricao: "test",
            foto:"test",

        }
            constEmMemoria = new BancoEmMemoria();
            const result = bancoEmMemoria.salvar(input)
            expect(result).tobe(true)
            expect(bancoEmMemoria.dados).toHaveBeenCalled([input])
            expect(bancoEmMemoria.dados).toEqual([input])
    })
})




