export default function validateActionSelector (state) {
  return Boolean(state.taskWizard.actionSelector.selectedAction);
}
