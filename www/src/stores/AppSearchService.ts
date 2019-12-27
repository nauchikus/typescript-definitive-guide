import { createToggleState, ToggleUiState } from "./AppStateService";
import { createToggle } from "../utils/toggle";

export default {
  active:createToggleState(ToggleUiState.Close),
  match:createToggle(false)
};