import { Injectable } from "@nestjs/common";
import { CreateSimulatorDto } from "./dto/create-simulator.dto";
import { UpdateSimulatorDto } from "./dto/update-simulator.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Simulator } from "./schemas/simulator.schema";
var ObjectId = require("mongoose").Types.ObjectId;

@Injectable()
export class SimulatorService {
  constructor(
    @InjectModel(Simulator.name)
    private readonly simulatorModel: Model<Simulator>
  ) {}

  create(createSimulatorDto: CreateSimulatorDto): Promise<Simulator> {
    const createProfile = new this.simulatorModel(createSimulatorDto);
    return createProfile.save();
  }

  findAll(): Promise<Simulator[]> {
    return this.simulatorModel.find().exec();
  }

  findOne(id: string): Promise<Simulator> {
    return this.simulatorModel.findById(id).exec();
  }

  findByProfileId(profileId: string): Promise<Simulator[]> {
    var query = { profile_id: new ObjectId(profileId) };
    const result = this.simulatorModel.find(query).exec();
    console.log(query);
    return result;
  }

  update(
    id: string,
    updateSimulatorDto: UpdateSimulatorDto
  ): Promise<Simulator> {
    return this.simulatorModel
      .findByIdAndUpdate(id, updateSimulatorDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Simulator> {
    return this.simulatorModel.findByIdAndRemove(id).exec();
  }
}
