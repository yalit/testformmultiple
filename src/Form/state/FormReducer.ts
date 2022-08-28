import { Reducer } from "react";
import { FormStepStatus } from "../types/FormStep";
import { FormAction, FormActionType } from "./FormAction";
import { FormState } from "./FormState";

export type FormReducer = Reducer<FormState, FormAction>

export const formReducer: FormReducer = (state: FormState, action: FormAction): FormState => {
  const newState: FormState = {...state}
  switch(action.type) {
    case FormActionType.next:
      return newState
    
    case FormActionType.previous:
      return newState

    case FormActionType.updateStep:
      if (action.payload.step.status !== FormStepStatus.DRAFT) {
        return state
      }

      newState[action.payload.step.name] = {...action.payload.step, value: action.payload.value}      
      return newState

    case FormActionType.validateStep:
      if (action.payload.status !== FormStepStatus.DRAFT || action.payload.value === "") {
        return state
      }

      newState[action.payload.name] = {...action.payload, status: FormStepStatus.VALIDATED, current: action.payload.nextStep !== undefined}

      if (action.payload.nextStep !== undefined) {
        newState[action.payload.nextStep] = {...state[action.payload.nextStep], visible: true, current: true}
      }

      return newState

    case FormActionType.hideStep:
      newState[action.payload.name] = {...action.payload, visible: false}
      return newState
      
    case FormActionType.displayStep:
      newState[action.payload.name] = {...action.payload, visible: true}
      return newState
      
    default:    
      return newState
  }
}