import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  List,
  ListItem,
} from "@chakra-ui/core";
import { EventState, EventAction } from "../reducer/action_state";
import { useContext, useState } from "react";
import { EventStateContext, EventReducerContext } from "../pages";

export const ResponseModal = () => {
  const state: EventState = useContext(EventStateContext);
  const dispatch: React.Dispatch<EventAction> = useContext(EventReducerContext);
  const [] = useState(state.isResponseAvailable);
  const ResponseMessage = () => {
    if (state.serverResponse) {
      let data = JSON.parse(state.serverResponse);
      return data.dealLosses.map((deal: any, index: number) => (
        <ListItem key={index}>
          <Text mt={4}>
            Event has affected {deal.dealId} and the reinsurance company's loss
            is {deal.dealLoss}
          </Text>
        </ListItem>
      ));
    }
    return <Text mt={4}>No Data Found</Text>;
  };

  return (
    <Modal isOpen={state.isResponseAvailable}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Loss By Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List styleType="none">
            <ResponseMessage />
          </List>
        </ModalBody>
        <ModalFooter>
          <Button
            variantColor="blue"
            mr={3}
            onClick={() =>
              dispatch({ type: "ServerResponse", status: false, result: "" })
            }
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
