import type { APIRoute } from "astro";

// Datos simulados (podrías usar una base de datos en su lugar)
import data from "../../assets/data.json";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const newItem = { id: data.length + 1, ...body };
  data.push(newItem);

  return new Response(JSON.stringify(newItem), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
