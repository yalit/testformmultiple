import React from "react";
import { FormStep, FormStepStatus } from "../types/FormStep";
import { CaretDown, CaretRight, Check } from "./Heroicons";

interface FormStepHeaderProps {
    number: number,
    formStep: FormStep,
    toggleVisibility: () => void
}
export default function FormStepHeader({number, formStep, toggleVisibility}:FormStepHeaderProps) {
    return (
        <div className="step__header p-3 relative md:flex-1 md:flex border border-gray-300 rounded-md divide-y divide-gray-300 md:divide-y-0 md:justify-between md:items-center bg-white shadow-md">
        <a href="#" className="flex items-center text-sm font-medium" aria-current="step" onClick={toggleVisibility}>
          {formStep.status === FormStepStatus.VALIDATED 
            ? (
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-green-600 rounded-full bg-green-600">
                <span className="text-white w-6 h-6"><Check /></span>
              </span>
              ) 
           : (
            <span className={"flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full " + (formStep.current ? "border-blue-600" : "border-grey-600")}>
              <span className={(formStep.current ? "text-blue-600 text-lg" : "text-grey-600")}>{number}</span>
            </span>
            )}
          
          <span className={"ml-4 font-medium " + (formStep.status === FormStepStatus.VALIDATED ? "text-green-600 text-lg" : formStep.current ? "text-blue-600 text-lg" : "text-grey-600")}>{formStep.title}</span>
        </a>
        <div className="step__header__collapse cursor-pointer w-6 h-6" onClick={toggleVisibility}>
          {formStep.visible 
            ? <CaretDown /> 
            : <CaretRight />}
        </div>
      </div>
    )
}