export const handleError = ({ res, errorMessage }) => {
  res.writeHead(400, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ errorMessage }));
};
