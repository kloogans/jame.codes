const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://kloogans.com"

export const workItems = [
  {
    title: "little builds",
    logo: `${url}/littlebuilds-logo-icon.svg`,
    image: "",
    description:
      "little builds offers a simple, secure, and intuitive way to buy and sell verified digital assets like web sites, mobile apps, and domains. for transactions ranging from $10 to $100,000, little builds employs an escrow service (via <strong>escrow.com</strong> api) for the most secure experience for transferring web asset ownership. stripe and paypal are also offered for transactions up to $10,000. <br /><br /><br /> the platform is currently in development, and I am hoping to launch a beta version in late 2024. i am building it from scratch using nextjs, typescript, prisma, postgresql, trpc, nextauth, websockets, and tailwindcss. <br /><br />i am also designing the entire platform myself.",
    url: "https://littlebuilds.co",
    stack: [
      "typescript",
      "react",
      "nextjs",
      "prisma",
      "postgresql",
      "trpc",
      "nextauth",
      "websockets",
      "tailwindcss",
      "vercel"
    ]
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
      "vercel"
    ]
  },
  {
    title: "food things",
    logo: `${url}/foodthings-logo.svg`,
    image: "",
    description:
      "food things is a web store for a large twitter account that i grew to 1.1 million followers - <a style='color:#fae500;' href='https://twitter.com/messedupfoods' target='_blank' rel='noreferrer noopener'>messed up foods</a>. it is a headless print-on-demand store built from scratch using nextjs, typescript, snipcart and printful apis, and tailwindcss. it uses snipcart/paypal to process payments and printful to handle order fulfillment. <br /><br />i also created all of the designs myself!",
    url: "https://foodthings.net",
    stack: [
      "headless cms",
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "snipcart",
      "printful",
      "apis",
      "netlify"
    ]
  },
  {
    title: "mepage",
    logo: `${url}/mepage-kevin-icon.svg`,
    image: "",
    description:
      "mepage (acquired and shut down in 2022) is a link-in-bio webapp that allows users to create highly customized pages with several different types of links that offer unique functionality. users can easily create a personalized landing page and organize digital life under one umbrella.<br /><br />this was my first foray into building an entire full-stack saas business from scratch to acquirement. i was able to learn a ton about the saas development process, and how to effectively communicate with users to both solve problems and enhance the overall user experience.<br /><br />mepage was acquired and retired in 2022 and i no longer maintain it.",
    url: "https://mepage.is",
    stack: [
      "react",
      "nextjs",
      "graphql",
      "apollo",
      "node",
      "mongodb",
      "tailwindcss",
      "netlify"
    ]
  }
]
