import { Module } from "@nestjs/common";
import { SimulatorService } from "./simulator.service";
import { SimulatorController } from "./simulator.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Simulator, SimulatorSchema } from "./schemas/simulator.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Simulator.name, schema: SimulatorSchema },
    ]),
  ],
  controllers: [SimulatorController],
  providers: [SimulatorService],
})
export class SimulatorModule {}
