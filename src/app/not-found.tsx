import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-6xl font-black text-emerald-500">404</div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold">Page Not Found</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            The solution or page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
