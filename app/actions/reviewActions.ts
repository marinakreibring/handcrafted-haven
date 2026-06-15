"use server";

import { sql } from "@/app/lib/db";

export async function submitReviewForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const rating = Number(formData.get("rating"));
  const review = formData.get("review") as string;

  await sql`
    INSERT INTO reviews
    (name, rating, review)
    VALUES
    (${name}, ${rating}, ${review})
  `;

  return {
    success: true,
    message: "Thank you! Your review has been submitted.",
  };
}