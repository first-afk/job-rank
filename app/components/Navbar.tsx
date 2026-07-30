import { Box } from "lucide-react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-background h-20 border-b-2 border-outline">
      <div className="bg-quart h-5"></div>
      <div className="flex justify-between items-center py-3 px-5">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-primary border-2 border-outline items-center justify-center flex size-8">
            <Box className="text-outline size-6" />
          </div>
          <h1 className="font-bold capitalize text-lg">job-rank</h1>
        </div>
        <p className="text-sm font-light">Feature</p>

        <Button>
          <p className="font-bold capitalize">Sign in</p>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
