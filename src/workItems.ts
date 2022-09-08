const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://jame.tech"

export const workItems = [
  {
    title: "little builds",
    logo: `${url}/littlebuilds-logo-icon.svg`,
    image: "",
    description:
      "little builds offers a simple, secure, and intuitive way to buy and sell verified digital assets like web sites, mobile apps, and domains. for transactions ranging from $10 to $100,000, little builds offers an escrow service (via <strong>escrow.com</strong api) for the most secure experience for transferring web asset ownership. stripe and paypal are also offered for transactions up to $10,000. <br /><br /><br /> the platform is being built from the ground up with the ultimate user experience being kept in mind at every step of the way. i am currently hoping to launch little builds in q2 of 2023!",
    url: "https://littlebuilds.io",
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
    title: "drafty",
    logo: `${url}/drafty-icon.svg`,
    image: "",
    description:
      "twitter drafts are an incredibly nifty feature, but if you frequently switch between devices like me, your drafts don't carry over between them. drafty was created to solve this problem by having a central place to write, store, and tweet your ideas. <br /><br />drafty is a full-stack web app built with nextjs, typescript, mongodb, and tailwindcss. ",
    url: "https://drafty.cc",
    stack: [
      "nextjs",
      "react",
      "node",
      "twitter api",
      "mongodb",
      "tailwindcss",
      "progressive web app"
    ]
  },
  {
    title: "f*cked up shop",
    logo: `${url}/fu-icon.png`,
    image: "",
    description:
      "the shop is a web store for multiple large twitter accounts that i also run - <a style='color:#fae500;' href='https://twitter.com/fuckedupfoods' target='_blank' rel='noreferrer noopener'>f*cked up foods</a> and <a style='color:#fae500;' href='https://twitter.com/fuckedupcars' target='_blank' rel='noreferrer noopener'>f*cked up cars</a>. it is a headless print-on-demand store built from scratch using nextjs, typescript, snipcart and printful apis, and tailwindcss. it uses snipcart/paypal to process payments and printful to handle order fulfillment. <br /><br />i also created all of the designs myself!",
    url: "https://fuckedup.shop",
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
      "mepage (acquired in q2 of 2022) is a link-in-bio webapp that allows users to create highly customized pages with several different types of links that offer unique functionality. users can easily create a personalized landing page and organize digital life under one umbrella.<br /><br />this was my first foray into building an entire full-stack saas business from scratch to acquirement. i was able to learn a ton about the saas development process, and how to effectively communicate with users to both solve problems and enhance the overall user experience.<br /><br />mepage was acquired in q2 of 2022 by a private buyer and i no longer maintain it.",
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
