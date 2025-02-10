import { Button } from "@/components/ui/button";
// import { CoolMode } from "@/registry/magicui/cool-mode";
import { CoolMode } from "@/components/magicui/cool-mode";

export function DownloadResume() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Download Resume</Button>
      </CoolMode>
    </div>
  );
}
