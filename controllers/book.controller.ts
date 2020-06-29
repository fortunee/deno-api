import { Context } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts';
import { Book } from '../models/book.model.ts';

let books: Book[] = [
  { id: 1, title: 'Clean Code', author: 'Uncle Bob', numOfPages: 500 },
  {
    id: 2,
    title: 'On Writing Well',
    author: 'William Zinsser',
    numOfPages: 290,
  },
  {
    id: 3,
    title: 'The Good & Beautiful God',
    author: 'James Bryan Smith',
    numOfPages: 430,
  },
];

export const getBooks = async (ctx: Context) => ctx.json(books, 200);

export const getBook = async (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);

  if (book) {
    return ctx.json(book, 200);
  }

  return ctx.json({ msg: 'Book not found' }, 404);
};

export const createBook = async (ctx: Context) => {
  const { title, numOfPages } = await ctx.body();
  const id = 'some random generated id';

  // @todo perform some data validations :wink:
  const book = { id, title, numOfPages };
  return ctx.json(book, 201);
};

export const updateBook = async (ctx: Context) => {
  const { id } = ctx.params;
  const { title, numOfPages } = await ctx.body();

  const book = books.find((b: Book) => (b.id = id));
  if (!book) {
    return ctx.json({ msg: 'Book not found!' }, 404);
  }

  book.title = title ?? book.title;
  book.numOfPages = numOfPages ?? book.numOfPages;
  return ctx.json(book, 200);
};

export const deleteBook = async (ctx: Context) => {
  const { id } = ctx.params;
  books = books.filter((b: Book) => b.id !== id);
  return ctx.json(books, 200);
};
