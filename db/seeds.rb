# to reset db: rails db:reset db:seed

# users:
user1 = User.create(
    username: "sam",
    password: "password",
    email: "samuelmmanor@gmail.com",
    bio: "lorem ipsum dolor sit amet",
    avatar: ""
)

# identities:
transfem = Identity.create(identity: "transfeminine")
transmasc = Identity.create(identity: "transmasculine")
both = Identity.create(identity: "both")

# services:
hormones = Service.create(service: "hormones")
therapy = Service.create(service: "therapy")
community = Service.create(service: "community")

# locations:
traversecity = Location.create(location: "traverse city")
lansing = Location.create(location: "lansing")
kalamazoo = Location.create(location: "kalamazoo")
flint = Location.create(location: "flint")
detroit = Location.create(location: "detroit")
grandrapids = Location.create(location: "grandrapids")

# ----- listings -----

# hormones:

hormones1 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: traversecity.id,
    name: "Milliken Medical Group - Morgan Buda, MD",
    address: "224 Circle Drive, Traverse City, MI 49684",
    description: "My training in LGBTQ medicine at the University of Minnesota has given me the experience to best serve the LGBTQ community in Northern Michigan. I am competent in HRT for transgender and gender non-binary folks as well as PrEP medication management.",
    website: "munsonhealthcare.org/find-a-doctor",
    phone: "231-935-0600",
)

hormones2 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: lansing.id,
    name: "Full Spectrum Family Medicine",
    address: "2025 Abbot Rd, Suite 100, East Lansing, MI 48823",
    description: "We are a privately owned primary care practice with a focus on integrative and functional medicine. We have a growing population of transgender patients and pride ourselves on providing high quality, compassionate care.",
    website: "www.fullspectrumfamilymed.com",
    phone: "517-333-3550",
)

hormones3 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: lansing.id,
    name: "MSU Family Medicine Clinic - Jessica Heselschwerdt",
    address: "804 Service Rd, A235, East Lansing, MI 488824",
    description: "I am a family medicine physician practicing in the Department of Family and Community Medicine at MSU. In addition to practicing most aspects of family medicine (other than delivering babies!), one of the services I provide for my patients is hormone therapy for gender transition.",
    website: "www.healthteam.msu.edu/providers",
    phone: "517-335-1300",
)

hormones4 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: flint.id,
    name: "Great Lakes Bay Health Centers - Craig Weeks, MD",
    address: "1522 Janes Avenue, Saginaw, MI 48601",
    description: "I am a family physician with a passion for serving the underserved. In addition to general primary care, I also provide care to people living with HIV and Hepatitis C, preexposure prophylaxis (PrEP) for HIV prevention, Suboxone for those with opiate use disorder, and gender-affirming hormone treatment for gender-diverse individuals.",
    website: "www.greatlakesbayhealthcenters.org",
    phone: "989-755-0316",
)

hormones5 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: detroit.id,
    name: "Mott Children's Hospital - Daniel Schumer MD, MPH",
    address: "1540 E Hospital Dr, Ann Arbor, MI 48109",
    description: "The Gender Management (GEM) Program at Mott Children’s Hospital has been developed to care for transgender and gender non-conforming patients.  This program works hand-in-hand with the University of Michigan Health System Comprehensive Gender Services Program (UMHS-CGSP).  Dr. Daniel Shumer is a Pediatric Endocrinologist at GEM who is experienced at working with transgender youth.  He follows the World Professional Association of Transgender Health (WPATH) guidelines to help adolescents with transition, including puberty suppression (blockers) and cross-sex hormones (such as testosterone and estrogen).",
    website: "www.mottchildren.org",
    phone: "734-764-5175",
)

hormones6 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: detroit.id,
    name: "Henry Ford Hospital, Division of Endocrinology - Jessica Shill, MD",
    address: "3031 W. Grand Blvd, Suite 800, Detroit MI 48202",
    description: "I see transgender and gender non-conforming patients ages 15 and above. I also supervise the endocrinologists in training (fellows) in our division so they learn how to assist transgender and gender non-conforming people with gender-affirming therapy. We have a thriving practice, and see many transgender and gender non-conforming people each week.",
    website: "www.henryford.com",
    phone: "313-916-2141",
)

hormones7 = Listing.create(
    identity_id: both.id,
    service_id: hormones.id,
    location_id: detroit.id,
    name: "The Ruth Ellis Health and Wellness Center",
    address: "77 Victor St, Highland Park, MI 48203",
    description: "The Ruth Ellis Health and Wellness Center is a primary care clinic for LGBTQ adolescents and young adults ages 10-30 years old.  Services include general primary care, well visits, gender affirming hormones, PrEP for HIV prevention, HIV treatment, STD testing and treatment, birth control, mental health services, and case management.  We are able to see patients regardless of their insurance status and labs and medications are covered by our program for uninsured patients.",
    website: "www.ruthelliscenter.org",
    phone: "313-365-3338",
)

# therapy:

therapy1 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: kalamazoo.id,
    name: "Avalon Behavioral Health - Amy E. Raad, LMSW",
    address: "491 E Columbia Ave Suite 4, Battle Creek, MI 49014",
    description: "I am very passionate about transgender health and advocacy. I hold certificates in sex therapy and sexuality education from the University of Michigan in addition to my master's degree.",
    website: "www.avalonbehavioralhealth.com",
    phone: "269-962-9611",
)

therapy2 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: traversecity.id,
    name: "Clinical Stress Relief LLC",
    address: "812 Garfield Ave., Traverse City, MI 49686",
    description: "WPATH (World Professional Association for Transgender Health) Provider. Guidance and support for every phase of exploration, transition, and authentic living for gender-nonconforming folks and our 'S.O.F.F.A.' (Significant Others, Families, Friends, and Allies). Private, single-user restrooms.",
    website: "www.clinicalstressrelief.com",
    phone: "231-944-8200",
)

therapy3 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: traversecity.id,
    name: "Old Town Psychological Services",
    address: "512 S. Union St., Traverse City, MI 49684",
    description: "Over 30 years of personal/professional/political involvement in the GLBTQ community. Affiliated with the University of Michigan Gender Clinic. Ask specifically for an intake with Dr. Anderson. Most insurances accepted; sliding fee scale available.",
    website: "www.oldtownpsych.com",
    phone: "231-941-6550",
)

therapy4 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: grandrapids.id,
    name: "Arbor Circle Outpatient Counseling Services - Thomas J. Fox, LMSW, CAADC",
    address: "1115 Ball Ave NE, Grand Rapids, Mi 49505",
    description: "My name is TJ Fox and I am a therapist working in the Grand Rapids area.  I am also a trans man.  I have started working with other trans clients to assist them with their transition.  I work at an non profit organization called Arbor Circle.  We work with people with mental health and substance abuse disorders and they are very supportive of me working with trans clients.",
    website: "www.arborcircle.org",
    phone: "616-456-6571",
)

therapy5 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: grandrapids.id,
    name: "Co-Creation Counseling",
    address: "625 Kenmoor Ave, Suite 201, Grand Rapids, MI 49546",
    description: "Co-Creation Counseling is a holistic counseling practice. We provide LGBTQIA+ affirming care and are racial justice allies. Clients seek our support regarding sexuality, gender, trauma, and stress with life changes. We are virtual only and accept most major insurance companies. There is a sliding fee scale for those in need.",
    website: "www.cocreationcounseling.com",
    phone: "269-579-3875",
)

therapy6 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: grandrapids.id,
    name: "Pine Rest Christian Mental Health Services - Dr. Kimberly Kunze",
    address: "3225 N. Evergreen Dr NE, Suite 301, Grand Rapids, MI  49525",
    description: "I am a clinical psychologist at Pine Rest Christian Mental Health Services in Grand Rapids, MI, where I seek to affirm and celebrate gender and sexual diversity. I have focused on improving care and access to care for transgender/gender expansive/gender non-conforming individuals since 2012. I am a member of WPATH and can provide outpatient therapy for individuals, families, and couples. I am especially passionate about helping transgender folks who are having trouble being accepted or affirmed by their families, religious institutions, schools, or work. I love to coordinate care with doctors, endocrinologists, and surgeons who serve transgender/gender expansive/gender nonconforming individuals. I am proud to provide letters of support for hormone suppression, hormone replacement therapies and gender confirmation surgeries, when applicable.",
    website: "www.pinerest.org",
    phone: "616-364-1500",
)

therapy7 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: flint.id,
    name: "Fusion Consulting & Mental Healthh Services - Jackson Daly, MSCP, LLPC",
    address: "550 S. Saginaw St. Lapeer, MI 48446",
    description: "I specialize in anxiety and depression, conflict mediation and resolution, as well as issues related to gender identity and sexual orientation. I have experience working with adolescents and adults as well as individuals and groups experiencing difficulties with stress, self-esteem, identity, relationships, and personal and professional changes. My philosophical orientation is strongly influenced by Rogerian theory and the belief that, through qualities like genuineness, congruency, and positive regard, we can invite change into our lives. With these qualities as a foundation, I would like to encourage you to embrace therapy as a collaborative process; in this way, we can build a unique therapeutic relationship appropriate for your goals.",
    website: "www.fusionmentalhealth.com",
)

therapy8 = Listing.create(
    identity_id: both.id,
    service_id: therapy.id,
    location_id: detroit.id,
    name: "Wentworth and Ass. - Erin S. Blumberg",
    address: "11111 Hall Rd #203, Utica, MI 48317",
    description: "I am a Licensed Professional Counselor with 29 years experience. I was active in Ferndale, where I live, to bring the current non discrimination ordinance into being. I work with any person who has issues... relationship, individual, or sexual without regard to gender orientation or lifestyle choices (kinky, open/poly). As a long time member of the Society for the Scientific Study of Sexuality I have been educated to a considerable degree about the problems faced by those whose physical birth gender does not match their internal sensed self.",
    website: "www.wentworthandassociates.com",
)

# community

community1 = Listing.create(
    identity_id: both.id,
    service_id: community.id,
    location_id: grandrapids.id,
    name: "Grand Rapids Pride Center",
    address: "343 Atlas Ave SE, Grand Rapids, MI 49506",
    description: "Our Mission: Empowering Our LGBTQ Community Through Supportive Services and Awareness. Our Vision: Grand Rapids Pride Center aims to be the center of a vibrant and inclusive community that supports all LGBTQ individuals.",
    website: "www.grpride.org"
)

community2 = Listing.create(
    identity_id: both.id,
    service_id: community.id,
    location_id: kalamazoo.id,
    name: "OutFront Kalamazoo",
    address: "340 S. Rose St., Kalamazoo, MI 49007",
    description: "OutFront Kalamazoo provides programs and services for youth and adults such as peer support groups, social events, educational resources and more. We also organize and mobilize individuals and organizations so that together we may advance social justice and achieve equity and inclusion for the LGBTQ+ community.",
    website: "www.outfrontkzoo.org"
)

community3 = Listing.create(
    identity_id: both.id,
    service_id: community.id,
    location_id: lansing.id,
    name: "Salus Center",
    address: "408 S Washington Sq., Lansing, MI 48933",
    description: "Founded in 2017, Salus Center serves Lansing’s LGBTQIA+ communities as a gathering space and information hub. We advocate for the rights of our community members by honoring and affirming the interconnectedness of oppression.",
    website: "www.saluscenter.org"
)

# comments:

comment1 = Comment.create(
    user_id: user1.id, 
    listing_id: hormones1.id,
    commenttext: "lorem ipsum dolor sit amet"
)

comment2 = Comment.create(
    user_id: user1.id,
    listing_id: hormones1.id,
    commenttext: "lorem ipsum dolor sit amet"
)