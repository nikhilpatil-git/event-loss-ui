import { EventState } from "./reducer/action_state";

export const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export async function postData(body) {
    const response = await fetch('https://localhost:8080/calculateLoss', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    return response;
  }

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