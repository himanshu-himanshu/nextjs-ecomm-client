import uuid from "react-uuid";

export const products = [
  {
    id: "7bdf17fb-63de-4e32-a3e9-d93f1fc2e891",
    category: "Hoodie",
    title: "Black Hoodie",
    brand: "Nike",
    price: 50,
    trending: true,
    image:
      "https://warsawsneakerstore.com/storage/media/f1000/2023/nike/218365/nike-solo-swoosh-fleece-hoodie-white-dx1355-051-64e4bc1badc40.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4,
  },
  {
    id: "a0d25d6a-fc0b-4e51-8550-0658e1602ba5",
    category: "Sweater",
    title: "Sweater",
    brand: "Guess",
    price: 90,
    trending: false,
    image:
      "https://brogiabbigliamento.it/178914-superlarge_default/guess-mens-cable-knith-sweater.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.5,
  },
  {
    id: "e8a526f1-0e6f-4f79-a8d3-9b8f3e4f0843",
    category: "T-Shirt",
    title: "Printed T-Shirt",
    brand: "Gap",
    price: 50,
    trending: true,
    image:
      "https://rustans.com/cdn/shop/products/2698404.jpg?v=1601344765&width=1400",
    type: "Clothing",
    gender: "men",
    rating: 3.2,
  },
  {
    id: "3907b150-1a95-45c8-94d7-d0c96ec58d7d",
    category: "Sweater",
    title: "Blue Sweater",
    brand: "Gap",
    price: 50,
    trending: false,
    image: "https://m.media-amazon.com/images/I/A1KPbUkuTlL._AC_SL1500_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 5,
  },
  {
    id: "fcb6f080-7c10-4e0c-8b3d-66b9b4130b48",
    category: "Sweater",
    title: "Rainbow Sweater",
    brand: "Simons",
    price: 50,
    trending: true,
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1662744659-jkerther-women-s-y2k-print-sweater-v-neck-long-sleeve-cardigan-1662744648.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.8,
  },
  {
    id: "c8d8745b-9258-4e5e-9023-002ff78c6c65",
    category: "Skirt",
    title: "Cotton Skirt",
    price: 190,
    brand: "H&M",
    trending: true,
    image:
      "https://i5.walmartimages.com/asr/0c103dd1-beef-4c03-a081-01f90bc02a97.de616a24efa7cfb632027ef96d0e8f18.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    type: "Clothing",
    gender: "women",
    rating: 4.2,
  },
  {
    id: "29f28f4a-5351-4fc5-8b5a-6b6dd8a82840",
    category: "T-Shirt",
    title: "Long Sleves",
    brand: "Levis",
    price: 90,
    trending: true,
    image: "https://i.insider.com/5fb57a6e50e71a0011556017",
    type: "Clothing",
    gender: "men",
    rating: 4,
  },
  {
    id: "869d2d35-2a1c-4b26-99ae-2fd601fd88e0",
    category: "Sweater",
    title: "Sweatshirt",
    brand: "Banana Republic",
    price: 50,
    trending: true,
    image: "https://m.media-amazon.com/images/I/71KEHN61HJL._AC_UX522_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4,
  },

  /** More Products */

  {
    id: "8aef306b-82a0-45e6-8f84-8712bf4a6c6c",
    category: "T-Shirt",
    title: "Red Stripe Shirt",
    brand: "Guess",
    price: 190,
    trending: false,
    image: "https://m.media-amazon.com/images/I/51TNehxN-sL._AC_UL1001_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 2.5,
  },

  {
    id: "5965a7e8-4138-45ae-bb5a-35c906b3b82f",
    category: "T-Shirt",
    title: "Polo Gray Stripe",
    brand: "Guess",
    price: 210,
    trending: false,
    image: "https://m.media-amazon.com/images/I/41+iSPphj-L._AC_UX679_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 3.5,
  },

  {
    id: "b18edbe0-9dd4-49f0-804d-82876d3cb0b1",
    category: "Pants",
    title: "Formal Khake Pant",
    brand: "H&M",
    price: 115,
    trending: false,
    image: "https://m.media-amazon.com/images/I/71k+p5uFMWL._UX466_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 5,
  },

  {
    id: "2e34f38d-cc91-47e2-94a5-74621aa6d999",
    category: "Jogger",
    title: "Casual Jogger",
    brand: "H&M",
    price: 115,
    trending: true,
    image:
      "https://i5.walmartimages.com/asr/938adbed-2f1f-4986-a773-2f45e348f06d.78b29158b805e664a93c813baf16360d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    type: "Clothing",
    gender: "men",
    rating: 4.5,
  },

  {
    id: "f3dcd9ac-c726-479f-9f21-ba58d56c9b2b",
    category: "Jogger",
    title: "Cargo Pant",
    brand: "H&M",
    price: 115,
    trending: false,
    image: "https://m.media-amazon.com/images/I/81sM3-mgZIL._UL1500_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.7,
  },

  {
    id: "3c8c2279-af68-4480-8135-aa8999a4ad73",
    category: "Pants",
    title: "Blue Dennim",
    brand: "Levis",
    price: 80,
    trending: false,
    image:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&imageId=100463130-894__1&recipeName=350",
    type: "Clothing",
    gender: "men",
    rating: 3.9,
  },

  {
    id: "1dd17c69-d145-42d4-8f7b-20dbd4ffed14",
    category: "Jacket",
    title: "Red Everest Bomber",
    brand: "The North Face",
    price: 450,
    trending: false,
    image:
      "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665417053.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.4,
  },

  {
    id: "0c5a617b-cc73-41c5-bf1e-5bb9bdf23bc1",
    category: "Jacket",
    title: "Refurbished Bomber",
    brand: "The North Face",
    price: 250,
    trending: false,
    image:
      " https://www.tradeinn.com/f/13830/138307578_2/superdry-everest-bomber-jacket-refurbished.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.8,
  },

  {
    id: "9d509781-9a8d-4a4b-8f16-2e308ea3a717",
    category: "Shirt",
    title: "Floral Short Sleeve",
    brand: "Hudson Bay",
    price: 50,
    trending: false,
    image:
      "https://img.shopstyle-cdn.com/sim/e7/fd/e7fd1e781157b558017c7a8174711aaf_best/double-match-graphic-print-shirt.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4,
  },

  {
    id: "8e8fe6f7-c618-4090-8cf4-d5a159e34cb2",
    category: "Jacket",
    title: "Green Pellat",
    brand: "Calvin Klein",
    price: 130,
    trending: false,
    image:
      "https://images.vestiairecollective.com/cdn-cgi/image/q=80,f=auto,/produit/28897198-1_1.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.1,
  },

  {
    id: "f2c9bfb1-818d-48a6-8f94-60d2f30e0804",
    category: "Jacket",
    title: "Woolen Bomber",
    brand: "Simons",
    price: 220,
    trending: false,
    image:
      "https://images.vestiairecollective.com/images/resized/q=80,f=auto,/produit/30589255-1_2.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.9,
  },

  {
    id: "58f35dcb-2d94-4a78-b88f-c12b44545c2b",
    category: "T-Shirt",
    title: "Graphic Logo Print",
    brand: "Gucci",
    price: 45,
    trending: true,
    image: "https://images.flannels.com/images/products/58366018_l.jpg",
    type: "Clothing",
    gender: "men",
    rating: 3.8,
  },

  {
    id: "58f35dcb-1294-4a78-b88f-c12b44545c2b",
    category: "Hoodie",
    title: "White Logo Hoodie",
    brand: "Gucci",
    price: 95,
    trending: false,
    image:
      "https://scene7.zumiez.com/is/image/zumiez/cat_max/RIPNDIP-Lucky-Nerm-Natural-Hoodie-_176726-CA.jpg",
    type: "Clothing",
    gender: "men",
    rating: 3,
  },

  {
    id: "58f35dcb-2d94-4a78-b88f-c12xzz545c2b",
    category: "Shoes",
    title: "Leather Sneakers",
    brand: "Woodland",
    price: 110,
    trending: false,
    image:
      "https://www.brownsshoes.com/dw/image/v2/BFTX_PRD/on/demandware.static/-/Sites-brownsshoes-master-catalog/default/dw062ec5c2/266367_1.jpg?sw=500&sh=550",
    type: "Clothing",
    gender: "men",
    rating: 2,
  },

  /*** WOMEN'S PRODUCTS */

  {
    id: "58109dcb-2d94-4a78-b88f-c12b44545c2b",
    category: "Skirt",
    title: "Gray Short Skirt",
    brand: "Simons",
    price: 39,
    trending: false,
    image: "https://m.media-amazon.com/images/I/619LWPTjT6L._AC_UY1000_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.9,
  },

  {
    id: "3dd17c69-d145-42d4-8f7b-20dbd4ffed00",
    category: "Shirt",
    title: "Cotton Loose Shirt",
    brand: "Calvin Klein",
    price: 55,
    trending: false,
    image:
      "https://images.vestiairecollective.com/cdn-cgi/image/q=80,f=auto,/produit/27119662-1_1.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.2,
  },

  {
    id: "3dd17c69-d145-1111-8f7b-20dbd4ffed00",
    category: "Pants",
    title: "Floral Bell Bottom",
    brand: "Mango",
    price: 39,
    trending: false,
    image:
      "https://i5.walmartimages.com/asr/246d1010-33fe-40db-bf35-9e0e4e23ed62.e78082fb81b0f2f008f2ea0f6de754da.jpeg",
    type: "Clothing",
    gender: "women",
    rating: 5,
  },

  {
    id: "3dd17c69-d145-42d4-1010-20dbd4ffed00",
    category: "Pants",
    title: "Gray Slim Fit",
    brand: "Levis",
    price: 99,
    trending: false,
    image: "https://m.media-amazon.com/images/I/61MSUry5E8L._UL1300_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.5,
  },

  {
    id: "3dd17aaa-d145-42d4-8f7b-20dbd4ffed00",
    category: "Kurta",
    title: "Straight Kurta",
    brand: "H&M",
    price: 110,
    trending: false,
    image: "https://m.media-amazon.com/images/I/61PkrGlE4-S._UL1500_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.9,
  },

  {
    id: "3dd17c69-d145-42d4-8f7b-20d080ffed00",
    category: "Pants",
    title: "Bottom Jogger Pants",
    brand: "Reebok",
    price: 99,
    trending: false,
    image:
      "https://i5.walmartimages.com/asr/d330c10c-0021-4064-9415-197f843fd6d9.537d923b6974e4fdb8d7de21a3f00c7e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    type: "Clothing",
    gender: "women",
    rating: 3.7,
  },

  {
    id: "3dd17c69-d145-42d4-sass-20dbd4ffed00",
    category: "Pants",
    title: "Ziper Wide Long",
    brand: "Walmart",
    price: 80,
    trending: false,
    image:
      "https://i5.walmartimages.com/asr/ffa4c36b-6428-4c36-85c4-3fa56f262247.ebbcc7ac39df84a1679bdd1cabd9ae6e.jpeg",
    type: "Clothing",
    gender: "women",
    rating: 1.9,
  },

  {
    id: "3dd17c69-l145-42d4-12al-20dbd4ffed00",
    category: "T-Shirt",
    title: "White Fly Tshirt",
    brand: "Nike",
    price: 99,
    trending: false,
    image:
      "https://media-www.sportchek.ca/product/div-03-softgoods/dpt-70-athletic-clothing/sdpt-02-womens/334223019/nike-women-nk-df-tee-swoosh-fly-bf-q423-white-da169bac-d2cf-407e-8e73-43c6d8ca0aa8-jpgrendition.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.1,
  },

  {
    id: "3dd17c69-zzaz-42d4-8f7b-20dbd4ffed00",
    category: "Shirt",
    title: "Corral Western",
    brand: "American Eagle",
    price: 140,
    trending: false,
    image:
      "https://cdn.shopify.com/s/files/1/0316/8564/0325/products/RRWSOSR0Q7_1000x1000.progressive.jpg?v=1676065739",
    type: "Clothing",
    gender: "women",
    rating: 3.9,
  },

  {
    id: "3dd0mo69-d145-42d4-8f7b-20dbd4ffed00",
    category: "Hoodie",
    title: "Yellow Sweatshirt",
    brand: "Adidas",
    price: 299,
    trending: false,
    image: "https://m.media-amazon.com/images/I/51fF001VyiL._UX679_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.7,
  },

  {
    id: "3dd17c69-d145-42d4-8f7b-2111d4ffed00",
    category: "Hoodie",
    title: "Cream Printed Jacket",
    brand: "Banana Republic",
    price: 198,
    trending: false,
    image:
      "https://i.etsystatic.com/30642679/r/il/d8d68c/4405126393/il_fullxfull.4405126393_pnhy.jpg",
    type: "Clothing",
    gender: "women",
    rating: 2.6,
  },
];
