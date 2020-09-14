import { EventMenu } from "./event_menu";
import { useEffect, useState, useContext } from "react";
import { EventAction } from "../reducer/action_state";
import { EventReducerContext } from "../pages";

export const Region = () => {
  const [data, setData] = useState([]);
  const dispatch: React.Dispatch<EventAction> = useContext(EventReducerContext);

    useEffect(() => {
        fetch('https://event-loss.herokuapp.com/regions')
        .then(res => res.json())
        .then(
          (result) => {
              var names = [];
              result._embedded.regions.map((d) => names.push(d.name));
              setData(names);
          },
          (error) => {
            console.log(error);
          }
        )
      }, []);

    return <EventMenu title="Enter Region" data={data} 
    onClickCallback={(value) => dispatch({type:"UpdateRegion", result:value})} />;
}