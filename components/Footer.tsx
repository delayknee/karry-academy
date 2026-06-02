import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ow-line1 bg-ow-bg1 px-6 py-5 lg:px-12">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4">
        <Wordmark size={20} />
        <div className="font-hud text-[11px] text-ow-fg3">
          © {new Date().getFullYear()} Karry Academy · Coached by Kajor
        </div>
      </div>
    </footer>
  );
}
