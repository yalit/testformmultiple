import React, {  useReducer } from "react";
import { formReducer } from "../state/FormReducer";
import { FormState, StepName } from "../state/FormState";
import { FormActionType } from "../state/FormAction";
import { create } from "../types/FormStepFactory";
import FormStepProduct, { defaultProduct } from "./FormStepProduct";
import { FormStepItem } from "./FormStepItem";

const formInitialState: FormState = {
  submitting: false,
  product: create(StepName.PRODUCT, "Choose the product", defaultProduct, undefined, StepName.REALISATIONNUMBER,true, true),
  realisationNumber:  create(StepName.REALISATIONNUMBER, "How many realisations needed ?", 0, StepName.PRODUCT, StepName.LOTNUMBER),
  lotNumber:  create(StepName.LOTNUMBER, "Define the lot number", 0, StepName.REALISATIONNUMBER, StepName.STAGE),
  stage:  create(StepName.STAGE, "Which Stage ?" , "", StepName.LOTNUMBER, StepName.SUBPASSAGE),
  subPassage: create(StepName.SUBPASSAGE, "Is there a sub-pasage needed ?", false, StepName.STAGE, undefined),
  currentStep: StepName.PRODUCT
}

export default function FormWithMultipleSteps() {
  const [state, dispatch] = useReducer(formReducer, formInitialState)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <form>
        <FormStepItem formStep={state.product} number={1} dispatch={dispatch} key="step_1">
          <FormStepProduct formStep={state.product} number={1} dispatch={dispatch} />
        </FormStepItem>
        <FormStepItem formStep={state.realisationNumber} number={2} dispatch={dispatch}>
          <div className="p-4 -mt-0 5">TBD...</div>
        </FormStepItem>
      </form>
      <div className="form__navigation mt-3 flex justify-between p-3 invisible">
        <button onClick={() => dispatch({type: FormActionType.previous})}>Previous</button>
        <button onClick={() => dispatch({type: FormActionType.next})}>Next</button>
      </div>
    </div>
  )
}