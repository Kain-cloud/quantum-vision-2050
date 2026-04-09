import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `Ti je një asistent i mençur shkencor për fëmijë dhe adoleshentë (mosha 10-16). Përgjigju gjithmonë në shqip.

Ekspertiza jote:
- Fizika kuantike (superpozicioni, tunelimi kuantik, efekti i vëzhguesit)
- Inovacionet teknologjike të vitit 2050 (kompjuterët kuantikë, teleportimi, energjia e pastër, mjekësia kuantike, materiale të reja, AI)
- Eksplorimi i hapësirës (Marsi, stacione orbitale, udhëtime ndërplanetare)
- Jeta e përditshme në vitin 2050

Rregulla:
- Përdor gjuhë të thjeshtë e të kuptueshme për fëmijë
- Jep shembuj konkretë dhe interesantë
- Ji entuziast dhe frymëzues
- Mbaj përgjigjet e shkurtra (max 3-4 paragrafë)
- Nëse pyetja nuk ka lidhje me temat e mësipërme, thuaj me mirësjellje që je i specializuar vetëm në këto tema
- Mund të ndihmosh edhe me probleme teknike të faqes web nëse dikush pyet`,
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Shumë kërkesa. Provo përsëri pas pak." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Kreditet e AI kanë përfunduar." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Gabim nga AI" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Gabim i panjohur" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
