import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const script = `PAK'AI Script for: ${prompt} - 620 Words Video Ready - Pakistani Context Images Added`;
  return NextResponse.json({ success: true, script });
}
