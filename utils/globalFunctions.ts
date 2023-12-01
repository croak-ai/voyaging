import { toast } from '@/components/ui/use-toast';
import { ToastActionElement } from '@/components/ui/toast';

// These are errors that are expected: duplicate course, already enrolled, etc.
export function toastError(error: string, action?: ToastActionElement) {
  toast({
    title: 'Error',
    icon: 'error_for_destructive_toasts',
    variant: 'destructive',
    description: error,
    action: action
  });
}

// These are warnings that are expected.
export function toastWarning(
  warning: string,
  action?: ToastActionElement | undefined
) {
  toast({
    title: 'Warning',
    icon: 'warning',
    description: warning,
    action: action
  });
}

// This is the generic success message
export function toastSuccess(
  successMessage: string,
  action?: ToastActionElement | undefined
) {
  toast({
    title: 'Success!',
    icon: 'success',
    description: successMessage,
    action: action
  });
}

