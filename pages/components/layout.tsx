import { Box, Grid } from "@chakra-ui/core";
import { Header } from "./header";
import { Main } from "./main";
import LoadingOverlay from "react-loading-overlay";
import { EventState } from "../reducer/action_state";
import { useContext } from "react";
import { EventStateContext } from "..";

export const Layout = () => {
  const state: EventState = useContext(EventStateContext);

  return (
    <LoadingOverlay active={state.isLoading} spinner text="Loading your content...">
      <Box height="100vh" bg="#F2F3F5">
        <Grid
          paddingTop={["20px", "30px", "40px", "80px"]}
          templateRows="100px minmax(400px, auto)"
          justifyContent="center"
        >
          <Header />
          <Main />
        </Grid>
      </Box>
    </LoadingOverlay>
  );
};
