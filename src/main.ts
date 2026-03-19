import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import helmet from "helmet";
import "dotenv/config";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";

async function bootstrap() {
  const PORT = process.env.PORT;

  if (!PORT) throw new Error("PORT is undefined");
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({
    origin: ["https://ltu-client.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "pragma",
      "expires",
    ],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(PORT, "0.0.0.0");
}
bootstrap().catch((err) => {
  console.log(err);
  process.exit();
});
