exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: "short"
  };

  return today.toLocaleDateString("pt-BR", options);
};

exports.getYear = () => {
  const year = new Date().getFullYear();

  return year;
};
