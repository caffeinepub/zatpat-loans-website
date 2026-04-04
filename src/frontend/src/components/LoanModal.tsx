import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, IndianRupee, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

interface LoanModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoanModal({ open, onClose }: LoanModalProps) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;

    if (!name.trim() || !phone.trim() || !amount.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    const amountNum = Number.parseInt(amount.replace(/,/g, ""), 10);
    if (Number.isNaN(amountNum) || amountNum < 1000 || amountNum > 5000) {
      setError("Loan amount must be between ₹1,000 and ₹5,000.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await actor.submitLoanInquiry(
        name.trim(),
        phone.trim(),
        BigInt(amountNum),
      );
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setAmount("");
    setError("");
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) handleClose();
      }}
    >
      <DialogContent data-ocid="loan-modal.dialog" className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-gray-900 flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ background: "#FF5500" }}
            >
              <IndianRupee size={14} />
            </span>
            Apply for a Loan
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-sm">
            No CIBIL check — bad credit or no credit, everyone is welcome. Fill
            in your details and we'll get back to you within minutes.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div
            data-ocid="loan-modal.success_state"
            className="flex flex-col items-center text-center py-8 gap-4"
          >
            <CheckCircle2 size={56} style={{ color: "#FF5500" }} />
            <h3 className="text-xl font-bold text-gray-900">
              Application Submitted!
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Our team will contact you on your registered phone number within 5
              minutes.
            </p>
            <button
              type="button"
              data-ocid="loan-modal.close_button"
              onClick={handleClose}
              className="btn-brand mt-2 px-8 py-3"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            data-ocid="loan-modal.modal"
            onSubmit={handleSubmit}
            className="space-y-4 pt-2"
          >
            <div className="space-y-1.5">
              <Label
                htmlFor="loan-name"
                className="text-sm font-semibold text-gray-700"
              >
                Full Name
              </Label>
              <Input
                id="loan-name"
                data-ocid="loan-modal.input"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="loan-phone"
                className="text-sm font-semibold text-gray-700"
              >
                Phone Number
              </Label>
              <Input
                id="loan-phone"
                data-ocid="loan-modal.input"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="loan-amount"
                className="text-sm font-semibold text-gray-700"
              >
                Loan Amount (₹)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                  ₹
                </span>
                <Input
                  id="loan-amount"
                  data-ocid="loan-modal.input"
                  type="number"
                  placeholder="3000"
                  min="1000"
                  max="5000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="rounded-xl pl-8"
                  required
                />
              </div>
              <p className="text-xs text-gray-400">Range: ₹1,000 – ₹5,000</p>
            </div>

            {/* No CIBIL badge */}
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-xl"
              style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
            >
              <span className="text-green-600 text-base">✅</span>
              <p className="text-xs font-semibold" style={{ color: "#166534" }}>
                No CIBIL check • Bad credit welcome • Approved for everyone
              </p>
            </div>

            {error && (
              <p
                data-ocid="loan-modal.error_state"
                className="text-sm text-red-500 font-medium"
              >
                {error}
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                data-ocid="loan-modal.cancel_button"
                onClick={handleClose}
                className="btn-outline-brand flex-1 py-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-ocid="loan-modal.submit_button"
                disabled={loading || !actor}
                className="btn-brand flex-1 py-3 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
