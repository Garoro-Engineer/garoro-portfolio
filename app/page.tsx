"use client";
import { useState } from "react";

const works = [
  {
    title: "Todo App",
    description:
      "シンプルで使いやすいタスク管理アプリ。タスクの追加・完了・削除に対応し、直感的なUIを実現しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://todo-app-pelr.vercel.app/",
    category: "Webアプリ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "IRON BODY",
    description:
      "フィットネスジム向けのランディングページ。力強いデザインとスムーズなUXで、入会CVRの向上を狙った設計です。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://fitness-lp-sigma.vercel.app/",
    category: "LP制作",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "LUMIÈRE",
    description:
      "美容サロン向けのランディングページ。ローズ・ピンク系の上品なデザインで、高級感と信頼感を表現しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://beauty-salon-lp-rho.vercel.app/",
    category: "LP制作",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "ORIGIN COFFEE",
    description:
      "スペシャルティコーヒーショップ向けのランディングページ。ダークブラウン×アンバーの落ち着いた雰囲気で、こだわりと世界観を表現しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://coffee-shop-lp.vercel.app/",
    category: "LP制作",
    color: "from-amber-700 to-yellow-600",
  },
  {
    title: "Focify",
    description:
      "タスク管理アプリ向けのランディングページ。ダーク背景×バイオレット〜ブルーのグラデーションで、モダンなSaaS感を表現しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://focify-lp.vercel.app/",
    category: "LP制作",
    color: "from-violet-600 to-blue-600",
  },
  {
    title: "CodePath",
    description:
      "プログラミングスクール向けのランディングページ。ライトテーマ×インディゴアクセントで、清潔感と信頼感のある教育系サービスのデザインを表現しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://codepath-lp.vercel.app/",
    category: "LP制作",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "さくらクリニック",
    description:
      "内科・アレルギー科クリニック向けのランディングページ。ホワイト×ミントグリーンで清潔感と安心感を表現し、Web予約フォームも実装しました。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://sakura-clinic-lp.vercel.app/",
    category: "LP制作",
    color: "from-emerald-400 to-teal-500",
  },
];

const skills = [
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React", level: 88 },
  { name: "Git / GitHub", level: 85 },
  { name: "Vercel", level: 80 },
];

const services = [
  {
    icon: "🖥️",
    title: "LP制作",
    description:
      "ビジネスの目的に合わせた、高品質なランディングページを制作します。デザインから実装・公開まで一貫して対応します。",
  },
  {
    icon: "⚡",
    title: "Webアプリ開発",
    description:
      "Next.js + TypeScriptを用いた高速・高品質なWebアプリケーションを開発します。",
  },
  {
    icon: "📱",
    title: "レスポンシブ対応",
    description:
      "スマートフォン・タブレット・PCすべてのデバイスで美しく表示されるサイトを制作します。",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-teal-400">Garoro</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#works" className="hover:text-teal-400 transition-colors">Works</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #14b8a6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0ea5e9 0%, transparent 50%)",
          }}
        />
        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-4">
            Freelance Web Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            アイデアを、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              コードで形に。
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Next.js × TypeScript × Tailwind CSS を武器に、
            <br className="hidden md:block" />
            ビジネスの成果につながるWebサイト・アプリを制作します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#works"
              className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              制作実績を見る
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">About</p>
            <h2 className="text-4xl font-bold">スキルセット</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Garoro <span className="text-gray-400 text-lg font-normal">/ Web Developer</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                フロントエンドを中心としたフリーランスWebエンジニアです。
                Next.js・TypeScript・Tailwind CSSを主なスタックとして、
                LP制作からWebアプリ開発まで幅広く対応しています。
              </p>
              <p className="text-gray-400 leading-relaxed">
                デザインの美しさだけでなく、パフォーマンスとユーザビリティを
                重視した実装を心がけています。
              </p>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">Works</p>
            <h2 className="text-4xl font-bold">制作実績</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work) => (
              <div
                key={work.title}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${work.color} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold tracking-tight opacity-80">
                    {work.title}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{work.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-gray-950 font-semibold py-2 rounded-lg transition-all duration-200 text-sm"
                  >
                    デモを見る →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">Services</p>
            <h2 className="text-4xl font-bold">提供サービス</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-4xl font-bold">お問い合わせ</h2>
            <p className="text-gray-400 mt-4">
              制作のご依頼・ご相談はお気軽にどうぞ。
              <br />
              通常2営業日以内にご返信いたします。
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">送信完了しました</h3>
              <p className="text-gray-400">お問い合わせありがとうございます。2営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  お名前 <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  メールアドレス <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  お問い合わせ内容 <span className="text-teal-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="ご依頼内容・ご予算・納期などをご記入ください。"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-4 rounded-lg transition-colors text-lg"
              >
                送信する
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold text-teal-400">Garoro</span>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#works" className="hover:text-teal-400 transition-colors">Works</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 Garoro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
