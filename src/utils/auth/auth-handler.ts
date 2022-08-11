import nextConnect from "next-connect";
import localpassport from "@/utils/auth/strategies/local";
import Cors from "cors";

module handlers {
  const config = {
    onError: (err, req, res, next) => {
      if (err.code !== undefined) {
        res.status(err.code);
      }
      res.end(err.message);
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Not found");
    },
  };
  export function handle() {
    return nextConnect(config)
      .use(Cors({ methods: ["GET", "POST", "PATCH", "DELETE"] }))
      .use(localpassport().authenticate());
  }
}

export default handlers;
