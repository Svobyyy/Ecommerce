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
  isFeatured?: boolean;
  material?: string;
  band?: string;
  movement?: string;
  dial?: string;
  referenceNumber?: string;
  caseSize?: string;
  season?: string;
  dimension?: string;
  hardware?: string;
  check?: string;
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
    sizes: ["37", "37.5", "38", "39", "41", "42.5"],
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
    style: "6302008602P116P116",
    check: "jewelry",
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
    sizes: ["38", "39", "42", "43", "41.5", "42.5"],
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
    sizes: ["XS", "S", "XXL"],
    description: `This black The North Face 1996 Retro Nuptse Jacket takes the outerwear brand's classic, and potentially most popular design, and constructs it from 100% recycled fabric. Like the traditional Nuptse Jacket, the recycled version features 700 Fill-down, a stowable hood, and a water-repellent finish.

    The recycled black The North Face 1996 Retro Nuptse Jacket was released at the retail price of $330.
    
    `,
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
    sizes: ["M", "L", "XXL"],
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
    check: "watches",
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
    sizes: ["XXS", "XS", "L", "XXL"],
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
    sizes: ["XXS", "S", "M"],
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
    sizes: ["XXS", "XS", "XL"],
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
    sizes: ["XL", "XXL"],
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
    sizes: ["XS", "S", "M", "XL"],
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
    sizes: ["XS", "M", "XXL"],
  },
  {
    id: "j11r",
    name: "Jordan 11 Retro",
    type: "Sneakers",
    price: 230,
    color: "BLACK/WHITE/METALLIC GOLD",
    img: "RetroJordan.avif",
    brand: "Nike",
    style: "12/09/2023",
    release: "01/16/2021",
    sizes: ["38.5", "39", "42", "43"],
    description: `Product Description
    Please note, the shade of the outsole on the Jordan 11 Retro DMP Gratitude (2023) may slightly vary, due to the region in which the product was originally purchased from the manufacturer or retailer.
    
    The Jordan 11 Retro DMP Gratitude (2023) is a nod to the illustrious heritage encapsulated in the Jordan brand. This iconic Jordan 11 model resurfaces with a touch of the famous Defining Moments colorway. This edition is a herald of the lauded "DMP" series, bringing back the nostalgia from 2006 when it was initially released with an Air Jordan 6, embodying a timeless treasure for the Jordan lineage​.
    
    Delving into the aesthetics, the colorway is nothing short of iconic. The upper boasts a high-cut patent leather. The usual mesh is replaced with leather that not only elevates its look but its texture. The white midsole is balanced meticulously with a translucent rubber outsole, evoking a sleek, clean design that's synonymous with the Jordan brand's premium craftsmanship.
    
    The Metallic Gold accents echo the legendary legacy of Jordan, adorning the embossed Jumpman logo on the lateral ankle and the iconic "23" on the heels. These distinctive embellishments reflect a heritage of victory and valor, encapsulated in a sneaker that's not just worn, but celebrated. The Jordan 11 Retro DMP Gratitude (2023) released on December 9, 2023, at a retail price of $230.`,
  },
  {
    id: "alph",
    name: "Nike Alphafly 3",
    type: "Sneakers",
    price: 400,
    color: "WHITE/BLACK/PHANTOM/TOTAL ORANGE",
    img: "Alphafly.avif",
    brand: "Nike",
    style: "FD8356-100",
    release: "01/04/2024",
    sizes: ["38", "39.5", "40", "40.5", "41", "42", "43"],
  },
  {
    id: "yezsn",
    name: "adidas Yeezy Boost 700",
    type: "Sneakers",
    price: 450,
    color: "SOLID GREY/CHALK WHITE/CORE BLACK",
    img: "YeezySne.avif",
    brand: "Adidas",
    style: "B75571",
    release: "11/01/2017",
    sizes: ["36", "36.5", "38", "39.5", "40", "40.5", "41", "42", "43"],
    description: `The Yeezy 700 Boost Wave Runner is the shoe that led Yeezy's pivot from a sleek, minimal aesthetic to a chunky, 90s inspired one. This was the gateway sneaker between knit runners like the 350 and the grungy skate look of the 550. The Yeezy 700 Wave Runner features a grey mesh and leather upper with black suede overlays and teal mesh underlays. At the base, a thick Boost sole and contrasting hits of orange complete the design.

    The adidas Yeezy Boost 700 Wave Runner originally released in November of 2017, and most recently re-released in March of 2022 for a retail price of $300.`,
  },
  {
    id: "mihy",
    name: "Maison Mihara Yasuhiro Hank OG Sole Canvas Low",
    type: "Sneakers",
    price: 356,
    color: "BLACK/WHITE",
    img: "Mahira.avif",
    brand: "Mihara Yasuhiro",
    style: "A05FW702",
    release: "06/01/2022",
    sizes: ["37", "37.5", "38.5", "41.5", "40.5", "41"],
    description: `
    The Mihara Yasuhiro Hank OG Sole Canvas Low Black is a sleek and stylish sneaker for any casual occasion. The shoe features a black canvas upper with white stitching and a white rubber sole. The shoe is made from high-quality materials, ensuring durability and comfort. The canvas upper is breathable, while the rubber sole provides excellent traction and support. The shoe is also lightweight, making it easy to wear for extended periods. The Mihara Yasuhiro Hank OG Sole Canvas Low Black was released on June 1st, 2022, and has a retail price of $220. It is available in a range of sizes, making it accessible to a wide range of customers. Something we love about the Mihara Yasuhiro Hank OG Sole Canvas Low Black is its minimalist design, which makes it versatile and easy to pair with any outfit. Our experts think the best features of the shoe are its high-quality materials, excellent traction, and lightweight construction. Overall, the standout feature of the Mihara Yasuhiro Hank OG Sole Canvas Low Black is its combination of style and functionality, making it a must-have for any sneaker enthusiast.`,
  },
  {
    id: "kobe",
    name: "Nike Kobe 6 Protro",
    type: "Sneakers",
    price: 286,
    color: "BRIGHT CRIMSON/BLACK/ELECTRIC GREEN",
    img: "Kobe.avif",
    brand: "Nike",
    style: "FV4921-600",
    release: "12/15/2023",
    sizes: ["37", "37.5", "38.5", "41.5", "40.5", "41", "42"],
    description: `Step into the future while honoring a legend with the Nike Kobe 6 Protro Reverse Grinch. This long-awaited sneaker, flips the script on the iconic Grinch colorway. Boasting a Bright Crimson upper that mirrors the intensity of Kobe's game, this shoe is a standout piece in any collection. The snakeskin-textured upper, a nod to the Black Mamba himself, is complemented by black Swooshes and electrifying Electric Green accents.

    The Reverse Grinch doesn't just turn heads with its colorway; it pays homage to Kobe Bryant's enduring legacy. Electric Green laces and Kobe branding on the tongues and heels add to its unique charm. The midsole and heel counter, wrapped in Bright Crimson, maintain the shoe’s bold and cohesive look, ensuring it stands out on the court and in the streets.
    
    Set to release on December 16, 2023, for $190, the Nike Kobe 6 Protro Reverse Grinch is more than a sneaker—it's a tribute to a basketball icon. With its vivid colors and sleek design, it's a must-have for sneakerheads and basketball fans alike.`,
  },
  {
    id: "bal19r",
    name: "New Balance 1906R",
    type: "Sneakers",
    price: 490,
    color: "ORANGE/YELLOW/SILVER",
    img: "Balance.avif",
    brand: "New Balance",
    style: "M1906RHJ",
    release: "01/11/2024",
    sizes: ["37", "37.5", "38.5", "41.5", "40.5", "42.5"],
  },
  {
    id: "revstu",
    name: "Stussy x Nike Reversible Varsity Jacket",
    release: "12/08/2023",
    type: "Apparel",
    price: 240,
    color: "BLACK/SAIL",
    style: "FJ9153-010",
    img: "Stussy.avif",
    brand: "Stussy, Nike",
    season: "FW23",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "dente",
    name: "Denim Tears The Cotton Wreath Sweatshirt",
    release: "01/24/2023",
    type: "Apparel",
    price: 315,
    color: "BLACK",
    img: "Denim.avif",
    brand: "Denim Tears",
    season: "SS23",
    sizes: ["XXS", "S", "L"],
    description: `The Denim Tears The Cotton Wreath Sweatshirt Black is part of the Denim Tears clothing line, which was created by Tremaine Emory.

    The Cotton Wreath Sweatshirt Blackade is made from 100% premium cotton material and features a hood and front pocket. The sweatshirt features a ribbed crew neckline, cuff, and hem, which provides a snug fit and extra support and comfort. The sleeves of the sweatshirt are relaxed, allowing a range of motion for the wearer. There is a comfortable fleece lining inside the sweatshirt which provides extra insulation and warmth, making it perfect for colder weather conditions.
    
    We think that the notable feature of the Denim Tears The Cotton Wreath Sweatshirt Black is its graphic design of a cotton wreath, which is printed throughout. The geometric graphic is printed with high-quality ink that will not easily fade, crack, or peel off during regular wear and wash. The sweatshirt was released on January 24th, 2023, at a retail price of $210.`,
  },
  {
    id: "supnor",
    name: "Supreme The North Face 700-Fill Down Parka",
    release: "10/13/2022",
    type: "Apparel",
    price: 568,
    color: "BLACK DRAGON",
    img: "SupNorth.avif",
    brand: "Supreme, The North Face",
    season: "FW22",
    sizes: ["XXS", "XS", "XL"],
    description: `The Supreme The North Face 700-Fill Down Parka Black Dragon is made from a water-resistant polyester fabric on the exterior and has a nylon lining throughout.

    This collaborative garment has a 700-Fill tag, pockets at the lower front with side zip and double top opening, set-in pockets that are finished with fabric welts, and full zip closure. The set-in pockets have a zip on the inside pocket and zip on the chest, while the full zip closure has hidden Velcro buttoning.
    
    The Supreme The North Face 700-Fill Down Parka Black Dragon first became available on October 13th, 2022, with a recommended retail price set at $598.`,
  },
  {
    id: "spidpnk",
    name: "Sp5der P*NK V2 Hoodie",
    release: "11/24/2023",
    type: "Apparel",
    price: 443,
    color: "BLACK",
    img: "Spider.avif",
    brand: "Sp5der",
    season: "FW23",
    sizes: ["S", "L", "XL"],
  },
  {
    id: "goywa",
    name: "Goyard Victoire Wallet",
    type: "Accessories",
    check: "wallet",
    price: 600,
    isRecommended: true,
    material: "CANVAS/CALFSKIN",
    img: "GoyardWallet.avif",
    style: "VICTO8PMLTY01CL01X",
    dimension: "3.5H 4.3W 8.6D",
    brand: "Goyard",
    description: `This Goyard Victoire Wallet Monogram Chevron Black arrives crafted from Vauzelles calfskin with a touch of black and tan Goyardine canvas on the outside.

    The Goyard Victoire Wallet Monogram Chevron Black is made in France and is available in a compact size, measuring 9 x 2 x 11 cm (length x height x width). The wallet features 8 card slots, 2 flat pockets, and a note compartment with bill fold. The inside of the wallet is crafted from smooth colored leather.
    
    The Goyard Victoire Wallet Monogram Chevron Black was released as part of the Summer Spring 2021 collection and retailed for $1,020.
    
    Please Note: Dust bag and box are not required for this accessory.`,
  },
  {
    id: "burbe",
    name: "Burberry Reversible Monogram Motif Vintage Check Belt",
    isTrending: true,
    type: "Accessories",
    check: "belt",
    dimension: "1.4W",
    price: 450,
    color: "ARCHIVE BEIGE",
    hardware: "BRASS-TONE",
    material: "E-CANVAS",
    img: "Burbery.avif",
    style: "80219571 / 80465681",
    brand: "Burberry",
    description: `Crafted with an environmentally conscious canvas, this reversible Burberry belt features the luxury brand’s signature vintage check print and monogram plaque buckle.

    Please Note: Dust bag and box are not required for this accessory.`,
  },
  {
    id: "telbg",
    name: "Telfar Shopping Bag",
    type: "Accessories",
    check: "handbag",
    dimension: "11.25H 15W 5D STRAP 21 ",
    price: 220,
    color: "BLACK",
    hardware: "SILVER-TONE",
    material: "VEGAN LEATHER",
    img: "Telfar.avif",
    style: "5BP078_N88_F0009_V_OOO",
    brand: "Telfar",
    description:
      "Please Note: This item comes with a dust bag, the box is not required.",
  },
  {
    id: "csa",
    name: "Casio Analog",
    type: "Accessories",
    check: "watches",
    price: 61,
    band: "STAINLESS STEEL",
    movement: "QUARTZ",
    dial: "TIFFANY BLUE",
    img: "Casio.avif",
    brand: "Casio",
    referenceNumber: "MTP1302D-2A2V",
    caseSize: "39MM",
    description: `
    Elevate your personal style with the exquisite Casio Analog MTP-1302D-2A2V timepiece. This classic silver watch boasts an elegant turquoise blue dial that perfectly harmonizes with its luminous hands and markers, offering effortless legibility even in dimly lit environments. Its sleek stainless steel case and band combine sophistication with robustness, creating a timepiece that's as enduring as it is refined.

Driven by a dependable quartz movement, the MTP-1302D-2A2V ensures precise timekeeping, empowering you to stay punctual no matter where your day takes you. The added convenience of a date display at the 3 o'clock position enhances the practicality of this remarkable watch, guaranteeing you'll never overlook a crucial appointment or deadline.

Crafted to withstand the rigors of daily wear, this Casio watch flaunts a water resistance of up to 50 meters, instilling confidence for unexpected encounters with water. Whether you're conquering a workday, gracing a formal affair, or embracing the great outdoors, this timepiece is engineered to be your faithful companion on every journey.

`,
  },
  {
    id: "stflq",
    name: "Stanley Flowstate Quencher 40oz Tumbler",
    type: "Accessories",
    price: 89,
    img: "Stanley.avif",
    brand: "Stanley",
    material: "STAINLESS STEEL",
    isTrending: true,
    check: "other",
    color: "ARCTIC TWIST",
    release: "01/09/2024",
  },
  {
    id: "stflqsu",
    name: "Stanley x Starbucks (Target Exclusive) Quencher 40oz Tumbler",
    type: "Accessories",
    price: 250,
    img: "StanleySupreme.avif",
    check: "other",
    brand: "Stanley",
    material: "STAINLESS STEEL",
    color: "PINK (2024)",
    release: "01/03/2024",
    description: `Add a touch of glamour to your hydration routine with the Stanley x Starbucks Quencher 40oz Tumbler in Winter Pink. Exclusively released in-store only at Target Starbucks locations on January 3rd, 2024, with an original retail price of $49.95. This bright, shimmery pink 40 oz tumbler features a matching pink lid and straw.`,
  },
  {
    id: "skull",
    name: "Supreme 4D Model Human Skull",
    type: "Accessories",
    price: 501,
    img: "Skull.avif",
    check: "other",
    brand: "Supreme",
    season: "FW23",
    color: "NATURAL",
    release: "11/30/2023",
  },
  {
    id: "hypho",
    name: "Nike Pro THERMA-FIT Hyperwarm Hood",
    type: "Accessories",
    price: 71,
    img: "Hood.avif",
    check: "other",
    brand: "Nike",
    color: "BLACK/WHITE",
    style: "NHK63-058",
    description: `The Nike Pro Hyperwarm Hood Balaclava Black is a warm unisex hydropull hood that lightweight and ideal for cold seasons. 

    The Nike Pro Hyperwarm Hood Balaclava Black comes with a solid pattern and comes with several other features. Its insulation capacity help in heat retention. This hood is stretchy and offers cold protection from the head to the neck. The design lets it lie smoothly on the head and form a comfortable cover by itself or under helmets. The material is made from 88% polyester and 12% spandex. 
    
    The Nike Pro Hyperwarm Hood Balaclava Black has been on the market for over a decade since its release in June 2012 at a retail price of $30.`,
    release: "12/01/2022",
  },
  {
    id: "bskhp",
    name: "Supreme Spalding Mini Basketball Hoop",
    type: "Accessories",
    price: 460,
    img: "Basket.avif",
    check: "other",
    season: "FW23",
    brand: "Supreme",
    color: "RED",
    description: `Dimensions: 28" x 16.5"
    Mini Spalding Ball: 5"
    
    Please note: Minor plastic blemishes are common for this item due to the manufacturer's shipment process.
    
    `,
    release: "11/24/2023",
  },
  {
    id: "balms",
    name: "Market Mini Smiley Basketball",
    type: "Accessories",
    price: 370,
    img: "Ball.avif",
    check: "other",
    season: "FW22",
    brand: "Market",
    color: "YELLOW",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice;
