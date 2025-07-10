import Container from "./components/container";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:p-10">
        <Navbar />
        <h1 className="text-primary dark:text-secondary text-2xl font-bold tracking-tighter md:text-4xl">
          Hello there
        </h1>
        <p className="text-primary dark:text-secondary text-sm md:text-sm">
          I&apos;m a software developer with a passion for creating innovative
          and user-friendly applications.
        </p>
      </Container>
    </div>
  );
}
