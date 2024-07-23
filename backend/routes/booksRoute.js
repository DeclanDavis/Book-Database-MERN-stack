import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route to Create a new Book - CREATE
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, description',
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            description: request.body.description,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route to Get All Books from database - RETRIEVE
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,    // Sending back the number of books
            data: books             // The data
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get One Book from database by Id - RETRIEVE
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params; 
        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to Update a Book -- UPDATE
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear || 
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, description',
            });
         }

         const { id } = request.params;

         const result = await Book.findByIdAndUpdate(id, request.body);

         if(!result) {
            return response.status(404).json({ message: 'Book not found' });
         }
         return response.status(200).send({message: 'Book updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Delete a book
router.delete('/:id', async (request, response) =>{
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted succesfully '});
        
    } catch (error) {
       console.log(error.message);
       response.status(500).send({ message: error.message }); 
    }
});


export default router;