import { Button } from "@/components/ui/button";
// import { CoolMode } from "@/registry/magicui/cool-mode";
import { CoolMode } from "@/components/magicui/cool-mode";

export function DownloadResume() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <a
          href="/Junior-backend-developer-resume-of-hammad-sadi.pdf"
          download="Junior-backend-developer-resume-of-hammad-sadi.pdf"
        >
          <Button>Download Resume</Button>
        </a>
      </CoolMode>
    </div>
  );
}
