import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Profile } from "./schemas/profile.schema";

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>
  ) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createProfile = new this.profileModel(createProfileDto);
    return createProfile.save();
  }

  findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  findOne(id: string): Promise<Profile> {
    return this.profileModel.findById(id).exec();
  }

  update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    return this.profileModel
      .findByIdAndUpdate(id, updateProfileDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Profile> {
    return this.profileModel.findByIdAndRemove(id).exec();
  }
}
