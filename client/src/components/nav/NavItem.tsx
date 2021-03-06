import {useBreakpointValue, Box, Text, Flex } from '@chakra-ui/react';
import { ComponentWithAs } from '@chakra-ui/system';
import { IconProps, Icon } from '@chakra-ui/icon';
import React from 'react';

interface INavItem {
    name: string,
    icon: React.ReactElement
}

function NavItem(props: INavItem) {

    const showText = useBreakpointValue({ sm: false, md: true })
    
    return (
        <Flex alignItems="center">
            <Box>
                {props.icon}
            </Box>
            {showText?
                <Box mr={["16px"]} ml={["20px"]}>
                    <Text fontWeight={400} fontSize={"20px"}>{props.name}</Text>
                </Box>
                : null
            }
            </Flex>
    ) 
}

export default NavItem;