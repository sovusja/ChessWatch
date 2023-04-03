const useButtonStop = (props) => {
  const { setActiveTimerId } = props;

  const clickHandler = () => {
    setActiveTimerId(null);
  };

  return { clickHandler };
};

export default useButtonStop;
