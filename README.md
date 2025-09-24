## Procedure
1. `npm install`
2. `npm run dev`
3. `curl http://localhost:8787/; curl http://localhost:9112/`
4. View the logs output by the receiver

The side executed with Express has a single body, but the side executed with Wrangler has duplicate bodies.

Logs in my environment
> [receiver] 2025-09-24T01:29:37.836Z  
> [receiver] body {"email":"posting-wrangler@email.mail","from":"wrangler"}{"email":"posting-wrangler@email.mail","from":"wrangler"}  
> [pw] [wrangler:info] GET / 200 OK (23ms)  
> [receiver] 2025-09-24T01:29:37.879Z  
> [receiver] body {"email":"posting-express@email.mail","from":"express"}  
