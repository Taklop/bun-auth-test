import * as elements from 'typed-html';

export default ({ children }: elements.Children) => (
  <html lang="en" class="bg-slate-700">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Elysia</title>
    </head>
    <body class="text-gray-100 p-5">{children}</body>
  </html>
);
