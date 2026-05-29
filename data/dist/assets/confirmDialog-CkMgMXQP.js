import { O as inject } from "./index-BXuR6cgv.js";
function useConfirmDialog() {
  return inject("$confirm", void 0);
}
async function askForConfirmation(message, candidate) {
  const confirmDialog = candidate ?? void 0;
  if (confirmDialog) {
    try {
      return await confirmDialog({ message });
    } catch {
      return false;
    }
  }
  return window.confirm(message);
}
export {
  askForConfirmation as a,
  useConfirmDialog as u
};
