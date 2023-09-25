export default {
  routes: [
    {
      method: "GET",
      path: "/properties/bedroomCounts",
      handler: "property.bedroomCounts",
      config: {
        auth: false,
      },
    },
  ],
};
