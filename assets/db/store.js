const menu = [
    { id: 'home', label: 'Home', number: '00' },
    { id: 'about', label: 'About', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'capabilities', label: 'Capabilities', number: '03' },
    { id: 'personal', label: 'Personal', number: '04' },
    { id: 'projects', label: 'Projects', number: '05' },
    { id: 'notes', label: 'Notes', number: '06' },
    { id: 'contact', label: 'Contact', number: '07' }
];

const experience = [
    {
        role: 'Data Engineer / Backend Developer',
        org: 'Part Financial Information Processing',
        date: 'Apr 2022 — Jul 2026',
        location: 'Mashhad, Iran',
        summary: 'Built backend and data infrastructure for high-volume financial systems while bringing AI-assisted workflows into production engineering.',
        highlights: [
            'Applied RAG and LLM integration patterns to backend services for intelligent search, summarisation, and data enrichment.',
            'Used Claude Code, OpenRouter, Google AI Studio, and n8n to accelerate delivery and automate data workflows.',
            'Designed backend services and APIs with Node.js, TypeScript, and Express; architected distributed systems with Redis-backed messaging and microservices.',
            'Led technical design and implemented a Design System to unify frontend components across teams.',
            'Optimised PostgreSQL performance, caching, and complex SQL for real-time applications.',
            'Ranked #1 in the company’s internal bootcamp.'
        ],
        tags: ['RAG', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Distributed systems']
    },
    {
        role: 'Software Developer',
        org: 'Personal Projects & Freelance',
        date: 'Mar 2020 — Jun 2022',
        location: 'Remote / Independent',
        summary: 'Built full-stack products and the engineering habits that later became the foundation for backend and AI work.',
        highlights: [
            'Built full-stack applications with Node.js, JavaScript, and modern frontend frameworks.',
            'Implemented unit and integration tests to improve code coverage and system reliability.',
            'Worked with Agile delivery, CI/CD pipelines, and Git.'
        ],
        tags: ['JavaScript', 'Node.js', 'Testing', 'CI/CD', 'Git']
    }
];

const capabilities = [
    {
        index: 'A', title: 'AI Engineering', accent: 'violet',
        lead: 'Turn language models into useful systems, not demos.',
        items: ['RAG pipelines', 'LLM integration', 'Vector databases', 'Embeddings', 'Semantic search', 'Prompt engineering', 'AI agents', 'Agentic workflows', 'n8n', 'Claude Code', 'OpenRouter', 'Google AI Studio']
    },
    {
        index: 'B', title: 'Backend Architecture', accent: 'blue',
        lead: 'Design the service layer for load, change, and failure.',
        items: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'Python', 'REST', 'GraphQL', 'Socket.io', 'Microservices', 'Distributed systems', 'Design patterns', 'Clean code']
    },
    {
        index: 'C', title: 'Data & Performance', accent: 'green',
        lead: 'Move fast by making the data model and query plan explicit.',
        items: ['PostgreSQL', 'Advanced SQL', 'Indexing', 'Redis', 'Elasticsearch', 'Data pipelines', 'Caching', 'Performance optimisation']
    },
    {
        index: 'D', title: 'Markets & Automation', accent: 'amber',
        lead: 'Build trading tooling with rules, risk, and repeatability.',
        items: ['MQL4 / MQL5', 'Python', 'Price action', 'Backtesting', 'Bot development', 'Risk management', 'Staged exits', 'Trailing stops', 'DCA']
    },
    {
        index: 'E', title: 'Infrastructure', accent: 'slate',
        lead: 'Keep the engineering surface boring and dependable.',
        items: ['Docker', 'Linux', 'Git', 'CI/CD', 'Jenkins', 'Unit testing', 'Agile']
    }
];

const projects = [
    {
        code: 'RAG / 01', title: 'Knowledge Retrieval Lab',
        description: 'Experiments around document ingestion, chunking, embeddings, vector search, retrieval tuning, and LLM answer generation.',
        stack: ['RAG', 'Embeddings', 'Vector search', 'LLM'],
        meta: 'AI systems'
    },
    {
        code: 'TRD / 02', title: 'Algorithmic Trading Bots',
        description: 'Automated execution experiments using MQL4/MQL5 and Python for price-action and indicator-based strategies with backtesting.',
        stack: ['MQL4/MQL5', 'Python', 'Backtesting'],
        meta: 'Markets'
    },
    {
        code: 'RISK / 03', title: 'Risk Automation Toolkit',
        description: 'Tools for staged entries and exits, trailing stops, and dollar-cost averaging with a focus on repeatable rule-based execution.',
        stack: ['Risk rules', 'Automation', 'Python'],
        meta: 'Trading systems'
    },
    {
        code: 'DATA / 04', title: 'Agentic Market Pipelines',
        description: 'Data pipelines for market analysis using agentic tools and n8n, connecting collection, transformation, and downstream analysis.',
        stack: ['n8n', 'Agents', 'Data pipelines'],
        meta: 'Data engineering'
    }
];

const posts = [
    { id: 1, category: 'ai', label: 'AI', title: 'RAG is a data pipeline wearing an LLM costume.', content: 'The reliability of a retrieval system lives upstream: ingestion, chunking, metadata, embeddings, ranking, and evaluation.', date: 'Lab note · 2026' },
    { id: 2, category: 'systems', label: 'SYSTEMS', title: 'Backend architecture starts with boundaries.', content: 'Microservices are useful when the seams reflect real ownership, failure domains, and change frequency — not because the diagram looks sophisticated.', date: 'Architecture note · 2026' },
    { id: 3, category: 'markets', label: 'MARKETS', title: 'Trading automation is mostly risk automation.', content: 'Execution rules matter, but the boring details — sizing, staged exits, stop logic, backtests — are what make a strategy reproducible.', date: 'Market note · 2026' },
    { id: 4, category: 'ai', label: 'AI', title: 'AI-assisted development should leave the codebase better.', content: 'Tools like Claude Code, OpenRouter, and agentic workflows are most valuable when they shorten feedback loops without weakening architecture or tests.', date: 'Dev note · 2026' }
];


const personal = {
    education: 'B.Sc. in Computer Engineering · Sadjad University of Technology · 2019 — 2022',
    languages: ['Persian · Native', 'English · Professional (technical)'],
    status: 'Military service · project-based assignment · 1 month remaining (resume snapshot)',
    interests: [
        { label: 'Anime & cinema', items: ['Anime', 'Cinema (occasionally)'] },
        { label: 'Gaming', items: ['Dota 2', 'CS2', 'Warcraft', 'Sekiro', 'Elden Ring'] },
        { label: 'Music', items: ['Piano', 'Classical', 'Soundtracks'] },
        { label: 'Lifestyle', items: ['Coffee', 'Walking', 'Podcasts (sometimes)'] }
    ]
};

const profile = {
    name: 'Ali Irvani',
    title: 'AI Engineer · Backend & Data',
    email: 'irvaniali79@gmail.com',
    github: 'https://github.com/irvaniali79',
    linkedin: 'https://www.linkedin.com/in/ali-irvani-02b3151bb/',
    location: 'Mashhad, Iran',
    education: 'B.Sc. in Computer Engineering · Sadjad University of Technology · 2019 — 2022',
    languages: ['Persian · Native', 'English · Professional (technical)']
};

export { menu, experience, capabilities, projects, posts, profile, personal };
