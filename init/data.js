const sampleListings = [
 {
    
    title: 'Classic Haussmannian Apartment',
    description: 'A stunning 2-bedroom apartment in a classic Haussmannian building in the 7th arrondissement. Features intricate ironwork, a mansard roof, and is located near iconic landmarks.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762881955/HabiRent_dev/njek8xdg6k0obvrzgnsi.jpg',
      filename: 'HabiRent_dev/njek8xdg6k0obvrzgnsi'
    },
    price: 1500,
    location: 'Paris, 7th Arrondissement',
    country: 'France',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 2.319177, 48.85773 ] },
    category: 'Iconic Cities',
    bookings: [],
   
  },
  {
   
    title: 'Trocadéro Sunrise View Studio',
    description: 'This studio offers a postcard-worthy, quintessential view of the Eiffel Tower from the elevated Trocadéro plaza. Ideal for photographers seeking that perfect sunrise shot.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762882530/HabiRent_dev/jwsp2sww4qvxcksahl0f.webp',
      filename: 'HabiRent_dev/jwsp2sww4qvxcksahl0f'
    },
    price: 1200,
    location: 'Paris, 16th Arrondissement',
    country: 'France',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 2.276325, 48.862797 ] },
    category: 'Iconic Cities',
    bookings: [],
  
  },
  {
   
    title: 'Le Marais Artist Loft',
    description: 'A charming and bright artist loft located in the heart of Le Marais. Surrounded by historic architecture, trendy boutiques, and art galleries.\r\n' +
      '                ',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762882909/HabiRent_dev/vfjaxagc0yom7fkgpcek.png',
      filename: 'HabiRent_dev/vfjaxagc0yom7fkgpcek'
    },
    price: 1250,
    location: 'Paris, Le Marais',
    country: 'France',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 2.260481, 48.838368 ] },
    category: 'Iconic Cities',
    bookings: [],
    
  },
  {
   
    title: 'Arc de Triomphe Penthouse',
    description: 'Luxury penthouse offering a sweeping 360-degree panoramic view from its rooftop terrace. Overlooks the 12 grand avenues converging at the Arc.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762883254/HabiRent_dev/fjthxxrbscr3lgn2xhd8.png',
      filename: 'HabiRent_dev/fjthxxrbscr3lgn2xhd8'
    },
    price: 1000,
    location: 'Paris, 8th Arrondissement',
    country: 'France',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 2.31769, 48.87664 ] },
    category: 'Iconic Cities',
    bookings: [],
    
  },
  {
    
    title: 'Belleville Park Overlook',
    description: `"A modern apartment atop Paris's highest park, Parc de Belleville. Provides a stunning, less-common panoramic view of the city skyline, including the Eiffel Tower and Notre Dame in the distance."`,
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762883673/HabiRent_dev/ncvtc5mn8dsgum0zm7nq.png',
      filename: 'HabiRent_dev/ncvtc5mn8dsgum0zm7nq'
    },
    price: 1350,
    location: 'Paris, 20th Arrondissement',
    country: 'France',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 2.398665, 48.86491 ] },
    category: 'Iconic Cities',
    bookings: [],
    
  },
   {
    title: 'Atlas Mountain View Riad',
    description: 'A traditional Riad in Beni Mellal, offering a laid-back vibe and panoramic views of the Middle Atlas region. A perfect base for visiting Kasbah Bel-Kush or the nearby Ouzoud Falls.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762883935/HabiRent_dev/wwbvc2hao4mjvjgkrwh8.jpg',
      filename: 'HabiRent_dev/wwbvc2hao4mjvjgkrwh8'
    },
    price: 1650,
    location: 'Beni Mellal',
    country: 'Morocco',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -6.362135, 32.33283 ] },
    category: 'Trending',
    bookings: [],
   
  },
  {
   
    title: 'Gateway to the Great Rann of Kutch',
    description: 'An authentic homestay in Bhuj, the gateway to the vast salt desert of the Great Rann of Kutch. Experience vibrant textiles, intricate embroidery, and mesmerizing sunrises over the salt flats.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762884252/HabiRent_dev/vasvsjoog2m473ixjxp1.png',
      filename: 'HabiRent_dev/vasvsjoog2m473ixjxp1'
    },
    price: 950,
    location: 'Bhuj, Gujarat',
    country: 'India',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 69.672295, 23.249277 ] },
    category: 'Trending',
    bookings: [],
  
  },
  {
    
    title: 'Bohemian Old Town Flat, Tartu',
    description: "A creative flat in Tartu's Old Town, home to Estonia's oldest university. This compact, walkable city has a youthful energy, street art, and funky cafés, making it a rising star for European city breaks.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762884817/HabiRent_dev/tlmerwj7ecgshn5njjar.jpg',
      filename: 'HabiRent_dev/tlmerwj7ecgshn5njjar'
    },
    price: 1450,
    location: 'Tartu, Old Town',
    country: 'Estonia',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -0.848056, 52.351736 ] },
    category: 'Trending',
    bookings: [],
   
  },
  {
   
    title: 'Rize Tea Plantation Villa',
    description: 'A hillside wooden lodge in Rize, Türkiye’s tea capital. Overlook lush green tea plantations, enjoy fresh brews from the source, and explore the Kaçkar Mountains.\r\n' +
      '                ',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762885852/HabiRent_dev/bwyriszbppl07mowumu9.jpg',
      filename: 'HabiRent_dev/bwyriszbppl07mowumu9'
    },
    price: 1050,
    location: 'Rize',
    country: 'Turkey',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 40.555851, 41.030333 ] },
    category: 'Trending',
    bookings: [],
    
  },
  {
    
    title: 'Siem Reap Private Pool Villa',
    description: 'A tranquil villa in Siem Reap, offering a modern stay near the timeless appeal of Angkor Wat. With new airport expansions, the area is more accessible than ever.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762885401/HabiRent_dev/qevdijxbdkrdzw0gfouu.jpg',
      filename: 'HabiRent_dev/qevdijxbdkrdzw0gfouu'
    },
    price: 1750,
    location: 'Siem Reap',
    country: 'Cambodia',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 103.85486, 13.354503 ] },
    category: 'Trending',
    bookings: [], 
  },
   {
   
    title: 'Modern A-Frame in Garden Valley',
    description: "A modern, romantic 2-bed log cabin just an hour from Boise. This 'Hüppa House' is nestled among pines and features smart devices, high-end furniture, and luxury linens.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762885702/HabiRent_dev/lx0jt1wm8ivfb6dkkuud.jpg',
      filename: 'HabiRent_dev/lx0jt1wm8ivfb6dkkuud'
    },
    price: 2150,
    location: 'Garden Valley, Idaho',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -115.952724, 44.090119 ] },
    category: 'Mountains',
    bookings: [],
    
  },
  {
   
    title: 'Monument Scandinavian A-Frame',
    description: "A custom-built, Scandinavian-inspired A-frame cabin nestled on the Palmer Divide. Feel secluded in the pines with a hot tub and 'views to die for,' all while being just 15 minutes from Colorado Springs.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762886110/HabiRent_dev/ixluaqfl3slxkpowhlyw.jpg',
      filename: 'HabiRent_dev/ixluaqfl3slxkpowhlyw'
    },
    price: 1350,
    location: 'Monument, Colorado',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -104.872636, 39.091517 ] },
    category: 'Mountains',
    bookings: [],
    
  },
  {
  
    title: 'Peaceful Pines- Luxury Cabin',
    description: "A one-of-a-kind luxury cabin on 40 private acres. 'Peaceful Pines Ridge' is tucked between Colorado Springs and Breckenridge, boasting meadows, rock formations, and a rippling stream.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762886323/HabiRent_dev/oxtwt1euxaw5z8vx8vvd.jpg',
      filename: 'HabiRent_dev/oxtwt1euxaw5z8vx8vvd'
    },
    price: 2150,
    location: 'Florissant, Colorado',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -105.289432, 38.946152 ] },
    category: 'Mountains',
    bookings: [],
   
  },
  {
  
    title: 'Dolomites Alpine Chalet',
    description: 'A traditional wooden cabin set on a grassy mountain path in the Italian Dolomites. This peaceful alpine landscape offers dramatic mountain peaks and a serene atmosphere for hikers.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762886537/HabiRent_dev/rnk4xlpp10msdwka03aq.jpg',
      filename: 'HabiRent_dev/rnk4xlpp10msdwka03aq'
    },
    price: 1999,
    location: 'Trentino-Alto Adige',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 11.12576, 46.066423 ] },
    category: 'Mountains',
    bookings: [],
   
  },
  {
  
    title: 'Estes Park Gateway Cabin',
    description: 'A cozy mountain home serving as the gateway to Rocky Mountain National Park. Enjoy stunning views and year-round adventure from this tranquil cabin.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762886717/HabiRent_dev/rpnnbhlllky3iydp7lbs.jpg',
      filename: 'HabiRent_dev/rpnnbhlllky3iydp7lbs'
    },
    price: 2200,
    location: 'Estes Park, Colorado',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -105.521528, 40.376612 ] },
    category: 'Mountains',
    bookings: [],
  },
  {
    title: 'Springfield Castle - The West Wing',
    description: "Stay in the West Wing of a private, exclusive-use castle in the heart of County Limerick. Situated on a 200-acre wooded estate, it's a perfect base for exploring the Wild Atlantic Way.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762886903/HabiRent_dev/xazquo3gwuuapgvoxluj.jpg',
      filename: 'HabiRent_dev/xazquo3gwuuapgvoxluj'
    },
    price: 1455,
    location: 'Drumcollogher, County Limerick',
    country: 'Ireland',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -8.854521, 52.488414 ] },
    category: 'Castles',
    bookings: [],
    
  },
  {
   
    title: 'Blackwater Castle Private Estate',
    description: 'An authentic 12th-century castle set on a 50-acre estate with a private river. Located in Castletownroche, this castle is available for exclusive hire for events or private getaways.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887056/HabiRent_dev/tubhitnryjkleq7s4vge.jpg',
      filename: 'HabiRent_dev/tubhitnryjkleq7s4vge'
    },
    price: 1865,
    location: 'Castletownroche, County Cork',
    country: 'Ireland',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -8.465961, 52.171806 ] },
    category: 'Castles',
    bookings: [],
   
  },
  {
   
    title: "Burg Rheinstein Knight's Tower",
    description: "Stay in a 14th-century Rhine river castle. This immaculate, compact knight's castle features a working portcullis and drawbridge, offering a perfect fairytale experience.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887272/HabiRent_dev/rlpoxto58gjylh16qehx.jpg',
      filename: 'HabiRent_dev/rlpoxto58gjylh16qehx'
    },
    price: 2265,
    location: 'Bingen am Rhein',
    country: 'Germany',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 7.89368, 49.96739 ] },
    category: 'Castles',
    bookings: [],
 
  },
  {
    
    title: 'Historic German Schloss',
    description: 'A grand hall room within a sprawling historic Schloss in Bavaria. Features opulent interiors, antique furniture, and palace-like architecture.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887535/HabiRent_dev/mfvqcpub4jxwmecabydh.jpg',
      filename: 'HabiRent_dev/mfvqcpub4jxwmecabydh'
    },
    price: 2465,
    location: 'Coburg, Bavaria',
    country: 'Germany',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 10.965836, 50.2603 ] },
    category: 'Castles',
    bookings: [],
   
  },
  {
   
    title: 'Irish Tower House Retreat',
    description: 'A restored 15th-century medieval tower house. Experience authentic castle living, complete with stone spiral staircases and views of the Irish countryside.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887664/HabiRent_dev/cjxwxqfaglyg7cfrltyf.jpg',
      filename: 'HabiRent_dev/cjxwxqfaglyg7cfrltyf'
    },
    price: 1755,
    location: 'Galway',
    country: 'Ireland',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -9.102344, 53.30027 ] },
    category: 'Castles',
    bookings: [],
    
  },
  {
    
    title: 'Grace Hotel, Imerovigli',
    description: 'Home to the largest heated infinity pool on the caldera, offering unobstructed sunset views from its lofty Imerovigli perch. A Michelin-awarded restaurant provides poolside service.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887785/HabiRent_dev/jhimkvgb56apgohmfvwp.jpg',
      filename: 'HabiRent_dev/jhimkvgb56apgohmfvwp'
    },
    price: 2500,
    location: 'Imerovigli, Santorini',
    country: 'Greece',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 25.447352, 36.412711 ] },
    category: 'Amazing Pools',
    bookings: [],
   
  },
  {
   
    title: 'Katikies Hotel Caldera View',
    description: 'This ultra-luxe Oia destination features three lagoon-inspired infinity pools with astonishing caldera views. Attentive servers deliver champagne and cocktails to your sunbed.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762887900/HabiRent_dev/u0wl1u8urxsyofhurvri.webp',
      filename: 'HabiRent_dev/u0wl1u8urxsyofhurvri'
    },
    price: 3000,
    location: 'Oia, Santorini',
    country: 'Greece',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 12.900557, 46.110681 ] },
    category: 'Amazing Pools',
    bookings: [],
   
  },
  {
   
    title: 'Soori Bali Ocean Pool Villa',
    description: "A private villa uniquely configured to maximize ocean views without compromising privacy. Features a large infinity pool and direct beach access on Bali's southwestern coast.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888066/HabiRent_dev/gs4xw2mnyqfpcrrnoizq.jpg',
      filename: 'HabiRent_dev/gs4xw2mnyqfpcrrnoizq'
    },
    price: 2450,
    location: 'Tabanan, Bali',
    country: 'Indonesia',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 115.12584, -8.538308 ] },
    category: 'Amazing Pools',
    bookings: [],
   
  },
  {
   
    title: 'Cavo Tagoo Santorini',
    description: "A swanky, heated infinity pool in Imerovigli with panoramic sunset caldera views. Features 'floating' sunbeds in the pool's shallow end and champagne service.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888242/HabiRent_dev/dvx3jysjty6ksiiucljw.jpg',
      filename: 'HabiRent_dev/dvx3jysjty6ksiiucljw'
    },
    price: 4200,
    location: 'Imerovigli, Santorini',
    country: 'Greece',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 25.447352, 36.412711 ] },
    category: 'Amazing Pools',
    bookings: [],
   
  },
  {
   
    title: 'Tropical Sunset Infinity Pool',
    description: 'A private villa in Uluwatu, Bali, featuring a stunning infinity pool overlooking the ocean at sunset. A perfect blend of luxury and serenity.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888460/HabiRent_dev/zveg8swd4h4zfnv0fpsz.jpg',
      filename: 'HabiRent_dev/zveg8swd4h4zfnv0fpsz'
    },
    price: 3545,
    location: 'Uluwatu, Bali',
    country: 'Indonesia',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 106.86768, -6.218766 ] },
    category: 'Amazing Pools',
    bookings: [],
   
  },
   {
   
    title: 'Fabbrica Di San Martino, Lucca',
    description: 'A luxury organic and biodynamic agriturismo near Lucca. This 250-year-old manor farmhouse produces its own quality wine and olive oil.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888661/HabiRent_dev/vq4gbyze3hlbwh4s04wo.jpg',
      filename: 'HabiRent_dev/vq4gbyze3hlbwh4s04wo'
    },
    price: 6500,
    location: 'Lucca, Tuscany',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 10.504121, 43.84385 ] },
    category: 'Farms',
    bookings: [],
   
  },
  {
   
    title: 'Agriturismo Macinatico, San Gimignano',
    description: "A charming farmhouse on a sweet hill 5km from San Gimignano. Offers great views of the town's iconic medieval towers and the surrounding countryside vineyards.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888830/HabiRent_dev/rvlsybffxtku9tebytx7.jpg',
      filename: 'HabiRent_dev/rvlsybffxtku9tebytx7'
    },
    price: 6570,
    location: 'San Gimignano, Tuscany',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 11.043019, 43.467926 ] },
    category: 'Farms',
    bookings: [],
    
  },
  {
   
    title: 'Fattoria Di Pancole, Chianti',
    description: 'Located near San Gimignano on a 60-hectare organic farm. This agriturismo produces its own extra virgin olive oil and award-winning red and white wines.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762888951/HabiRent_dev/yxmlilkhnpumvkoweipt.jpg',
      filename: 'HabiRent_dev/yxmlilkhnpumvkoweipt'
    },
    price: 6430,
    location: 'Pancole, Tuscany',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 11.301076, 42.715076 ] },
    category: 'Farms',
    bookings: [],
    
  },
  {
  
    title: 'Tuscan Villa with Olive Grove',
    description: 'A classic stone villa surrounded by rolling hills, cypress trees, and a thriving olive grove. This is the quintessential Tuscan farm experience, offering peace and scenic views.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889061/HabiRent_dev/vtzx4ru4gom8nxinrhce.jpg',
      filename: 'HabiRent_dev/vtzx4ru4gom8nxinrhce'
    },
    price: 6280,
    location: 'Florence, Tuscany',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -84.553317, 39.019828 ] },
    category: 'Farms',
    bookings: [],
   
  },
  {
  
    title: 'Rustic Farmhouse near Siena',
    description: 'A rustic farmhouse apartment less than 10km from Siena. The countryside is typically Tuscan, quiet and peaceful, with a saltwater swimming pool in the garden.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889322/HabiRent_dev/wq2ojm8kssunmbrpsmzn.webp',
      filename: 'HabiRent_dev/wq2ojm8kssunmbrpsmzn'
    },
    price: 5800,
    location: 'Siena, Tuscany',
    country: 'Italy',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 11.332266, 43.31921 ] },
    category: 'Farms',
    bookings: [],
  },
  {
    title: 'Under Canvas Zion',
    description: 'A luxury glamping retreat near Zion National Park. Experience ultimate comfort and breathtaking views from your safari-style tent.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889478/HabiRent_dev/o7cvfbzaosxh4bpxojos.jpg',
      filename: 'HabiRent_dev/o7cvfbzaosxh4bpxojos'
    },
    price: 4480,
    location: 'Virgin, Utah',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -113.188747, 37.202289 ] },
    category: 'Camping',
    bookings: [],
    
  },
  {
   
    title: 'Under Canvas Bryce Canyon',
    description: 'Stay in a luxury canvas tent at Under Canvas Bryce Canyon. Located on 750 acres of secluded land just 15 minutes from the national park.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889595/HabiRent_dev/fvdni7mdou5ho47ode0k.jpg',
      filename: 'HabiRent_dev/fvdni7mdou5ho47ode0k'
    },
    price: 3590,
    location: 'Widtsoe, Utah',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -111.995605, 37.831245 ] },
    category: 'Camping',
    bookings: [],
   
  },
  {
   
    title: 'Wildhaven Yosemite Glamping Tent',
    description: 'A unique and comfortable night outdoors in a canvas tent with beautiful views of rolling foothills. Located just 45 minutes from the park entrance.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889750/HabiRent_dev/hbq6cykq6ukaebdm7yzv.jpg',
      filename: 'HabiRent_dev/hbq6cykq6ukaebdm7yzv'
    },
    price: 3270,
    location: 'Mariposa, California',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -119.964213, 37.483633 ] },
    category: 'Camping',
    bookings: [],
   
  },
  {
   
    title: 'AutoCamp Joshua Tree',
    description: 'Desert glamping at its finest. Stay in a luxury Airstream or tent near Joshua Tree National Park, searching for cosmic wellness and other-worldly adventure.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889864/HabiRent_dev/meiuemuvg8zpdujwk2tz.jpg',
      filename: 'HabiRent_dev/meiuemuvg8zpdujwk2tz'
    },
    price: 7540,
    location: 'Joshua Tree, California',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -116.31517, 34.134952 ] },
    category: 'Camping',
    bookings: [],
   
  },
  {
   
    title: 'Under Canvas Acadia',
    description: "A waterfront glamping experience on 100 acres with 1,200 feet of shoreline. Just 35 minutes to Acadia National Park, this is a perfect base for exploring Maine's coast.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762889976/HabiRent_dev/vjets9bau6zgqubolzr7.jpg',
      filename: 'HabiRent_dev/vjets9bau6zgqubolzr7'
    },
    price: 5420,
    location: 'Surry, Maine',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -68.504808, 44.500536 ] },
    category: 'Camping',
    bookings: [],
   
  },
  {
 
    title: 'ICEHOTEL 365, Jukkasjärvi',
    description: "The original, world-famous ICEHOTEL. Sleep on reindeer skins in an exquisitely carved ice room. This listing is for the 'ICEHOTEL 365' portion, which is open year-round, 200km north of the Arctic Circle.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890093/HabiRent_dev/y6m8kiwst0v4bg7w7wsd.jpg',
      filename: 'HabiRent_dev/y6m8kiwst0v4bg7w7wsd'
    },
    price: 8000,
    location: 'Jukkasjärvi',
    country: 'Sweden',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 20.60282, 67.85012 ] },
    category: 'Arctic',
    bookings: [],
   
  },
  {
   
    title: 'Sorrisniva Igloo Hotel, Alta',
    description: "The world's northernmost ice hotel, located in Alta, Norway. This hotel is rebuilt every year with a new theme and is part of the Sorrisniva Arctic Wilderness Lodge complex.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890230/HabiRent_dev/plhddl0ntacsba6fsnki.jpg',
      filename: 'HabiRent_dev/plhddl0ntacsba6fsnki'
    },
    price: 7500,
    location: 'Alta',
    country: 'Norway',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 83.77845, 53.347402 ] },
    category: 'Arctic',
    bookings: [],
   
  },
  {
    
    title: 'Arctic SnowHotel, Rovaniemi',
    description: 'Located in Sinetta, near Rovaniemi, this hotel is rebuilt each winter with new designs. It features 20 rooms, an ice chapel, an ice bar, and an ice restaurant.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890374/HabiRent_dev/xttrw0t6dkl8fjlomotr.jpg',
      filename: 'HabiRent_dev/xttrw0t6dkl8fjlomotr'
    },
    price: 7985,
    location: 'Rovaniemi, Lapland',
    country: 'Finland',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 25.730928, 66.50259 ] },
    category: 'Arctic',
    bookings: [],
   
  },
  {
   
    title: 'Snow Resort Kirkenes',
    description: 'A unique snow resort in Kirkenes, Norway, offering a year-round Arctic experience. Stay in a room carved from ice and snow.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890506/HabiRent_dev/vip5kgrebkhnvcxqpkdp.jpg',
      filename: 'HabiRent_dev/vip5kgrebkhnvcxqpkdp'
    },
    price: 7690,
    location: 'Kirkenes',
    country: 'Norway',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 30.041626, 69.72769 ] },
    category: 'Arctic',
    bookings: [],
    
  },
  {
    
    title: 'Lapland SnowVillage',
    description: "Located in Lainiotie, this SnowVillage opens each December with a new theme. Carved from snow and ice, it's a magical experience in Finnish Lapland.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890651/HabiRent_dev/kyq3lrermo6gf4fpxorc.jpg',
      filename: 'HabiRent_dev/kyq3lrermo6gf4fpxorc'
    },
    price: 7630,
    location: 'Lainiotie, Lapland',
    country: 'Finland',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 24.4949, 67.542411 ] },
    category: 'Arctic',
    bookings: [],
   
  },
  {
    title: 'The Snow Globe-Dome, Estes Park',
    description: "Stay at the legendary Estes Park Dome, also known as 'The Snow Globe.' This eco-friendly geodesic dome offers a whimsical retreat with a deck and fast WiFi, 10 minutes from downtown.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762890897/HabiRent_dev/xsruhp96wyzikqep6rpq.jpg',
      filename: 'HabiRent_dev/xsruhp96wyzikqep6rpq'
    },
    price: 6540,
    location: 'Estes Park, Colorado',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -105.521528, 40.376612 ] },
    category: 'Domes',
    bookings: [],
   
  },
  {
   
    title: 'The Boho-Dome, Hartville',
    description: 'A private, boho-chic dome atop a hill of pine and cedar wonderland. This hidden gem in SE Wyoming offers total immersion in nature just beyond its panoramic window wall.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891071/HabiRent_dev/rfwopfsovziety7ocdtw.jpg',
      filename: 'HabiRent_dev/rfwopfsovziety7ocdtw'
    },
    price: 6530,
    location: 'Hartville, Wyoming',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -104.726885, 42.327306 ] },
    category: 'Domes',
    bookings: [],
  
  },
  {
  
    title: 'Shuswap Sky Dome',
    description: 'Perched high above Shuswap Lake, this off-grid geodesic dome offers an amazing glamping experience with a wood-burning hot tub and panoramic views.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891203/HabiRent_dev/gd1m1d7hadj866uiojbt.jpg',
      filename: 'HabiRent_dev/gd1m1d7hadj866uiojbt'
    },
    price: 6590,
    location: 'Blind Bay, British Columbia',
    country: 'Canada',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -119.40155, 50.8874 ] },
    category: 'Domes',
    bookings: [],
   
  },
  {
   
    title: 'Off-Grid Hocking Hills Geodome',
    description: 'Find your escape in this geodome cabin rental in the Hocking Hills region. A perfect way to connect with nature without sacrificing comfort.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891324/HabiRent_dev/aazvprhc2xnqqmf4ln1v.jpg',
      filename: 'HabiRent_dev/aazvprhc2xnqqmf4ln1v'
    },
    price: 6480,
    location: 'Hocking Hills, Ohio',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -82.119677, 39.36555 ] },
    category: 'Domes',
    bookings: [],
  
  },
  {

    title: 'Texas Dome, Big Bend',
    description: 'A geodesic dome in the desert, offering solitude and stunning views of the night sky near Big Bend National Park. A true off-grid experience.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891486/HabiRent_dev/etoem6xj8xyjnp0vsscc.jpg',
      filename: 'HabiRent_dev/etoem6xj8xyjnp0vsscc'
    },
    price: 6790,
    location: 'Terlingua, Texas',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -103.615882, 29.321627 ] },
    category: 'Domes',
    bookings: [],
    
  },
   {
  
    title: 'Sleepless in Seattle-Houseboat',
    description: "Experience your 'Sleepless in Seattle' dream on this iconic houseboat. Offers stunning views of downtown Seattle and the constant entertainment of Lake Union.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891847/HabiRent_dev/mgu5flal7lhy3lxjvknk.jpg',
      filename: 'HabiRent_dev/mgu5flal7lhy3lxjvknk'
    },
    price: 5430,
    location: 'Lake Union, Seattle',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -122.33846, 47.622047 ] },
    category: 'Boats',
    bookings: [],
   
  },
  {  
    title: 'Lake Union Houseboat, Space Needle View',
    description: 'A 2-bedroom houseboat rental floating in the heart of the city. This home offers breathtaking views of the city skyline, Mt. Rainier, and the Space Needle.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762891980/HabiRent_dev/ly3elid7pgk2omrfhjc8.webp',
      filename: 'HabiRent_dev/ly3elid7pgk2omrfhjc8'
    },
    price: 5769,
    location: 'Lake Union, Seattle',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -122.33846, 47.622047 ] },
    category: 'Boats',
    bookings: [],
   
  },
  {
  
    title: 'Amsterdam-Style River Houseboat',
    description: "Experience Seattle houseboat living aboard 'Latte,' a charming Amsterdam-style river houseboat. Nestled in a spacious slip with rich natural wood finishes throughout.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762892157/HabiRent_dev/dhgu3kvtqzuhpqwgpfl9.jpg',
      filename: 'HabiRent_dev/dhgu3kvtqzuhpqwgpfl9'
    },
    price: 6540,
    location: 'Portage Bay, Seattle',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -122.322136, 47.650475 ] },
    category: 'Boats',
    bookings: [],
   
  },
  {

    title: 'Classic Amsterdam Canal Boat',
    description: "A fully furnished houseboat located in the heart of Amsterdam's Jordaan neighborhood. Wake up to stunning views of the city's iconic canals.",
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762892289/HabiRent_dev/v1gxgxmzhbtugez0yrtp.jpg',
      filename: 'HabiRent_dev/v1gxgxmzhbtugez0yrtp'
    },
    price: 7530,
    location: 'Jordaan, Amsterdam',
    country: 'Netherlands',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ 4.880304, 52.37554 ] },
    category: 'Boats',
    bookings: [],
   
  },
  {
 
    title: 'Modern Floating Home, Seattle',
    description: 'A luxurious, modern three-story floating home in Eastlake. Offers all the amenities of a high-end condo, but with the tranquility of living on the water.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762892413/HabiRent_dev/bjlmnvkgj1cdszsqfgea.jpg',
      filename: 'HabiRent_dev/bjlmnvkgj1cdszsqfgea'
    },
    price: 8456,
    location: 'Eastlake, Seattle',
    country: 'United States',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -122.3259, 47.642044 ] },
    category: 'Boats',
    bookings: [],
   
  },
   {
  
    title: 'Secluded AirShip, Drimnin',
    description: 'A sustainable and iconic, insulated aluminum pod. This quirky and cool getaway features dragonfly windows with breathtaking views of the Sound of Mull.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762892535/HabiRent_dev/l5is2xlvns8lagxhtnrp.jpg',
      filename: 'HabiRent_dev/l5is2xlvns8lagxhtnrp'
    },
    price: 6490,
    location: 'Drimnin, Scotland',
    country: 'United Kingdom',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -4.134663, 55.888273 ] },
    category: 'Rooms',
    bookings: [],
   
  },
  {
   
    title: 'Yellow Submarine-Retreat, Marton',
    description: 'A 1960s-themed Yellow Submarine floating in a redwood forest. This unique, quirky stay is a true one-of-a-kind experience.',
    image: {
      url: 'https://res.cloudinary.com/dh19cdtxv/image/upload/v1762892669/HabiRent_dev/p3xsvchj0dlxaer7pgkr.jpg',
      filename: 'HabiRent_dev/p3xsvchj0dlxaer7pgkr'
    },
    price: 5805,
    location: 'Marton',
    country: 'New Zealand',
    reviews: [],
    geometry: { type: 'Point', coordinates: [ -3.028658, 53.805893 ] },
    category: 'Rooms',
    bookings: [],
   
  }
];

module.exports = { data: sampleListings };