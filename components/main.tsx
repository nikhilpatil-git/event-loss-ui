import {
  Grid,
  Button,
  useToast,
} from "@chakra-ui/core";
import axios from "axios";
import { CustomInput } from "./input";
import { Peril } from "./peril";
import { Region } from "./region";
import { EventState, EventAction } from "../reducer/action_state";
import { useContext, useEffect } from "react";
import { EventStateContext, EventReducerContext } from "../pages";
import { ResponseModal } from "./response_modal";
import { IsRequestValid } from "../util";

export const Main = () => {
  const state: EventState = useContext(EventStateContext);
  const dispatch: React.Dispatch<EventAction> = useContext(EventReducerContext);
  const toast = useToast();
  useEffect(() => {
    if (state.error && state.error.length > 0) {
        toast({
        title: `Operation Failed`,
        description: state.error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch({type:"ServerError", result: ""})      
    }
  }, [state.error]);

  const submitData = async () => {
    if(IsRequestValid(state)){
      dispatch({type:"IsLoading", result: true});
      await axios.post(
        'https://cors-anywhere.herokuapp.com/'+'https://event-loss.herokuapp.com/calculateLoss',
        {"peril": state.peril,
        "region": state.region,
        "loss": state.loss
      },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        const responseString = JSON.stringify(response.data);
        dispatch({type:"ServerResponse", status: true, result: responseString})      
      })
      .catch((error) => {
        let message = error.message;
        if (error.response) {
          message = error.response.data;
        }       
        dispatch({type:"ServerError", result: `${message}`});
      })
      .finally(() =>  dispatch({type:"IsLoading", result: false})); 
    }else {
       dispatch({type:"ServerError", result: "Please provide complete information"})
    }  
  }  

  return (
<>
<ResponseModal />
<Grid templateColumns="250px" templateRows="repeat(2, 80px) 150px 50px">
      <Peril />
      <Region />
      <CustomInput />
      <Button 
      onClick={submitData}
      variantColor="green">Submit</Button>
    </Grid>
</>
  );
};
