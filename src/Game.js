const observe = receive => {
  setInterval(
    () =>
      receive([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]),
    1000
  );
};

export default observe;
