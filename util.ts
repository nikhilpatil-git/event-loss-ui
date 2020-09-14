import { EventState } from "./reducer/action_state";

  export const IsRequestValid = (eventState: EventState) => {
    if(eventState){
        if(eventState.peril && eventState.peril.length > 0
          && eventState.region && eventState.region.length > 0
          && eventState.loss && eventState.loss > 0){
            return true;  
        }
    }
    return false;
  }