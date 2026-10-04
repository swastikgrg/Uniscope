/**
 * EduSeek - Indian Online Higher Education Platform Data
 * Comprehensive database of top UGC-DEB entitled universities, accredited programmes, 
 * fees, curriculum, approvals, and student testimonials.
 */

const EDU_DATA = {
  platform: {
    name: "EDUSEEK",
    tagline: "India's Premier Online Degree Discovery & Comparison Engine",
    initials: "ES",
    helpline: "1800-890-3450",
    advisorHours: "Mon-Sat: 9:00 AM - 8:00 PM IST"
  },

  stats: [
    { value: "85+", label: "UGC-DEB Entitled Universities" },
    { value: "450+", label: "Accredited Online Programmes" },
    { value: "₹0", label: "Free Impartial Counselling" },
    { value: "48,000+", label: "Students Guided in 2025-26" }
  ],

  universities: [
    {
      id: "manipal-jaipur",
      name: "Manipal University Jaipur (Online)",
      shortName: "MUJ Online",
      initials: "MU",
      location: "Jaipur, Rajasthan",
      established: 2011,
      accreditation: "NAAC A+ (3.28 CGPA)",
      approvals: ["UGC-DEB", "AICTE", "AIU", "WES Recognized", "NIRF Top 70"],
      nirfRank: "Rank 64 (Univ Category)",
      rating: 4.6,
      reviewsCount: 1420,
      bannerImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      overview: "Manipal University Jaipur Online brings the legacy of the prestigious Manipal Group directly to your screen. Offering state-of-the-art LMS, live weekend masterclasses by renowned faculty, free Coursera credentials, and an active alumni network of 100,000+ professionals.",
      mode: "100% Online with Live & Recorded sessions + Remote Proctored Exams",
      degreeValidity: "Fully equivalent to on-campus degree under UGC (ODL & Online Programmes) Regulations 2020.",
      avgCtc: "₹7.50 LPA",
      highestCtc: "₹18.00 LPA",
      hiringPartners: ["Infosys", "Deloitte", "Amazon", "Accenture", "TCS", "HDFC Bank", "KPMG", "EY"],
      lmsFeatures: ["Cloud Campus with offline sync", "Live weekend guest lectures by CXOs", "10,000+ Coursera courses bundled", "24/7 dedicated academic doubt desk", "AI-based proctored semester exams"],
      admissionSteps: [
        { step: "01", title: "Select Programme & Register", desc: "Choose your degree and submit baseline academic information on EduSeek or the portal." },
        { step: "02", title: "Upload Documents", desc: "Submit self-attested 10th, 12th, graduation marksheets, Aadhaar, and passport photo." },
        { step: "03", title: "Document Verification", desc: "Admissions committee validates UGC/AICTE eligibility within 24-48 hours." },
        { step: "04", title: "Fee Payment & LMS Access", desc: "Pay semester fee or set up zero-cost EMI starting ₹5,400/month to unlock LMS orientation." }
      ],
      feesRange: "₹1,10,000 - ₹1,75,000",
      programmesOffered: ["online-mba", "online-mca", "online-bba", "online-bca", "online-bcom", "online-mcom"]
    },
    {
      id: "amity-online",
      name: "Amity University Online",
      shortName: "Amity Online",
      initials: "AM",
      location: "Noida, Uttar Pradesh",
      established: 2005,
      accreditation: "NAAC A+ Grade",
      approvals: ["UGC-DEB", "AICTE", "WES Recognized", "QS Ranked #1 Online in India"],
      nirfRank: "Rank 35 (Overall Amity Group)",
      rating: 4.5,
      reviewsCount: 2180,
      bannerImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
      overview: "Amity University Online is one of India's pioneering online degree institutions. Renowned for industry-aligned curricula, international faculty sessions, virtual job fairs with 300+ hiring partners, and a robust career support cell called Amity Career Edge.",
      mode: "100% Online with AI-Powered LMS + Live Interactive Sessions",
      degreeValidity: "Government recognized & accepted for higher education, UPSC, PSUs & abroad immigration.",
      avgCtc: "₹8.20 LPA",
      highestCtc: "₹21.00 LPA",
      hiringPartners: ["Google", "Microsoft", "Paytm", "HCL Tech", "Cognizant", "American Express", "PwC"],
      lmsFeatures: ["Amizone modern student portal", "Metaverse classroom simulations", "Free Harvard ManageMentor modules", "Virtual recruitment drives twice a year", "Weekend flexible interactive webinars"],
      admissionSteps: [
        { step: "01", title: "Application & Profile Fill", desc: "Fill online biodata and choose your specialization track." },
        { step: "02", title: "Eligibility Assessment", desc: "Upload graduation/12th scores. No entrance exam required for UGC recognized candidates." },
        { step: "03", title: "Provisional Offer", desc: "Receive immediate enrollment letter with registration code." },
        { step: "04", title: "Easy EMI Onboarding", desc: "Avail 0% interest loan facility or semester-wise installment payment." }
      ],
      feesRange: "₹1,30,000 - ₹2,20,000",
      programmesOffered: ["online-mba", "online-mca", "online-bba", "online-bca", "online-ma-journalism", "online-mcom"]
    },
    {
      id: "nmims-cdoe",
      name: "NMIMS Centre for Distance & Online Education",
      shortName: "NMIMS CDOE",
      initials: "NM",
      location: "Mumbai, Maharashtra",
      established: 1981,
      accreditation: "NAAC A+ (3.59 CGPA, Category-1 Autonomy)",
      approvals: ["UGC-DEB", "AICTE", "DEB Entitled", "AIU Member"],
      nirfRank: "Rank 21 (Management Category)",
      rating: 4.7,
      reviewsCount: 3410,
      bannerImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1568792923760-d70635a89fa5?auto=format&fit=crop&w=800&q=80",
      overview: "SVKM's NMIMS holds Category-1 Autonomy from the UGC, making its Online MBA and executive diplomas widely sought-after in corporate Mumbai, Bengaluru, and Gurgaon. Known for rigorous case-study pedagogy from Harvard & Ivey publishing.",
      mode: "Blended/Online Synchronous & Asynchronous with Proctored Computer Exams",
      degreeValidity: "UGC Category-1 autonomous institution degree with supreme corporate acceptance across Fortune 500 companies.",
      avgCtc: "₹9.10 LPA",
      highestCtc: "₹24.00 LPA",
      hiringPartners: ["Bain & Co", "ICICI Bank", "Standard Chartered", "Vodafone Idea", "Genpact", "Tata Motors"],
      lmsFeatures: ["Student Student Mobile App with offline downloads", "Case methodology from Harvard Business Publishing", "Career mentoring with industry leaders", "Over 800+ hours of video library", "Academic support via live chat & queries"],
      admissionSteps: [
        { step: "01", title: "Registration", desc: "Submit candidate basic profile and pay nominal registration fee." },
        { step: "02", title: "Credential Verification", desc: "Document check according to NMIMS strict eligibility rules (50% in UG)." },
        { step: "03", title: "Admissions Committee Approval", desc: "Student enrollment number generated." },
        { step: "04", title: "Commence Orientation", desc: "Access the digital library, syllabus schedule, and mentor group." }
      ],
      feesRange: "₹1,44,000 - ₹2,00,000",
      programmesOffered: ["online-mba", "online-bba", "online-bcom"]
    },
    {
      id: "jain-online",
      name: "Jain University (Online)",
      shortName: "Jain Online",
      initials: "JU",
      location: "Bengaluru, Karnataka",
      established: 1990,
      accreditation: "NAAC A++ Grade",
      approvals: ["UGC-DEB", "AICTE", "ACCA & CIMA Accredited Pathways", "NIRF Top 70"],
      nirfRank: "Rank 68 (University)",
      rating: 4.6,
      reviewsCount: 1650,
      bannerImage: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
      overview: "Located in India's Silicon Valley, Jain University Online is famous for futuristic tech & finance specializations like FinTech, AI & Data Engineering, and integrated global certifications with ACCA UK and IOA UK.",
      mode: "100% Online through LEARNMSTM platform with live interactive bootcamps",
      degreeValidity: "Fully equivalent to conventional campus degrees per UGC guidelines.",
      avgCtc: "₹7.20 LPA",
      highestCtc: "₹16.50 LPA",
      hiringPartners: ["Capgemini", "Wipro", "EY", "Morgan Stanley", "Hewlett Packard", "Flipkart"],
      lmsFeatures: ["LEARNMSTM modern intuitive interface", "Live interactive sessions with global faculty", "ACCA/CIMA course module integrations", "LinkedIn Learning full subscription included", "Interactive code sandbox for MCA & BCA"],
      admissionSteps: [
        { step: "01", title: "Select Major & Register", desc: "Pick your specialized track (e.g., FinTech, Data Science)." },
        { step: "02", title: "E-Verification", desc: "Instant automated document checks via DigiLocker / upload." },
        { step: "03", title: "Confirmation Notice", desc: "Admission confirmed with official Student ID card." },
        { step: "04", title: "Bootcamp Onboarding", desc: "Join induction week and start collaborative cohort projects." }
      ],
      feesRange: "₹1,20,000 - ₹2,10,000",
      programmesOffered: ["online-mba", "online-mca", "online-bba", "online-bca", "online-mcom"]
    },
    {
      id: "chandigarh-university",
      name: "Chandigarh University (Online)",
      shortName: "CU Online",
      initials: "CU",
      location: "Mohali / Chandigarh, Punjab",
      established: 2012,
      accreditation: "NAAC A+ Grade (3.28 CGPA)",
      approvals: ["UGC-DEB", "AICTE", "WES Recognized", "QS Asia Ranked"],
      nirfRank: "Rank 27 (Overall)",
      rating: 4.4,
      reviewsCount: 1890,
      bannerImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80",
      overview: "Chandigarh University Online offers the most economical high-quality accredited online degrees in North India. High placement drive engagement with 900+ national & multinational recruiters visiting annually.",
      mode: "100% Online through CU-LMS with weekend masterclasses",
      degreeValidity: "Recognized nationwide by government, corporate recruiters and global evaluation agencies.",
      avgCtc: "₹6.80 LPA",
      highestCtc: "₹15.20 LPA",
      hiringPartners: ["Dell", "Cognizant", "Mindtree", "Axis Bank", "Reliance Retail", "Hitachi"],
      lmsFeatures: ["CU-Blackboard advanced online portal", "Virtual labs for programming", "Flexible exam schedules across timezones", "Dedicated student support manager", "Free career counseling workshops"],
      admissionSteps: [
        { step: "01", title: "Submit Application", desc: "Complete basic details and choose course." },
        { step: "02", title: "Documents Scan", desc: "Upload marks cards and identity proof." },
        { step: "03", title: "Eligibility Clearance", desc: "Fast-track 24hr committee clearance." },
        { step: "04", title: "Semester Activation", desc: "Select fee plan or monthly installment." }
      ],
      feesRange: "₹90,000 - ₹1,50,000",
      programmesOffered: ["online-mba", "online-mca", "online-bba", "online-bca", "online-mcom", "online-bcom"]
    },
    {
      id: "upes-on",
      name: "UPES Online",
      shortName: "UPES ON",
      initials: "UP",
      location: "Dehradun, Uttarakhand",
      established: 2003,
      accreditation: "NAAC A Grade",
      approvals: ["UGC-DEB", "AICTE", "IACBE Accredited", "NIRF Top 55"],
      nirfRank: "Rank 52 (University Category)",
      rating: 4.5,
      reviewsCount: 980,
      bannerImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
      campusImage: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80",
      overview: "UPES Online is celebrated for energy, digital business, logistics, and oil & gas specialized management programmes. Known for strong domain-specific industry partnerships and modern modular certifications.",
      mode: "100% Online with Weekend Interactive Faculty Sessions",
      degreeValidity: "UGC-DEB entitled degree, fully recognized across public and private sectors in India & overseas.",
      avgCtc: "₹7.80 LPA",
      highestCtc: "₹17.00 LPA",
      hiringPartners: ["Adani", "L&T Infotech", "Schlumberger", "Reliance Industries", "Tata Power", "Accenture"],
      lmsFeatures: ["Canvas LMS powered learning", "Industry mentorship by senior CXOs", "Hands-on domain capstone projects", "Self-paced video repository", "Online proctored semester tests"],
      admissionSteps: [
        { step: "01", title: "Online Registration", desc: "Enter qualification and choose specialization." },
        { step: "02", title: "Verification", desc: "Review of bachelor's degree credentials." },
        { step: "03", title: "Offer Generation", desc: "Instant enrollment letter on registered email." },
        { step: "04", title: "Payment & LMS Launch", desc: "EMI from ₹5,800/mo or full year fee payment." }
      ],
      feesRange: "₹1,25,000 - ₹1,90,000",
      programmesOffered: ["online-mba", "online-bba", "online-bca"]
    }
  ],

  programmes: [
    {
      id: "online-mba",
      name: "Online Master of Business Administration (MBA)",
      shortName: "Online MBA",
      level: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any stream with minimum 50% marks (45% for reserved category) from a recognized university.",
      examMode: "100% Remote AI-Proctored Exams",
      averageFee: "₹1,50,000 - ₹2,50,000",
      startingEmi: "₹5,200/month",
      bestFor: "Working professionals, entrepreneurs, and graduates seeking rapid leadership career progression.",
      description: "India's most popular post-graduate online degree. Designed to impart strategic management, data-driven decision making, business ethics, and corporate leadership while allowing you to keep your full-time job.",
      specialisationsList: [
        "Marketing Management",
        "Financial Management",
        "Business Analytics",
        "Human Resource Management",
        "Operations & Supply Chain",
        "FinTech & Digital Banking",
        "Information Technology Management",
        "International Business"
      ],
      semesters: [
        {
          sem: "Semester 1",
          core: ["Management Concepts & Organizational Behaviour", "Managerial Economics", "Accounting for Managers", "Business Communication & Ethics", "Quantitative Techniques for Management"]
        },
        {
          sem: "Semester 2",
          core: ["Marketing Management", "Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods", "Legal Aspects of Business"]
        },
        {
          sem: "Semester 3",
          core: ["Strategic Management", "Digital Transformation & Innovation", "Specialisation Elective Paper 1", "Specialisation Elective Paper 2", "Specialisation Elective Paper 3", "Summer Internship Project / Capstone"]
        },
        {
          sem: "Semester 4",
          core: ["Corporate Governance & Sustainability", "Entrepreneurship & Venture Creation", "Specialisation Elective Paper 4", "Specialisation Elective Paper 5", "Comprehensive Dissertation / Project Report"]
        }
      ],
      careerRoles: [
        { role: "Business Development Manager", ctc: "₹8.5 - 14 LPA" },
        { role: "Marketing Strategist / Product Marketer", ctc: "₹9.0 - 16 LPA" },
        { role: "Financial Analyst / Portfolio Manager", ctc: "₹10.0 - 18 LPA" },
        { role: "HR Business Partner (HRBP)", ctc: "₹7.5 - 13 LPA" },
        { role: "Business Analytics Consultant", ctc: "₹11.0 - 20 LPA" },
        { role: "Supply Chain & Operations Lead", ctc: "₹8.0 - 15 LPA" }
      ],
      // University offerings specific to Online MBA
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 175000,
          feeDisplay: "₹1,75,000",
          emi: "₹5,417 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE, AIU, WES",
          rating: 4.6,
          popularSpecs: ["Marketing", "Finance", "HR", "Analytics", "Operations"],
          usp: "Free Coursera Gold access + Weekend CXO Masterclasses",
          badge: "Most Popular"
        },
        {
          universityId: "amity-online",
          fee: 199000,
          feeDisplay: "₹1,99,000",
          emi: "₹6,150 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE, QS Ranked #1",
          rating: 4.5,
          popularSpecs: ["Digital Marketing", "International Business", "FinTech", "Analytics"],
          usp: "Amity Career Edge with 300+ annual hiring partners",
          badge: "QS Ranked #1"
        },
        {
          universityId: "nmims-cdoe",
          fee: 196000,
          feeDisplay: "₹1,96,000",
          emi: "₹6,050 / mo",
          duration: "24 Months",
          naac: "A+ (Autonomy)",
          approvals: "UGC-DEB, AICTE, Category-1 Autonomy",
          rating: 4.7,
          popularSpecs: ["Financial Management", "Marketing", "Supply Chain", "IT Management"],
          usp: "Premier corporate pedigree & Harvard Business Publishing cases",
          badge: "Corporate Choice"
        },
        {
          universityId: "jain-online",
          fee: 180000,
          feeDisplay: "₹1,80,000",
          emi: "₹5,580 / mo",
          duration: "24 Months",
          naac: "A++",
          approvals: "UGC-DEB, AICTE, ACCA Pathways",
          rating: 4.6,
          popularSpecs: ["FinTech", "Strategic HR", "AI & Business", "Logistics"],
          usp: "Integrated ACCA UK exemptions + LinkedIn Learning premium",
          badge: "NAAC A++"
        },
        {
          universityId: "chandigarh-university",
          fee: 130000,
          feeDisplay: "₹1,30,000",
          emi: "₹4,120 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE, NIRF Ranked",
          rating: 4.4,
          popularSpecs: ["Finance", "Marketing", "HR", "International Business"],
          usp: "Maximum ROI with lowest course fee among top accredited institutes",
          badge: "Best Value"
        },
        {
          universityId: "upes-on",
          fee: 165000,
          feeDisplay: "₹1,65,000",
          emi: "₹5,150 / mo",
          duration: "24 Months",
          naac: "A",
          approvals: "UGC-DEB, AICTE, IACBE",
          rating: 4.5,
          popularSpecs: ["Oil & Gas", "Power Management", "Digital Business", "Logistics"],
          usp: "Niche industrial domain specialisations in energy & digital commerce",
          badge: "Industry Niche"
        }
      ]
    },
    {
      id: "online-mca",
      name: "Online Master of Computer Applications (MCA)",
      shortName: "Online MCA",
      level: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "BCA/B.Sc/B.Com/BA with Mathematics at 10+2 level or graduation level with min 50% marks.",
      examMode: "100% Online Computerized & Proctored",
      averageFee: "₹1,10,000 - ₹1,80,000",
      startingEmi: "₹3,900/month",
      bestFor: "Software engineers, tech graduates, and aspiring cloud, AI, and full-stack developers.",
      description: "Equips students with cutting-edge full-stack engineering, cloud architecture, artificial intelligence, algorithms, and cybersecurity skills demanded by global IT leaders.",
      specialisationsList: [
        "Artificial Intelligence & Machine Learning",
        "Cloud Computing & DevOps",
        "Full Stack Web Development",
        "Data Analytics & Big Data",
        "Cyber Security & Ethical Hacking"
      ],
      semesters: [
        {
          sem: "Semester 1",
          core: ["Advanced Data Structures & Algorithms", "Relational Database Management Systems", "Object Oriented Programming (Java/Python)", "Computer Organization & Architecture", "Software Engineering Principles"]
        },
        {
          sem: "Semester 2",
          core: ["Web Technologies & Frameworks", "Operating Systems & Shell Scripting", "Cloud Fundamentals (AWS/Azure)", "Data Communication & Networks", "Specialisation Module 1"]
        },
        {
          sem: "Semester 3",
          core: ["Machine Learning Basics", "DevOps & CI/CD Pipelines", "Information Security", "Specialisation Module 2", "Mini Project & Code Lab"]
        },
        {
          sem: "Semester 4",
          core: ["Mobile Application Architecture", "Emerging Tech (Generative AI & Blockchain)", "Capstone Industry Project & Viva"]
        }
      ],
      careerRoles: [
        { role: "Full Stack Engineer", ctc: "₹7.0 - 15 LPA" },
        { role: "Cloud Solution Architect", ctc: "₹10.0 - 22 LPA" },
        { role: "Data Scientist / ML Engineer", ctc: "₹9.5 - 20 LPA" },
        { role: "DevOps Engineer", ctc: "₹8.0 - 16 LPA" }
      ],
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 158000,
          feeDisplay: "₹1,58,000",
          emi: "₹4,950 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE, AIU",
          rating: 4.6,
          popularSpecs: ["Cloud Computing", "AI & ML", "Data Science"],
          usp: "Practical virtual coding sandboxes & Github portfolio reviews",
          badge: "Editor's Choice"
        },
        {
          universityId: "jain-online",
          fee: 160000,
          feeDisplay: "₹1,60,000",
          emi: "₹5,000 / mo",
          duration: "24 Months",
          naac: "A++",
          approvals: "UGC-DEB, AICTE",
          rating: 4.6,
          popularSpecs: ["Full Stack", "Artificial Intelligence", "Cybersecurity"],
          usp: "Bangalore tech ecosystem mentorship and hackathons",
          badge: "NAAC A++"
        },
        {
          universityId: "amity-online",
          fee: 170000,
          feeDisplay: "₹1,70,000",
          emi: "₹5,300 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.5,
          popularSpecs: ["Blockchain", "Cloud & Security", "AI"],
          usp: "Industry certification modules included with TCS iON ties",
          badge: "High Tech ROI"
        },
        {
          universityId: "chandigarh-university",
          fee: 110000,
          feeDisplay: "₹1,10,000",
          emi: "₹3,450 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.4,
          popularSpecs: ["Cloud Computing", "Web & Mobile Dev"],
          usp: "Affordable fee with placement assistance in 300+ tech recruiters",
          badge: "Best Value"
        }
      ]
    },
    {
      id: "online-bba",
      name: "Online Bachelor of Business Administration (BBA)",
      shortName: "Online BBA",
      level: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 passed in any stream (Commerce, Science, Arts) from a recognized board with minimum 45-50% marks.",
      examMode: "100% Online Computer Proctored Exams",
      averageFee: "₹90,000 - ₹1,60,000",
      startingEmi: "₹3,100/month",
      bestFor: "High school graduates aiming for early entry into corporate management or preparation for CAT/MBA.",
      description: "Builds rigorous foundations in marketing, human capital, accounting, economics, analytics, and business communication.",
      specialisationsList: [
        "Digital Marketing",
        "Finance & Accounting",
        "Human Resource Management",
        "Retail Management",
        "Entrepreneurship"
      ],
      semesters: [
        { sem: "Semester 1", core: ["Principles of Management", "Business Economics", "Business Mathematics", "English Communication", "Computer Applications in Business"] },
        { sem: "Semester 2", core: ["Financial Accounting", "Organizational Behaviour", "Marketing Principles", "Environmental Studies", "Business Statistics"] },
        { sem: "Semester 3", core: ["Cost & Management Accounting", "Human Resource Basics", "Business Law", "Production Management", "Elective 1"] },
        { sem: "Semester 4", core: ["Financial Management", "Research Methodology", "Direct Taxes", "Elective 2", "Elective 3"] },
        { sem: "Semester 5", core: ["Strategic Planning", "International Business", "Specialisation Major 1", "Specialisation Major 2", "Project Phase 1"] },
        { sem: "Semester 6", core: ["Corporate Governance", "E-Commerce", "Specialisation Major 3", "Final Capstone Project"] }
      ],
      careerRoles: [
        { role: "Management Trainee", ctc: "₹4.5 - 7.5 LPA" },
        { role: "Digital Marketing Associate", ctc: "₹4.0 - 6.5 LPA" },
        { role: "Operations Coordinator", ctc: "₹4.2 - 6.8 LPA" },
        { role: "Financial Sales Consultant", ctc: "₹4.5 - 8.0 LPA" }
      ],
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 135000,
          feeDisplay: "₹1,35,000",
          emi: "₹3,750 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.5,
          popularSpecs: ["Digital Marketing", "Finance", "HR"],
          usp: "Top tier campus brand with flexible 6-semester progression",
          badge: "Top UG Pick"
        },
        {
          universityId: "amity-online",
          fee: 145000,
          feeDisplay: "₹1,45,000",
          emi: "₹4,100 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.5,
          popularSpecs: ["Digital Marketing", "Retail & Sales"],
          usp: "Global study tour option & placement support",
          badge: "Corporate Choice"
        },
        {
          universityId: "jain-online",
          fee: 150000,
          feeDisplay: "₹1,50,000",
          emi: "₹4,200 / mo",
          duration: "36 Months",
          naac: "A++",
          approvals: "UGC-DEB, AICTE",
          rating: 4.6,
          popularSpecs: ["FinTech", "Digital Business", "Event Management"],
          usp: "CIMA embedded curriculum and practical business simulations",
          badge: "NAAC A++"
        },
        {
          universityId: "chandigarh-university",
          fee: 96000,
          feeDisplay: "₹96,000",
          emi: "₹2,680 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.3,
          popularSpecs: ["Marketing", "Banking & Finance"],
          usp: "Highly affordable fee with zero financial stress",
          badge: "Budget Friendly"
        }
      ]
    },
    {
      id: "online-bca",
      name: "Online Bachelor of Computer Applications (BCA)",
      shortName: "Online BCA",
      level: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 passed from any recognized board with minimum 45-50% marks (Maths or Computer Science preferred).",
      examMode: "100% Online Computer Proctored Exams",
      averageFee: "₹95,000 - ₹1,55,000",
      startingEmi: "₹3,200/month",
      bestFor: "Students aspiring for careers in coding, software development, cloud services, and cybersecurity.",
      description: "A comprehensive undergraduate computer science foundation covering C++, Java, Web Development, Databases, Cloud, and Software Testing.",
      specialisationsList: [
        "Data Science & Analytics",
        "Cloud & Security",
        "Full Stack Development",
        "AI Basics"
      ],
      semesters: [
        { sem: "Semester 1", core: ["Foundational Mathematics", "Programming in C", "Digital Computer Fundamentals", "Communication Skills", "C Programming Lab"] },
        { sem: "Semester 2", core: ["Data Structures using C", "Database Management Systems", "Object Oriented Programming (C++)", "RDBMS Lab", "Web Basics (HTML/CSS)"] },
        { sem: "Semester 3", core: ["Java Programming", "Operating Systems", "Computer Networks", "Java Lab", "Software Engineering"] },
        { sem: "Semester 4", core: ["Python for Developers", "Computer Architecture", "Web Technologies (JavaScript/Node)", "Python Lab", "Elective 1"] },
        { sem: "Semester 5", core: ["Cloud Basics", "Information Security", "Elective 2", "Mini Project"] },
        { sem: "Semester 6", core: ["Software Testing", "Emerging Tech", "Major Capstone Project & Viva"] }
      ],
      careerRoles: [
        { role: "Junior Software Developer", ctc: "₹4.5 - 7.0 LPA" },
        { role: "Web Application Developer", ctc: "₹4.2 - 6.8 LPA" },
        { role: "Technical Support / QA Tester", ctc: "₹3.8 - 5.5 LPA" }
      ],
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 135000,
          feeDisplay: "₹1,35,000",
          emi: "₹3,750 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.6,
          popularSpecs: ["Cloud & Security", "Data Science"],
          usp: "Practical coding labs & active technical hackathon series",
          badge: "Editor's Choice"
        },
        {
          universityId: "jain-online",
          fee: 145000,
          feeDisplay: "₹1,45,000",
          emi: "₹4,100 / mo",
          duration: "36 Months",
          naac: "A++",
          approvals: "UGC-DEB, AICTE",
          rating: 4.5,
          popularSpecs: ["Artificial Intelligence", "Cloud Computing"],
          usp: "Bengaluru tech industry mentors & modern tech stack",
          badge: "NAAC A++"
        },
        {
          universityId: "amity-online",
          fee: 140000,
          feeDisplay: "₹1,40,000",
          emi: "₹3,900 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.4,
          popularSpecs: ["Full Stack", "Data Analytics"],
          usp: "Live mentor support with mock interviews",
          badge: "Popular"
        },
        {
          universityId: "chandigarh-university",
          fee: 96000,
          feeDisplay: "₹96,000",
          emi: "₹2,680 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AICTE",
          rating: 4.4,
          popularSpecs: ["Web Development", "Cloud Technologies"],
          usp: "Lowest cost BCA with comprehensive semester coding tests",
          badge: "Best Value"
        }
      ]
    },
    {
      id: "online-bcom",
      name: "Online Bachelor of Commerce (B.Com)",
      shortName: "Online B.Com",
      level: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 or equivalent in any stream with minimum 45-50% marks from a recognized board.",
      examMode: "100% Online Computer Proctored Exams",
      averageFee: "₹75,000 - ₹1,20,000",
      startingEmi: "₹2,500/month",
      bestFor: "Students preparing for CA, CS, CMA, UPSC, or banking exams while pursuing an accredited degree.",
      description: "Solid grounding in financial accounting, corporate taxation, auditing, company law, banking, and business finance.",
      specialisationsList: [
        "Banking & Finance",
        "International Finance & Accounting (ACCA)",
        "Corporate Accounting & Taxation",
        "FinTech"
      ],
      semesters: [
        { sem: "Semester 1", core: ["Financial Accounting I", "Business Organization", "Business Economics", "English & Modern Business Comms"] },
        { sem: "Semester 2", core: ["Financial Accounting II", "Business Regulatory Framework", "Business Mathematics", "Environmental Studies"] },
        { sem: "Semester 3", core: ["Corporate Accounting", "Company Law", "Banking Theory & Practice", "Direct Taxes Law"] },
        { sem: "Semester 4", core: ["Cost Accounting", "Goods & Services Tax (GST)", "Auditing", "Financial Management Basics"] },
        { sem: "Semester 5", core: ["Management Accounting", "Financial Markets & Institutions", "Specialisation Elective 1", "Specialisation Elective 2"] },
        { sem: "Semester 6", core: ["International Business", "Financial Modeling using Excel", "Specialisation Elective 3", "Project Report"] }
      ],
      careerRoles: [
        { role: "Accountant / Tax Associate", ctc: "₹3.8 - 6.0 LPA" },
        { role: "Banking Executive / Credit Analyst", ctc: "₹4.0 - 6.5 LPA" },
        { role: "Audit Assistant", ctc: "₹3.5 - 5.5 LPA" }
      ],
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 99000,
          feeDisplay: "₹99,000",
          emi: "₹2,750 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB, AIU",
          rating: 4.5,
          popularSpecs: ["Banking & Finance", "Taxation"],
          usp: "Ideal parallel degree for CA/CS foundation students",
          badge: "Most Trusted"
        },
        {
          universityId: "jain-online",
          fee: 110000,
          feeDisplay: "₹1,10,000",
          emi: "₹3,100 / mo",
          duration: "36 Months",
          naac: "A++",
          approvals: "UGC-DEB, ACCA",
          rating: 4.6,
          popularSpecs: ["International Finance (ACCA)", "FinTech"],
          usp: "Includes 6 paper exemptions in ACCA UK qualification",
          badge: "ACCA Accredited"
        },
        {
          universityId: "chandigarh-university",
          fee: 75000,
          feeDisplay: "₹75,000",
          emi: "₹2,100 / mo",
          duration: "36 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.3,
          popularSpecs: ["Accounting & Finance"],
          usp: "Extremely affordable for working students & competitive exam aspirants",
          badge: "Super Affordable"
        }
      ]
    },
    {
      id: "online-mcom",
      name: "Online Master of Commerce (M.Com)",
      shortName: "Online M.Com",
      level: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Com / BBA / BBM with minimum 50% marks from a recognized university.",
      examMode: "100% Online Computer Proctored Exams",
      averageFee: "₹80,000 - ₹1,30,000",
      startingEmi: "₹2,800/month",
      bestFor: "Commerce graduates seeking careers in senior accounting, corporate finance, taxation, or academia (UGC NET).",
      description: "Advanced master's degree focusing on multinational accounting, investment analysis, portfolio management, and quantitative finance.",
      specialisationsList: [
        "International Finance",
        "Financial Management",
        "Accounting & Auditing",
        "E-Commerce & Digital Commerce"
      ],
      semesters: [
        { sem: "Semester 1", core: ["Organization Theory & Behaviour", "Business Environment", "Managerial Economics", "Advanced Financial Management"] },
        { sem: "Semester 2", core: ["Advanced Corporate Accounting", "Marketing Management", "Financial Institutions & Markets", "Research Methodology & Statistical Techniques"] },
        { sem: "Semester 3", core: ["Corporate Tax Planning", "Security Analysis & Portfolio Management", "Elective 1", "Elective 2"] },
        { sem: "Semester 4", core: ["International Finance", "Strategic Management", "Elective 3", "Master's Project Dissertation"] }
      ],
      careerRoles: [
        { role: "Senior Financial Accountant", ctc: "₹5.5 - 9.0 LPA" },
        { role: "Tax Consultant / Auditor", ctc: "₹5.0 - 8.5 LPA" },
        { role: "Lecturer / Assistant Professor (with NET)", ctc: "₹6.0 - 10.0 LPA" }
      ],
      offerings: [
        {
          universityId: "manipal-jaipur",
          fee: 100000,
          feeDisplay: "₹1,00,000",
          emi: "₹2,800 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.5,
          popularSpecs: ["Financial Management", "International Finance"],
          usp: "UGC NET oriented syllabus structure",
          badge: "Popular"
        },
        {
          universityId: "amity-online",
          fee: 110000,
          feeDisplay: "₹1,10,000",
          emi: "₹3,100 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.4,
          popularSpecs: ["Accounting & Finance"],
          usp: "Global case study library & live interaction",
          badge: "Global Curriculum"
        },
        {
          universityId: "chandigarh-university",
          fee: 80000,
          feeDisplay: "₹80,000",
          emi: "₹2,250 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.3,
          popularSpecs: ["Banking & Finance"],
          usp: "Pocket friendly with solid online support",
          badge: "Best Value"
        }
      ]
    },
    {
      id: "online-ma-journalism",
      name: "Online MA in Journalism & Mass Communication (MA JMC)",
      shortName: "Online MA JMC",
      level: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "Bachelor's degree in any discipline from a recognized university with minimum 45-50% marks.",
      examMode: "100% Online Proctored Exams",
      averageFee: "₹1,00,000 - ₹1,40,000",
      startingEmi: "₹3,100/month",
      bestFor: "Content creators, journalists, PR specialists, digital media managers, and brand strategists.",
      description: "Master modern multi-platform journalism, podcasting, television production, public relations, crisis management, and digital advertising.",
      specialisationsList: [
        "Digital Journalism & New Media",
        "Public Relations & Corporate Comms",
        "Advertising & Brand Storytelling",
        "Broadcast & Audio Journalism"
      ],
      semesters: [
        { sem: "Semester 1", core: ["Communication Theory & Models", "History of Media & Press Laws", "Reporting & Editing for Print & Web", "Media Ethics & Cyber Law"] },
        { sem: "Semester 2", core: ["Electronic Media Production", "Advertising & Public Relations", "Digital Media & Society", "Photojournalism & Visual Storytelling"] },
        { sem: "Semester 3", core: ["Media Management & Entrepreneurship", "Development Communication", "Elective 1", "Elective 2"] },
        { sem: "Semester 4", core: ["Cross-Media Campaigns", "Data Journalism", "Master's Capstone Portfolio Project"] }
      ],
      careerRoles: [
        { role: "Digital Content Lead / Editor", ctc: "₹6.0 - 11 LPA" },
        { role: "Corporate Communications Specialist", ctc: "₹6.5 - 12 LPA" },
        { role: "Public Relations Manager", ctc: "₹7.0 - 13 LPA" }
      ],
      offerings: [
        {
          universityId: "amity-online",
          fee: 130000,
          feeDisplay: "₹1,30,000",
          emi: "₹3,650 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.6,
          popularSpecs: ["Digital Media", "PR & Corporate Comms"],
          usp: "Celebrity journalist guest talks & real-world PR simulations",
          badge: "Top Rated"
        },
        {
          universityId: "chandigarh-university",
          fee: 90000,
          feeDisplay: "₹90,000",
          emi: "₹2,500 / mo",
          duration: "24 Months",
          naac: "A+",
          approvals: "UGC-DEB",
          rating: 4.3,
          popularSpecs: ["Print & Broadcast Journalism"],
          usp: "Practical portfolio development with media mentors",
          badge: "Best Value"
        }
      ]
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Rohit Deshmukh",
      currentRole: "Senior Product Marketing Manager at Swiggy",
      programme: "Online MBA (Marketing)",
      university: "Manipal University Jaipur (Online)",
      batch: "Class of 2024",
      city: "Bengaluru",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "EduSeek helped me compare Manipal against Amity and NMIMS with 100% transparency on hidden examination fees and UGC-DEB notifications. The weekend live sessions allowed me to study without taking a single day off from work.",
      hike: "+65% Salary Hike",
      rating: 5
    },
    {
      id: "t2",
      name: "Pooja Sundaram",
      currentRole: "Cloud Engineer at Cognizant",
      programme: "Online MCA (Cloud & DevOps)",
      university: "Jain University (Online)",
      batch: "Class of 2025",
      city: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote: "Coming from a non-CS bachelor's background, I was worried about acceptance in IT services companies. The Jain Online MCA curriculum through EduSeek came with cloud labs and ACCA credits. Cleared campus drives in 3rd semester!",
      hike: "Transitioned from Non-IT to IT (₹8.4 LPA)",
      rating: 5
    },
    {
      id: "t3",
      name: "Ankit Verma",
      currentRole: "Deputy Finance Manager at ICICI Bank",
      programme: "Online MBA (FinTech & Banking)",
      university: "NMIMS CDOE",
      batch: "Class of 2024",
      city: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      quote: "The brand NMIMS holds massive weight in BFSI. Being able to compare semester EMI schemes side-by-side on EduSeek saved me ₹25,000 in upfront down payments. My degree is already verified for my internal corporate promotion.",
      hike: "Promoted to Managerial Grade",
      rating: 5
    },
    {
      id: "t4",
      name: "Sneha Mukherjee",
      currentRole: "Digital HR Strategist at Genpact",
      programme: "Online MBA (Human Resources)",
      university: "Amity University Online",
      batch: "Class of 2025",
      city: "Noida / Delhi NCR",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "EduSeek's comparison tool laid out the exact NAAC A+ accreditation status and WES evaluation details. The counselors never pushed a single college; they presented facts. That unbiased guidance is rare in India today.",
      hike: "Double Promotion in 18 Months",
      rating: 5
    }
  ],

  regulatoryInfo: [
    {
      id: "ugc-deb",
      badge: "Mandatory",
      title: "UGC-DEB Entitlement 2026",
      desc: "Per UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, 2020, only universities with DEB entitlement can grant valid online degrees. EduSeek lists ZERO unaccredited colleges."
    },
    {
      id: "degree-equivalence",
      badge: "Official Gazette",
      title: "Equal to On-Campus Degrees",
      desc: "UGC circular formally states that online degrees from recognized universities are 100% equivalent to conventional on-campus degrees for jobs, UPSC, State PSCs, and overseas higher education."
    },
    {
      id: "naac-nirf",
      badge: "Quality Filter",
      title: "NAAC 3.26+ & Top 100 NIRF",
      desc: "Category-1 institutions can offer online programmes without prior UGC approvals. We highlight NAAC A++ / A+ scorecards and NIRF rankings so you make informed brand choices."
    },
    {
      id: "zero-cost-emi",
      badge: "Affordability",
      title: "0% Interest Student Financing",
      desc: "Every listed university offers flexible monthly EMI (no credit card mandatory, zero processing fee) starting from ₹2,500/month to democratize education."
    }
  ],

  articles: [
    {
      id: "art-1",
      title: "Is an Online MBA Valid for Government Jobs, UPSC & PSUs in India?",
      readTime: "6 min read",
      category: "Degree Legality",
      date: "Feb 2026",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      excerpt: "Deep-dive into the UGC Gazette Notification 2020: Why public sector undertakings (PSUs), state commissions, and international WES credential evaluations accept entitled online degrees."
    },
    {
      id: "art-2",
      title: "Manipal vs Amity vs NMIMS Online: Comprehensive 2026 Head-to-Head Comparison",
      readTime: "9 min read",
      category: "University Comparison",
      date: "Jan 2026",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      excerpt: "Comparing total fees, LMS technology, faculty ratios, examination flexibility, and corporate placement cell assistance across India's three biggest online education powerhouses."
    },
    {
      id: "art-3",
      title: "10 Costly Mistakes Indian Students Make While Picking an Online Degree",
      readTime: "5 min read",
      category: "Admissions Advice",
      date: "Feb 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      excerpt: "From confusing Distance Education with Online Education to ignoring proctoring norms and falling for fake aggregator fee discounts — here is how to protect your investment."
    }
  ],

  faqs: [
    {
      q: "Are online degrees recognized by government departments and UPSC in India?",
      a: "Yes, absolutely. According to the UGC Gazette Notification dated 4th September 2020, degrees acquired through open, distance, or online learning from higher educational institutions recognized by the UGC are treated as equivalent to corresponding degrees awarded through conventional campus mode for all purposes including government employment and higher studies."
    },
    {
      q: "How does the EduSeek comparison tool work?",
      a: "EduSeek's compare tray allows you to select up to 3 universities or programmes from any page. Click 'Compare Now' to see a rigorous matrix comparing approvals (UGC-DEB, AICTE, NAAC score), total course fee, monthly EMI, faculty ratio, examination format, placement assistance, and curriculum highlights side-by-side with zero sales bias."
    },
    {
      q: "Will my degree certificate mention 'Online' or 'Distance'?",
      a: "As mandated by UGC regulations, the degree certificate is issued by the university and specifies the degree name (e.g., Master of Business Administration) alongside the mode of delivery ('Online Mode'). Crucially, the academic value, credits (as per NEP 2020), and legal validity remain identical to on-campus degrees."
    },
    {
      q: "How are examinations conducted for online programmes?",
      a: "Most accredited universities conduct 100% remote proctored exams. You can take them from the comfort of your home using a laptop with a functional webcam, microphone, and stable internet. Exams are monitored via AI and live human proctors to ensure strict academic integrity."
    },
    {
      q: "Can I pay course fees in monthly installments without interest?",
      a: "Yes. Almost all partner universities on EduSeek provide tie-ups with student education financing partners (like Propelld, LiquiLoans, Eduvanz) offering 0% interest monthly EMIs (e.g., ₹4,000 - ₹6,500/month) with zero down payment options for eligible working professionals or co-borrowers."
    },
    {
      q: "What is the difference between Online Education and Distance Education in India?",
      a: "Distance education (ODL) traditionally relies on printed physical books, sporadic weekend study center classes, and offline paper-based center examinations. Online education is 100% digital: interactive live video lectures, an AI-enabled LMS, digital discussion forums with faculty, cloud coding labs, and remote proctored online examinations."
    }
  ]
};

// Helper lookup utilities
function getUniversityById(id) {
  return EDU_DATA.universities.find(u => u.id === id) || EDU_DATA.universities[0];
}

function getProgrammeById(id) {
  return EDU_DATA.programmes.find(p => p.id === id) || EDU_DATA.programmes[0];
}

function getOfferingsForProgramme(programmeId) {
  const p = getProgrammeById(programmeId);
  return p ? p.offerings : [];
}

// Global comparison state management using localStorage
const COMPARE_KEY = "eduseek_compare_items_v1";

function getCompareItems() {
  try {
    const raw = localStorage.getItem(COMPARE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCompareItems(items) {
  try {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("eduseek:compareUpdated", { detail: items }));
  } catch (e) {
    console.error("Could not save compare items", e);
  }
}

function addToCompare(item) {
  // item: { type: 'programme' | 'university', id: string, name: string, universityName?: string, fee?: string, naac?: string, rating?: number, image?: string }
  const current = getCompareItems();
  const exists = current.find(i => i.id === item.id);
  if (exists) {
    return { success: false, message: "Item is already in your comparison tray." };
  }
  if (current.length >= 3) {
    return { success: false, message: "Comparison tray holds maximum 3 items. Remove one first." };
  }
  current.push(item);
  saveCompareItems(current);
  return { success: true, message: `Added "${item.name}" to comparison.` };
}

function removeFromCompare(itemId) {
  const current = getCompareItems();
  const filtered = current.filter(i => i.id !== itemId);
  saveCompareItems(filtered);
  return filtered;
}

function clearCompare() {
  saveCompareItems([]);
}
