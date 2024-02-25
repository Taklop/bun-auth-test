import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { logger } from '@bogeychan/elysia-logger';
import { PrismaClient } from '@prisma/client';

import BaseHtml from './BaseHtml';

const app = new Elysia();
const prisma = new PrismaClient();
app.use(html());
app.use(logger({ level: 'debug' }));

app.get('/', ({ html }: any) =>
  html(
    <BaseHtml>
      <h1 class="text-3xl pb-2">Hello, World!</h1>
      <h2 class="text-2xl pb-3">This is an app deployed on fly.io</h2>
      <p>It uses:</p>
      <ul class="list-disc list-inside *:text-sm pb-3">
        <li>Elysia</li>
        <li>Typed HTML</li>
        <li>htmx</li>
        <li>bun</li>
        <li>tailwindcss</li>
      </ul>
      <button
        hx-post="/clicked"
        hx-swap="outerHTML"
        class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
      >
        Click me
      </button>

      <form hx-post="/api/user" hx-swap="outerHTML" class="flex flex-col gap-2">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
        />
        <button
          type="submit"
          class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </BaseHtml>
  )
);

app.post('/clicked', () => <div>I was clicked!</div>);

app.post(
  '/api/user',
  async ({ body }) => {
    if (body.name.length === 0) {
      throw new Error('Content is empty');
    }
    try {
      await prisma.user.create({
        data: {
          name: body.name,
        },
      });
    } catch (error) {
      throw new Error('Error creating user');
    }
  },
  {
    body: t.Object({
      name: t.String(),
    }),
  }
);

app.listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
