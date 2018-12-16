export default function validateSourceSelector (state) {
  return Boolean(state.taskWizard.sourceSelector.selectedSource);
}
