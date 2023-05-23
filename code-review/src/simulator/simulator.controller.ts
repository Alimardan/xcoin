import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SimulatorService } from "./simulator.service";
import { CreateSimulatorDto } from "./dto/create-simulator.dto";
import { UpdateSimulatorDto } from "./dto/update-simulator.dto";
import { Simulator } from "./schemas/simulator.schema";

@Controller("simulator")
export class SimulatorController {
  constructor(private readonly simulatorService: SimulatorService) {}

  @Post()
  create(@Body() createSimulatorDto: CreateSimulatorDto): Promise<Simulator> {
    return this.simulatorService.create(createSimulatorDto);
  }

  @Get()
  findAll(): Promise<Simulator[]> {
    return this.simulatorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Simulator> {
    return this.simulatorService.findOne(id);
  }

  @Get("/byProfile/:profile_id")
  findByProfileId(
    @Param("profile_id") profileId: string
  ): Promise<Simulator[]> {
    console.log("search for profile " + profileId);
    return this.simulatorService.findByProfileId(profileId);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSimulatorDto: UpdateSimulatorDto
  ): Promise<Simulator> {
    return this.simulatorService.update(id, updateSimulatorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Simulator> {
    return this.simulatorService.remove(id);
  }
}
