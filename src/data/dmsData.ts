import { ServiceItem, GalleryItem, ColorSwatch, Testimonial, FaqItem } from '../types';

// Real high-resolution project images (Work Done 1 - 10)
import workDone1Img from '../assets/images/work_done_1_1787224012254.jpg';
import workDone2Img from '../assets/images/work_done_2_1787224025176.jpg';
import workDone3Img from '../assets/images/work_done_3_1787224038893.jpg';
import workDone4Img from '../assets/images/work_done_4_1787224053419.jpg';
import workDone5Img from '../assets/images/work_done_5_1787224069869.jpg';
import workDone6Img from '../assets/images/work_done_6_1787224082865.jpg';
import workDone7Img from '../assets/images/work_done_7_1787224102243.jpg';
import workDone8Img from '../assets/images/work_done_8_1787224120041.jpg';
import workDone9Img from '../assets/images/work_done_9_1787224134894.jpg';
import workDone10Img from '../assets/images/work_done_10_1787224146957.jpg';

export const COMPANY_DETAILS = {
  name: "DMS Seamless Aluminium Gutters & Waterproofing",
  shortName: "DMS Gutters",
  tagline: "Precision, Durability and Elegance in Every Gutter!",
  subTagline: "Your shield against water damage.",
  contactPerson: "Brian",
  phone: "060 522 0139",
  phoneFormatted: "060 522 0139",
  phoneInternational: "+27605220139",
  email: "info@dmsindustries.co.za",
  serviceAreas: [
    "Cape Town & Atlantic Seaboard",
    "Northern Suburbs (Durbanville, Bellville)",
    "Southern Suburbs (Constantia, Claremont)",
    "Helderberg (Somerset West, Strand)",
    "Garden Route & Regional Western Cape",
    "Gauteng Commercial Projects"
  ],
  workingHours: "Mon - Fri: 07:30 - 17:30 | Sat: 08:00 - 14:00",
  emergencyAvailable: true,
  guaranteeYears: 10,
  warrantyMaterial: "10-Year Factory Material Warranty",
  warrantyWorkmanship: "2-Year Workmanship Warranty",
  warrantySummary: "10 Year Factory Warranty on Material & 2 Year Workmanship Warranty",
  materialsPledge: "Marine Grade 3003-H14 Aluminium with baked-on UV resistant polyester powder coating."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "domestic-gutters",
    title: "Domestic Seamless Gutters",
    shortDesc: "Custom-fitted 125mm seamless Ogee profile aluminium gutters roll-formed on-site to the exact millimeter of your home.",
    fullDesc: "Our domestic seamless gutters are manufactured on-site using our specialized mobile roll-forming machinery directly from our support vehicles. Because the gutter is extruded as one continuous length from corner to corner, there are zero joints, seams, or splices along straight runs — completely eliminating 99% of conventional gutter leak points.",
    iconName: "Home",
    badge: "Most Popular",
    features: [
      "125mm (5 inch) Classic Ogee architectural profile",
      "Continuous on-site roll forming up to 30+ meters per run",
      "Zero leaks, zero mid-run joints or rust-prone splices",
      "Internal concealed hanger brackets for a clean, sleek roofline",
      "Heavy 0.6mm - 0.7mm high-strength aluminium gauge",
      "Over 6 UV-resistant factory powder-coated finishes"
    ],
    specs: [
      { label: "Profile Width", value: "125mm (Standard Residential)" },
      { label: "Material", value: "Alloy 3003-H14 Aluminium" },
      { label: "Bracket System", value: "Concealed heavy-duty internal hangers" },
      { label: "Expected Lifespan", value: "25+ Years rust-free" }
    ],
    idealFor: "Standard & luxury residential homes, townhouses, estates, and patio extensions.",
    warranty: "10-Year Factory Material & 2-Year Workmanship Warranty"
  },
  {
    id: "industrial-gutters",
    title: "Industrial & Commercial Gutters",
    shortDesc: "High-capacity 150mm commercial box & Ogee gutters engineered for large roof catchment areas and industrial warehouses.",
    fullDesc: "Designed for commercial complexes, industrial plants, schools, and large residential estates with vast roof surfaces. Our 150mm industrial gutters handle high-volume storm runoff smoothly, preventing foundation flooding and structural water ingress.",
    iconName: "Building2",
    badge: "Heavy Duty",
    features: [
      "150mm (6 inch) High-flow catchment capacity",
      "Reinforced heavy gauge aluminium (up to 0.8mm)",
      "High-volume water discharge compatibility with 100mm downpipes",
      "Custom industrial overflow weirs and leaf-screen integrations",
      "Continuous on-site extrusion ensuring zero downtime leak risk",
      "Salt-spray and chemical smog resistance"
    ],
    specs: [
      { label: "Profile Width", value: "150mm (Commercial Box / Ogee)" },
      { label: "Material", value: "0.8mm Marine Grade Aluminium" },
      { label: "Discharge Volume", value: "Up to 3x higher flow than standard domestic" },
      { label: "Fixing Method", value: "Heavy-duty reinforced structural fascias & brackets" }
    ],
    idealFor: "Warehouses, shopping centers, office parks, apartment blocks, and schools.",
    warranty: "10-Year Factory Material & 2-Year Workmanship Warranty"
  },
  {
    id: "aluminium-downpipes",
    title: "Aluminium Downpipes & Offset Bends",
    shortDesc: "Architectural rectangular and round fluted aluminium downpipes with custom swan-neck offsets and rainwater harvesting links.",
    fullDesc: "Precision-measured downpipes designed to navigate brick pilasters, overhangs, window frames, and boundary wall clearances. Seamlessly redirects stormwater to ground drainage channels or rainwater retention tanks.",
    iconName: "Droplet",
    features: [
      "75x50mm, 100x75mm rectangular fluted & 100mm round options",
      "Hand-crafted swan-neck elbows for tight eaves navigation",
      "Direct rainwater tank & storage filter diverter integration",
      "Sturdy aluminium saddle clips flush-mounted into brick/plaster",
      "Color-matched to your exterior wall or gutter scheme",
      "Non-clog discharge shoes with angled directional outlets"
    ],
    specs: [
      { label: "Standard Sizes", value: "75x50mm / 100x75mm fluted" },
      { label: "Joint Method", value: "Riveted & sealed interlocking elbows" },
      { label: "Mounting", value: "Anti-rattle powder-coated wall saddles" },
      { label: "Rainwater Harvesting", value: "100% Non-toxic rainwater potable compliant" }
    ],
    idealFor: "All residential and industrial gutter downflow redirection and water tank harvesting.",
    warranty: "10-Year Factory Material & 2-Year Workmanship Warranty"
  },
  {
    id: "high-pressure-cleaning",
    title: "High Pressure Roof & Gutter Cleaning",
    shortDesc: "Industrial-grade high-pressure washing of roof tiles, corrugated sheets, gutters, and downpipes to remove moss, silt & grime.",
    fullDesc: "Over time, windborne dirt, fallen leaves, moss, and lichen build up in gutters and roof valleys, creating heavy blockages that force rainwater back under roof tiles. Our pressure wash team restores roof luster and clears all drainage passages.",
    iconName: "Sparkles",
    features: [
      "Industrial petrol-driven high-pressure wash systems",
      "Clears accumulated silt, decomposed leaves, and bird debris",
      "Safe eco-friendly tile washing that preserves underlay plastic",
      "Downpipe flush and ultrasonic blockage clearance",
      "Full pre-clean and post-clean roof leak inspection",
      "Prepares roof surface for long-lasting waterproofing coatings"
    ],
    specs: [
      { label: "Pressure Range", value: "150 - 250 Bar controlled pressure" },
      { label: "Scope", value: "Tiles, slate, sheeting, gutters & downpipes" },
      { label: "Eco Impact", value: "Zero harsh toxic chemicals used" },
      { label: "Recommended Interval", value: "Every 12 - 24 Months" }
    ],
    idealFor: "Roof restoration, pre-painting prep, clogged gutter systems, and tile revitalization.",
    warranty: "2-Year Workmanship Guarantee"
  },
  {
    id: "waterproofing",
    title: "Waterproofing & Parapet Sealing",
    shortDesc: "Complete liquid rubber, fiber-reinforced acrylic membrane, and torch-on waterproofing for roofs, valleys, ridges & flashings.",
    fullDesc: "Water ingress through leaking valleys, cracked parapet walls, faulty chimney flashings, or flat concrete decks can destroy ceilings, electrical wiring, and timber trusses. DMS provides complete multi-layer waterproofing shields.",
    iconName: "ShieldCheck",
    badge: "Zero Leaks",
    features: [
      "Parapet wall waterproofing and micro-crack capping",
      "Roof valley relining and dead-valley water diverters",
      "Chimney, skylight, and vent pipe flashing encapsulation",
      "Flat concrete roof deck and balcony waterproofing",
      "Ridge cap re-bedding and fiber-membrane sealing",
      "Heavy-duty liquid rubber elastomeric barrier"
    ],
    specs: [
      { label: "Membrane System", value: "Non-woven polyester fleece + acrylic/liquid rubber" },
      { label: "UV Resistance", value: "100% UV & weather proofing" },
      { label: "Flexibility", value: "300% Elongation to absorb building movement" },
      { label: "Service Life", value: "10+ Years with simple maintenance top-coat" }
    ],
    idealFor: "Flat roofs, tiled roof valleys, parapet walls, box gutters, and chimney flashings.",
    warranty: "10-Year Material & 2-Year Workmanship Warranty"
  },
  {
    id: "roof-wall-coatings",
    title: "Roof & Wall Protective Coatings",
    shortDesc: "Premium weather-shield roof paints, thermal barrier coatings, and fascia board protective treatments.",
    fullDesc: "Protect your property investment against intense South African UV rays, thermal expansion cracking, and driving coastal rain. Our specialized coatings restore vibrant roof colors while insulating your home.",
    iconName: "Paintbrush",
    features: [
      "High-build acrylic roof paint with heat reflective pigments",
      "Fascia board and barge board waterproofing and enamel coating",
      "Anti-fungal and mold-resistant exterior wall weather barrier",
      "Increases roof lifespan by 15+ years",
      "Reduces indoor attic temperatures during hot summer months",
      "Wide spectrum of modern architectural colors"
    ],
    specs: [
      { label: "Coating Type", value: "Pure Acrylic Elastomeric Thermal Coating" },
      { label: "Coverage", value: "Multi-coat application (primer + 2 topcoats)" },
      { label: "Finish", value: "Low-sheen satin / UV reflective matte" },
      { label: "Color Range", value: "Charcoal, Slate, Terracotta, Forest Green, Black" }
    ],
    idealFor: "Weathered tiled roofs, corrugated metal roofs, fascia boards, and boundary walls.",
    warranty: "10-Year Coating & 2-Year Workmanship Warranty"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Mobile On-Site Extrusion Unit & Nissan 4x4 Fleet",
    category: "commercial",
    categoryLabel: "On-Site Fleet",
    description: "Our fully equipped Nissan 4x4 mobile gutter manufacturing rig carrying precision roll-forming machinery to extrude seamless continuous gutters right on your driveway to exact millimetric roof dimensions.",
    location: "Cape Town & Regional Sites",
    material: "3003-H14 Marine Grade Aluminium",
    color: "Charcoal / Multi-Color Extrusion",
    imageUrl: workDone1Img,
    highlights: [
      "Custom roll-forming machine mounted on vehicle rack",
      "Continuous length extrusion up to 35m in a single piece",
      "Fully self-contained power and tooling for on-the-spot custom fits"
    ]
  },
  {
    id: 2,
    title: "Modern Residential Side Downpipe with Precision Eaves Offset",
    category: "downpipes",
    categoryLabel: "Downpipe Engineering",
    description: "Charcoal seamless fluted aluminium downpipe installed against light grey textured plaster facade with an articulated curved swan-neck navigating the soffit and security camera clearances.",
    location: "Residential Estate, Durbanville",
    material: "Fluted Aluminium Downpipe (75x50mm)",
    color: "Charcoal (RAL 7016)",
    imageUrl: workDone2Img,
    highlights: [
      "Custom upper elbow cleared around fascia & security brackets",
      "Flush-mounted aluminium wall saddles",
      "Discharge shoe directed smoothly into ground channel"
    ]
  },
  {
    id: 3,
    title: "Facebrick Residence Ogee Eaves Gutter System",
    category: "residential",
    categoryLabel: "Residential Roofing",
    description: "Full eave continuous seamless aluminium gutter installation on a rustic facebrick home with white timber barge boards and dark wave-profile roof tiles. Includes angled high-flow run.",
    location: "Somerset West Residence",
    material: "125mm Seamless Ogee Aluminium",
    color: "Charcoal / Anthracite",
    imageUrl: workDone3Img,
    highlights: [
      "Continuous unbroken run along main roofline",
      "Zero leak risk across brick gable transition",
      "Contoured downpipe run following natural architectural slope"
    ]
  },
  {
    id: 4,
    title: "Double-Window Elevation Drainage & Long-Drop Downpipe",
    category: "downpipes",
    categoryLabel: "Downpipe Installation",
    description: "Precision-aligned vertical aluminium downpipe positioned between dual aluminum-framed windows on an exposed facebrick exterior, ensuring clean symmetry and reliable water channeling.",
    location: "Bellville Property",
    material: "75x50mm Seamless Fluted Downpipe",
    color: "Charcoal",
    imageUrl: workDone4Img,
    highlights: [
      "Symmetrical aesthetic placement between window frames",
      "Engineered offset clearing the white concrete window plinths",
      "Zero vibration wall clamp anchoring"
    ]
  },
  {
    id: 5,
    title: "Corner Downpipe with Boundary Wall Passage Alignment",
    category: "downpipes",
    categoryLabel: "Corner Detailing",
    description: "Vertical charcoal downpipe installed at the corner of a red facebrick home alongside a paved retaining wall walkway, maximizing rainwater discharge away from paving foundations.",
    location: "Northern Suburbs",
    material: "Aluminium Downpipe & Custom Eaves Joint",
    color: "Charcoal",
    imageUrl: workDone5Img,
    highlights: [
      "Vertical plumb laser-level alignment",
      "Protects retaining planters from roof flood overflow",
      "High corrosion resistance against wet brick damp"
    ]
  },
  {
    id: 6,
    title: "Long Eaves Run & Facebrick Wall Boundary System",
    category: "residential",
    categoryLabel: "Eaves & Boundary",
    description: "Seamless aluminium gutter run along side elevation with drop outlet into full-length vertical downpipe, preventing water pooling between the main house and boundary fence.",
    location: "Residential Complex",
    material: "125mm Seamless Aluminium Gutter",
    color: "Charcoal Satin",
    imageUrl: workDone6Img,
    highlights: [
      "Concealed hanger brackets for an immaculate straight line",
      "Engineered fall for rapid storm flow discharge",
      "Maintenance-free baked powder coat"
    ]
  },
  {
    id: 7,
    title: "Luxury Estate Patio & Covered Braai Water Harvesting System",
    category: "commercial",
    categoryLabel: "Large Patio & Tank Link",
    description: "Wide-span continuous seamless gutter along modern covered patio pergola and braai entertainment area with downpipes directly feeding a 2500L vertical rainwater storage tank.",
    location: "Stellenbosch / Helderberg Estate",
    material: "150mm High-Capacity Gutter & Tank Link",
    color: "Charcoal",
    imageUrl: workDone7Img,
    highlights: [
      "Seamless integration with rainwater harvesting tank",
      "Protects outdoor patio and paved entertainment zone",
      "Wide-aperture gutter handles heavy flash-storm downpours"
    ]
  },
  {
    id: 8,
    title: "Heritage Green Wave Tile Roof & Custom Valley Gutter Integration",
    category: "waterproofing",
    categoryLabel: "Valley & Gutter Integration",
    description: "White seamless aluminium gutter installation on a heritage white facade with green wave tile roof, featuring custom PVC-to-aluminium valley collection junctions and downflow pipes.",
    location: "Constantia Estate",
    material: "Seamless Aluminium Gutter & Valley Sealing",
    color: "Marble White",
    imageUrl: workDone8Img,
    highlights: [
      "Custom valley collection diverters",
      "High-pressure wash pre-treatment of green roof tiles",
      "Sealed against capillary water drawing beneath tiles"
    ]
  },
  {
    id: 9,
    title: "High-Contrast White Plaster Facade & Security Gate Downpipe",
    category: "residential",
    categoryLabel: "Architectural Contrast",
    description: "Dark charcoal seamless aluminium downpipe running alongside a pristine white exterior wall and black wrought-iron security gate, creating striking modern curb appeal.",
    location: "Camps Bay / Atlantic Seaboard",
    material: "125mm Gutter + Fluted Downpipe",
    color: "Charcoal on White Plaster",
    imageUrl: workDone9Img,
    highlights: [
      "Precision swan-neck clearing eaves fascia board",
      "High salt-mist coastal resistance",
      "Complementary modern aesthetic"
    ]
  },
  {
    id: 10,
    title: "Modern Garage & Boundary Dual Downpipe Drainage System",
    category: "residential",
    categoryLabel: "Dual Downpipe System",
    description: "Dual seamless charcoal aluminium downpipes with precision swan-neck offsets navigating parapet coping stones and garage entrance on a smooth contemporary grey exterior.",
    location: "Century City Residential",
    material: "Dual Seamless Downpipes & Parapet Capping",
    color: "Charcoal",
    imageUrl: workDone10Img,
    highlights: [
      "Dual downpipe configuration for split roof slope volumes",
      "Waterproofing seal at parapet wall capping",
      "Concealed down-discharge into floor gulley"
    ]
  }
];

export const COLOR_SWATCHES: ColorSwatch[] = [
  {
    id: "charcoal",
    name: "Charcoal / Anthracite",
    hex: "#2B2F38",
    ralCode: "RAL 7016",
    description: "The most popular modern architectural finish. Matches dark tile, facebrick, and contemporary grey plaster perfectly.",
    popular: true
  },
  {
    id: "white",
    name: "Marble White",
    hex: "#F8F9FA",
    ralCode: "RAL 9010",
    description: "Crisp, clean, and classic. Complements white fascia boards, timber trims, and light exterior walls.",
    popular: true
  },
  {
    id: "dove-grey",
    name: "Dove Grey",
    hex: "#8E9297",
    ralCode: "RAL 7038",
    description: "Subtle neutral tone that blends seamlessly with zinc metal sheeting and light slate roof tiles.",
    popular: false
  },
  {
    id: "rich-bronze",
    name: "Rich Bronze",
    hex: "#4A3B32",
    ralCode: "RAL 8019",
    description: "Warm earth tone ideal for thatched properties, rustic brick, terracotta tiles, and wooden pergolas.",
    popular: false
  },
  {
    id: "jet-black",
    name: "Jet Black",
    hex: "#1A1A1A",
    ralCode: "RAL 9005",
    description: "Bold, dramatic statement finish for ultra-modern minimalist architecture and industrial facades.",
    popular: false
  },
  {
    id: "forest-green",
    name: "Forest Green",
    hex: "#1E3F20",
    ralCode: "RAL 6005",
    description: "Harmonizes beautifully with country estates, green roof tiles, and lush garden surroundings.",
    popular: false
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Seams & Leak Points",
    dmsAluminium: "100% Seamless on-site roll-formed. No joints along runs.",
    pvcGutters: "Joined every 2-3m with rubber gaskets that dry out & leak.",
    galvanizedSteel: "Joined with solder/rivets; joints crack and rust rapidly."
  },
  {
    feature: "Rust & Corrosion Resistance",
    dmsAluminium: "Corrosion-proof marine grade alloy; will never rust.",
    pvcGutters: "Does not rust, but becomes brittle and cracks in UV sun.",
    galvanizedSteel: "Rusts heavily at joints and scratch points within 3-5 years."
  },
  {
    feature: "UV & Heat Expansion",
    dmsAluminium: "Minimal thermal movement, baked-on UV paint never flakes.",
    pvcGutters: "High expansion causes buckled brackets and dislodged clips.",
    galvanizedSteel: "Moderate expansion; paint flakes off galvanized zinc."
  },
  {
    feature: "Aesthetic Profile",
    dmsAluminium: "Crisp architectural Ogee / Box profile with hidden brackets.",
    pvcGutters: "Bulky external clips that accumulate dirt and look dated.",
    galvanizedSteel: "Industrial look with visible rivets and sagging seams."
  },
  {
    feature: "Expected Lifespan",
    dmsAluminium: "25 - 30+ Years with zero structural maintenance.",
    pvcGutters: "5 - 8 Years before brittle failure or bracket sag.",
    galvanizedSteel: "8 - 12 Years before heavy rust perforation occurs."
  },
  {
    feature: "Eco-Friendly / Harvesting",
    dmsAluminium: "100% Recyclable, non-toxic, safe for rainwater harvesting.",
    pvcGutters: "Petrochemical plastic; degrades with microplastics in runoff.",
    galvanizedSteel: "Zinc leaching into rainwater tanks over time."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Dirk van der Merwe",
    location: "Durbanville, Cape Town",
    projectType: "Full House Seamless Gutters & Downpipes",
    rating: 5,
    date: "2 weeks ago",
    comment: "Brian and his DMS team did an extraordinary job on our home. They extruded the seamless charcoal gutters right on our driveway in continuous 18-meter pieces. No joints, no leaks, and the house looks like a modern showpiece. Highest recommendation!",
    verified: true
  },
  {
    id: "rev-2",
    name: "Sarah Jenkins",
    location: "Somerset West",
    projectType: "Parapet Waterproofing & 150mm Industrial Gutters",
    rating: 5,
    date: "1 month ago",
    comment: "We had severe water ingress during winter rains on our flat roof extension. Brian came out the same day to quote, pinpointed the failed flashings, and completed both the waterproofing and high-capacity gutter installation in just 2 days. 100% bone dry through massive storms!",
    verified: true
  },
  {
    id: "rev-3",
    name: "Thabo Mokoena",
    location: "Century City Commercial Park",
    projectType: "Commercial Warehouse Gutter Replacement",
    rating: 5,
    date: "3 weeks ago",
    comment: "Professional, punctual, and high-quality workmanship. The old PVC gutters were constantly sagging and spilling water onto client parking. DMS replaced the entire 120-meter perimeter with industrial 150mm seamless aluminium. Neat work and very competitive pricing.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Johan & Ansie Coetzee",
    location: "Constantia",
    projectType: "Roof High Pressure Clean & White Seamless Gutters",
    rating: 5,
    date: "2 months ago",
    comment: "From the first phone call with Brian to the final inspection, everything was smooth. They pressure washed our entire tiled roof, replaced rotting timber fascia boards, and installed pristine white seamless gutters. Cleaned up the site completely after work. Thank you DMS!",
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What is the advantage of 'seamless' aluminium gutters over standard gutters?",
    answer: "Traditional gutters are sold in 2 or 3-meter sections that must be glued or joined together. Every joint is a weak spot prone to silicone failure, dirt buildup, and eventual leaks. DMS Seamless Gutters are roll-formed on-site directly from continuous aluminum coils to the exact measurement of your roof (up to 35m+ in a single piece). With zero joints along straight runs, 99% of leaks are permanently eliminated.",
    category: "gutters"
  },
  {
    question: "How long does a typical residential gutter installation take?",
    answer: "Most standard 3 to 4-bedroom homes are fully measured, roll-formed, fitted, and completed in just 1 to 2 days! Because our specialized roll-forming machine is housed directly on our mobile fleet vehicle, we extrude custom lengths on your property on the spot without delivery delays.",
    category: "installation"
  },
  {
    question: "Will aluminium gutters rust in coastal and wet climates?",
    answer: "No. Aluminium naturally does not contain iron, meaning it physically cannot rust. We use marine-grade 3003-H14 aluminium alloy coated with a baked-on polyester powder finish. This protects the gutters against salt air, heavy rainfall, high UV index, and industrial atmospheric pollution for 25+ years.",
    category: "gutters"
  },
  {
    question: "What waterproofing services do you provide?",
    answer: "We specialize in comprehensive waterproofing for parapet walls, roof valleys, chimney flashings, flat concrete slabs, balcony decks, and box gutters. We apply multi-layer liquid rubber and reinforced polyester membrane systems that flex with thermal building movement without tearing.",
    category: "waterproofing"
  },
  {
    question: "Are your seamless aluminium gutters safe for rainwater harvesting?",
    answer: "Yes, 100%. Our factory powder-coated aluminium is completely inert and non-toxic. Unlike old galvanized steel (which leaches zinc and rust) or degraded PVC plastics, aluminium will not contaminate water runoff, making it the premier choice for rainwater storage tanks and garden irrigation.",
    category: "gutters"
  },
  {
    question: "How do I get a free quote from Brian?",
    answer: "You can use our online Instant Quote Estimator on this website, send us a direct message on WhatsApp (060 522 0139), or fill in the contact form. Brian will arrange a free on-site roof inspection and provide a transparent, itemized quotation with no hidden fees.",
    category: "pricing"
  }
];
