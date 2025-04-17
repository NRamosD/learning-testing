import { describe, expect, it } from "vitest";
import sumar2numeros from "./MakeOperations";

describe("Sirve mi funcion?",()=>{
    it("Suma dos números todo bien",()=>{
        expect(
            sumar2numeros(2,3)
        ).toBe(5)
    })
    it("Suma de números enteros",()=>{
        expect(
            sumar2numeros(2,-3)
        ).toBe(-1)
    })
})