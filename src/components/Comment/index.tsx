'use client'
import CommentSection from './CommentSection';

export default function CommentLayout({productId}: {productId: string}) {
  return (
    <div dir="rtl" className="min-h-screepy-12 ">
      <div className="mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="px-16 py-12">
          <h1 className="text-2xl font-medium mb-6 text-gray-100">نظرات شما</h1>
          <p className="mb-8 font-normal text-xs md:text-sm text-gray-300">
            شما هم میتوانید در این قسمت نظر بگذارید
          </p>
        </div>
        <CommentSection productId={productId} />
      </div>
    </div>
  );
}

