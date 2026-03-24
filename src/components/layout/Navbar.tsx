import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const loggedIn = false;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2 text-foreground ">
          <Dumbbell className="size-6 text-accent hover:text-accent-hover" />
          <span className="font-semibold text-lg">Gym AI</span>
        </Link>
        <nav>
          {loggedIn ? (
            <>
              <Link to={"/prfile"}>
                <Button variant="ghost" size="sm">
                  My Plan
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/"}>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to={"/"}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
