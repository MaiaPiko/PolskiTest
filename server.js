const { createServer } = require('vite');
const history = require('connect-history-api-fallback');

async function startServer() {
  const vite = await createServer({
    // Vite configuration options
  });

  // Use the history API fallback middleware
  vite.middlewares.use(history());

  await vite.listen();
}

startServer();
