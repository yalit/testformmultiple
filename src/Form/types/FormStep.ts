import { Product } from "../components/FormStepProduct";
import { StepName } from "../state/FormState";

export enum FormStepStatus {
  DRAFT= "draft",
  VALIDATED="validated"
}

export interface FormStep {
  name: StepName,
  title: string,
  value: Product | string | boolean,
  initialValue: any,
  status: FormStepStatus,
  visible: boolean,
  previousStep?: StepName,
  nextStep?: StepName,
  current: boolean
}