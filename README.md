# @alyvro/pulse ⚡

**The Serverless Real-time Protocol.**
A lightweight, secure, and type-safe real-time communication layer built specifically for Next.js App Router and Edge Runtimes.

Unlike WebSockets which are hard to manage in serverless environments, Pulse uses a custom wire protocol (**APWP**) over HTTP Streaming (SSE) to deliver data instantly.

## ✨ Features

- **Serverless Ready:** Works perfectly on Vercel, Cloudflare Workers, and Docker.
- **Zero-Config:** No external WebSocket server needed.
- **Type-Safe:** Full TypeScript support from server to client.
- **Multiplexing:** Single connection handles multiple channels.

---

## 📦 Installation

```bash
pnpm add @alyvro/pulse nanoid
```

---

## 🚀 Quick Start

### 1. Setup the Server Handler

Create a route handler in app/api/pulse/route.ts.

```ts
import { pulse } from "@alyvro/pulse/server";

export const GET = pulse.Handler();
```

### 2. Connect in Client

Use the hook to listen to a specific channel.

```tsx
"use client";
import { usePulse } from "@alyvro/pulse/client";

export default function RealTimeCounter() {
  const { data, status } = usePulse<{ count: number }>("counter");

  if (status === "CONNECTING") return <p>Connecting...</p>;

  return <h1>Count: {data?.count ?? 0}</h1>;
}
```

### 3. Emit Data (Server Action)

Trigger updates from anywhere (Server Actions, API Routes, Cron Jobs).

```ts
"use server";
import { pulse } from "@alyvro/pulse/server";

export async function increment() {
  // Logic...
  pulse.emit("counter", { count: 101 });
}
```

---

## 📄 License

MIT © [Alyvro](https://github.com/alyvro)
