import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

import BaseHtml from './BaseHtml';

const app = new Elysia();
app.use(html());

app.get('/', ({ html }: any) =>
  html(
    <BaseHtml>
      <h1>Hello, World!</h1>
      <h2>This is an app deployed on fly.io</h2>
      <p>It uses:</p>
      <ul>
        <li>Elysia</li>
        <li>Typed HTML</li>
        <li>htmx</li>
        <li>bun</li>
      </ul>
    </BaseHtml>
  )
);

app.listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
