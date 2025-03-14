import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the image URL from the query parameter
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
      return new NextResponse('Missing image URL', { status: 400 });
    }

    // Verify this is a Google image or other trusted source to prevent abuse
    const isGoogleImage = imageUrl.includes('googleusercontent.com');
    const isCloudinaryImage = imageUrl.includes('cloudinary.com');

    if (!isGoogleImage && !isCloudinaryImage) {
      return new NextResponse('Unsupported image source', { status: 403 });
    }

    // Fetch the image
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new NextResponse('Failed to fetch image', {
        status: response.status,
      });
    }

    // Get the image buffer and content type
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse('Error processing image', { status: 500 });
  }
}
