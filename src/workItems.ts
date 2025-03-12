const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://jame.codes";

export const workItems = [
  {
    title: "lawn care quote pro",
    logo: `${url}/lcqp-icon-large.png`,
    image: "",
    description:
      "lawn care quote pro is a b2b web app that empowers lawn care businesses with instant, customizable quoting solutions. companies can streamline their quoting process, enhance client engagement, and boost their business efficiency with automated estimate generation. perfect for small to large lawn care providers looking to simplify client interactions and grow their business. <br /><br />i built lawn care quote pro from scratch using nextjs, typescript, mongodb, nextauth, and tailwindcss.",
    url: "https://lawncarequote.pro",
    stack: [
      "typescript",
      "react",
      "nextjs",
      "mongodb",
      "nextauth",
      "stripe",
      "tailwindcss",
      "vercel",
    ],
  },
  {
    title: "bulk buddy",
    logo: `${url}/bulkbuddy-logo.svg`,
    image: "",
    description:
      "bulk buddy was my solution for wanting a minimal gym progress tracking app that doesn't cost $30 per month. it is a progressive web app that allows users to track their workouts, bodyweight, and lifting progress. it also uses openai's chat gpt to help create workout plans based on a user's weight, goals, and preferences. <br /><br />i built bulk buddy from scratch using nextjs, typescript, mongodb, and tailwindcss.",
    url: "https://bulkbuddy.app",
    stack: [
      "nextjs",
      "react",
      "node",
      "mongodb",
      "tailwindcss",
      "progressive web app",
      "vercel",
    ],
  },
  {
    title: "what's my tdee?",
    logo: null,
    image: "",
    description:
      "what's my tdee? is a web app that helps users discover their total daily energy expenditure (tdee) with an advanced calculator. users can calculate their tdee, ideal weight, maximum muscular potential, recommended macro-nutrient ratios, and more with this simple tool. <br /><br />i built what's my tdee? from scratch using nextjs, typescript, and tailwindcss.",
    url: "https://whatsmytdee.com",
    stack: ["nextjs", "react", "typescript", "tailwindcss", "vercel", "seo"],
  },
  {
    title: "mepage",
    logo: `${url}/mepage-kevin-icon.svg`,
    image: "",
    description:
      "mepage (acquired and shut down in 2022) is a link-in-bio webapp that allows users to create highly customized pages with several different types of links that offer unique functionality. users can easily create a personalized landing page and organize digital life under one umbrella.<br /><br />this was my first foray into building an entire full-stack saas business from scratch to acquirement. i was able to learn a ton about the saas development process, and how to effectively communicate with users to both solve problems and enhance the overall user experience.<br /><br />mepage was acquired in 2022 and is no longer maintained.",
    url: "https://mepage.is",
    stack: [
      "react",
      "nextjs",
      "graphql",
      "apollo",
      "node",
      "mongodb",
      "tailwindcss",
      "netlify",
    ],
  },
];
