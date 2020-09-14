import { Heading, Box, Grid } from "@chakra-ui/core";
import { SimpleGrid } from "@chakra-ui/core";
import { Main } from "./components/main";
import { Header } from "./components/header";
import { InitialEventState, EventAction, EventState } from "./reducer/action_state";
import { Context, createContext, useReducer, Reducer } from "react";
import { EventReducer } from './reducer/event_reducer';
import { Layout } from "./components/layout";

export const EventStateContext: Context<EventState> = createContext(
  InitialEventState
);
export const EventReducerContext = createContext(
  (() => 0) as React.Dispatch<EventAction>
);

export default function Home() {

  const [state, dispatch] = useReducer<Reducer<EventState, EventAction>>(
    EventReducer,
    InitialEventState
  );

  return (
    <EventReducerContext.Provider value={dispatch}>
    <EventStateContext.Provider value={state}>     
      <Layout />
    </EventStateContext.Provider>
     </EventReducerContext.Provider>     
  )
}
