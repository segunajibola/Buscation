import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import tourcenter from './data.json';

export async function GET(request) {
  return NextResponse.json(tourcenter);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  tourcenter.push(newCourse);

  return NextResponse.json(tourcenter);
}
