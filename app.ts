import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const port = 3001;

const app = new Application();

app.get('/', async (ctx: Context) => {
  ctx.json({ message: 'Hello world!'});
});

app.start({ port });
console.log(`listening on port ${port}`);
