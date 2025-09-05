import { NextRequest, NextResponse } from "next/server";
import { signIn } from "next-auth/react";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (res?.error) {
    return NextResponse.json({ error: res.error }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
