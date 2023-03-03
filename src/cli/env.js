const parseEnv = () => {
  const args = Object.entries(process.env)
    .reduce((acc, [key, value]) => {
      if (value.startsWith("--")) {
        const formattedProp = `${key}=${value}`;
        return [...acc, formattedProp];
      }
      return acc;
    }, [])
    .join(", ");
  console.log(args);
};

parseEnv();
