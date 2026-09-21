import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/iExploreLogo.png";
import "./sharing.css";

export const metadata = { robots: { index: false, follow: false } };

export default function SharingLayout({ children }: { children: React.ReactNode }) {
  return <div className="shared-site"><header className="share-nav"><Link href="/" aria-label="iExplore home" className="share-brand"><Image src={logo} alt="" width={40} height={40} /><strong>iExplore</strong></Link><span>Places. People. Moments.</span></header><main className="share-main">{children}</main><footer className="share-site-footer"><Link href="/legal/privacy-policy">Privacy</Link><Link href="/legal/terms-of-use">Terms</Link></footer></div>;
}
