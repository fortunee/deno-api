import {
  Application,
  Context,
} from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts';
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from './controllers/book.controller.ts';

const port = 3001;

const app = new Application();

app.static('/', './public');

app.get('/', async (ctx: Context) => {
  await ctx.file('public/index.html');
});

app
  .get('/books', getBooks)
  .get('/books/:id', getBook)
  .post('/books', createBook)
  .put('/books/:id', updateBook)
  .delete('/books/:id', deleteBook)
  .start({ port });

console.log(`listening on port ${port}`);
