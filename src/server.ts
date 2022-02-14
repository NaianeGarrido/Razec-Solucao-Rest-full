import "dotenv/config";
import App from "./shared/infra/http/app";

const port = 3000;

App.start(port, () => {
  console.log(`Listen in port: ${port}`);
});
