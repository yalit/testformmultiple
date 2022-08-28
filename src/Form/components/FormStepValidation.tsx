import React, { Dispatch } from "react";
import { FormAction, FormActionType } from "../state/FormAction";
import { FormStep } from "../types/FormStep";
import { DoubleCaretRight } from "./Heroicons";

interface FormStepValidationProps {
    buttonTitle: string,
    formStep: FormStep,
    dispatch: Dispatch<FormAction>
}

export function FormStepValidation({buttonTitle, formStep, dispatch}: FormStepValidationProps) {
    const handleValidation = () => {
        dispatch({
            type: FormActionType.validateStep,
            payload: formStep
        })
    }

    return (
        <>
            <div className="form__step__validation flex justify-end p-4">
                <button type="button" onClick={handleValidation} className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    <span className="h-5 w-5 mr-2"><DoubleCaretRight /></span> {buttonTitle}
                </button>
            </div>
        </>
    )
}