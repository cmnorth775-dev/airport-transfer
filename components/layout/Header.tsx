import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">订</span>
          <span>机场订阅导航</span>
        </Link>
        <nav className="nav" aria-label="主导航">
          <Link href="/">首页</Link>
          <Link href="/guide">教程</Link>
          <Link href="/faq">常见问题</Link>
        </nav>
      </div>
    </header>
  );
}
