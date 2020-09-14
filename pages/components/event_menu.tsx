import {
  Menu,
  MenuButton,
  IconButton,
  Button,
  MenuList,
  MenuItem,
  Grid,
  Text,
  Icon,
} from "@chakra-ui/core";
import { BsCaretDownFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { CORS_PROXY } from "../util";

interface IProps {
  title: string;
  data: string[];
  onClickCallback: (value: string) => void;
}

export const EventMenu: React.FC<IProps> = ({ ...props }) => {
    const [defaultValue, setDefaultValue] = useState(props.title);

  const menuItems = () => {
    return props.data.map((data: string, index: number) => {
      return <MenuItem textAlign="left" key={index} onClick={() => {
        setDefaultValue(data);
        props.onClickCallback(data);
      }}>
        {data}
      </MenuItem>;
    });
  };
  return (
    <Menu>
      <MenuButton
      as={Button} 
       px={4}
       py={2}
       borderWidth="1px"
       _hover={{ bg: "gray.100" }}
       _expanded={{ bg: "red.200" }}
       _focus={{ outline: 0, boxShadow: "outline" }}
       >
          {defaultValue} <Icon ml="5px" name="chevron-down" />
      </MenuButton>
      <MenuList>{menuItems}</MenuList>
    </Menu>    
  );
};
