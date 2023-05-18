interface tourCenterTypes {
  id: number;
  name: string;
  state: string;
  historical: string;
  info: string;
  address: string;
  rating: string;
  imageUrl: string;
  imageAlt: string;
  discovered?: string;
  opened?: string;
  guide: string;
}

type userType = {
  id: number;
  state: string;
  slogan: string;
  imageUrl: string;
  imageAlt: string;
  tourCenter: tourCenterTypes[];
};

const data: userType[] = [
  {
    id: 1,
    state: "Lagos",
    slogan: "Centre of Excellence",
    imageUrl: "/lagos/National-Theatre-Lagos-Nigeria.webp",
    imageAlt: "Toronto skyline",
    tourCenter: [
      {
        id: 1,
        name: "Tafawa Balewa Square",
        state: "lagos",
        historical:
          "Major national events at TBS includes Nigeria’s independence celebration which took place on 1 October 1960 with the Prime Minister, Tafawa Balewa, delivering his speech. Democracy Day, as well as other multifarious events such as musical jamborees and religious gatherings.",
        info: "The entrance to the square has gigantic sculptures of four white horses hovering above the gate and seven red eagles, which are symbols from the national emblem signifying Strength and Dignity respectively. Other monument in the square include the Remembrance Arcade (with memorials to World War I, World War II and Nigerian civil war victims) and the 26-storey Independence House, built in 1963 which was for a long time, the tallest building in Nigeria.",
        address: "45/57 Massey Bamgboshe Street, Lagos Island",
        rating: "4.1/5",
        imageUrl: "/lagos/tbs.jpg",
        imageAlt: "Tafawa Balewa Square",
        opened: "1972",
        guide: "segunajibola",
      },
      {
        id: 2,
        name: "Lekki Conservation Centre",
        state: "lagos",
        historical:
          "The Centre was established in 1990 to serve as biodiversity conservation icon and environment education centre. The facility was built by the Chevron Corporation for the Nigerian Conservation Foundation (NCF), as a reserved sanctuary for the rich flora and fauna of the Lekki Peninsula. The company has since provided annual funding for the management of the Centre.",
        info: "The reserve area which covers a land area of 78 hectares (192.74 acres) is located on Lekki Peninsula, next to the Lekki Lagoon, and near the Lagos Lagoon. It protects the wetlands of the Lekki peninsula which consists of swamp and savannah habitats. Approaching the reserve, there's a boulevard of coconut trees that leads to a well-laid-out car and Visitors Park. It is endowed with an abundance of plant and animal life. Its huge tract of wetlands is set aside for wildlife viewing. Raised walkways enable the viewing of animals like monkeys, crocodiles, snakes, and various birds. There is also a conservation center and a library.",
        address: "Km 19 Lekki - Epe Expy, Lekki Penninsula II 106104, Lekki",
        rating: "4.3/5",
        imageUrl: "/lagos/lcc.jpg",
        imageAlt: "Lekki Conservation Centre",
        opened: "1990",
        guide: "segunajibola",
      },
      {
        id: 3,
        name: "National Musuem",
        state: "lagos",
        historical:
          "In July 1948, the first architectural sketches of the museum were submitted to a conference on museum policy in Nigeria. The museum was founded in 1957 by the English archaeologist Kenneth Murray. The main purpose of constructing this museum was to preserve different historical artifacts of Nigeria. Kenneth Murray had collected several traditional masks from Cross River State, these masks were displayed in the museum.",
        info: "The museum houses the collections of artifacts belonging to different cultures of the ethnic groups in Nigeria. The size of the collection is estimated at 47,000 objects, made of different materials such as wood, ivory, metal and terracotta. The artifacts include masks, textiles, drums, dane guns and wooden figures. Among the artifacts, in the Yoruba section, the museum includes Egungun costumes and clay pots. The museum has a collection of statues dating from different periods of Nigeria's history.",
        address: "Onikan Rd, Ikoyi",
        rating: "3.9/5",
        imageUrl: "/lagos/national_museum.jpg",
        imageAlt: "National Musuem",
        opened: "1957",
        guide: "segunajibola",
      },
    ],
  },
  {
    id: 2,
    state: "Abuja",
    slogan: "Centre of Unity",
    imageUrl: "/abuja/zuma.jpg",
    imageAlt: "Zuma Rock",
    tourCenter: [
      {
        id: 1,
        name: "Zuma Rock",
        state: "abuja",
        historical:
          "The Zuba people settled around the rock and came to see it as a spiritual guide, making sacrifices to the rock to keep them safe from harm. Because the landmark offered a clear view of the surrounding landscape, it was also used as a defensive position from other invading tribes.",
        info: "Zuma Rock is a large natural monolith, or inselberg, an igneous intrusion composed of gabbro and granodiorite, in Niger State, Nigeria. It is located in the west of Nigeria's capital, Abuja, along the main road from Abuja to Kaduna off Madala, and is sometimes referred to as the Gateway to Abuja from Suleja. Zuma Rock rises approx. 300 metres (980 ft) above its surroundings.",
        address: "Along the main road from Abuja to Kaduna (Madalla)",
        rating: "4.4/5",
        imageUrl: "/abuja/zuma.jpg",
        imageAlt: "Zuma Rock",
        discovered: "15th century",
        guide: "segunajibola",
      },
      {
        id: 2,
        name: "Millennium Park",
        state: "abuja",
        historical:
          "The Millennium Park was inaugurated by Queen Elizabeth II on 4 December 2003, conceived and designed by an Italian architect Manfredi Nicoletti.",
        info: "The Millennium Park is the largest public park of Abuja, the capital of Nigeria and is located in the Maitama district of the city. It is near the former Presidential Palace close to the nucleus of presidential and administrative buildings of the city. A river crosses the Park in its main rectilinear axis, dividing it into two parts. One side on the Park is dedicated to uncontaminated nature. In a system of terraces at different levels are located Nigeria's mountain vegetation, savanna, deciduous forest, rainforest and brushwood as well as greenhouses for butterflies and tropical birds.",
        address:
          "5 Usuma St, Three Arms Zone 900103, Abuja, Federal Capital Territory",
        rating: "4.3/5",
        imageUrl: "/abuja/millenium-park.jpg",
        imageAlt: "Millennium Park",
        discovered: "2003",
        guide: "segunajibola",
      },
      {
        id: 3,
        name: "Jabi Lake",
        state: "abuja",
        historical:
          "Jabi Lake is a water body formed from a man-made earth dam that was initially created to provide water to the residents of Abuja, Nigeria.",
        info: "The total surface area of the lake is about 1,300 hectares (3,200 acres). The initial capacity of the reservoir was to supply water to 100,000 residents. But after the construction of the bigger Lower Usuma Dam, the reservoir became a fishing and tourism attraction.",
        address: "Jabi 900108, Federal Capital Territory",
        rating: "4.3/5",
        imageUrl: "/abuja/jabi-lake.jpg",
        imageAlt: "Jabi Lake",
        opened: "1981",
        guide: "segunajibola",
      },
    ],
  },
  {
    id: 3,
    state: "Rivers",
    slogan: "Treasure Base of the Nation",
    imageUrl: "/rivers/ph-pleasure-park.jpg",
    imageAlt: "Port-Harcourt Pleasure Park",
    tourCenter: [
      {
        id: 1,
        name: "Portharcourt Pleasure Park",
        state: "rivers",
        historical:
          "Julius Berger of Nigeria was awarded the contract to construct the park and started work in May 2016. The whole project was completed within 12 months of the commencement date. The Government of Rivers State commissioned and opened the Port Harcourt Pleasure Park for public use in a grand ceremony that attracted thousands of Riverians from all walks of life. Former governor, Peter Odili inaugurated the project, which was initiated, designed and constructed by the Nyesom Wike administration.",
        info: "Port Harcourt Pleasure Park is a public recreation park in Niger-Delta's oil rich garden city of Port Harcourt. It is strategically located along the major Aba Road, and flanked between the Army Barracks (a.k.a. Bori Camp) and Air Force base junction, on an expansive open land with 24-7-365 internal security.",
        address:
          "R2Q6+7X9 Peace Park, Between Army Bori Camp and Airforce base junction, City Centre, Port Harcourt",
        rating: "4.3/5",
        imageUrl: "/rivers/ph-pleasure-park.jpg",
        imageAlt: "Port-Harcourt Pleasure Park",
        opened: "2017",
        guide: "segunajibola",
      },
      {
        id: 2,
        name: "Finima Beach",
        state: "rivers",
        historical:
          "The park was established in recognition of the importance of the flora and fauna, the sacrifices of Bonny people, and their aspiration and commitment to keeping a permanent record of their natural heritage and culture. It is also part of NLNG’s contribution to the national and global conservation objective, in line with Rio Agenda 21, Ramsar convention and convention on Biological Diversity.",
        info: "The Finima Nature Park is a natural park in Bonny Island, Rivers State, Nigeria covering an area of approximately 1000 ha (3.9 sq mi). It was established by the Nigeria Liquefied Natural Gas Limited with the aim of conserving nature and biodiversity in the region.",
        address: "Light House, Bonny, Rivers.",
        rating: "4.1/5",
        imageUrl: "/rivers/finima-beach.jpg",
        imageAlt: "Finima Beach",
        opened: "1999",
        guide: "segunajibola",
      },
      {
        id: 3,
        name: "Portharcourt Zoo",
        state: "rivers",
        historical:
          "The zoo was established in 1974 by military governor Alfred Diete-Spiff and was officially opened to the public on 1 October 1975.",
        info: "Port Harcourt Zoo is a state owned zoological park in Port Harcourt city of Rivers State in Nigeria. The Port Harcourt International Airport is approximately 14 miles (22.5 km) northwest of the park.",
        address: "R26W+V58, Peter Odili Rd, Trans Amadi 500003, Port Harcourt",
        rating: "3.0/5",
        imageUrl: "/rivers/ph-zoo.jpg",
        imageAlt: "Portharcourt Zoo",
        opened: "1975",
        guide: "segunajibola",
      },
    ],
  },
];

export default data;
