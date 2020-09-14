import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/core";
import { useState, FC, useEffect, useContext } from "react";
import { EventAction } from "../reducer/action_state";
import { EventReducerContext } from "../pages";

export const CustomInput = () => {
  const [value, setValue] = useState(0);  
  const handleChange = event => setValue(event.target.value);
  const dispatch: React.Dispatch<EventAction> = useContext(EventReducerContext);

  useEffect(() => {
    if(value){
      dispatch({type:"UpdateLoss", result:value})
    }
  }, [value]);

    return (<FormControl>
    <FormLabel htmlFor="loss">Enter Loss Amount</FormLabel>
    <Input value={value} onChange={handleChange} type="number" id="loss" aria-describedby="loss-helper-text" />
    <FormHelperText id="loss-helper-text">
      Maximum amount you can claim is 1M.
    </FormHelperText>
  </FormControl>);
}