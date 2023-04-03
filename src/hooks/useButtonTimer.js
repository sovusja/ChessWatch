const useButtonTimer = (props) => {
  const { value, gameDuration, setGameDuration, activeTimerId } = props;

  const clickHandler = () => {
    if (activeTimerId) {
      return;
    }
    setGameDuration(value);
  };

  const activeClass =
    value === gameDuration
      ? "button_timer button_timer__active"
      : "button_timer";

  return { clickHandler, activeClass };
};

export default useButtonTimer;
