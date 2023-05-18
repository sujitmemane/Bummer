import { createServer, Model } from "miragejs";

createServer({
  models: {
    underwears: Model,
  },

  seeds(server) {
    server.create("underwear", {
      id: "1",
      name: "24/7 Men's Tshirt - Skyfall",
      price: 1199,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/bluetshirt3-0715_300x.jpg?v=1683538928",
    });
    server.create("underwear", {
      id: "2",
      name: "24/7 Women's Shorts - Champagne",
      price: 1299,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/offwhiteshorts1-0369_600x.jpg?v=1683359467",
    });
    server.create("underwear", {
      id: "3",
      name: "24/7 Women's Shorts - Afterhours",
      price: 1299,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/blackshorts3-0569_600x.jpg?v=1683355684",
    });
    server.create("underwear", {
      id: "4",
      name: "24/7 Women's Tshirt - Four20",
      price: 1199,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/greentshirt3-0440_600x.jpg?v=1683549199",
    });

    server.create("underwear", {
      id: "5",
      name: "24/7 Men's Tshirt - YOLO",
      price: 1199,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/yellowtshirt5-0241_600x.jpg?v=1683544914",
    });
    server.create("underwear", {
      id: "6",
      name: "24/7 Men's Tshirt - Afterhours",
      price: 1199,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/bluetshirt3-0715_300x.jpg?v=1683538928",
    });
    server.create("underwear", {
      id: "7",
      name: "24/7 Men's Tshirt - Afterhours",
      price: 1299,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/blackshorts3-0205_600x.jpg?v=1683202350",
    });
    server.create("underwear", {
      id: "8",
      name: "Boxers - Chevron",
      price: 599,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/products/1_2_600x.jpg?v=1654855923",
    });
    server.create("underwear", {
      id: "9",
      name: "Trunks - Lazy Luna",
      price: 549,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/products/1_5674703f-d67a-44b3-9b1c-9717accd33ce_720x.webp?v=1656058727",
    });

    server.create("underwear", {
      id: "10",
      name: "Brief - Ski-Patrol",
      price: 355,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/products/BummerCatalogueNov_20-132_clipped_rev_2_e9dd9fc2-7199-4e9c-8d3c-84b98985ba68_600x.jpg?v=1638515713",
    });
    server.create("underwear", {
      id: "11",
      name: "24/7 Women's Tshirt - Afterhours",
      price: 1199,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/blacktshirt4-0528_600x.jpg?v=1683548359",
    });
    server.create("underwear", {
      id: "12",
      name: "24/7 Women's Tshirt - YOLO",
      price: 599,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/yellowtshirt2-0408_600x.jpg?v=1683551064",
    });
    server.create("underwear", {
      id: "13",
      name: "24/7 Women's Shorts - Skyfall",
      price: 1299,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/greenshort2-0486_600x.jpg?v=1683271873",
    });

    server.create("underwear", {
      id: "14",
      name: "24/7 Women's Tshirt - Malibu",
      price: 449,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0231/1448/1744/files/bluetshirt5-0661_600x.jpg?v=1683548006",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/underwears", (schema, request) => {
      return schema.underwears.all();
    });

    this.get("/underwears/:id", (schema, request) => {
      const id = request.params.id;
      return schema.underwears.find(id);
    });
  },
});
