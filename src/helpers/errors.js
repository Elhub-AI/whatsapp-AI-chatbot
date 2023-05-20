export const handleError = ({ res, error }) => {
  res.writeHead(400, { "Content-Type": "application/json" });
  res.end({ error });
};
