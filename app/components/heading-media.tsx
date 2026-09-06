'use client'

import Image from 'next/image'
import { headingImageFor, type HeadingLevel } from '@/lib/seo/heading-images'

type HeadingMediaProps = {
  level: HeadingLevel
  heading: string
}

export default function HeadingMedia({ level, heading }: HeadingMediaProps) {
  const image = headingImageFor(heading, level)
  const sizeClass =
    level === 1
      ? 'mb-8 aspect-[16/9]'
      : level === 2
        ? 'mb-6 aspect-[16/9] max-h-[360px]'
        : 'mb-4 aspect-[16/9] max-h-[240px]'

  return (
    <figure className={`relative w-full overflow-hidden rounded-lg ${sizeClass}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover"
        sizes={
          level === 1
            ? '(min-width: 1024px) 896px, 100vw'
            : '(min-width: 1024px) 896px, 100vw'
        }
        priority={level === 1}
      />
    </figure>
  )
}
