import React, { ChangeEvent, useState } from "react"
import { FormAction, FormActionType } from "../state/FormAction"
import { FormStep, FormStepStatus } from "../types/FormStep"
import { FormStepValidation } from "./FormStepValidation"
import { HandThumbDown, HandThumbUp } from "./Heroicons"

interface FormStepProps {
    formStep: FormStep,
    number: number,
    dispatch: React.Dispatch<FormAction>
}

export interface Product {
    id: string, 
    name: string
}

export const defaultProduct = {id: "", name: ""}

export default function FormStepProduct({formStep, dispatch}: FormStepProps) {
    const products: Array<Product> = [
        {id: "product1", name: "Product A"},
        {id: "product2", name: "Product B"},
        {id: "product3", name: "Product C"},
        {id: "product4", name: "Product D"}
    ]

    const formStepProduct: Product = formStep.value as Product

    const [firstProduct, setFirstProduct] = useState<string>("")
    const [firstProductOK, setFirstProductOK] = useState<boolean|undefined>(undefined)
    const [secondProduct, setSecondProduct] = useState<string>("")
    const [secondProductOK, setSecondProductOK] = useState<boolean|undefined>(undefined)

    const handleFirstProductChange =(e: ChangeEvent<HTMLInputElement>) => {
        setFirstProductOK(undefined)
        setFirstProduct(e.target.value)
    }

    const handleCheckFirstProduct = () => {
        setFirstProductOK(products.filter(p => p.name === firstProduct).length === 1)
    }  

    const handleSecondProductChange =(e: ChangeEvent<HTMLInputElement>) => {
        setSecondProductOK(undefined)
        setSecondProduct(e.target.value)
    }

    const handleCheckSecondProduct = () => {
        const isOK = firstProduct === secondProduct
        setSecondProductOK(isOK)

        if (isOK) {
            dispatch({
                type: FormActionType.updateStep,
                payload: {
                    step: formStep,
                    value: products.filter(p => p.name === firstProduct)[0]
                }
            })
        }
    }

    return (
        <>
            {formStep.status === FormStepStatus.DRAFT ? (
                <>
                    <div className="form__step__content p-4">
                        <label className="mb-3">Select the correct product</label>
                        <div className="form-group mt-3 flex items-center">
                            <div className={"mr-3 h-6 w-6 font-medium inline-flex " + (firstProductOK ? "text-green-600" : "text-red-600")}>
                                {firstProductOK === undefined ? null : firstProduct ?<HandThumbUp /> : <HandThumbDown />}
                            </div>
                            <input type="text" value={firstProduct} onChange={handleFirstProductChange} className="shadow-sm py-2 without-ring block w-full sm:text-sm border-gray-300 rounded-l-md"/>
                            <button type="button" onClick={handleCheckFirstProduct} className="inline-flex without-ring items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-r-md bg-blue-600 hover:bg-blue-700 text-white">
                                OK
                            </button>
                        </div>
                        {firstProductOK !== undefined && !firstProductOK ? (
                            <div className="ml-6 py-3 px-6 text-red-600 font-medium">
                                The product does not exist !
                            </div>
                        ) : null}
                        <div className="form-group flex items-center mt-1">
                            <div className={"mr-3 h-6 w-6 font-medium inline-flex " + (secondProductOK ? "text-green-600" : "text-red-600")}>
                                {secondProductOK === undefined ? null : secondProductOK ?<HandThumbUp /> : <HandThumbDown />}
                            </div>
                            <input type={"text"} value={secondProduct} onChange={handleSecondProductChange} disabled={!firstProductOK} className={"shadow-sm without-ring block w-full sm:text-sm border-gray-300 rounded-l-md " + (!firstProductOK ? "bg-gray-200" : "")}/>
                            <button type="button" onClick={handleCheckSecondProduct} className="inline-flex without-ring items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-r-md bg-blue-600 hover:bg-blue-700 text-white">
                                OK
                            </button>
                        </div>
                    </div>
                
                    {secondProductOK ? (
                        <FormStepValidation formStep={formStep} dispatch={dispatch} buttonTitle="Validate product"/>
                    ): null}
                </>
            ): null}

            {formStep.status === FormStepStatus.VALIDATED ? (
                <div className="form__step__content p-4">
                    Product used : {formStepProduct.name}
                </div>
            ): null}
            
        </>
    )
}