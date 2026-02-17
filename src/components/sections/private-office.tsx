'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import {
  KeyRound,
  LoaderCircle,
  CheckCircle,
  XCircle,
  ShieldCheck,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { handleAccessRequest } from '@/app/actions';

const initialState = {
  status: 'idle' as 'idle' | 'success' | 'error',
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Analyzing Request...
        </>
      ) : (
        'Request Access'
      )}
    </Button>
  );
}

export function PrivateOffice() {
  const [state, formAction] = useFormState(handleAccessRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
    if (state.status !== 'idle') {
      setOpen(true);
    }
  }, [state]);

  const renderResponse = () => {
    if (state.status !== 'success') return null;

    return (
      <div className="mt-6 rounded-lg border border-border bg-card/50 p-6 text-center">
        {state.accessGranted ? (
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-green-500" />
        ) : (
          <ShieldAlert className="mx-auto mb-4 h-12 w-12 text-amber-500" />
        )}
        <h3 className="font-semibold text-lg">
          {state.accessGranted
            ? 'Analysis Complete: Access Prioritized'
            : 'Analysis Complete: Under Review'}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{state.message}</p>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center py-24 text-center sm:py-32">
      <h2 className="font-headline text-5xl md:text-6xl">Private Office</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Direct engagement is reserved for partners and ventures of significant
        strategic value. Submit your purpose for review.
      </p>
      <Dialog
        open={open}
        onOpenChange={isOpen => {
          setOpen(isOpen);
          if (!isOpen) {
            // Reset state when closing dialog
            formAction(new FormData());
          }
        }}
      >
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="group mt-12 h-24 w-24 rounded-full border-2 border-border bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
          >
            <KeyRound className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="sr-only">Inquire for Private Office Access</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="border-border bg-background sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">
              Restricted Access Gateway
            </DialogTitle>
            <DialogDescription>
              Your request will be reviewed by our AI pre-screening protocol.
              Clearly state your identity and purpose.
            </DialogDescription>
          </DialogHeader>
          {state.status === 'success' ? (
            renderResponse()
          ) : (
            <form action={formAction} ref={formRef} className="space-y-4 pt-4">
              <div>
                <Label htmlFor="identityAndPurposeDescription" className="sr-only">
                  Identity and Purpose
                </Label>
                <Textarea
                  id="identityAndPurposeDescription"
                  name="identityAndPurposeDescription"
                  placeholder="Describe your identity, your venture, and your purpose for seeking direct engagement..."
                  rows={6}
                  required
                  className="border-border bg-neutral-900"
                />
              </div>
              {state.status === 'error' && (
                <p className="text-sm text-destructive">{state.message}</p>
              )}
              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
