import React, {useState, useEffect, useRef} from 'react';
import gameFieldService from "./gameFieldService";
import './gameField.css';
import Snake from "./snake";
import Food from "./food";
import {snakeDotsData, snakeDotsDataSmall} from "../../constants/snakeDotsData";
import {useInterval} from "../../customHooks/useInterval";
import {GameContent} from "../gameBlock/gameContent";
import {useKeyCode} from "../../customHooks/useKeyCode";
import {ScoreSparks} from "../icons/scoreSparks/scoreSparks";

const GameField = () => {
  const [food, setFood] = useState(gameFieldService.getRandomCoordinates(true));
  const [direction, setDirection] = useState('RIGHT');
  const [snakeSpeed, setSnakeSpeed] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [snakeDots, setSnakeDots] = useState(width > 1260 ? snakeDotsData : snakeDotsDataSmall);
  const [endGameScore, setEndGameScore] = useState(0);
  const snakeLength = 4;
  const score = snakeDots.length - snakeLength;
  const GAME_START_TEXT = "Нажмите пробел на клавиатуре, чтобы начать играть";

  useEffect(() => {
    document.onkeydown = onKeyDown;
  },[]);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const onKeyDown = (e) => {
    let { keyCode } = e;
    gameFieldService.keyCodeSwitch(keyCode, setDirection);
  }

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = gameFieldService.directionSwitch(direction, dots);

    dots.push(head);
    dots.shift();
    setSnakeDots(() => dots);
  }

  const onGameOver = () => {
    setGameOver(() => true);
    setDirection(() => 'RIGHT');
    setSnakeDots(() => width > 1260 ? snakeDotsData : snakeDotsDataSmall);
    setEndGameScore(() => score)

    setGameStart(false);
    setSnakeSpeed(() => null);
  }

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length -1];
    if(width > 1260) {
      if(head[0] >= 571 || head[1] >= 511 || head[0] < 0 || head[1] < 0) {
        onGameOver();
      }
    } else {
      if(head[0] >= 481 || head[1] >= 421 || head[0] < 0 || head[1] < 0) {
        onGameOver();
      }
    }
  }

  const checkCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]){
        onGameOver();
      }
    })
  }

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([])
    setSnakeDots(() => newSnake)
  }

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length -1];
    if(head[0] === food[0] && head[1] === food[1]){
      setFood(() => width > 1260 ?
        gameFieldService.getRandomCoordinates() :
        gameFieldService.getRandomCoordinates(true))
      enlargeSnake();
    }
  }

  useKeyCode(32, () => {
    setGameStart('none');
    setSnakeSpeed(() => 200);
    setGameOver(() => false);
  });

  useInterval(moveSnake, snakeSpeed);
  useInterval(checkIfOutOfBorders, 100)
  useInterval(checkCollapsed, 100)
  useInterval(checkIfEat, 100);
  return (
    <GameContent score={score} gameOver={gameOver}>
      <div className="game-field" >
        {!gameOver && <Snake snakeDots={snakeDots}/>}
        {!gameStart ? <div className="game-field-message">{GAME_START_TEXT}</div> :  <Food food={food}/>}
        { gameOver && <div className="score-container">
          <div className="game-field-message">{GAME_START_TEXT}</div>
          <ScoreSparks score={endGameScore}/>
        </div>}
      </div>
    </GameContent>
  );
}

export default GameField;
