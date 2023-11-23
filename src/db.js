
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
            name: "adminDashboard",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729456/jyju0kpfqtqkekedm2v5.png",
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
            name: "filterDark",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729887/xzmvow9clkohma7tukbj.png",
        },
        {
            name: "landing",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729935/p0yz3hjbs747vmv78pvc.png",
        },
        {
            name: "login",
            url: "https://res.cloudinary.com/daiztctac/image/upload/v1699729969/qdbo0mht13mp1uioj0uj.png",
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

export const questions = {
    skills: ["React", "Node", "Typescript", "CSS / Styling", "Databases"],
    not: ["Angular", ".NET", "Mobile"]
}

export const socialMedia = {
    linkedin: "https://www.linkedin.com/in/brunosarti83/",
    github: "https://github.com/brunosarti83",
}

export const api_token = '883ee7e3220291e91f461c5f64da32f6c29bbde9'
