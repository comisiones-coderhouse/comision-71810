import AnimatedTitle from "@/components/AnimatedTitle";
import Button from "@/components/Button";
import ButtonWithNotification from "@/components/ButtonWithNotification";
import Link from "next/link";

async function HomePage() {

  return (
    <section className="grow grid place-content-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <AnimatedTitle/>
        <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>
            <Link href="/products">
              Ver productos
            </Link>
          </Button>
          <Button>
            <Link href="/contact">
              Contacto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage