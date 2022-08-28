import { StepName } from "../state/FormState";
import { FormStep, FormStepStatus } from "./FormStep";

export function create(
    name: StepName, 
    title: string,
    initialValue: any, 
    previousStep?: StepName,
    nextStep?: StepName,
    visible: boolean = false,
    current: boolean = false
): FormStep {
    return {
        name,
        title,
        value: initialValue,
        initialValue, 
        visible,
        status: FormStepStatus.DRAFT,
        previousStep,
        nextStep,
        current
    }
}