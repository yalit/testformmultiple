import { FormStep } from "../types/FormStep"

export enum FormActionType {
  next,
  previous,
  updateStep,
  validateStep,
  confirmStep,
  cancelValidation,
  submit,
  displayStep,
  hideStep
}

export type FormAction = 
  { type: FormActionType.next} 
  | { type: FormActionType.previous}
  | { type: FormActionType.updateStep, payload: {step: FormStep, value: any}}
  | { type: FormActionType.validateStep, payload: FormStep}
  | { type: FormActionType.submit}
  | { type: FormActionType.displayStep, payload: FormStep}
  | { type: FormActionType.hideStep, payload: FormStep}
  | { type: FormActionType.cancelValidation, payload: FormStep}
  | { type: FormActionType.confirmStep, payload: FormStep}