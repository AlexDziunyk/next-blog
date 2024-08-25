'use server';

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export async function login(formData: FormData) {
  const supabase = createClient();
  

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  console.log(error);

  if (error) {
    console.log("bad")
    //setError(error.message);
    redirect('/error')
  }

  console.log("good")
  revalidatePath('/', 'layout')
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    //setError(error.message);
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
