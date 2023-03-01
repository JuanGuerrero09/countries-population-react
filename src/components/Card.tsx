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
// @ts-ignore
import numberSeparator from "number-separator";

type InnerValuesParams = {
  value?: number | string;
  valueType: string;
};

const GameButtons = () => {
  const {
    firstCountry,
    secondCountry,
    question,
    currentScore,
    correctAnswerSelected,
    wrongAnswerSelected,
    gameOver,
    maxScore,
  } = useContext(GameContext);
  function handleQuestion(event: React.MouseEvent<HTMLButtonElement>) {
    const answer = (event.target as HTMLButtonElement).value;
    const isAnswerCorrect =
      (firstCountry[question] >= secondCountry[question] &&
        answer === "less") ||
      (firstCountry[question] <= secondCountry[question] && answer === "more");
    console.log(isAnswerCorrect);
    if (isAnswerCorrect) {
      correctAnswerSelected({
        firstCountry,
        secondCountry,
        currentScore,
        question,
      });
    }
    if (!isAnswerCorrect) {
      wrongAnswerSelected({ gameOver, currentScore, maxScore });
    }
  }
  return (
    <>
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
    </>
  );
};

const RestartButton = () => {
  const { resetGame } = useContext(GameContext);
  function handleRestart() {
    resetGame();
  }
  return (
    <Button
      className="mb-2"
      color="white"
      variant="solid"
      colorScheme="green"
      onClick={handleRestart}
    >
      Restart Game
    </Button>
  );
};

const InnerOne = ({ value, valueType }: InnerValuesParams) => {
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      <Text color="blue.600" fontSize="3xl">
        {numberSeparator(value)}
      </Text>
      <Text fontSize="xl">{valueType}</Text>
    </div>
  );
};
const InnerTwo = ({ valueType }: InnerValuesParams) => {
  const { gameOver } = useContext(GameContext);
  return (
    <div className="textCard flex flex-col items-center font-semibold">
      {gameOver ? <RestartButton /> : <GameButtons />}
      {!gameOver && <Text fontSize="xl">{valueType}</Text>}
    </div>
  );
};

export default function Card({ country, type }: any) {
  const { name, flag } = country;
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
        minH="sm"
        maxW="100%"
        className="shadow-inner mt-2 flex flex-col justify-between max-w-full w-96"
        border="1px"
        borderColor="gray.300"
        padding={2}
      >
        <div className="head p-2">
          <Heading className="flex justify-center p-1" size="lg">
            {name}
          </Heading>
          <Text className="flex justify-center" fontSize="lg" as="b">
            Has
          </Text>
        </div>

        <Image maxH="56" src={flag.src} alt={flag.alt} borderRadius="lg" />

        <div className="bottom mt-2">
          {type === "one" ? (
            <InnerOne value={value} valueType={valueType} />
          ) : (
            <InnerTwo valueType={valueType} />
          )}
        </div>
      </CardEl>
    </>
  );
}
