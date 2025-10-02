// Task 2: Basic CRUD Operations

// Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author (e.g., F. Scott Fitzgerald)
db.books.find({ author: "F. Scott Fitzgerald" })

// Update the price of a specific book (e.g., The Great Gatsby)
db.books.updateOne({ title: "The Great Gatsby" }, { $set: { price: 12.99 } })

// Delete a book by its title (e.g., Educated)
db.books.deleteOne({ title: "Educated" })

// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Use projection to return only title, author, and price (example with Fiction genre)
db.books.find({ genre: "Fiction" }, { title: 1, author: 1, price: 1, _id: 0 })

// Sorting by price ascending
db.books.find().sort({ price: 1 })

// Sorting by price descending
db.books.find().sort({ price: -1 })

// Pagination: Page 1 (first 5 books)
db.books.find().skip(0).limit(5)

// Pagination: Page 2 (next 5 books)
db.books.find().skip(5).limit(5)

// Task 4: Aggregation Pipeline

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by publication decade and count them
db.books.aggregate([
  { $group: { _id: { $floor: { $divide: ["$published_year", 10] } }, count: { $sum: 1 } } },
  { $project: { decade: { $concat: [{ $toString: { $multiply: ["$_id", 10] } }, "s"] }, count: 1, _id: 0 } }
])

// Task 5: Indexing

// Create an index on the title field
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Use explain() to demonstrate performance (example query on title without/with index)
db.books.find({ title: "The Great Gatsby" }).explain("executionStats")