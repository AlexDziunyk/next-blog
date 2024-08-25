import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  //console.log("params", params.limit)
  const { data, error } = await supabase.from('blogs').select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const serializableData = JSON.parse(JSON.stringify(data));
    
  return NextResponse.json(data, { status: 200 });
}