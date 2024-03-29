import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { Profile } from "./schemas/profile.schema";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProfileDto: UpdateProfileDto
  ): Promise<Profile> {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Profile> {
    return this.profileService.remove(id);
  }
}
