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
      "little builds offers a simple, secure, and intuitive way to buy and sell verified digital assets like web sites, mobile apps, and domains. for transactions ranging from $10 to $100,000, little builds offers an escrow service (via <strong>escrow.com</strong api) for the most secure experience for transferring web asset ownership. Stripe and Paypal are also offered for transactions up to $10,000. <br /><br /><br /> the platform is being built from the ground up with the ultimate user experience being kept in mind at every step of the way. i am currently on track to launch little builds in late 2022!",
    url: "https://littlebuilds.io",
    stack: [
      "typescript",
      "react",
      "nextjs",
      "websockets",
      "mongodb",
      "tailwindcss"
    ]
  },
  {
    title: "mepage",
    logo: `${url}/mepage-kevin-icon.svg`,
    image: "",
    description:
      "mepage is a link-in-bio webapp that allows users to create highly customized pages with several different types of links that offer unique functionality. users can easily create a personalized landing page and organize digital life under one umbrella.<br /><br />this was my first foray into building an entire fullstack SaaS business from scratch to acquirement. i was able to learn a TON about the SaaS development process, and how to effectively communicate with clients and users to both solve problems and enhance the overall experience.",
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
      "twitter",
      "mongodb",
      "tailwindcss",
      "progressive web app"
    ]
  },
  {
    title: "movie colors bot",
    logo: `${url}/movie-color-bot-logo.svg`,
    image: "",
    description:
      "movie colors bot is a (now retired) autonomous twitter bot that tweets the color palettes of film posters. it uses the movie db api to fetch a random movie poster and then uses canvase to build a viewable color palette.",
    url: "https://github.com/jamesfromonline/movie-colors-bot",
    stack: ["node", "canvas", "twitter api", "google sheets api"]
  }
]
