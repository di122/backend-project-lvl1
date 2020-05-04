const randomInteger = (min, max) => {
  if (min !== undefined && max !== undefined) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return Math.ceil(Math.random() * 100);
};

export default randomInteger;
