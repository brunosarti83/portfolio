
export const projects = [
    {
        name: "RODAR-RENT (Car Rental Co.)",
        description:
        "This was the final project required to graduate from HENRY bootcamp, it was a group project ment to simulate work environment, conducted in 3 sprints over the course of one month.",
        techs: {
        Backend: "PostgreSQL, Node, Express, Sequelize",
        Frontend: "React, Tailwind",
        },
        features: [
        "Handles vehicles availability for specific dates and locations",
        "Backend Filtering",
        "Performs all CRUD operations",
        "GoogleAuth using Passport",
        "Nodemailer",
        "Payment through Mercado Pago (Mercado Libre)",
        "Dark theme",
        "Admin Dashboard",
        "Persistence through LocalStorage and SessionStorage",
        ],
        images: [
        {
            name: "landing",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729935/p0yz3hjbs747vmv78pvc.png",
        },
        {
            name: "login",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729969/qdbo0mht13mp1uioj0uj.png",
        },
        {
            name: "adminNewVehicle",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729606/czxs8mgml4iiftkydehx.png",
        },
        {
            name: "bookings",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729664/bxytjlmxcrbl5h3i14sc.png",
        },
        // {
        //     name: "contact",
        //     url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729710/cv5k5b45viewxnrm2fm5.png",
        // },
        {
            name: "detail",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729764/vewz8z4vfcgo9evqgqzz.png",
        },
        {
            name: "detailDark",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729802/odmemwgj1r7o9s8dyed6.png",
        },
        {
            name: "editInfo",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729846/f6q2dlmw6gmxzqktuj4a.png",
        },
        {
            name: "adminDashboard",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729456/jyju0kpfqtqkekedm2v5.png",
        },
        {
            name: "filterDark",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729887/xzmvow9clkohma7tukbj.png",
        },
        {
            name: "main",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699730005/qmtyaboiky7egtzobtfc.png",
        },
        {
            name: "reserveDeal",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699730040/pabnlbbvwsgqolkojkei.png",
        },
        ],
        deploy: "https://rodarrent.vercel.app/",
        repository: "https://github.com/brunosarti83/RodarRent-backend",
    },
    {
        name: "POKEMON-APP (PokeAPI)",
        description:
        "This was an academic individual project to refactor certain endpoints of the Pokemon API available at https://pokeapi.co in order to generate your own RestAPI as well as a complete frontend app.",
        techs: {
        Backend: "PostgreSQL, Node, Express, Sequelize",
        Frontend: "React, CSS Modules",
        },
        features: [
        "All CRUD operations",
        "Redux",
        "Pagination",
        "Search",
        "Forms with JS fields validation",
        "Upload user images to Cloudinary storage"
        ],
        images: [
        {
            name: "landing",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729456/rhri0tbahdxt1iqprgtk.webp",
        },
        {
            name: "hero",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729606/pdfq0fa2phq25b8tyymz.webp",
        },
        {
            name: "cards",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729664/f9htjpsxmuutxriusudt.webp",
        },
        {
            name: "filter",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729764/aycnana52ib8sii4tuuo.webp",
        },
        {
            name: "details",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729802/ndgsftatrdtz4p0vzjzc.webp",
        },
        {
            name: "create",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729846/uq5baaleouhcdkzqk3vt.webp",
        },
        ],
        deploy: "https://pokemonapp-eight.vercel.app/",
        repository: "https://github.com/brunosarti83/pokemonapp",
    },
];

export const bots = {
    backtesting: {
        description: [
            'Downloads historical data of multiple tokens and formats it using Pandas, then saves all the data into an sqlite database.',
            'Specific strategies can be manually created and exported in order to provide the backtester with entry and exit signals.',
            'Allows for multiple settings: time_interval, position_size, trailing or fixed stops, take_profit, commissions, and many more; as well as strategy specific settings such as moving_avg length, stop size, etc... all settings are provided as lists containing one or more values... all combinations of every value will be tested on execution and treated as a separate set of results.',
            'All testing is run using multiprocessing in order to reduce time expenditure.',
            'Once all tests are done results are compared and saved on a spreadsheet with graphs.',
            'Can execute walk_forward testing (meaning it combines periods of “historical” testing to select parameters to then “forward_test” what would be a period of “real_time” implementation, finally it presents all the “real_time” periods together as a single stream of results lowering the effect of curve fitting on the tests). '
        ],
        repository: 'https://github.com/brunosarti83/backtester_X_crypto'
    },
    entry1bot: {
        description: [
            'Trades Crypto futures.',
            'Trades volatility breakouts.',
            'Makes all trading decissions on candle close, buys or sells at next candles open price.',
            'Logs all operations.',
            'Informs prices, trades and results via Telegram chatbot.'
        ],
        repository: 'https://github.com/brunosarti83/entry1bot'
    },
    barhlbot: {
        description: [
            'Trades Crypto futures.',
            'Trades in the direction of the trend when extension occurs in the opposite direction.',
            'Receives price quotes on real time through websockets, allowing for trading decisions to be made at any moment.',
            'Logs all operations and saves them on spreadsheet.',
            'Informs prices, trades and results via Telegram chatbot.'
        ],
        repository: 'https://github.com/brunosarti83/3barhlbot'
    },
    momentumbot: {
        description: [
            'Trades Crypto futures.',
            'Trades simple price breakouts.',
            'Receives price quotes on real time through websockets, allowing for trading decisions to be made at any moment.',
            'Handles a portfolio of multiple tokens.',
            'Makes use of multithreading to take multiple trades simultaneously.',
            'Logs all operations and saves them on spreadsheet.',
            'Informs prices, trades and results via Telegram chatbot.'
        ],
        repository: 'https://github.com/brunosarti83/momentumbot'
    }
}

export const questions = {
    skills: ["React", "Node", "Typescript", "CSS / Styling", "Databases"],
    not: ["Angular", ".NET", "Mobile"]
}

export const socialMedia = {
    linkedin: "https://www.linkedin.com/in/brunosarti83/",
    github: "https://github.com/brunosarti83",
}

export const aboutText = [
    "Hi, i’m a recently graduated Fullstack",
    "developer from Argentina. 💻 🧉",  
    "/",
    "Welcome to my portfolio, it is an ever",
    "evolving work in progress which i keep",
    "updating as i find new projects and new",
    "technologies that interest me.", 
    "/",
    "Currently skilled in React and Node.js,", 
    "I am regularly using tech such as:", 
    " Express | Sequelize | Mongoose",
    " Passport | Nodemailer",
    " Redux | Tailwind | CSS | HTML",
    " and SQL as well as NoSql databases.", 
    "/",
    "Having a background of over 15 years", 
    "in the advertising industry, i have", 
    "experience using design software such",
    "as Adobe Illustrator some years ago", 
    "and now love using Figma for designs",
    "and wireframes.",  
    "/",
    "You will find each project here has", 
    "links to it’s deployed site as well as",
    "to it’s  Github repository, please",
    "look around and know that", 
    "any feedback is very much",
    "appreciated.",
    "/",
    " --"
]

