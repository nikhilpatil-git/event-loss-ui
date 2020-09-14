import { Reducer } from "react";
import { EventState, EventAction } from "./action_state";

export const EventReducer: Reducer<EventState, EventAction> = (
  eventState: EventState,
  eventAction: EventAction
) => {
  let newState: EventState = { ...eventState };
  switch (eventAction.type) {
    case "UpdatePeril":
      newState.peril = eventAction.result;
      return newState;
    case "UpdateRegion":
      newState.region = eventAction.result;
      return newState;
    case "UpdateLoss":
      newState.loss = eventAction.result;
      return newState;
    case "ServerError":
      newState.error = eventAction.result;
      return newState;
    case "IsLoading":
      newState.isLoading = eventAction.result;
      return newState;
    case "ServerResponse":
      newState.isResponseAvailable = eventAction.status;
      newState.serverResponse = eventAction.result;
      return newState; 
    default:
      throw new Error("Event Action not found");
  }
};
