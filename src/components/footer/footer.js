/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BuG1JZvFf4I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Footer() {
    return (
      <footer className="bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-6 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img alt="Company logo" className="h-10" src="/placeholder.svg" />
              <p className="text-white opacity-60 text-sm">MARKETPLACE</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Launchpad
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      SocialFi
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      NFT Airdrops
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      DEX Buy
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Floyx Tokens
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Brand Assets
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Social</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white opacity-60 hover:opacity-100" href="#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white border-opacity-25 pt-8">
            <p className="text-base text-white opacity-60">
              This web page and any other contents published on this website shall not constitute investment advice,
              financial advice, trading advice, or any other kind of advice, and you should not treat any of the website's
              content as such. You alone assume the sole responsibility of evaluating the merits and risks associated with
              using any information or other content on this website before making any decisions based on such
              information. You understand that the crypto market is characterised by high volatility, and you should be
              aware of the concrete possibility of losing the entirety of the funds you allocated in the crypto market.
              You should refrain from using funds you can't afford to lose when purchasing cryptocurrencies and other
              digital tokens.
            </p>
          </div>
        </div>
      </footer>
    )
  }