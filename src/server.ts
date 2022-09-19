import http from "http";
import { main } from ".";

const app = http.createServer((req, res) => {
  const url = req.url;
  const DEFAULT_HEADER = { "Content-Type": "application/json" };

  if (url === "/screenshot" && req.method === "GET") {
    res.writeHead(200, DEFAULT_HEADER);
    main();
    res.write("tasks started, check the screenshots folder");
    return res.end();
  }

  res.writeHead(200, DEFAULT_HEADER);
  res.write(
    JSON.stringify({
      status: 200,
      message: `Cannot GET ${url}`,
    })
  );
  return res.end();
});

app.listen(5000, () => {
  console.log("server is listen on port 5000");
});
