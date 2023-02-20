import React from "react";
import {
  Card as CardEl,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Text,
  Image,
} from "@chakra-ui/react";
import countryOne from "../mocks/countryOne.json";
import { getCountries } from "../services/countries";

const InnerOne = () => {
  const { name, population, area } = countryOne;
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      <Text color="blue.600" fontSize="3xl">
        {population}
      </Text>
      <Text fontSize="xl">Habitants</Text>
    </div>
  );
};
const InnerTwo = () => {
  const { name, population, area } = countryOne;
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="blue">
          Less
        </Button>
        <Button variant="solid" colorScheme="blue">
          More
        </Button>
      </ButtonGroup>
      <Text fontSize="xl">Habitants</Text>
    </div>
  );
};

export default function Card({ country, type }: any) {
  const { name, population, area, continents, flags } = country;
  return (
    <>
      <CardEl
        maxW="sm"
        className="shadow-inner mt-2"
        border="1px"
        borderColor="gray.300"
      >
        <Heading className="flex justify-center p-1" size="lg">
          {name.official}
        </Heading>
        <Text className="flex justify-center" fontSize="lg" as="b">
          Has
        </Text>
        <Image src={flags.svg} alt={flags.alt} borderRadius="lg" />
        {type === "one" ? <InnerOne /> : <InnerTwo />}
      </CardEl>
    </>
  );
}
