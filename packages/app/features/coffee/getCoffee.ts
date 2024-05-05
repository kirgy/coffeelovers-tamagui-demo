type Coffee = {
  uuid: string
  imageUri: string
  title: string
  description: string[]
  starRating: number
}

const coffeeMap: Record<string, Coffee> = {
  '41f2f4ccb3e005249b9d6ee49ffc3b80': {
    uuid: '41f2f4ccb3e005249b9d6ee49ffc3b80',
    imageUri:
      'https://zekesfirstsecret.s3.eu-west-1.amazonaws.com/public/boonaboona/41f2f4ccb3e005249b9d6ee49ffc3b80.png',
    title: 'Colombia Tolima',
    description: [
      'This washed coffee comes from the Tolima area of Colombia. For many years Tolima has been in the shadow of other well-known coffee growing regions as armed conflict and coca leaf production isolated small coffee producers and exposed them to high rates of violence. As conflict has subsided in recent years, locally organized associations have taken the lead in creating market access for their coffee.',
      'The coffee is produced by an association called Café Excelencia, which has 84 producers with small farms in the municipalities of Ataco. Each producer has their own micro-mill where they carefully harvest cherries, depulp, ferment, wash and gently dry the parchment on raised beds. Their excellent farm management and post-harvest practices culminate into a clean and consistent flavour.',
      'Colombian coffee is known for its balanced flavour profile is this one is a great all rounder with lots of toasted nuts and chocolate, balanced with a little floral and spice.',
    ],
    starRating: 4,
  },
  e31b94ef1e28bd789173a776accb57c4: {
    uuid: 'e31b94ef1e28bd789173a776accb57c4',
    imageUri:
      'https://zekesfirstsecret.s3.eu-west-1.amazonaws.com/public/boonaboona/e31b94ef1e28bd789173a776accb57c4.png',
    title: 'Peru Huabal',
    description: [
      'This washed coffee comes from various farms in the Huabal district of Peru. Because Huabal spans a couple of mountain ranges the climate conditions and soils can vary considerably with some areas having wet, humid conditions and red, African-like soils and others dry and hot. This all contributes to diverse and delicious cup profiles and some very complex coffees.',
      "The region has immense potential for high quality coffee thanks to its wide range of altitudes, from 1,700 to 2,100 meters above sea level, however poor infrastructure has historically limited producers' resources and knowledge to unlock that potential. Many farms had previously planted their crops with the Catimor variety, which was promoted by the government, but at the higher altitudes of Huabal Catimor often struggles to produce decent yields and quality. With the premiums now being offered for specialty coffee, producers are planting more suitable, higher quality varieties like Caturra, Bourbon and Catuai. With good management and fertilization, these varieties thrive in Huabal’s high elevations.",
      'This coffee is the result of a determined effort to help farmers in the area improve the quality of their coffee by planting varietals suited to the climate and employing better agricultural practices. Grown at high altitude, the beans pack in lots of flavour, with black cherry juiciness, caramel sweetness and a lovely creamy body',
    ],
    starRating: 5,
  },
  b24ad57958c0ff78cf6331119aa9c81e: {
    uuid: 'b24ad57958c0ff78cf6331119aa9c81e',
    imageUri:
      'https://zekesfirstsecret.s3.eu-west-1.amazonaws.com/public/boonaboona/b24ad57958c0ff78cf6331119aa9c81e.png',
    title: 'India Ratnagiri Estate',
    description: [
      "This coffee comes from the Ratnigiri Estate in the Western Ghats. The Hindi word 'Ratnagiri' translates literally to 'Pearl Mountain', a reference to the dense silver oak canopy which crowns this farm. Ratnagiri was established in 1920 and is owned and operated by Ashok Patre, having been passed down from Grandfather, to father to son.",
      'For all intents and purposes Ratnagiri Estate is an organic/biodynamic farm and also maintains official Rainforest Alliance Certification. Quarterly soil tests and organic corrections to soil are applied and Ionic seawater and seaweed extract are applied to improve plant immunity and sugar levels of the fruit.',
      'The estate is a lush shaded environment with 3 stories of shade. It is home to over 48 recorded bird populations, monkeys, leopards, wild boar, tigers, mongoose and - on occasion - elephants. The rich biodiversity demands that Ashok and his family have an approach to farming which places ecology and harmony with the environment at the forefront.',
      'This particular coffee has been processed using the anaerobic fermentation method. The coffee cherries undergo an extended fermentation period of 95 hours in stainless steel tanks before being dried out for 30 days on raised drying beds. This innovative processing technique imparts lots of interesting flavours into the coffee and this one has lots of rum & raisin and stewed fruits, balanced with chocolate and nut. This is an interesting coffee for anyone keen to sample how different processing methods can create unique flavours in your coffee.',
    ],
    starRating: 2,
  },
  '80e55cfe334383f98330c353d1da401a': {
    uuid: '80e55cfe334383f98330c353d1da401a',
    imageUri:
      'https://zekesfirstsecret.s3.eu-west-1.amazonaws.com/public/boonaboona/80e55cfe334383f98330c353d1da401a.png',
    title: 'Carnival Espresso',
    description: [
      'Carnival espresso sums up what we are all about at Boona Boona - delicious flavours that can be enjoyed by everyone and a celebration of the countries and people that produce these delicious beans.',
      "We purposely made Carnival a versatile blend so you don't need to have an espresso machine to enjoy it. It makes a lovely cup in almost any brewing method such as a french press, stovetop or Aeropress.",
    ],
    starRating: 1,
  },
}

export const getCoffeeByUUID = (uuid: string): Coffee | undefined => coffeeMap[uuid]

export const getAllCoffees = (): Coffee[] => Object.values(coffeeMap)
