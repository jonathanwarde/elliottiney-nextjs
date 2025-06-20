import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioItem() {
    return (
        <article className="video-wrap relative aspect-video overflow-hidden">
            <div className="youtube-player" data-id="PkVyjgtZK5Y"></div>
            <Image
            className="video-slide__img absolute inset-0 object-cover"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
            data-src="youtube_image_url"
            fill
            />
            <div className="video-description absolute bottom-0 z-[1] bg-white text-black min-h-[60px] p-2.5 transition-opacity duration-300">
                this is a caption
            </div>
            <div className="anim-reveal__outer">
            <div className="anim-reveal">
                <div className="anim-reveal__inner">
                    <div className="anim-reveal__content">
                        <p>more stuff to be revealed</p>
                        <div className="flex mt-4 gap-4">
                        <button className="play-button flex align-center cursor-pointer items-center gap-1">
                            <span className="text-sm">watch</span>
                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                            <path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <Link href="/about" className="text-sm flex items-center gap-1">read more
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M12 7.5C12.2761 7.5 12.5 7.27614 12.5 7C12.5 6.72386 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.72386 11.5 7C11.5 7.27614 11.7239 7.5 12 7.5Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </article>
    )
}