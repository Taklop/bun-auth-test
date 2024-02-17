import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

import BaseHtml from './BaseHtml';

const app = new Elysia();
app.use(html());

app.get('/', ({ html }: any) =>
  html(
    <BaseHtml>
      <h1>Hello, Elysia lol!</h1>
    </BaseHtml>
  )
);

app.listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
