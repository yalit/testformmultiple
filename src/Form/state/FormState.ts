import { FormStep } from "../types/FormStep"

export enum StepName { PRODUCT= "product",  REALISATIONNUMBER= "realisationNumber",  STAGE= "stage",  SUBPASSAGE= "subPassage", LOTNUMBER= "lotNumber" }

export interface FormState {
  product: FormStep,
  realisationNumber: FormStep,
  lotNumber: FormStep,
  stage: FormStep,
  subPassage: FormStep,
  submitting: boolean,
  currentStep: StepName
}