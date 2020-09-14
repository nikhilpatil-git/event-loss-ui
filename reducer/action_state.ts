export type EventState = {
    peril?: string;
    region?: string;
    loss?: number;
    error?: string;
    isLoading?: boolean;
    isResponseAvailable?: boolean;
    serverResponse?: string;
};
export const InitialEventState: EventState = {};


export type EventAction =
  | {
      type: "UpdatePeril";
      result: string;
    }
  | {
      type: "UpdateRegion";
      result: string;
    }
  | {
        type: "UpdateLoss";
        result: number;
    }
  | {
        type: "ServerError";
        result: string;
    }  
  | {
      type: "IsLoading";
      result: boolean;
    }  
  | {
      type: "ServerResponse";
      status: boolean;
      result: string;
    }   