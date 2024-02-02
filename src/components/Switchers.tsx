import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "./ModeToggle";

export function Switchers() {
  return (
    <div className="absolute right-4 top-4 flex flex-row gap-2">
      <LocaleSwitcher />
      <ModeToggle />
    </div>
  );
}
