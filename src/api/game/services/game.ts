/**
 * game service
 */
import axios from "axios";
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::game.game", () => ({
  async populate(params) {
    const {
      data: { products },
    } = await axios.get(
      `https://www.gog.com/games/ajax/filtered?mediaType=game?sort=rating`
    );

    console.log({ products });
  },
}));
