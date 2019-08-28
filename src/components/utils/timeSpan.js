const timeSpanner = () => {
  const single_max = 9000;
  const single_min = 7000;
  const double_max = 3000;
  const double_min = 1000;
  const percent_double = 0.4;
  var max = double_max;
  var min = double_min;
  var msg = "";
  if (Math.random() < percent_double) {
    msg = "double";
  } else {
    max = single_max;
    min = single_min;
    msg = "single";
  }
  const timer = Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(msg, timer);
  return timer;

  // var timeout = setTimeout(randoTimerClaudia, 3000);
};
// randoTimerClaudia();

export default timeSpanner;
