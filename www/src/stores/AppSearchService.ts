import { createToggleState, ToggleUiState } from "./AppStateService";
import { createToggle } from "../utils/toggle";

export class AppSearchService {
  readonly active = createToggleState(ToggleUiState.Close)
  readonly match = createToggle(false);
}
