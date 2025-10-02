# PLP Bookstore MongoDB Setup

This repository contains scripts for setting up a MongoDB database for the PLP Bookstore, inserting sample data, and performing various queries.

## Prerequisites
- MongoDB installed locally or a MongoDB Atlas cluster set up.
- MongoDB Shell (mongosh) installed.

## Setup Instructions
1. Connect to your MongoDB instance using mongosh:

2. Run the insert script to populate the database:
- Copy and paste the contents of `insert_books.js` into the mongosh prompt, or run:
- This creates the `plp_bookstore` database and inserts 10 books into the `books` collection.

3. Run the queries:
- Copy and paste the contents of `queries.js` into the mongosh prompt, or run:
- This executes all CRUD operations, advanced queries, aggregation pipelines, and indexing commands.

## Sample Data
The `insert_books.js` script inserts 10 books with various genres, authors, and publication years. You can view the collection in MongoDB Compass or Atlas.

