import {
  Card as CardEl,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Image,
} from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";
import { useContext } from "react";
import { getCountries } from "../services/countries";
type InnerValuesParams = {
  value?: number | string;
  valueType: string;
};

const InnerOne = ({ value, valueType }: InnerValuesParams) => {
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      <Text color="blue.600" fontSize="3xl">
        {value}
      </Text>
      <Text fontSize="xl">{valueType}</Text>
    </div>
  );
};
const InnerTwo = ({ valueType }: InnerValuesParams) => {
  const { handleQuestion } = useContext(GameContext);
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      <ButtonGroup spacing="2">
        <Button
          value="less"
          onClick={handleQuestion}
          variant="solid"
          colorScheme="blue"
        >
          Less
        </Button>
        <Button
          value="more"
          onClick={handleQuestion}
          variant="solid"
          colorScheme="blue"
        >
          More
        </Button>
      </ButtonGroup>
      <Text fontSize="xl">{valueType}</Text>
    </div>
  );
};

export default function Card({ country, type }: any) {
  const { name, flags } = country;
  const { question } = useContext(GameContext);
  const value = country[question];
  let valueType = "";
  if (question === "area") {
    valueType = "km2 of territory";
  }
  if (question === "population") {
    valueType = "Habitants";
  }
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
        {type === "one" ? (
          <InnerOne value={value} valueType={valueType} />
        ) : (
          <InnerTwo valueType={valueType} />
        )}
      </CardEl>
    </>
  );
}
