import Image from 'next/image';

export default function PortfolioGrid() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}