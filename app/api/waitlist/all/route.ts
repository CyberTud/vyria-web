import { NextRequest, NextResponse } from 'next/server'
import { getAllWaitlistEntries } from '@/lib/db'

const ADMIN_PASSWORD = 'tudorregele'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    const entries = getAllWaitlistEntries()
    return NextResponse.json({ entries })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    )
  }
}