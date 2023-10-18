import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-2">
        <Card className={cn("w-[300px] h-auto")}>
          <CardHeader>
            <AspectRatio ratio={1 / 1}>
              <Image
                className="rounded-md"
                src="/img/noun.svg"
                alt="noun image"
                fill
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="text-center flex justify-between font-semibold">
            <p>
              Health
              <br />
              98%
            </p>
            <p>
              Happiness
              <br />
              75%
            </p>
            <p>
              Luck
              <br />
              62%
            </p>
          </CardContent>
        </Card>
        <div className="flex space-x-3 mt-4 w-full justify-between">
          <Button
            className="text-3xl w-full h-16"
            size={"icon"}
            variant="outline"
          >
            🍎
          </Button>
          <Button
            className="text-3xl w-full h-16"
            size={"icon"}
            variant="outline"
          >
            👋
          </Button>
          <Button
            className="text-3xl w-full h-16"
            size={"icon"}
            variant="outline"
          >
            👕
          </Button>
        </div>
      </div>
    </main>
  );
}
