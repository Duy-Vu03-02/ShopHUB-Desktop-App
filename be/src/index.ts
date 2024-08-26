import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db/index";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import { customUpload } from "./services/ProductServices";

const startApollo = async () => {
  const app = express();
  config();
  connectDB();

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  app.post("/upload", async (req: Request, res: Response) => {
    try {
      const upload = await customUpload();

      upload.array("file-imgs", 30)(req, res, async (err: any) => {
        if (err) {
          console.error("Lỗi khi tải lên tệp:", err);
          return res.status(500).json({ error: "Lỗi khi tải lên tệp" });
        }
        try {
          if (req.files) {
            return res.status(200).json(req.files);
          } else {
            return res
              .status(400)
              .json({ error: "Không có tệp nào được tải lên" });
          }
        } catch (err) {
          console.error("Lỗi khi xử lý yêu cầu:", err);
          return res.status(500).json({ error: "Lỗi khi xử lý yêu cầu" });
        }
      });
    } catch (err) {
      console.error("Lỗi khi xử lý yêu cầu:", err);
      return res.status(500).json({ error: "Lỗi khi xử lý yêu cầu" });
    }
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(8080, () => {
    console.log("Server path: http://localhost:8080" + server.graphqlPath);
  });
};

startApollo().catch((err) => {
  console.error(err);
});
