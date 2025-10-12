import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.text('✅ Hono fonctionne !'))

// Utilise le serveur Node.js
serve({
  fetch: app.fetch,
  port: 8080,
})

console.log('Server running on http://localhost:8080')
