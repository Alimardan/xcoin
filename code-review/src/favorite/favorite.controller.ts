import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { CreateFavoriteDto } from "./dto/create-favorite.dto";
import { UpdateFavoriteDto } from "./dto/update-favorite.dto";
import { Favorite } from "./schemas/favorite.schema";

@Controller("favorite")
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  findAll(): Promise<Favorite[]> {
    return this.favoriteService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Favorite> {
    return this.favoriteService.findOne(id);
  }

  @Get("/byProfile/:profile_id")
  findByProfileId(@Param("profile_id") profileId: string): Promise<Favorite[]> {
    return this.favoriteService.findByProfileId(profileId);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateFavoriteDto: UpdateFavoriteDto
  ): Promise<Favorite> {
    return this.favoriteService.update(id, updateFavoriteDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Favorite> {
    return this.favoriteService.remove(id);
  }
}
