import mongoose from "mongoose";
import _ from "lodash";
import { Model } from "mongoose";

import { Profile, ProfileSchema } from "../profile/schemas/profile.schema";
import {
  Simulator,
  SimulatorSchema,
} from "../simulator/schemas/simulator.schema";
import { Favorite, FavoriteSchema } from "../Favorite/schemas/favorite.schema";
import { DBURL } from "../config";

(async () => {
  console.log("start seeding!");

  mongoose.connect(DBURL, {
    //after mongoose >=6 always these options are true as default and no longer required!
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  const profile = new (mongoose.model(Profile.name, ProfileSchema))({
    name: "John",
    nickname: "Brown",
    email: "John@gmail.com",
    capital: 123,
    divisa: "some text",
    prefered_cryptocurrency: "some text",
  } as Profile);

  console.log(profile);
  const addedProfile = await profile.save();

  // const query = { _id: "6093abb3dfd9da1deeae56f2" };
  // const idProfile = await Profile.findOne(query).then((e) => {
  //   return e?._id;
  // });

  const idProfile = addedProfile.id;

  const simulator = new (mongoose.model(Simulator.name, SimulatorSchema))({
    profile_id: idProfile,
    name: "Some text",
    start_date: new Date("2022/05/01"),
    check_date: new Date("2022/06/15"),
    cryptocurrency: "USDT",
    divisa: "Some text",
    Crypto_price_start: 100,
    Crypto_price_check: 110,
  } as Simulator);
  await simulator.save();

  const favorite = new (mongoose.model(Favorite.name, FavoriteSchema))({
    profile_id: idProfile,
    name: "Name of favorite",
    favorite1: "favorite1",
    favorite2: "favorite1",
    favorite3: "favorite1",
  });
  await favorite.save();

  mongoose.disconnect();
})();
