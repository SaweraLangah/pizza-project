export default function handler (req, res) {
    const products = [
    {
        id: 1,
        name: "Cheezy Pizza",
        price: 100,
        image: "/images/WhatsApp Image 2025-01-01 at 3.23.42 AM (2).jpeg"
    },

    {
        id: 2,
        name: "Hearty Pizza ",
        price: 200,
        image: "/images/WhatsApp Image 2025-01-01 at 3.23.42 AM.jpeg"
    },

    {
        id: 3,
        name: "Tikka Pizza ",
        price: 350,
        image: "/images/WhatsApp Image 2024-12-31 at 6.37.41 AM.jpeg"
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
        image: "/images/WhatsApp Image 2025-01-01 at 3.23.42 AM (2).jpeg"
    },
];

res.status(200).json(products);
}