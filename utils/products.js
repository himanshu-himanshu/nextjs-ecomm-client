import uuid from "react-uuid";

export const products = [
  {
    id: uuid(),
    category: "Hoodie",
    title: "Black Hoodie",
    brand: "Nike",
    price: 50,
    trending: true,
    image:
      "https://ih1.redbubble.net/image.911954075.4332/ssrco,mhoodie,mens,101010:01c5ca27c6,front,square_product,x600-bg,f8f8f8.1.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4,
  },
  {
    id: uuid(),
    category: "Sweater",
    title: "Sweater",
    brand: "Guess",
    price: 90,
    trending: true,
    image:
      "https://i.pinimg.com/736x/66/1e/60/661e60737b8d03fd4a4731933da6ace9.jpg",
    type: "Clothing",
    gender: "men",
    rating: 4.5,
  },
  {
    id: uuid(),
    category: "T-Shirt",
    title: "Printed T-Shirt",
    brand: "Gap",
    price: 50,
    trending: true,
    image:
      "https://ih1.redbubble.net/image.660508131.3741/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u1.jpg",
    type: "Clothing",
    gender: "men",
    rating: 3.2,
  },
  {
    id: uuid(),
    category: "Sweater",
    title: "Blue Sweater",
    brand: "Gap",
    price: 50,
    trending: true,
    image: "https://m.media-amazon.com/images/I/A1KPbUkuTlL._AC_SL1500_.jpg",
    type: "Clothing",
    gender: "men",
    rating: 5,
  },
  {
    id: uuid(),
    category: "Sweater",
    title: "Funcky Rainbow Sweater",
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
    id: uuid(),
    category: "Skirt",
    title: "Cotton Skirt",
    price: 190,
    brand: "H&M",
    trending: true,
    image:
      "https://assets.vogue.com/photos/6258391e9711689c336fb478/1:1/w_2667,h_2667,c_limit/slide_5.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.2,
  },
  {
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
    category: "Jogger",
    title: "Casual Jogger",
    brand: "H&M",
    price: 115,
    trending: false,
    image:
      "https://i5.walmartimages.com/asr/938adbed-2f1f-4986-a773-2f45e348f06d.78b29158b805e664a93c813baf16360d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    type: "Clothing",
    gender: "men",
    rating: 4.5,
  },

  {
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
    category: "T-Shirt",
    title: "Graphic Logo Print",
    brand: "Gucci",
    price: 45,
    trending: false,
    image: "https://images.flannels.com/images/products/58366018_l.jpg",
    type: "Clothing",
    gender: "men",
    rating: 3.8,
  },

  {
    id: uuid(),
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
    id: uuid(),
    category: "Shoes",
    title: "Leather Sneakers",
    brand: "Woodland",
    price: 110,
    trending: false,
    image:
      "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Sneakers-Premier-LowTop-Camel-063022-Flatlay.jpg?v=1657752200",
    type: "Clothing",
    gender: "men",
    rating: 2,
  },

  /*** WOMEN'S PRODUCTS */

  {
    id: uuid(),
    category: "Skirt",
    title: "Backless Short Skirt",
    brand: "Simons",
    price: 39,
    trending: false,
    image:
      "https://ae03.alicdn.com/kf/Sb6e804185c79466b8b08f6c32716c15dj.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.9,
  },

  
  {
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
    category: "Pants",
    title: "Gray Slim Fit",
    brand: "Levis",
    price: 99,
    trending: false,
    image:
      "https://m.media-amazon.com/images/I/61MSUry5E8L._UL1300_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 4.5,
  },

  {
    id: uuid(),
    category: "Kurta",
    title: "Straight Kurta",
    brand: "H&M",
    price: 110,
    trending: false,
    image:
      "https://m.media-amazon.com/images/I/61PkrGlE4-S._UL1500_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.9,
  },

  
  {
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
    category: "T-Shirt",
    title: "Black Short Tshirt",
    brand: "Nike",
    price: 99,
    trending: false,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7eeec792-972c-4510-b294-0dd426325893/sportswear-womens-slim-fit-cropped-t-shirt-gGzG7C.png",
    type: "Clothing",
    gender: "women",
    rating: 4.1,
  },

  {
    id: uuid(),
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
    id: uuid(),
    category: "Hoodie",
    title: "Yellow Sweatshirt",
    brand: "Adidas",
    price: 299,
    trending: false,
    image:
      "https://m.media-amazon.com/images/I/51fF001VyiL._UX679_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.7,
  },

  {
    id: uuid(),
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

  
  {
    id: uuid(),
    category: "Night Wear",
    title: "Printed Cotton Suit",
    brand: "H&M",
    price: 46,
    trending: false,
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O7XPx3LJL._UX569_.jpg",
    type: "Clothing",
    gender: "women",
    rating: 3.1,
  },

  

];
