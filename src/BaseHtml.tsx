import * as elements from 'typed-html';

export default ({ children }: elements.Children) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      <title>Elysia</title>
    </head>
    <body>{children}</body>
  </html>
);
