const useButtonControl = (props) => {
  const { id, setActiveTimerId, activeTimerId, setWinner } = props;

  const clickHandler = () => {
    setActiveTimerId(id);
    setWinner(null);
  };

  const activeClass =
    id === activeTimerId
      ? "button_control button_control__active"
      : "button_control";

  return { clickHandler, activeClass };
};

export default useButtonControl;
