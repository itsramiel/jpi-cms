/**
 * property controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::property.property",
  ({ strapi }) => ({
    async bedroomCounts(ctx) {
      try {
        const locale = ctx.request.query.locale;
        const db = strapi.db.connection;

        let query = db("properties").distinct("bedroom_count");
        if (locale) {
          query = query.where("locale", locale);
        }

        const distinctBedroomCounts = await query;
        ctx.body = (distinctBedroomCounts ?? []).map(
          (item) => item.bedroom_count
        );
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
