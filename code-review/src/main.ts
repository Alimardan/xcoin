import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PORT, CORS_ORIGINS } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: CORS_ORIGINS,
    },
  });
  app.setGlobalPrefix("api/v1");
  await app.listen(PORT);
}

console.log(`✅  Ready on port http://localhost:${PORT}`);
bootstrap();
