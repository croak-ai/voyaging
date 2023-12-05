import { toast } from "@/components/ui/use-toast";
import { ToastActionElement } from "@/components/ui/toast";

export function getPublicUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.toString();
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return "https://" + process.env.NEXT_PUBLIC_VERCEL_URL.toString();
  }

  return "URL_ERROR";
}

// These are errors that are expected: duplicate course, already enrolled, etc.
export function toastError(error: string, action?: ToastActionElement) {
  toast({
    title: "Error",
    icon: "error_for_destructive_toasts",
    variant: "destructive",
    description: error,
    action: action,
  });
}

// These are warnings that are expected.
export function toastWarning(
  warning: string,
  action?: ToastActionElement | undefined
) {
  toast({
    title: "Warning",
    icon: "warning",
    description: warning,
    action: action,
  });
}

// This is the generic success message
export function toastSuccess(
  successMessage: string,
  action?: ToastActionElement | undefined
) {
  toast({
    title: "Success!",
    icon: "success",
    description: successMessage,
    action: action,
  });
}
