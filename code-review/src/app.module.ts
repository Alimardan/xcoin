import { PORT, DBURL, CORS_ORIGINS } from "./config";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfileModule } from "./profile/profile.module";
import { FavoriteModule } from "./favorite/favorite.module";
import { SimulatorModule } from './simulator/simulator.module';

@Module({
  imports: [MongooseModule.forRoot(DBURL), ProfileModule, FavoriteModule, SimulatorModule],
})
export class AppModule {}
