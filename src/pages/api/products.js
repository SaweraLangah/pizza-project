export default function handler (req, res) {
    const products = [
    {
        id: 1,
        name: "Cheezy Pizza",
        price: 100,
        image: "/images/Pizza7.jpeg"
    },

    {
        id: 2,
        name: "Hearty Pizza ",
        price: 200,
        image: "/images/Pizza8.jpeg"
    },

    {
        id: 3,
        name: "Tikka Pizza ",
        price: 350,
        image: "/images/Pizza4.jpeg"
    },

    {
        id: 4,
        name: "Hot Bites",
        price: 450,
        image: "/images/download (6).jpg"
    },

    {
        id: 5,
        name: "Fajita Pizza",
        price: 550,
        image: "/images/download.jpg"
    },

    {
        id: 6,
        name: "Spicy Pizza",
        price: 650,
        image: "/images/Pizza2.jpeg"
    },
];

res.status(200).json(products);
}