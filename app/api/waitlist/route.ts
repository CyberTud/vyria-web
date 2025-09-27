import { NextRequest, NextResponse } from 'next/server'
import { addToWaitlist, getWaitlistCount } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email' },
        { status: 400 }
      )
    }

    const result = addToWaitlist(email)

    if (result.success) {
      const count = getWaitlistCount()
      return NextResponse.json({
        success: true,
        message: 'Successfully added to waitlist!',
        position: count
      })
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const count = getWaitlistCount()
    return NextResponse.json({ count })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get waitlist count' },
      { status: 500 }
    )
  }
}