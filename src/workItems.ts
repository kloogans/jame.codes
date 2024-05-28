const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://jame.codes"

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
