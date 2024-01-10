import { createSlice } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  color?: string;
  img: string;
  brand: string;
  isTrending?: boolean;
  isRecommended?: boolean;
  sizes?: string[];
  style?: string;
  release?: string;
  description?: string;
  wirelessNetworking?: string;
  mPN?: string;
  batteryLife?: string;
  operatingSystem?: string;
  ports?: string;
  isFeatured?: boolean;
  material?: string;
  band?: string;
  movement?: string;
  dial?: string;
  referenceNumber?: string;
  caseSize?: string;
  season?: string;
  dimension?: string;
};

const initialState: Product[] = [
  {
    id: "f1",
    name: "Nike Air Force 1 Low '07",
    type: "Sneakers",
    price: 29,
    color: "White",
    img: "Airforce.avif",
    isTrending: true,
    brand: "Nike",
    style: "315115-112/DD8959-100",
    release: "01/16/2021",
    sizes: ["38.5", "39", "42", "43"],
    description:
      "The women's Nike Air Force 1 Low White silhouette (W) continues the tradition of the 1982 Air Force 1. The sneaker features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design. The women's Nike Air Force 1 Low White 2018 (W) released in January 2018 and retailed for $90.",
  },
  {
    id: "ro1",
    name: "Rick Owens DRKSHDW High Top",
    type: "Sneakers",
    price: 600,
    color: "Black Denim",
    img: "Owens.avif",
    isTrending: true,
    brand: "Rick Owens",
    style: "DU01C6800 DQES1 911",
    release: "11/30/2022",
    sizes: ["36", "36.5", "38", "40", "41", "42", "43"],
  },
  {
    id: "ys1",
    name: "Adidas Yeezy Slide",
    type: "Sneakers",
    price: 90,
    color: "SLATE GREY",
    img: "Yeezy.avif",
    brand: "Adidas",
    style: "ID2350",
    release: "08/18/2023",
    description:
      "The adidas Yeezy Slide Slate Grey is a collaboration between adidas and Kanye West. The Slide Slate Grey adidas Yeezy comes in a slate grey, slate grey, slate grey color palette. The shoe features an upper constructed from a single piece of molded EVA foam, offering a lightweight and durable design. The slide's design features strategic cutouts and a breathable lining. The slide's outsole features a textured pattern that provides traction and stability. The Yeezy Slide features an effortless slip-on design for easy wear and removal.What we love about the adidas Yeezy Slide Slate Grey is its minimalist and sleek design. The slide is crafted with a one-piece construction, featuring a soft and comfortable foam compound for the upper, while the Slate Grey colorway adds a versatile and understated aesthetic. The adidas Yeezy Slide Slate Grey was released in 2023, and sold for a retail price of $70.",
    sizes: ["37","37.5", "38", "39", "41", "42", "42.5",],
  },
  {
    id: "v1",
    name: "Vivienne Westwood Necklace Mini Bas Relief Pendant",
    dimension: "15.7-17.3",
    material: "100% BRASS",
    type: "Accessories",
    price: 155,
    color: "Silver",
    img: "Viviene.avif",
    isTrending: true,
    style: "6302008602P116P116",
    isRecommended: true,
    brand: "Vivienne Westwood",
    description: `The Vivienne Westwood Necklace Mini Bas Relief Pendant Silver is an accessory from the Vivienne Westwood necklace collection.
    
    This Vivienne Westwood Necklace is made of 100% brass with silver-tone plating and white crystal detailing. Vivienne Westwood’s signature Orb plaque, comprising a two-dimensional sphere and Saturn ring jewelry that is encrusted with white crystals, is the highlight of this necklace. The dimensions are 15.7 to 17.3 inches (40 cm to 44 cm) of chain length, while the Orb plaque measures 0.9 inches (2.3 cm) in height and 1 inch (2.6 cm) in width (0.9 x 1 inches).
    
    What our experts love about this Vivienne Westwood Necklace is its design and materials. The elegant design makes it perfect for special occasions and different outfits, while the high-quality materials ensure it will last for an extended period. The Vivienne Westwood Necklace Mini Bas Relief Pendant Silver was made available in December 2014. Initially, it retailed at $170.`,
  },
  {
    id: "c01",
    name: "Adidas Campus 00s",
    type: "Sneakers",
    price: 150,
    color: "CORE BLACK",
    img: "Campus.avif",
    isRecommended: true,
    brand: "Adidas",
    style: "HQ8708",
    release: "02/17/2023",
    description:
      "The adidas Campus 00s Core Black was launched as part of the sports collection sneakers in the adidas brand.The adidas Campus 00s Core Black is covered in core black and white colorways at the upper, footwear white midsole, and brown outsole. This sneaker is a product of suede, rubber, and leather materials that completes the texture. The adidas Campus 00s Core Black features the adidas logo on the tongue and the heel with campus branding at its quarter.The adidas Campus 00s Core Black got released at a suggested retail price of $100 on February 17, 2023.",
    sizes: ["36", "36.5", "37", "38", "39", "40", "41"],
  },
  {
    id: "jr1",
    name: "Jordan 1 Retro High OG",
    type: "Sneakers",
    price: 150,
    color: "BLACK/ROYAL BLUE/WHITE",
    img: "Jordan.avif",
    brand: "Nike",
    style: "DU01C6800 DQES1 911",
    release: "11/30/2022",
    isRecommended: true,
    description:
      "Old meets the new with the Jordan 1 Retro High OG 'Royal Reimagined'. This sneaker reignites the iconic Jordan 1 colorway with a fresh material makeover, showcasing a premium Royal Blue and Black suede. The nostalgic Black/Royal Blue/White colorway carries the torch of the Jordan legacy, making a bold statement of evolution without losing an ounce of its original charisma. The genius lies in the details. The full suede treatment of the OG colorway, coupled with sleek suede Swoosh overlays, dances along the fine line between reverence for the past and the audacity of the present​. The Wings logos on the padded ankle collars and Nike Air tags on the tongues are a nod to its illustrious lineage, while the cushioned ankle collar promises a comfy stride into the future.The Jordan 1 Retro High OG 'Royal Reimagined' is a step into a narrative crafted meticulously by Jordan Brand. Available on November 4, 2023, at a retail price of $180, it's a statement of how the legendary can be reimagined without losing its essence​​. Grab a pair, and be a part of a legacy that's as fearless and unyielding as the Jordan Brand.",
    sizes: ["38","39", "42", "43", "41.5" , "42.5"],
  },
  {
    id: "n1",
    name: "The North Face 1996 Retro Nuptse 700 Fill Packable Jacket",
    isFeatured: true,
    release: "09/01/2023",
    type: "Apparel",
    price: 199,
    color: "REAL BLACK",
    img: "North.avif",
    brand: "The North Face",
    season: "FW23",
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    description: `This black The North Face 1996 Retro Nuptse Jacket takes the outerwear brand's classic, and potentially most popular design, and constructs it from 100% recycled fabric. Like the traditional Nuptse Jacket, the recycled version features 700 Fill-down, a stowable hood, and a water-repellent finish.

    The recycled black The North Face 1996 Retro Nuptse Jacket was released at the retail price of $330.
    
    `,
  },
  {
    id: "a1",
    name: "Apple Airpods (3rd Gen)",
    type: "Electronics",
    price: 140,
    color: "White",
    img: "Airpods.avif",
    isTrending: true,
    brand: "Apple",
    wirelessNetworking: "BLUETOOTH 5.0",
    mPN: "MME73AM/A",
    batteryLife: "6 HOURS",
    operatingSystem: "IOS, MACOS, IPADOS, WATCHOS, TVOS",
    ports: "MIC, MAGSAFE CHARGING CASE, LIGHTNING",
    description: `Experience cutting edge audio for longer durations of time with the Apple AirPods (3rd Generation) earphones. Apple has refined the AirPods with some new quality of life improvements on the latest model. The Apple AirPods (3rd Generation) features spatial audio with dynamic head tracking, adaptive EQ (based on the music you’re playing), and a plethora of sensors and microphones to enhance the calling experience. The Apple AirPods (3rd Generation) are covered in an acoustic mesh, which will minimize noise when on a call, according to Apple. The Apple AirPods (3rd Generation) are sweat and water resistant (IPX4), and feature improved battery life. According to Apple, the Apple AirPods (3rd Generation) feature 6 hours of listening time with one charge (5 hours with spatial audio enabled), and up to 30 hours of listening time with the MagSafe charging case. If you’re looking to upgrade your audio experience, the Apple AirPods (3rd Generation) are available to buy now on StockX.

    Please refer to the manufacturer directly for product related questions, including functionality. StockX is a marketplace platform connecting buyers and sellers and is not responsible for product specific warranties from the manufacturer.`,
  },
  {
    id: "r1",
    style: "710888282003",
    name: "Polo Ralph Lauren Double Knit Zip-Up Hoodie",
    type: "Apparel",
    price: 90,
    color: "LIGHT SPORT HEATHER/NAVY",
    img: "Polo.avif",
    isTrending: true,
    brand: "Polo Ralph Lauren",
    sizes: [ "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "f2",
    name: "Finalmouse Starlight-12 Phantom Wireless Mouse Medium",
    isRecommended: true,
    type: "Electronics",
    price: 190,
    color: "Black",
    img: "Finalmouse.avif",
    brand: "Finalmouse",
    release: "11/08/2021",
    batteryLife: "160 HOURS",
    description: `The Finalmouse Starlight-12 Phantom Wireless Mouse (Medium) features a magnesium chassis with an Ultem base. The Ultem lets the wireless signal through, but is not as strong as the magnesium top. At approximately 47 grams, the Finalmouse Starlight-12 Phantom Wireless Mouse (Medium) provides more stability and control, with lighter and snappier clicks than its predecessors. The rechargeable Jaunch Lithium Ion battery lasts about 160 continuous hours, or about 3 weeks of average computer use. Built on a Nordic RF platform and using Godspeed Wireless technology, the Finalmouse Starlight-12 Phantom Wireless Mouse (Medium) offers next-gen performance.

    The Finalmouse Starlight-12 Phantom Wireless Mouse (Medium) was released on November 8, 2021, at a retail price of $189.99.
    
    `,
  },
  {
    id: "dl1",
    name: "Nike Dunk Low",
    type: "Sneakers",
    price: 129,
    color: "Grey Fog",
    img: "Dunk.avif",
    isTrending: true,
    brand: "Nike",
    style: "DD1391-103",
    release: "09/21/2021",
    sizes: ["38", "39.5", "40", "40.5", "41", "42", "43"],
    description:
      "The Nike Dunk Low Grey Fog features a white leather upper with Grey Fog leather overlays and Swooshes. From there, a matching woven tongue label, heel tab, and sole completes the design.The Nike Dunk Low Grey Fog released in September of 2021 and retailed for $100.",
  },
  {
    id: "ob1",
    name: "Swatch x Omega Bioceramic Moonswatch Mission to the Moon",
    type: "Accessories",
    price: 350,
    material: "BIOCERAMIC",
    band: "FABRIC",
    movement: "QUARTZ",
    dial: "BLACK",
    img: "Omega.avif",
    isRecommended: true,
    brand: "Swatch|Omega",
    referenceNumber: "SO33M100",
    caseSize: "42MM",
    description: `The Swatch x Omega Bioceramic Moonswatch Mission to the Moon (S033M100) is one of 11 silhouettes released by the collaboration between Swatch and Omega, offering a unique take on the Omega Speedmaster. The Swatch x Omega Mission to the Moon (S033M100) features both the Omega and Swatch logos on the "Moonswatch," with a velcro strap. The watch features all white hands and tachymeter scale like the original, quartz movement, and the premium finishes from the iconic Moonwatch. The Swatch x Omega Mission to the Moon (S033M100) also features superluminova throughout, so you'll be able to read the watch even in the dark.

    The Swatch x Omega Mission to the Moon (SO33M100) was released In March 2022 for a retail price of $260. All watches on StockX are brand new and certified authentic by our team of experts.`,
  },
  {
    id: "fe1",
    name: "Fear of God Essentials Hoodie (FW22)",
    type: "Apparel",
    price: 100,
    color: "LIGHT OATMEAL",
    release: "11/16/2022",
    img: "Fear.avif",
    season: "FW22",
    isRecommended: true,
    brand: "Essentials",
    sizes: ["XXS", "XS", "M", "L", "XXL"],
    description: `The Fear of God Essentials Hoodie FW22 Light Oatmeal is a collaboratively designed hoodie that was included in the brand's fall collection.

    The Fear of God Essential Hoodie is a long-sleeved garment made of cotton fabric. Other details include a crew neckline, two kangaroo pockets on the front, and a stretched over-size fit. Rounding out the design is the Essential signature applique logo on top of the Fear Of God branding embroidered on the hest.
    
    The Fear of God Essentials Hoodie FW22 Light Oatmeal was made available at the retail price of $90 on November 16th, 2022.`,
  },
  {
    id: "tf1",
    name: "Nike Sportswear Tech Fleece Full-Zip Hoodie",
    type: "Apparel",
    price: 120,
    color: "BLACK",
    release: "11/16/2022",
    img: "Tech.avif",
    style: "CU4489-010",
    isFeatured: true,
    brand: "Nike",
    sizes: ["XXS", "XS", "S", "M"],
    description: `This Nike Tech Fleece Full Zip Hoodie in black delivers a clean look and extra warmth. Featuring a double-sided spacer fabric, this hoodie is built to provide warmth without the weight. The hoodie features a small black Nike logo on its chest and an extra zippable pocket on the left arm.

    The black Nike Tech Fleece Full Zip Hoodie was originally made available at the retail price of $130.`,
  },
  {
    id: "sh1",
    name: "Supreme Hanes Boxer Briefs (4 Pack)",
    type: "Apparel",
    price: 50,
    color: "WHITE",
    season: "SS18-FW22",
    release: "08/25/2022",
    img: "Supreme.avif",
    style: "CU4489-010",
    sizes: ["XXS", "XS", "L", "XL", "XXL"],
    isFeatured: true,
    brand: "Supreme",
  },
  {
    id: "fj1",
    name: "Nike Sportswear Tech Fleece Joggers",
    type: "Apparel",
    price: 110,
    style: "CU4495-063",
    color: "DARK GREY HEATHER",
    img: "Joggers.avif",
    isFeatured: true,
    brand: "Nike",
    sizes: ["XXS", "XS", "XL", "XXL"],
    description: `Tech Fleece is Nike’s Dark Grey Heather/Black colorway joggers.

    This Nike Tech Fleece jogger is a heavy, breathable 100% cotton fabric. It is all heather grey with a small and outstanding black Nike logo on the left thigh. It features a ribbed waistband with a black elasticated drawstring with loose ends. Two side pockets are available on both sides of the joggers. A more oversized side pocket on the left leg is enclosed with a black zipper. The legs are reinforced with ribbed knit cuffs. Not forgetting, there’s a company label with instructions on handling the jogger on the waist at the back.
    
    This Nike Tech Fleece Joggers was released on 14th Jan 2022, retailing at $110.`,
  },
  {
    id: "yg1",
    name: "Yeezy Gap Hoodie",
    type: "Apparel",
    season: "FW21",
    price: 140,
    color: "BLACK",
    release: "09/29/2021",
    img: "Gap.avif",
    isFeatured: true,
    brand: "Nike",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: `The black colorway of the collaborative Yeezy x GAP Hoodie was released alongside five other colorways as a part of the partnership's first-ever hoodie drop.

    Featuring a double layer construction, this hoodie is made thick from a 100% cotton material. In traditional Kanye West fashion, the Yeezy x GAP Hoodie was released without warning at a seemingly random time.
    
    The black Yeezy x GAP Hoodie was released on September 29th, 2021, at the retail price of $90.
    
    Please note: shipping times will not be extended for this item, please make sure your item is in hand before placing an ask or accepting a bid.
    
    Disclaimer: This item is a garment dyed brown hoodie. The wash tags will say "brown" and appear to look washed due to the dye process.`,
  },
  {
    id: "bf1",
    name: "Patta x Barcelona FC Culers del Món Pre-Match Jersey",
    type: "Apparel",
    season: "FW23",
    price: 90,
    color: "BLACK/WHITE",
    release: "10/16/2023",
    img: "Barcelona.avif",
    isFeatured: true,
    brand: "Nike",
    sizes: ["XXS", "XS", "M", "XXL"],
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
});

export default productsSlice;
