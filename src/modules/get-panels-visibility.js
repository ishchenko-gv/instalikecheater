import validateSourceSelector from './validators/validate-source-selector';

export default function (state) {
  return {
    isActionParametersSetterVisible: validateSourceSelector(state)
  }
}
