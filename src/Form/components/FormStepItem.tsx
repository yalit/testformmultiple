import React, { Dispatch } from "react";
import { FormAction, FormActionType } from "../state/FormAction";
import { FormStep, FormStepStatus } from "../types/FormStep";
import FormStepHeader from "./FormStepHeader";
import { FormStepValidation } from "./FormStepValidation";

export interface FormStepItemProps {
    number: number,
    formStep: FormStep,
    dispatch: Dispatch<FormAction>,
    children?: JSX.Element | string
  }

export function FormStepItem ({number, formStep, dispatch, children}: FormStepItemProps) {

    const handleToggleVisibility = () => {
        const action: FormActionType = formStep.visible ? FormActionType.hideStep : FormActionType.displayStep
        dispatch({
            type: action,
            payload: formStep
        })
    }

    return (
        <div id={"form__step__"+formStep.name} className="form__step__item relative mb-3 last:mb-0">
            <FormStepHeader number={number} formStep={formStep} toggleVisibility={handleToggleVisibility} />
            <div className={"overflow-hidden transition-all ease-in-out duration-[300ms] border-b border-l border-r border-gray-300 -mt-1 rounded-b-md " + (formStep.visible ? "max-h-96 opacity-100" : "max-h-0 opacity-0 ")}>
                { children }
            </div>
        </div>
    )
}