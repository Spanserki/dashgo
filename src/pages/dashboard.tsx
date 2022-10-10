import { Header } from "../components/Header";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: any = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enable: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show:false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime' as 'datetime',
        axisBorder: {
            color: theme.colors.gray[500]
        },
        axisTicks: {
            color: theme.colors.gray[500]
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};

const series = [
    {name: 'series1', data: [31, 120, 18, 22, 35, 40]}
];

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex
                w="100%"
                my="6"
                maxW={1480}
                mx="auto"
                px="6"
                
            >
                <SideBar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        h='100%'
                    >
                        <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                        <Chart type="area" options={options} series={series} height={160}/>
                    </Box>

                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        h='100%'
                    >
                        <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                        <Chart type="area" options={options} series={series} height={160}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}