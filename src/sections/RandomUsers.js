import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import { Box, Button, Text, Center, Image } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { BiUserCircle, BiEnvelope, BiCalendar, BiPhone, BiLock } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
export default function RandomUsers() {
    let formatDate = (theDate) => {
        let birthday = new Date(theDate);
        return " " + birthday.getDay() + "/" + birthday.getMonth() + "/" + birthday.getFullYear()
    }
    return (
        <Box>
            <Text textStyle="h1" color="gray.800">Random Users</Text>
            <Text textAlign="center" m={5}>Play with my random user generator</Text>
            <Get url="https://randomuser.me/api/">
                {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                        return (<Box>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></Box>)
                    }
                    else if(isLoading) {
                        return (
                            <Box>
                                <Button
                                    isLoading
                                    colorScheme="white"
                                    bg="green.800"
                                >
                                </Button>
                            </Box>
                        )
                    }
                    else if(response !== null) {
                        console.log(response.data.results)
                        return (
                            <Box>
                                <Button 
                                    onClick={() => makeRequest({ params: { refresh: true } })}
                                    colorScheme="green.800" 
                                    variant="outline"
                                >
                                        Generate
                                </Button>

                                {response.data.results.map(result =>
                                    <>
                                        <Center color="gray.800" key={result.id} flexDirection="column">
                                            <Image src={result.picture.large} borderRadius="50%" alt={result.name.first + " " +  result.name.last}/>
                                        </Center> 

                                        <Tabs variant="enclosed" colorScheme="teal.800" mt={5}>
                                            <TabList bg="green.800" color="white" fontSize={25}
                                                borderBottomRadius={30}
                                            >
                                                <Tab _selected={{color: "green.800", bg: "white"}}><BiUserCircle /></Tab>
                                                <Tab _selected={{color: "green.800", bg: "white"}}><BiEnvelope /></Tab>
                                                <Tab _selected={{color: "green.800", bg: "white"}}><BiCalendar /></Tab>
                                                <Tab _selected={{color: "green.800", bg: "white"}}><IoLocationOutline /></Tab>
                                                <Tab _selected={{color: "green.800", bg: "white"}}><BiPhone /></Tab>
                                                <Tab _selected={{color: "green.800", bg: "white"}}><BiLock /></Tab>
                                            </TabList>
                                            <TabPanels>
                                                <TabPanel>
                                                    <Text textAlign="center">
                                                        I am {result.name.title + " " + result.name.first + " " +  result.name.last}
                                                    </Text>
                                                </TabPanel>
                                                <TabPanel>
                                                <Text textAlign="center">My email is {result.email}</Text>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Text textAlign="center">
                                                        My birthday is 
                                                        {
                                                            formatDate(result.dob.date)
                                                        }
                                                    </Text>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Text textAlign="center">
                                                        My address is 
                                                        {" " + result.location.street.number + " " + result.location.street.name + ";\n"}
                                                        { result.location.city + "/" + result.location.country}
                                                    </Text>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Text textAlign="center">
                                                        My Phone is {" " + result.phone}
                                                    </Text>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Text textAlign="center">
                                                        My password is { " " + result.login.password}
                                                    </Text>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                    </>
                                )}
                            </Box>
                        )
                    }
                    return (<Box>Default message before request is made.</Box>)
                }}
            </Get>

            
        </Box>
    );
}