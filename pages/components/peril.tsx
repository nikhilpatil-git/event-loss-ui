import { EventMenu } from "./event_menu";
import { useEffect, useState, useContext } from "react";
import { CORS_PROXY } from "../util";
import { EventAction } from "../reducer/action_state";
import { EventReducerContext } from "..";

export const Peril = () => {

    const [data, setData] = useState([]);
    const dispatch: React.Dispatch<EventAction> = useContext(EventReducerContext);

    useEffect(() => {
        fetch('http://localhost:8080/perils')
        .then(res => res.json())
        .then(
          (result) => {
              var names = [];
              result._embedded.perils.map((d) => names.push(d.name));
              setData(names);
          },
          (error) => {
            console.log(error);
          }
        )
      }, []);

    return <EventMenu title="Enter Peril" data={data} 
    onClickCallback={(value) => dispatch({type:"UpdatePeril", result:value})} />;
}