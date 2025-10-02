use plp_bookstore

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 10.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 7.99,
    in_stock: true,
    pages: 281,
    publisher: "J. B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 8.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 5.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton"
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 9.99,
    in_stock: true,
    pages: 234,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 11.99,
    in_stock: false,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    published_year: 1953,
    price: 6.99,
    in_stock: true,
    pages: 158,
    publisher: "Ballantine Books"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    published_year: 2003,
    price: 12.99,
    in_stock: true,
    pages: 689,
    publisher: "Doubleday"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    published_year: 2011,
    price: 15.99,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    published_year: 2018,
    price: 14.99,
    in_stock: false,
    pages: 334,
    publisher: "Random House"
  }
])