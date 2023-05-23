import { Injectable } from "@nestjs/common";
import { CreateFavoriteDto } from "./dto/create-favorite.dto";
import { UpdateFavoriteDto } from "./dto/update-favorite.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Favorite } from "./schemas/favorite.schema";

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name) private readonly favoriteModel: Model<Favorite>
  ) {}

  create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    const createProfile = new this.favoriteModel(createFavoriteDto);
    return createProfile.save();
  }

  findAll(): Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }

  findOne(id: string): Promise<Favorite> {
    return this.favoriteModel.findById(id).exec();
  }

  findByProfileId(profileId: string): Promise<Favorite[]> {
    const query = { profile_id: profileId };
    return this.favoriteModel.find(query).exec();
  }

  update(id: string, updateFavoriteDto: UpdateFavoriteDto): Promise<Favorite> {
    return this.favoriteModel
      .findByIdAndUpdate(id, updateFavoriteDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Favorite> {
    return this.favoriteModel.findByIdAndRemove(id).exec();
  }
}
