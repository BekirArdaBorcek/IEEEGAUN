import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function checkAdmin() {
  const session = await auth();
  
  if (!session || !session.user || session.user.role !== 'Yönetici') {
    return false;
  }
  return true;
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { success: false, error: 'Unauthorized: Admin access required.' },
    { status: 401 }
  );
}
