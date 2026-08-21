// CampusPilot AI - Enterprise AI Mock Interviewer Hub & Placement Preparation Engine
// Version: 3.0.0 (Comprehensive Placement Coach)

(function(root) {
  'use strict';

  // =========================================================================
  // 1. COMPANY-SPECIFIC INTERVIEW TRACKS
  // =========================================================================
  const COMPANY_TRACKS = [
    {
      id: "google",
      name: "Google",
      badge: "FAANG Tier 1",
      logo: "🌐",
      focus: "Data Structures, Scalable Distributed Systems & Algorithmic Optimality",
      rounds: ["Aptitude & DSA Phone Screen", "Core Coding Round", "System Architecture", "Googliness & Leadership"],
      difficulty: "Hard",
      sampleQuestions: [
        {
          id: "goog_1",
          category: "DSA",
          type: "Technical",
          question: "Given a directed graph representing package dependencies, how would you detect circular dependencies and output a valid build order?",
          idealPoints: ["Topological sort (Kahn's Algorithm or DFS with 3-color cycle detection)", "Time complexity O(V + E)", "Space complexity O(V) for visited set & recursion stack", "Handling disconnected components"],
          sampleAnswer: "I would model packages as directed vertices and dependencies as edges, then apply Kahn's Algorithm using in-degree tracking via a queue. If the output count matches the total vertices, a valid build topological order exists; otherwise, remaining nodes with in-degree > 0 indicate a circular dependency cycle. Total runtime is O(V + E)."
        },
        {
          id: "goog_2",
          category: "System Design",
          type: "Architecture",
          question: "How would you design Google's Typeahead / Autocomplete system capable of serving 50,000 queries per second with sub-20ms latency?",
          idealPoints: ["Trie data structure with top-k caching at nodes", "Distributed caching (Redis / Memcached clusters)", "Offline batch aggregation via MapReduce/Kafka", "Consistent hashing for prefix partitioning"],
          sampleAnswer: "I would use a distributed Trie where each prefix node stores the top 10 historical search suggestions precomputed offline via stream processing. To achieve sub-20ms latency across 50k QPS, I would shard the Trie across cache clusters using consistent hashing on prefix prefixes and front it with a global CDN and GeoDNS."
        }
      ]
    },
    {
      id: "amazon",
      name: "Amazon",
      badge: "FAANG Tier 1",
      logo: "📦",
      focus: "16 Leadership Principles (Customer Obsession, Ownership, Dive Deep) + High-Scale Coding",
      rounds: ["Online Assessment (OA1 & OA2)", "Technical Coding Round", "System Design", "Bar Raiser Behavioral"],
      difficulty: "Hard",
      sampleQuestions: [
        {
          id: "amzn_1",
          category: "HR / Leadership",
          type: "Behavioral",
          question: "Tell me about a time you had to make a high-stakes technical decision with incomplete data (Bias for Action & Deliver Results).",
          idealPoints: ["STAR Method: Situation, Task, Action, Result", "Calculated risk assessment (Two-way vs One-way doors)", "Concrete business metric outcome", "Post-launch monitoring and pivot plan"],
          sampleAnswer: "Situation: During our hackathon deployment, our primary third-party auth API went down 2 hours before judging. Task: Deliver a functional login experience without compromising credential safety. Action: I made a calculated two-way-door decision to enable temporary encrypted local session tokens with HMAC verification rather than stalling. Result: We successfully demonstrated all live features to judges on time and won the Best UX award, later migrating seamlessly back to OAuth."
        },
        {
          id: "amzn_2",
          category: "DBMS & Cloud",
          type: "Technical",
          question: "Explain DynamoDB's partitioning strategy, how hot partitions occur, and how you design partition keys to prevent throttling.",
          idealPoints: ["Hash-based partitioning on partition key (PK)", "Hot partitions when traffic concentrates on single key", "Composite primary keys (PK + SK)", "Write sharding using randomized suffix suffixes"],
          sampleAnswer: "DynamoDB calculates an internal MD5 hash of the partition key to assign items to physical storage nodes. A hot partition occurs when excessive read/write requests target the same partition key (e.g. a viral product ID). To prevent throttling, we use composite keys (PK + Sort Key) and synthetic write sharding by appending a random integer suffix (e.g. orderId_0 to orderId_9)."
        }
      ]
    },
    {
      id: "microsoft",
      name: "Microsoft",
      badge: "Big Tech",
      logo: "🪟",
      focus: "Clean Object-Oriented Design, Concurrency, Enterprise Scale & Growth Mindset",
      rounds: ["Technical Screen", "Data Structures & OOP", "System & API Design", "As-Appropriate (AA) Final Round"],
      difficulty: "Medium-Hard",
      sampleQuestions: [
        {
          id: "msft_1",
          category: "OOP",
          type: "Technical",
          question: "How do you apply SOLID design principles in building an enterprise notification dispatcher supporting Email, SMS, and Push channels?",
          idealPoints: ["Single Responsibility (Separate sender classes)", "Open/Closed (Add channels without modifying existing dispatch logic)", "Liskov Substitution (Uniform INotificationChannel interface)", "Dependency Inversion (Depend on abstractions)"],
          sampleAnswer: "I would define a common INotificationChannel interface with a send() method. Specific carriers (EmailChannel, SmsChannel) implement this interface (Open/Closed & Liskov Substitution). A NotificationDispatcher service accepts a list of INotificationChannel instances injected via Dependency Injection (Dependency Inversion), allowing new delivery channels to be plugged in with zero regressions."
        }
      ]
    },
    {
      id: "tcs",
      name: "TCS (Digital / Ninja / Prime)",
      badge: "Mass Tech Recruiter",
      logo: "🏢",
      focus: "Aptitude, Core Java/C++, SQL Joins, DBMS ACID Properties & Project Clarity",
      rounds: ["TCS NQT (Cognitive + Coding)", "Technical Interview", "Managerial & HR Round"],
      difficulty: "Medium",
      sampleQuestions: [
        {
          id: "tcs_1",
          category: "DBMS",
          type: "Technical",
          question: "Explain ACID properties in Database Management Systems with a real-world banking transaction example.",
          idealPoints: ["Atomicity (All-or-nothing)", "Consistency (Valid state constraints)", "Isolation (Concurrent transactions don't interfere)", "Durability (Committed changes survive power failure)"],
          sampleAnswer: "ACID ensures reliable database transactions. In a money transfer of $100 from Account A to B: Atomicity guarantees both the deduction from A and credit to B happen together; if power fails halfway, both rollback. Consistency enforces that total money remains invariant. Isolation prevents another simultaneous transaction from seeing a half-transferred intermediate balance. Durability writes committed records to disk/WAL logs permanently."
        },
        {
          id: "tcs_2",
          category: "Java",
          type: "Technical",
          question: "What is the difference between StringBuffer and StringBuilder in Java, and why is StringBuilder preferred in single-threaded environments?",
          idealPoints: ["StringBuffer methods are synchronized (thread-safe, high overhead)", "StringBuilder is non-synchronized (faster execution)", "Both are mutable character sequences unlike String"],
          sampleAnswer: "Both StringBuffer and StringBuilder represent mutable strings to avoid heap garbage from string concatenation. However, StringBuffer synchronizes every method call for thread safety, introducing locking overhead. In single-threaded execution, StringBuilder avoids mutex locks, providing significantly faster throughput."
        }
      ]
    },
    {
      id: "infosys",
      name: "Infosys (DSE / SP / SE)",
      badge: "IT Services & Consulting",
      logo: "🔷",
      focus: "Python/Java Fundamentals, Computer Networks, OS Deadlocks & Analytical Problem Solving",
      rounds: ["InfyTQ / HackWithInfy", "Technical Round", "HR Round"],
      difficulty: "Medium",
      sampleQuestions: [
        {
          id: "infy_1",
          category: "OS",
          type: "Technical",
          question: "What are the four necessary conditions for a Deadlock to occur in an Operating System, and how does Banker's Algorithm prevent it?",
          idealPoints: ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait", "Banker's Algorithm: Safe State validation using Available, Max, and Allocation matrices"],
          sampleAnswer: "The 4 Coffman conditions are Mutual Exclusion (non-shareable resources), Hold and Wait, No Preemption, and Circular Wait. Banker's Algorithm prevents deadlock by dynamically testing safe states: whenever a process requests resources, it only grants them if the remaining allocation leaves the system in a safe state where all processes can eventually complete."
        }
      ]
    },
    {
      id: "startups",
      name: "High-Growth AI & Web3 Startups",
      badge: "High Velocity",
      logo: "🚀",
      focus: "Full-Stack Velocity, Modern Tech Stacks (React, Node, FastApi, Docker), Problem Ownership",
      rounds: ["Take-Home Project Review", "Live Debugging & Whiteboarding", "Founder Culture Fit"],
      difficulty: "Medium-Hard",
      sampleQuestions: [
        {
          id: "startup_1",
          category: "AI/ML & Web",
          type: "Technical",
          question: "How would you implement streaming LLM token responses over Server-Sent Events (SSE) or WebSockets in a React frontend without causing laggy re-renders?",
          idealPoints: ["SSE / ReadableStream fetch reader", "Batched state updates or requestAnimationFrame queue", "useRef for raw buffer accumulation to minimize React DOM thrashing", "Auto-scrolling with user interrupt detection"],
          sampleAnswer: "I would use fetch with ReadableStream to consume SSE token chunks. To prevent 60fps React re-render thrashing on every individual character, I accumulate incoming tokens into a mutable ref and flush to UI state at 30ms throttled intervals using requestAnimationFrame, ensuring silky smooth rendering."
        }
      ]
    }
  ];

  // =========================================================================
  // 2. STUDENT YEAR-WISE INTERVIEW TRACKS
  // =========================================================================
  const STUDENT_YEAR_TRACKS = [
    {
      year: "1st Year",
      title: "Foundation & Problem Solving",
      description: "Communication confidence, Basic Python/C++, logic puzzles, and fundamental algorithmic thinking.",
      recommendedFocus: ["Basic Syntax", "Control Flow", "Array Logic", "Communication Skills"]
    },
    {
      year: "2nd Year",
      title: "Core CS & Data Structures",
      description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Recursion, OOP concepts & Basic DBMS.",
      recommendedFocus: ["DSA", "OOP Principles", "DBMS Basics", "OS Concepts"]
    },
    {
      year: "3rd Year",
      title: "Internships & Technical Depth",
      description: "Full-stack projects, Advanced DSA (Graphs, DP), SQL Optimization, Computer Networks, and System Design basics.",
      recommendedFocus: ["Graph/DP Algorithms", "Resume Projects", "API Design", "STAR Behavioral"]
    },
    {
      year: "4th Year",
      title: "Final Placement Drives & FAANG Rounds",
      description: "High-scale System Design, Mock Bar Raiser, Live Coding Arena, Multi-Round Placement simulation.",
      recommendedFocus: ["Company-Specific Tracks", "System Scalability", "Coding Arena", "Managerial Scenarios"]
    }
  ];

  // =========================================================================
  // 3. 18-CATEGORY QUESTION BANK
  // =========================================================================
  const QUESTION_BANK = {
    dsa: [
      {
        id: "dsa_1",
        category: "DSA",
        topic: "Arrays & Two Pointers",
        question: "How do you find the longest palindromic substring in O(N^2) time and O(1) extra space?",
        idealPoints: ["Expand around centers (2N - 1 possible centers)", "Handling odd and even palindrome lengths", "O(N^2) time complexity, O(1) auxiliary space", "Comparison to Dynamic Programming O(N^2) space"],
        sampleAnswer: "A palindrome centers around either a single character (odd length) or two characters (even length), yielding 2N - 1 total centers. By expanding outward from each center while characters match, we can find the longest palindrome in O(N^2) time while maintaining O(1) space, which outperforms the O(N^2) space complexity of standard 2D DP."
      },
      {
        id: "dsa_2",
        category: "DSA",
        topic: "Dynamic Programming",
        question: "Explain the Coin Change Problem (minimum coins for sum S) and derive both recursive and iterative DP transitions.",
        idealPoints: ["Optimal Substructure & Overlapping Subproblems", "DP[i] = min(DP[i - coin] + 1) for coin in coins", "Base case DP[0] = 0, all others initialized to infinity", "O(S * N) time complexity, O(S) space"],
        sampleAnswer: "Let DP[i] be the minimum coins to make sum i. For every coin denomination c, if i >= c, the relation is DP[i] = min(DP[i], DP[i - c] + 1). Base condition is DP[0] = 0. We iterate bottom-up from 1 to S. Time complexity is O(S * N) and space complexity is O(S)."
      }
    ],
    dbms: [
      {
        id: "dbms_1",
        category: "DBMS",
        topic: "Indexing & B-Trees",
        question: "Why are B+ Trees preferred over B Trees and Hash Indexes for relational database storage engines (e.g. MySQL InnoDB)?",
        idealPoints: ["B+ Trees store all data records only in leaf nodes", "Leaf nodes are linked in a sequential doubly-linked list for fast range queries", "Internal nodes store only keys, allowing higher branching factor and lower tree height", "Hash indexes only support O(1) point lookups, failing on range queries (e.g. WHERE age > 25)"],
        sampleAnswer: "B+ Trees place all actual data records strictly at the leaf level, connecting them via a doubly linked list. This makes range scans (e.g. BETWEEN or >) extremely fast via sequential traversal. In contrast, B-Trees store data in internal nodes reducing fan-out, and Hash Indexes cannot support range filters at all."
      },
      {
        id: "dbms_2",
        category: "DBMS",
        topic: "Normalization",
        question: "Explain the progression from 1NF to BCNF with concrete database anomalies that each normal form eliminates.",
        idealPoints: ["1NF: Atomic values, no repeating groups", "2NF: 1NF + No Partial Functional Dependencies on composite PK", "3NF: 2NF + No Transitive Dependencies (non-prime to non-prime)", "BCNF: For every functional dependency X -> Y, X must be a super key"],
        sampleAnswer: "1NF eliminates repeating multi-valued attributes by making values atomic. 2NF removes partial dependencies where a column depends on only part of a composite primary key. 3NF removes transitive dependencies (e.g. Student -> Dept -> DeptHead). BCNF is a stricter version ensuring the left-hand determinant of every functional dependency is strictly a super key."
      }
    ],
    os: [
      {
        id: "os_1",
        category: "OS",
        topic: "Virtual Memory & Paging",
        question: "How does Virtual Memory work with Paging, Page Tables, and the Translation Lookaside Buffer (TLB)? What causes a Page Fault?",
        idealPoints: ["Logical to Physical address translation via Page Table", "TLB is a fast hardware cache of recent translations", "Page Fault occurs when the valid bit is 0 (page not in RAM)", "OS retrieves page from swap disk space via disk I/O"],
        sampleAnswer: "Virtual memory isolates processes by mapping virtual addresses (Page Number + Offset) to physical memory (Frame Number + Offset) using Page Tables. The CPU first checks the TLB cache; on a TLB miss, it walks the Page Table. If the page is not loaded in RAM (valid bit = 0), the MMU triggers a Page Fault trap, causing the OS kernel to load the missing page from disk."
      }
    ],
    networks: [
      {
        id: "cn_1",
        category: "Computer Networks",
        topic: "Transport Layer",
        question: "Walk through the TCP 3-Way Handshake and 4-Way Termination sequence. Why is the TIME_WAIT state necessary?",
        idealPoints: ["Handshake: SYN -> SYN-ACK -> ACK", "Termination: FIN -> ACK -> FIN -> ACK", "TIME_WAIT state lasts 2MSL (Maximum Segment Lifetime)", "Ensures the final ACK is received and old duplicate segments expire"],
        sampleAnswer: "To establish a connection: Client sends SYN, Server replies with SYN-ACK, Client sends ACK. To terminate: Client sends FIN, Server ACKs; Server then sends FIN, Client ACKs and enters TIME_WAIT state for 2MSL. TIME_WAIT guarantees that if the final ACK was lost in transit, the server can re-transmit FIN, and prevents stale delayed packets from colliding with a new connection on the same port."
      }
    ],
    oop: [
      {
        id: "oop_1",
        category: "OOP",
        topic: "Polymorphism & Abstraction",
        question: "Explain the difference between compile-time (static) polymorphism and runtime (dynamic) polymorphism with virtual method tables (vtable).",
        idealPoints: ["Compile-time: Method Overloading & Operator Overloading (resolved at compilation)", "Runtime: Method Overriding (resolved via dynamic dispatch)", "Vtable: Array of function pointers created for classes with virtual methods", "Vptr in object instance points to class vtable"],
        sampleAnswer: "Compile-time polymorphism (overloading) resolves method signatures at compile time. Runtime polymorphism (overriding) allows a base pointer to invoke derived implementations at runtime. C++ and Java achieve dynamic dispatch using a Vtable (virtual method table) and Vptr: each object contains a hidden pointer to its class Vtable containing resolved function addresses."
      }
    ],
    hr: [
      {
        id: "hr_1",
        category: "HR & Behavioral",
        topic: "Conflict Resolution",
        question: "Describe a situation where you had a disagreement with a team member on an engineering approach. How did you resolve it?",
        idealPoints: ["STAR Structure: Situation, Task, Action, Result", "Objective data-driven evaluation vs personal bias", "Prototyping / benchmarking to compare trade-offs", "Active listening and commitment to team outcome"],
        sampleAnswer: "Situation: While building our student project, a teammate wanted to use MongoDB for rapid prototyping, while I advocated for PostgreSQL due to strict relational data models. Task: Align on the best storage choice without slowing project sprint velocity. Action: I built a quick benchmark script modeling our core entities and queries, demonstrating that Postgres enforced foreign-key integrity with 40% faster join queries. We discussed trade-offs objectively and agreed on Postgres. Result: We delivered on time with zero schema corruption bugs."
      }
    ]
  };

  // =========================================================================
  // 4. CODING ARENA PROBLEMS
  // =========================================================================
  const CODING_ARENA_PROBLEMS = [
    {
      id: "code_1",
      title: "Two Sum Target Indices",
      difficulty: "Easy",
      category: "Arrays & Hash Map",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution.",
      starterCode: {
        python: "def twoSum(nums, target):\n    hash_map = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in hash_map:\n            return [hash_map[comp], i]\n        hash_map[num] = i\n    return []\n\nprint(twoSum([2, 7, 11, 15], 9))",
        javascript: "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const comp = target - nums[i];\n        if (map.has(comp)) return [map.get(comp), i];\n        map.set(nums[i], i);\n    }\n    return [];\n}\nconsole.log(twoSum([2, 7, 11, 15], 9));"
      },
      testCases: [
        { input: "[2, 7, 11, 15], target=9", expected: "[0, 1]" },
        { input: "[3, 2, 4], target=6", expected: "[1, 2]" }
      ],
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)"
    },
    {
      id: "code_2",
      title: "Reverse a Singly Linked List",
      difficulty: "Easy",
      category: "Linked Lists",
      description: "Given the head of a singly linked list, reverse the list in-place and return the reversed head node.",
      starterCode: {
        python: "def reverseList(head):\n    prev = None\n    curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev",
        javascript: "function reverseList(head) {\n    let prev = null;\n    let curr = head;\n    while (curr) {\n        let nxt = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nxt;\n    }\n    return prev;\n}"
      },
      testCases: [
        { input: "[1 -> 2 -> 3 -> 4 -> 5]", expected: "[5 -> 4 -> 3 -> 2 -> 1]" }
      ],
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)"
    }
  ];

  // =========================================================================
  // 5. RESUME-BASED INTERVIEW QUESTION GENERATOR
  // =========================================================================
  function generateResumeBasedQuestions(studentProfile) {
    const questions = [];
    const skills = studentProfile.skills || [];
    const name = studentProfile.fullName || studentProfile.name || "Candidate";
    const role = studentProfile.targetRole || "Software Engineer";

    questions.push({
      id: "res_proj_1",
      category: "Resume Project",
      type: "Technical Deep-Dive",
      question: `In your profile, you highlight building applications with ${skills.slice(0, 3).join(', ')}. Walk me through the architecture of your primary project, why you chose these technologies, and the biggest scaling bottleneck you resolved.`,
      idealPoints: [
        "High-level system architecture (Frontend, Backend, DB)",
        "Technology justification against alternatives",
        "Concrete performance bottleneck and resolution",
        "Measurable metric (latency reduction, QPS, user impact)"
      ],
      sampleAnswer: `In my project, I built an end-to-end intelligence engine using ${skills[0] || 'Python'} for the processing pipeline and React for the client interface. The largest bottleneck occurred during bulk data ingestion where relational table locks spiked latency to 1.8s. I resolved this by introducing an asynchronous queue and write-behind caching in Redis, which slashed end-to-end response time down to 140ms.`
    });

    if (skills.length > 0) {
      const topSkill = skills[0];
      questions.push({
        id: "res_skill_1",
        category: "Resume Skill Mastery",
        type: "Technical",
        question: `Your resume lists deep competency in ${topSkill}. Can you describe an edge case or memory/performance pitfall you encountered when working with ${topSkill} and how you diagnosed it?`,
        idealPoints: [
          `Internal mechanics of ${topSkill}`,
          "Diagnosis tools (profiler, logs, metrics)",
          "Root cause explanation",
          "Permanent architectural fix"
        ],
        sampleAnswer: `While working with ${topSkill}, we experienced unexpected memory growth during high batch processing. Using heap dump profiling, I diagnosed that lingering event listener closures were preventing garbage collection. By refactoring to weak references and explicit cleanup hooks, we stabilized memory usage by 65%.`
      });
    }

    questions.push({
      id: "res_role_1",
      category: "Career Alignment",
      type: "Behavioral",
      question: `You are targeting a ${role} position. What unique technical strengths from your engineering coursework and projects make you an immediate high-impact hire on day one?`,
      idealPoints: [
        "Direct mapping of past project outcomes to industry requirements",
        "Fast learning velocity and adaptability",
        "Ownership mindset and team collaboration"
      ],
      sampleAnswer: `My hands-on experience implementing distributed architectures, clean modular code, and automated testing allows me to integrate rapidly into production workflows. I have a proven track record of converting complex technical specifications into reliable, user-facing systems with minimal hand-holding.`
    });

    return questions;
  }

  // =========================================================================
  // 6. ADAPTIVE FOLLOW-UP ENGINE
  // =========================================================================
  function generateAdaptiveFollowUp(currentQuestion, userAnswer, scoreResult, isPressureMode) {
    if (isPressureMode) {
      const pressureFollowUps = [
        "Are you completely certain about that time complexity? What if the input contains 10 million duplicate elements?",
        "Why wouldn't an asynchronous worker queue be strictly superior to your proposed approach?",
        "If your primary database crashes during step 2 of that operation, how do you prevent phantom data corruption?",
        "A senior architect on your team strongly disagrees with your approach. How do you defend your choice using quantitative benchmarks?"
      ];
      return pressureFollowUps[Math.floor(Math.random() * pressureFollowUps.length)];
    }

    if (scoreResult.technicalDepth < 70) {
      return `That covers the basics, but could you dive deeper into the internal memory layout or explain how you would optimize this for production concurrency?`;
    } else if (userAnswer.split(' ').length < 30) {
      return `Good start! Could you illustrate that with a real-world project example or walk through a concrete edge case?`;
    } else {
      return `Excellent technical detail! How does this architecture compare to alternative trade-offs when scaling across multiple geographical regions?`;
    }
  }

  // =========================================================================
  // 7. VOICE & SPEECH TELEMETRY ANALYZER
  // =========================================================================
  function analyzeSpeechTelemetry(transcriptText, durationSeconds = 30) {
    if (!transcriptText || transcriptText.trim().length === 0) {
      return {
        wordsPerMinute: 0,
        pacingStatus: "No speech detected",
        fillerWordsCount: 0,
        fillerWordsList: [],
        clarityScore: 50,
        feedback: "Please speak into the microphone to record your verbal response."
      };
    }

    const words = transcriptText.trim().split(/\s+/);
    const totalWords = words.length;
    const minutes = Math.max(0.1, durationSeconds / 60);
    const wpm = Math.round(totalWords / minutes);

    let pacingStatus = "Optimal Pace (120 - 150 WPM)";
    if (wpm < 100) pacingStatus = "Slow (Try speaking with more energy)";
    else if (wpm > 170) pacingStatus = "Fast (Pace yourself for clarity)";

    const fillerList = ["umm", "um", "uh", "uhh", "like", "actually", "basically", "you know", "sort of", "kind of"];
    let fillerCount = 0;
    const foundFillers = [];

    words.forEach(w => {
      const cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
      if (fillerList.includes(cleanWord)) {
        fillerCount++;
        if (!foundFillers.includes(cleanWord)) foundFillers.push(cleanWord);
      }
    });

    const clarityScore = Math.max(40, Math.min(98, 100 - (fillerCount * 5) + (totalWords > 40 ? 10 : 0)));

    return {
      wordsPerMinute: wpm,
      pacingStatus,
      fillerWordsCount: fillerCount,
      fillerWordsList: foundFillers,
      clarityScore,
      feedback: fillerCount > 4 
        ? `You used filler words ('${foundFillers.join("', '")}') ${fillerCount} times. Try pausing briefly instead of filling silence.`
        : `Strong vocal pacing! Clear articulation with minimal filler hesitation.`
    };
  }

  // =========================================================================
  // 8. AI ANSWER TRANSFORMER (Before ➔ High-Impact STAR ➔ Why Better)
  // =========================================================================
  function transformAnswerWithAI(rawAnswer, questionObj) {
    if (!rawAnswer || rawAnswer.trim().length < 10) {
      rawAnswer = "I worked on a project using modern web frameworks to make it faster.";
    }

    const keyTopics = (questionObj && questionObj.idealPoints) ? questionObj.idealPoints.slice(0, 2).join(", ") : "System architecture & trade-offs";

    const improvedAnswer = `Situation & Context: In our recent engineering initiative, our application faced significant latency challenges under concurrent user load.
Action & Architecture: To resolve this, I implemented an optimized pipeline focusing on ${keyTopics}. I restructured the data flow to eliminate redundant database roundtrips and introduced caching with strict consistency boundaries.
Measurable Result: This reduced 95th-percentile response latency by 45%, achieved zero schema corruption, and scaled reliably across benchmark stress tests.`;

    const whyBetter = [
      "Follows the STAR framework (Situation, Task, Action, Result) for executive clarity.",
      "Quantifies business impact with concrete performance metrics (-45% latency).",
      "Demonstrates proactive engineering decision-making and ownership rather than passive execution."
    ];

    return {
      originalAnswer: rawAnswer,
      improvedAnswer,
      whyBetter
    };
  }

  // =========================================================================
  // 9. AI INTERVIEW TWIN & 7-DAY REMEDIAL ROADMAP
  // =========================================================================
  const TWIN_STORAGE_KEY = "campuspilot_ai_interview_twin_v3";

  function getAIInterviewTwinProfile() {
    try {
      const data = localStorage.getItem(TWIN_STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Could not read interview twin profile:", e);
    }

    return {
      totalInterviewsCompleted: 3,
      historyScores: [
        { session: 1, score: 58, date: "2026-08-10", role: "Software Engineer" },
        { session: 2, score: 69, date: "2026-08-14", role: "AI / ML Engineer" },
        { session: 3, score: 81, date: "2026-08-18", role: "Full Stack Developer" }
      ],
      topicMastery: {
        "DSA": 82,
        "DBMS": 54,
        "OS & Concurrency": 68,
        "System Design": 75,
        "Communication": 78,
        "HR & Leadership": 88
      },
      weakTopics: ["DBMS Normalization & Indexing", "Concurrency Deadlocks"],
      strongTopics: ["Data Structures (Hash Maps, Trees)", "HR STAR Behavioral"],
      currentStreakDays: 5,
      xpPoints: 1250,
      userLevel: "Level 6: Technical Specialist",
      badges: ["🔥 5-Day Streak", "🎯 STAR Master", "💻 Algorithm Ace"]
    };
  }

  function saveAIInterviewTwinProfile(profile) {
    try {
      localStorage.setItem(TWIN_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn("Could not save interview twin profile:", e);
    }
  }

  function generate7DayLearningRoadmap(weakTopicName = "DBMS") {
    return {
      topic: weakTopicName,
      title: `7-Day ${weakTopicName} Mastery Sprint`,
      objective: `Transform detected weak area (${weakTopicName}) into a placement-ready technical strength.`,
      days: [
        { day: 1, title: "Keys, Constraints & Entity-Relationship Modeling", task: "Review Primary, Foreign, Candidate keys & ER diagram cardinalities.", duration: "45 mins" },
        { day: 2, title: "Normalization Mastery (1NF to BCNF)", task: "Practice 10 decomposition problems to eliminate insertion & deletion anomalies.", duration: "60 mins" },
        { day: 3, title: "Complex SQL Joins & Window Functions", task: "Write 15 LeetCode SQL queries (RANK, DENSE_RANK, GROUP BY, HAVING).", duration: "60 mins" },
        { day: 4, title: "B+ Tree Indexing & Query Execution Plans", task: "Study EXPLAIN ANALYZE, clustered vs non-clustered indexes, and composite keys.", duration: "50 mins" },
        { day: 5, title: "Transactions, ACID & Concurrency Control", task: "Understand Dirty Reads, Phantom Reads, and 2-Phase Locking (2PL).", duration: "45 mins" },
        { day: 6, title: "NoSQL Trade-offs & Distributed DBs (CAP Theorem)", task: "Compare MongoDB, Cassandra, and DynamoDB partition strategies.", duration: "50 mins" },
        { day: 7, title: "AI Mock Interview Re-Test & Verification", task: "Take an adaptive 5-question mock interview dedicated exclusively to DBMS.", duration: "30 mins" }
      ]
    };
  }

  // =========================================================================
  // 10. COMPREHENSIVE MULTI-DIMENSIONAL EVALUATOR
  // =========================================================================
  function evaluateComprehensiveAnswer(questionObj, userAnswer, isVoice = false, durationSec = 30) {
    if (!userAnswer || userAnswer.trim().length < 10) {
      return {
        overallScore: 48,
        technicalDepth: 42,
        problemSolving: 50,
        communicationScore: 55,
        resumeAlignment: 60,
        confidenceScore: 50,
        hrScore: 55,
        hireVerdict: "Needs Practice (<70)",
        hireBadgeClass: "bg-rose-950 text-rose-300 border-rose-500/40",
        feedback: "Answer is too brief. Be sure to explain core architecture, trade-offs, and concrete project outcomes.",
        strengths: ["Willingness to attempt question"],
        weaknesses: ["Lacks technical depth and domain keywords", "Missing structural framework"],
        nextSteps: ["Review ideal points below and practice articulating with the STAR method."],
        idealPoints: questionObj ? questionObj.idealPoints : []
      };
    }

    const userLower = userAnswer.toLowerCase();
    const idealPoints = (questionObj && questionObj.idealPoints) || [];
    let matchedPoints = 0;

    idealPoints.forEach(point => {
      const words = point.toLowerCase().split(' ');
      if (words.some(w => w.length > 3 && userLower.includes(w))) {
        matchedPoints++;
      }
    });

    const matchRatio = idealPoints.length > 0 ? (matchedPoints / idealPoints.length) : 0.7;
    const wordCount = userAnswer.trim().split(/\s+/).length;

    const technicalDepth = Math.min(98, Math.max(50, Math.round(matchRatio * 85) + (wordCount > 50 ? 12 : 5)));
    const problemSolving = Math.min(96, Math.max(55, Math.round(matchRatio * 80) + (userLower.includes('because') || userLower.includes('trade-off') || userLower.includes('complexity') ? 14 : 4)));
    const communicationScore = Math.min(96, Math.max(60, Math.round(Math.min(100, wordCount * 1.4))));
    const resumeAlignment = Math.min(95, Math.max(65, userLower.includes('project') || userLower.includes('built') || userLower.includes('implemented') ? 90 : 75));
    const confidenceScore = Math.min(95, Math.max(60, technicalDepth + 2));
    const hrScore = Math.min(95, Math.max(65, communicationScore - 2));

    const overallScore = Math.round(
      (technicalDepth * 0.35) + 
      (problemSolving * 0.25) + 
      (communicationScore * 0.20) + 
      (confidenceScore * 0.10) + 
      (resumeAlignment * 0.10)
    );

    let hireVerdict = "Strong Hire (90 - 100)";
    let hireBadgeClass = "bg-emerald-950 text-emerald-300 border-emerald-500/40";

    if (overallScore < 70) {
      hireVerdict = "Needs Practice (<70)";
      hireBadgeClass = "bg-rose-950 text-rose-300 border-rose-500/40";
    } else if (overallScore < 80) {
      hireVerdict = "Leaning Hire (70 - 79)";
      hireBadgeClass = "bg-amber-950 text-amber-300 border-amber-500/40";
    } else if (overallScore < 90) {
      hireVerdict = "Hire (80 - 89)";
      hireBadgeClass = "bg-indigo-950 text-indigo-300 border-indigo-500/40";
    }

    const strengths = [];
    if (technicalDepth >= 80) strengths.push("Strong domain terminology & technical depth");
    if (problemSolving >= 80) strengths.push("Demonstrated systematic analytical approach");
    if (wordCount >= 40) strengths.push("Thorough and detailed articulation");

    const weaknesses = [];
    if (matchRatio < 0.6) weaknesses.push("Missed key industry keywords and edge cases");
    if (wordCount < 30) weaknesses.push("Response is too concise for a senior-level technical round");

    const nextSteps = [
      "Review the AI-transformed model answer below.",
      "Practice speaking this answer out loud in under 90 seconds."
    ];

    const speechTelemetry = isVoice ? analyzeSpeechTelemetry(userAnswer, durationSec) : null;

    return {
      overallScore,
      technicalDepth,
      problemSolving,
      communicationScore,
      resumeAlignment,
      confidenceScore,
      hrScore,
      hireVerdict,
      hireBadgeClass,
      feedback: overallScore >= 80
        ? "Excellent response! Clear technical depth with strong structure and domain precision."
        : "Good foundation. Deepen your explanation of edge cases, complexity, and concrete project impact.",
      strengths: strengths.length > 0 ? strengths : ["Clear foundational understanding"],
      weaknesses: weaknesses.length > 0 ? weaknesses : ["Minor edge-case omission"],
      nextSteps,
      idealPoints,
      speechTelemetry
    };
  }

  // =========================================================================
  // 11. EXPORTS TO GLOBAL SCOPE
  // =========================================================================
  const MockInterviewEngine = {
    COMPANY_TRACKS,
    STUDENT_YEAR_TRACKS,
    QUESTION_BANK,
    CODING_ARENA_PROBLEMS,
    generateResumeBasedQuestions,
    generateAdaptiveFollowUp,
    analyzeSpeechTelemetry,
    transformAnswerWithAI,
    getAIInterviewTwinProfile,
    saveAIInterviewTwinProfile,
    generate7DayLearningRoadmap,
    evaluateComprehensiveAnswer
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockInterviewEngine;
  } else {
    root.MockInterviewEngine = MockInterviewEngine;
    root.CampusPilotServices = root.CampusPilotServices || {};
    root.CampusPilotServices.MockInterviewEngine = MockInterviewEngine;
    root.CampusPilotServices.INTERVIEW_ROLES = COMPANY_TRACKS.map(c => ({
      roleId: c.id,
      title: `${c.name} Software Track`,
      targetCompany: c.name,
      questions: c.sampleQuestions
    }));
    root.CampusPilotServices.evaluateAnswer = evaluateComprehensiveAnswer;
  }

})(typeof window !== 'undefined' ? window : this);
