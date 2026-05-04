import { NextResponse } from "next/server";
import { onlineReviewHighlights } from "@/lib/site-data";

type GoogleReview = {
  author_name?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type GooglePlaceDetailsResponse = {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: GoogleReview[];
  };
  status?: string;
  error_message?: string;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({
      configured: false,
      updatedAt: new Date().toISOString(),
      reviews: onlineReviewHighlights
    });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600
      }
    });
    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (!response.ok || data.status !== "OK" || !data.result?.reviews?.length) {
      return NextResponse.json({
        configured: true,
        updatedAt: new Date().toISOString(),
        error: data.error_message ?? data.status ?? "Google reviews unavailable",
        reviews: onlineReviewHighlights
      });
    }

    const reviews = data.result.reviews.slice(0, 5).map((review, index) => ({
      source: "Google review",
      rating: `${review.rating ?? data.result?.rating ?? 5}-star review`,
      title: review.author_name ? `Review from ${review.author_name}` : `Google Review ${index + 1}`,
      text: review.text || "Customer left a positive Google review for ASAP Fence & Gates.",
      author: review.author_name,
      relativeTime: review.relative_time_description
    }));

    return NextResponse.json({
      configured: true,
      updatedAt: new Date().toISOString(),
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews
    });
  } catch {
    return NextResponse.json({
      configured: true,
      updatedAt: new Date().toISOString(),
      error: "Google reviews request failed",
      reviews: onlineReviewHighlights
    });
  }
}
