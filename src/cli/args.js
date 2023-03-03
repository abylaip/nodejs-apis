const parseArgs = () => {
  const args = process.argv
    .reduce((acc, value, index, array) => {
      if (value.startsWith("--")) {
        const formattedProp = `${value.replace("--", "")} is ${
          array[index + 1]
        }`;
        return [...acc, formattedProp];
      }
      return acc;
    }, [])
    .join(", ");
  console.log(args);
};

parseArgs();
