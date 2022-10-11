import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
            direction='row'
            mt='8'
            justify='space-between'
            align='center'
            spacing='6'
        >
            <Box>
                <strong>1</strong> de <strong>3</strong>
            </Box>
            <Stack direction='row' spacing='2'>
               <PaginationItem numberPage="1" IsCurrent={true}/>
               <PaginationItem numberPage="2" />
               <PaginationItem numberPage="3" />
            </Stack>
        </Stack>
    )
}