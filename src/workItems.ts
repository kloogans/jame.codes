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
      "little builds offers a simple, secure, and intuitive way to buy and sell verified digital assets like web sites, mobile apps, and domains. for transactions ranging from $10 to $100,000, little builds offers an escrow service (via <strong>escrow.com</strong api) for the most secure experience for transferring web asset ownership. stripe and paypal are also offered for transactions up to $10,000. <br /><br /><br /> the platform is being built from the ground up with the ultimate user experience being kept in mind at every step of the way. i am currently hoping to launch little builds in q2 of 2023!",
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
      "tailwindcss"
    ]
  },
  {
    title: "bulk buddy",
    logo: `${url}/bulkbuddy-logo.svg`,
    image: "",
    description:
      "bulk buddy was my solution for not having to pay $30 a month for a basic hypertrophy tracking app. it is a progressive web app that allows users to track their workouts, bodyweight, and body measurements. it also has a built-in 1rm calculator and (coming soon) personalized AI suggestions. <br /><br />i built bulk buddy from scratch using nextjs, typescript, mongodb, and tailwindcss. ",
    url: "https://bulkbuddy.app",
    stack: [
      "nextjs",
      "react",
      "node",
      "mongodb",
      "tailwindcss",
      "progressive web app"
    ]
  },
  {
    title: "food things",
    logo: `${url}/foodthings-logo.svg`,
    image: "",
    description:
      "food things is a web store for multiple large twitter accounts that i also run - <a style='color:#fae500;' href='https://twitter.com/fuckedupfoods' target='_blank' rel='noreferrer noopener'>f*cked up foods</a> and <a style='color:#fae500;' href='https://twitter.com/fuckedupcars' target='_blank' rel='noreferrer noopener'>f*cked up cars</a>. it is a headless print-on-demand store built from scratch using nextjs, typescript, snipcart and printful apis, and tailwindcss. it uses snipcart/paypal to process payments and printful to handle order fulfillment. <br /><br />i also created all of the designs myself!",
    url: "https://foodthings.shop",
    stack: [
      "headless cms",
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "snipcart",
      "printful",
      "apis"
    ]
  },
  {
    title: "mepage",
    logo: `${url}/mepage-kevin-icon.svg`,
    image: "",
    description:
      "mepage (acquired in 2022) is a link-in-bio webapp that allows users to create highly customized pages with several different types of links that offer unique functionality. users can easily create a personalized landing page and organize digital life under one umbrella.<br /><br />this was my first foray into building an entire full-stack saas business from scratch to acquirement. i was able to learn a ton about the saas development process, and how to effectively communicate with users to both solve problems and enhance the overall user experience.<br /><br />mepage was acquired in 2022 and i no longer maintain it.",
    url: "https://mepage.is",
    stack: [
      "react",
      "nextjs",
      "graphql",
      "apollo",
      "node",
      "mongodb",
      "tailwindcss"
    ]
  }
]
