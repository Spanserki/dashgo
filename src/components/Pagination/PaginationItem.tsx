import { Button } from "@chakra-ui/react";

interface PaginationProps {
    IsCurrent?: boolean;
    numberPage: string;
}

export function PaginationItem({IsCurrent = false, numberPage}: PaginationProps) {
        if (IsCurrent) {
            return (
                 <Button 
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='teal'
                disabled
                _disabled={{
                    bgColor: 'teal.00',
                    cursor: 'default',
                }}
            >
                {numberPage}
            </Button>
            )
           
        }
            return (
                <Button
                size='sm'
                fontSize='xs'
                width='4'
                bgColor='gray.700'
                _hover={{
                    bg: 'gray.500'
                }}
            >
                {numberPage}
            </Button>
            )    
}