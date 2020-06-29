import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const port = 3001;

const app = new Application();

app.static('/', './public')

app.get('/', async (ctx: Context) => {
  await ctx.file('public/index.html');
});

app
  .get('/books', async (ctx: Context) => ctx.string('getting all books...'))
  .get('/books/:id', async(ctx: Context) => ctx.string('getting a single book...'))
  .post('/books', async(ctx: Context) => ctx.string('Adding a book...'))
  .put('/books/:id', async (ctx: Context) => ctx.string('Updating a book...'))
  .delete('/books/:id', async (ctx: Context) => ctx.string('Updating a book...'))

app.start({ port });
console.log(`listening on port ${port}`);
