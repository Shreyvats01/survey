import { useState, useRef, useEffect, type FormEvent } from "react";
import { Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  surveyTitle: string;
  onSuccess: () => void;
}

const REQUIRED_PASSWORD = "shrey1234@";

export function PasswordFormDialog({
  open,
  onOpenChange,
  surveyTitle,
  onSuccess,
}: PasswordFormDialogProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [prevOpen, setPrevOpen] = useState(open);
  if (prevOpen !== open) {
    setPrevOpen(open);
    setPassword("");
    setShowPassword(false);
    setError(null);
  }

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password === REQUIRED_PASSWORD) {
      setError(null);
      setPassword("");
      setShowPassword(false);
      onSuccess();
      onOpenChange(false);
    } else {
      setError("Incorrect password. Please try again.");
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-[440px] p-6 sm:p-7 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader className="gap-3 text-left">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum">
                <Lock className="h-3.5 w-3.5" />
                <span>Protected Inquiry</span>
                <ShieldCheck className="h-3.5 w-3.5 text-accent-violet ml-0.5" />
              </div>
            </div>

            <div>
              <DialogTitle className="font-serif text-2xl font-normal tracking-tight text-plum">
                Protected Survey Access
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-sm text-plum/70">
                Please enter the security password to unlock and access{" "}
                <span className="font-medium text-plum">{surveyTitle}</span>.
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="space-y-2">
            <label
              htmlFor="survey-password-input"
              className="text-xs font-semibold uppercase tracking-wider text-plum/80"
            >
              Passcode
            </label>
            <div className="relative">
              <Input
                id="survey-password-input"
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter password"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "password-error-message" : undefined}
                autoComplete="current-password"
                className={cn(
                  "h-10 pr-10 text-sm bg-background/50 border-plum/20 text-plum placeholder:text-plum/40 focus-visible:border-plum focus-visible:ring-plum/30",
                  error && "border-destructive ring-2 ring-destructive/30"
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-plum/50 hover:text-plum transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {error && (
              <p
                id="password-error-message"
                role="alert"
                className="text-xs font-medium text-destructive mt-1.5"
              >
                {error}
              </p>
            )}
          </div>

          <DialogFooter className="pt-2 gap-2 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="cursor-pointer rounded-full border-plum/20 text-plum hover:bg-plum/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="cursor-pointer rounded-full bg-plum text-cream hover:bg-plum/85"
            >
              Unlock & Open Form
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
