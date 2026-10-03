
import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-50 via-white to-teal-100 shadow-sm">
        
        {/* Decorative background */}
        <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-6 lg:gap-12 px-6 py-12 sm:px-10 sm:py-14 md:px-12 lg:px-16 lg:py-16">

          {/* Text content */}
          <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
            
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Discover Your Next Favorite Book
            </span>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
              Books to
              <span className="text-emerald-600"> freshen up </span>
              your bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
              Explore a world of knowledge, imagination, and inspiration.
              Find the perfect book to spark your curiosity and enrich
              your reading journey.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="/books"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:text-base"
              >
                Explore Books
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <span className="text-sm font-medium text-slate-500">
                Your next chapter starts here.
              </span>
            </div>

            {/* Small highlights */}
            <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm md:justify-start">
              <span className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span>
                Discover new books
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span>
                Explore your interests
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-65 sm:max-w-85 md:max-w-full">
              
              {/* Image backdrop */}
              <div className="absolute inset-8 rounded-full bg-emerald-200/50 blur-2xl" />

              {/* Image */}
              <div className="relative rounded-3xl bg-white/40 p-3 sm:p-5">
                <Image
                  src={BannerImg}
                  alt="A collection of books for your bookshelf"
                  priority
                  sizes="(max-width: 767px) 80vw, (max-width: 1023px) 45vw, 500px"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-2 -left-3 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-4 sm:-left-6">
                <p className="text-xs font-medium text-slate-500">
                  Reading is an adventure
                </p>
                <p className="mt-1 text-sm font-bold text-emerald-700">
                  Turn the page. ✨
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;