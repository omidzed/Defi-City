{/* <td>
								<div
									className='ml-16 min-w-[80px] h-14 mt-2 cursor-pointer'
									onClick={() => showModal(coin)}>
									<img
										loading='lazy'
										alt='7d chart'
										src={`https://www.coingecko.com/coins/${coin.market_cap_rank}/sparkline.svg`}
									/>
								</div> */}



// <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="1" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 1
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bitcoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BTC" src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bitcoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BTC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="BTC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 448.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="BTC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="70425.54252429963" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="1" data-price-target="price" data-price-btc="1.0" data-prev-price="70435.414">$70,435.41</span>
// </td>
// <td data-sort="-0.017157423660969146" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="1" data-24h="false" data-json="{&quot;usd&quot;:-0.017}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="1"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="1.1098479168388453" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1" data-24h="true" data-json="{&quot;usd&quot;:1.109}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="1"><i class="fas fa-fw fa-caret-up"></i>1.1%</span>
// </td>
// <td data-sort="6.780233130345478" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1" data-24h="false" data-json="{&quot;usd&quot;:6.78}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="1"><i class="fas fa-fw fa-caret-up"></i>6.8%</span>
// </td>
// <td data-sort="23.644346327834935" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1" data-24h="false" data-json="{&quot;usd&quot;:23.644}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="1"><i class="fas fa-fw fa-caret-up"></i>23.6%</span>
// </td>
// <td data-sort="33198073184.918587" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="471326.438980814" data-prev-price="33198072858.759377">$33,198,072,859</span>
// </td>
// <td data-sort="1385072621472.788" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19667237.0" data-prev-price="1385269980331.1182">$1,385,269,980,331</span>
// </td>
// <td data-sort="1478932960991.3455" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="21000000.0" data-prev-price="1479143694000">$1,479,143,694,000</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bitcoin">
// <img loading="lazy" alt="bitcoin (BTC) 7d chart" src="https://www.coingecko.com/coins/1/sparkline.svg">
// </a>
// </td>
// </tr>




{/* <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="279" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 2
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ethereum">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ETH" src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ethereum
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ETH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ETH" @click="open = !open">
// Buy */}
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 517.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ETH" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3572.816589580483" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="279" data-price-target="price" data-price-btc="0.05072471859793194" data-prev-price="3572.816554478836">$3,572.82</span>
// </td>
// <td data-sort="0.36748023749015674" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="279" data-24h="false" data-json="{&quot;usd&quot;:0.367}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="279"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="1.7275277683913963" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="279" data-24h="true" data-json="{&quot;usd&quot;:1.727}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="279"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="1.6065206653047999" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="279" data-24h="false" data-json="{&quot;usd&quot;:1.606}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="279"><i class="fas fa-fw fa-caret-up"></i>1.6%</span>
// </td>
// <td data-sort="9.98204473817708" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="279" data-24h="false" data-json="{&quot;usd&quot;:9.982}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="279"><i class="fas fa-fw fa-caret-up"></i>10.0%</span>
// </td>
// <td data-sort="15202572771.415485" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="215837.05921080604" data-prev-price="15202572622.055637">$15,202,572,622</span>
// </td>
// <td data-sort="429046228727.5152" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="6090662.432458647" data-prev-price="428998329964.47186">$428,998,329,964</span>
// </td>
// <td data-sort="429046228727.5152" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="6090662.432458647" data-prev-price="428998329964.47186">$428,998,329,964</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ethereum">
// <img loading="lazy" alt="ethereum (ETH) 7d chart" src="https://www.coingecko.com/coins/279/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="325" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 3
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/tether">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="USDT" src="https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Tether
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// USDT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="USDT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 586.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="USDT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.0000419881923255" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="325" data-price-target="price" data-price-btc="1.4186818326122312e-05" data-prev-price="0.9992544221432121">$0.9993</span>
// </td>
// <td data-sort="0.0019861963023129676" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="325" data-24h="false" data-json="{&quot;usd&quot;:0.001}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="325"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="0.050078538343919295" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="325" data-24h="true" data-json="{&quot;usd&quot;:0.05}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="325"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="0.06768824964898688" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="325" data-24h="false" data-json="{&quot;usd&quot;:0.067}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="325"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="-0.016905071204746967" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="325" data-24h="false" data-json="{&quot;usd&quot;:-0.016}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="325"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="54499127363.032486" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="773136.7562167293" data-prev-price="54456207502.7424">$54,456,207,503</span>
// </td>
// <td data-sort="104508707897.45586" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1482583.8014251979" data-prev-price="104426403843.0776">$104,426,403,843</span>
// </td>
// <td data-sort="104508707897.45586" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="1482583.8014251979" data-prev-price="104426403843.0776">$104,426,403,843</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/tether">
// <img loading="lazy" alt="tether (USDT) 7d chart" src="https://www.coingecko.com/coins/325/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="825" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 4
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bnb">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BNB" src="https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// BNB
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BNB
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="BNB" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 655.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="BNB" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="609.6892135865411" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="825" data-price-target="price" data-price-btc="0.0086560037482929" data-prev-price="609.6892075965623">$609.69</span>
// </td>
// <td data-sort="3.700522188054091" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="825" data-24h="false" data-json="{&quot;usd&quot;:3.7}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="825"><i class="fas fa-fw fa-caret-up"></i>3.7%</span>
// </td>
// <td data-sort="3.9082585162361148" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="825" data-24h="true" data-json="{&quot;usd&quot;:3.908}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="825"><i class="fas fa-fw fa-caret-up"></i>3.9%</span>
// </td>
// <td data-sort="6.072790457103204" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="825" data-24h="false" data-json="{&quot;usd&quot;:6.072}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="825"><i class="fas fa-fw fa-caret-up"></i>6.1%</span>
// </td>
// <td data-sort="53.92667002008926" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="825" data-24h="false" data-json="{&quot;usd&quot;:53.926}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="825"><i class="fas fa-fw fa-caret-up"></i>53.9%</span>
// </td>
// <td data-sort="1678773490.0842257" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23834.224550605686" data-prev-price="1678773473.5908756">$1,678,773,474</span>
// </td>
// <td data-sort="93837583689.21896" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1332101.315570816" data-prev-price="93827107652.17508">$93,827,107,652</span>
// </td>
// <td data-sort="93837583689.21896" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="1332101.315570816" data-prev-price="93827107652.17508">$93,827,107,652</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bnb">
// <img loading="lazy" alt="bnb (BNB) 7d chart" src="https://www.coingecko.com/coins/825/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4128" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 5
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/solana">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SOL" src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Solana
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SOL
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="SOL" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 724.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="SOL" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="188.20913773210782" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4128" data-price-target="price" data-price-btc="0.002672081062560664" data-prev-price="188.20913588302028">$188.21</span>
// </td>
// <td data-sort="0.007029095756592285" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4128" data-24h="false" data-json="{&quot;usd&quot;:0.007}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4128"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="2.5315786764681616" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4128" data-24h="true" data-json="{&quot;usd&quot;:2.531}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4128"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="5.2051882666310325" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4128" data-24h="false" data-json="{&quot;usd&quot;:5.205}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4128"><i class="fas fa-fw fa-caret-up"></i>5.2%</span>
// </td>
// <td data-sort="74.59951965095073" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4128" data-24h="false" data-json="{&quot;usd&quot;:74.599}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4128"><i class="fas fa-fw fa-caret-up"></i>74.6%</span>
// </td>
// <td data-sort="3358528216.738434" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="47682.380112681574" data-prev-price="3358528183.7420936">$3,358,528,184</span>
// </td>
// <td data-sort="83702800336.60695" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1188229.769583952" data-prev-price="83693455747.77026">$83,693,455,748</span>
// </td>
// <td data-sort="107904623802.34294" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="1531794.4652041306" data-prev-price="107892577319.56154">$107,892,577,320</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.78
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/solana">
// <img loading="lazy" alt="solana (SOL) 7d chart" src="https://www.coingecko.com/coins/4128/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13442" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 6
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/lido-staked-ether">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="STETH" src="https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png?1696513206">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Lido Staked Ether
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// STETH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="STETH" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(198.5px, 797.5px, 0px);" data-popper-placement="bottom-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="STETH" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3565.0610757914433" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13442" data-price-target="price" data-price-btc="0.0506146104396574" data-prev-price="3565.061040765991">$3,565.06</span>
// </td>
// <td data-sort="0.38180907508199374" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13442" data-24h="false" data-json="{&quot;usd&quot;:0.381}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13442"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="1.9241859102820627" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13442" data-24h="true" data-json="{&quot;usd&quot;:1.924}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13442"><i class="fas fa-fw fa-caret-up"></i>1.9%</span>
// </td>
// <td data-sort="1.596236070364031" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13442" data-24h="false" data-json="{&quot;usd&quot;:1.596}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13442"><i class="fas fa-fw fa-caret-up"></i>1.6%</span>
// </td>
// <td data-sort="9.775074532530944" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13442" data-24h="false" data-json="{&quot;usd&quot;:9.775}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13442"><i class="fas fa-fw fa-caret-up"></i>9.8%</span>
// </td>
// <td data-sort="152713349.52266613" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2168.1330363489024" data-prev-price="152713348.022312">$152,713,348</span>
// </td>
// <td data-sort="34553849343.79771" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="490574.94010496594" data-prev-price="34553849004.31848">$34,553,849,004</span>
// </td>
// <td data-sort="34553849343.79771" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="490574.94010496594" data-prev-price="34553849004.31848">$34,553,849,004</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/lido-staked-ether">
// <img loading="lazy" alt="lido staked ether (STETH) 7d chart" src="https://www.coingecko.com/coins/13442/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="44" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 7
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/xrp">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="XRP" src="https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// XRP
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// XRP
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="XRP" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11404.5px, 0px);" data-popper-placement="top-start" data-popper-reference-hidden="" data-popper-escaped="">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="XRP" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.6221472218045232" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="44" data-price-target="price" data-price-btc="8.8334257524831e-06" data-prev-price="0.6221859999144087">$0.6222</span>
// </td>
// <td data-sort="0.18721184293583173" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="44" data-24h="false" data-json="{&quot;usd&quot;:0.187}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="44"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="1.7655731847729368" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="44" data-24h="true" data-json="{&quot;usd&quot;:1.765}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="44"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="-2.030692022303696" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="44" data-24h="false" data-json="{&quot;usd&quot;:-2.03}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="44"><i class="fas fa-fw fa-caret-down"></i>2.0%</span>
// </td>
// <td data-sort="7.40708795945679" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="44" data-24h="false" data-json="{&quot;usd&quot;:7.407}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="44"><i class="fas fa-fw fa-caret-up"></i>7.4%</span>
// </td>
// <td data-sort="1675730547.946502" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23792.505789094615" data-prev-price="1675834995.352276">$1,675,834,995</span>
// </td>
// <td data-sort="34150266925.482838" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="484790.9942906678" data-prev-price="34146454386.334827">$34,146,454,386</span>
// </td>
// <td data-sort="62214738814.39668" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="883189.1462277095" data-prev-price="62207793154.85526">$62,207,793,155</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.55
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/xrp">
// <img loading="lazy" alt="xrp (XRP) 7d chart" src="https://www.coingecko.com/coins/44/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="6319" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 8
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/usdc">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="USDC" src="https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// USDC
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// USDC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="USDC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11335.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="USDC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.9994085637164742" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="6319" data-price-target="price" data-price-btc="1.4189006596846893e-05" data-prev-price="0.999408553897642">$0.9994</span>
// </td>
// <td data-sort="-0.06110893444021396" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="6319" data-24h="false" data-json="{&quot;usd&quot;:-0.061}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="6319"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="-0.01724348199501273" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="6319" data-24h="true" data-json="{&quot;usd&quot;:-0.017}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="6319"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="-0.06437283556924918" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="6319" data-24h="false" data-json="{&quot;usd&quot;:-0.064}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="6319"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="-0.03415825074019272" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="6319" data-24h="false" data-json="{&quot;usd&quot;:-0.034}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="6319"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="7290837952.117903" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="103510.96794132599" data-prev-price="7290837880.488024">$7,290,837,880</span>
// </td>
// <td data-sort="32496686167.748413" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="461317.06181947526" data-prev-price="32493058234.518333">$32,493,058,235</span>
// </td>
// <td data-sort="32497636408.626934" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="461330.5512666096" data-prev-price="32494008369.31187">$32,494,008,369</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/usdc">
// <img loading="lazy" alt="usdc (USDC) 7d chart" src="https://www.coingecko.com/coins/6319/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="5" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 9
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/dogecoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="DOGE" src="https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Dogecoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// DOGE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="DOGE" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11266.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="DOGE" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.21498589869827395" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="5" data-price-target="price" data-price-btc="3.052241541252448e-06" data-prev-price="0.21498589658611428">$0.215</span>
// </td>
// <td data-sort="-0.6730149913975094" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="5" data-24h="false" data-json="{&quot;usd&quot;:-0.673}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="5"><i class="fas fa-fw fa-caret-down"></i>0.7%</span>
// </td>
// <td data-sort="9.10459393609353" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5" data-24h="true" data-json="{&quot;usd&quot;:9.104}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="5"><i class="fas fa-fw fa-caret-up"></i>9.1%</span>
// </td>
// <td data-sort="36.37960373192225" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5" data-24h="false" data-json="{&quot;usd&quot;:36.379}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="5"><i class="fas fa-fw fa-caret-up"></i>36.4%</span>
// </td>
// <td data-sort="126.94263149573666" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5" data-24h="false" data-json="{&quot;usd&quot;:126.942}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="5"><i class="fas fa-fw fa-caret-up"></i>126.9%</span>
// </td>
// <td data-sort="6006571820.275849" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="85277.72352219617" data-prev-price="6006571761.263426">$6,006,571,761</span>
// </td>
// <td data-sort="30881102576.87843" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="438431.4724618873" data-prev-price="30881102273.48263">$30,881,102,273</span>
// </td>
// <td data-sort="30885183009.23572" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="438489.40400634025" data-prev-price="30885182705.799835">$30,885,182,706</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/dogecoin">
// <img loading="lazy" alt="dogecoin (DOGE) 7d chart" src="https://www.coingecko.com/coins/5/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="975" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 10
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/cardano">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ADA" src="https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Cardano
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ADA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ADA" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11197.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ADA" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.6492960973375349" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="975" data-price-target="price" data-price-btc="9.218318656555814e-06" data-prev-price="0.6492960909584327">$0.6493</span>
// </td>
// <td data-sort="0.49113201889841046" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="975" data-24h="false" data-json="{&quot;usd&quot;:0.491}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="975"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="0.9639527965667262" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="975" data-24h="true" data-json="{&quot;usd&quot;:0.963}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="975"><i class="fas fa-fw fa-caret-up"></i>1.0%</span>
// </td>
// <td data-sort="2.5402629993559973" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="975" data-24h="false" data-json="{&quot;usd&quot;:2.54}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="975"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="5.164159855547221" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="975" data-24h="false" data-json="{&quot;usd&quot;:5.164}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="975"><i class="fas fa-fw fa-caret-up"></i>5.2%</span>
// </td>
// <td data-sort="436731826.9174962" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="6200.457948990857" data-prev-price="436731822.626762">$436,731,823</span>
// </td>
// <td data-sort="22897437438.50649" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="325084.15743176214" data-prev-price="22897437213.547344">$22,897,437,214</span>
// </td>
// <td data-sort="29218324380.18907" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="414824.33954501164" data-prev-price="29218324093.129467">$29,218,324,093</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.78
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/cardano">
// <img loading="lazy" alt="cardano (ADA) 7d chart" src="https://www.coingecko.com/coins/975/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12559" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 11
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/avalanche">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AVAX" src="https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Avalanche
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AVAX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="AVAX" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11128.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="AVAX" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="54.24455747098773" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12559" data-price-target="price" data-price-btc="0.000770179877210518" data-prev-price="54.24793850579201">$54.25</span>
// </td>
// <td data-sort="0.21545401768813724" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12559" data-24h="false" data-json="{&quot;usd&quot;:0.215}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12559"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="0.46589634479756326" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12559" data-24h="true" data-json="{&quot;usd&quot;:0.465}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12559"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="-1.393764415227931" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12559" data-24h="false" data-json="{&quot;usd&quot;:-1.393}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12559"><i class="fas fa-fw fa-caret-down"></i>1.4%</span>
// </td>
// <td data-sort="38.363962032317964" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12559" data-24h="false" data-json="{&quot;usd&quot;:38.363}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12559"><i class="fas fa-fw fa-caret-up"></i>38.4%</span>
// </td>
// <td data-sort="509533189.6175986" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="7234.499232927746" data-prev-price="509564948.5539482">$509,564,949</span>
// </td>
// <td data-sort="20478491114.934196" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="290708.9449943206" data-prev-price="20476204894.178204">$20,476,204,894</span>
// </td>
// <td data-sort="23662967924.788963" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="335915.20011126326" data-prev-price="23660326188.729675">$23,660,326,189</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.87
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/avalanche">
// <img loading="lazy" alt="avalanche (AVAX) 7d chart" src="https://www.coingecko.com/coins/12559/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="11939" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 12
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/shiba-inu">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SHIB" src="https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Shiba Inu
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SHIB
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="SHIB" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -11059.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="SHIB" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3.103473443280917e-05" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="11939" data-price-target="price" data-price-btc="4.406126459042888e-10" data-prev-price="0.00003103473412790399">$0.00003103</span>
// </td>
// <td data-sort="-0.3636993352169916" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="11939" data-24h="false" data-json="{&quot;usd&quot;:-0.363}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="11939"><i class="fas fa-fw fa-caret-down"></i>0.2%</span>
// </td>
// <td data-sort="2.1432355241211933" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11939" data-24h="true" data-json="{&quot;usd&quot;:2.143}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="11939"><i class="fas fa-fw fa-caret-up"></i>2.1%</span>
// </td>
// <td data-sort="13.821765441558936" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11939" data-24h="false" data-json="{&quot;usd&quot;:13.821}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="11939"><i class="fas fa-fw fa-caret-up"></i>13.8%</span>
// </td>
// <td data-sort="186.91006201092964" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11939" data-24h="false" data-json="{&quot;usd&quot;:186.91}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="11939"><i class="fas fa-fw fa-caret-up"></i>186.9%</span>
// </td>
// <td data-sort="1592849986.3336468" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="22614.333901472695" data-prev-price="1592849970.6844647">$1,592,849,971</span>
// </td>
// <td data-sort="18288134039.24377" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="259615.03328661437" data-prev-price="18286092350.166466">$18,286,092,350</span>
// </td>
// <td data-sort="31034950665.751453" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="440566.52979729953" data-prev-price="31031485920.81613">$31,031,485,921</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.59
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/shiba-inu">
// <img loading="lazy" alt="shiba inu (SHIB) 7d chart" src="https://www.coingecko.com/coins/11939/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="17980" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 13
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/toncoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="TON" src="https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png?1696517498">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Toncoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// TON
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="TON" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10990.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="TON" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="4.89385464717111" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="17980" data-price-target="price" data-price-btc="6.94800288827824e-05" data-prev-price="4.893854599090736">$4.89</span>
// </td>
// <td data-sort="0.8053588763770054" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17980" data-24h="false" data-json="{&quot;usd&quot;:0.805}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="17980"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="0.11306188392320526" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17980" data-24h="true" data-json="{&quot;usd&quot;:0.113}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="17980"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="14.267690108614858" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17980" data-24h="false" data-json="{&quot;usd&quot;:14.267}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="17980"><i class="fas fa-fw fa-caret-up"></i>14.3%</span>
// </td>
// <td data-sort="126.09615987770597" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17980" data-24h="false" data-json="{&quot;usd&quot;:126.096}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="17980"><i class="fas fa-fw fa-caret-up"></i>126.1%</span>
// </td>
// <td data-sort="139906245.60795286" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1986.305414963898" data-prev-price="139906244.23342398">$139,906,244</span>
// </td>
// <td data-sort="16986922291.355333" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="240905.43884258135" data-prev-price="16968274319.728899">$16,968,274,320</span>
// </td>
// <td data-sort="24987202144.527252" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="354363.95097533264" data-prev-price="24959771593.62326">$24,959,771,594</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.68
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/toncoin">
// <img loading="lazy" alt="toncoin (TON) 7d chart" src="https://www.coingecko.com/coins/17980/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12171" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 14
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/polkadot">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="DOT" src="https://assets.coingecko.com/coins/images/12171/standard/polkadot.png?1696512008">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Polkadot
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// DOT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="DOT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10921.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="DOT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="9.444443270118214" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12171" data-price-target="price" data-price-btc="0.00013408657152678808" data-prev-price="9.444443177329932">$9.44</span>
// </td>
// <td data-sort="0.2515251866152046" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12171" data-24h="false" data-json="{&quot;usd&quot;:0.251}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12171"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="0.07096539987563852" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12171" data-24h="true" data-json="{&quot;usd&quot;:0.07}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12171"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="2.503085088343425" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12171" data-24h="false" data-json="{&quot;usd&quot;:2.503}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12171"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="14.217430273694273" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12171" data-24h="false" data-json="{&quot;usd&quot;:14.217}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12171"><i class="fas fa-fw fa-caret-up"></i>14.2%</span>
// </td>
// <td data-sort="259063554.08194032" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3678.029798145765" data-prev-price="259063551.53673342">$259,063,552</span>
// </td>
// <td data-sort="12714606596.992744" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="180514.39964669303" data-prev-price="12714606472.076279">$12,714,606,472</span>
// </td>
// <td data-sort="13479126090.438383" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="191368.59134541018" data-prev-price="13479125958.010784">$13,479,125,958</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/polkadot">
// <img loading="lazy" alt="polkadot (DOT) 7d chart" src="https://www.coingecko.com/coins/12171/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="780" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 15
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bitcoin-cash">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BCH" src="https://assets.coingecko.com/coins/images/780/standard/bitcoin-cash-circle.png?1696501932">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bitcoin Cash
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BCH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="BCH" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10848.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="BCH" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="575.2425345851083" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="780" data-price-target="price" data-price-btc="0.008166950348777048" data-prev-price="575.2425289335558">$575.24</span>
// </td>
// <td data-sort="-0.7479410718608573" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="780" data-24h="false" data-json="{&quot;usd&quot;:-0.747}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="780"><i class="fas fa-fw fa-caret-down"></i>0.7%</span>
// </td>
// <td data-sort="7.800964876306554" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="780" data-24h="true" data-json="{&quot;usd&quot;:7.8}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="780"><i class="fas fa-fw fa-caret-up"></i>7.8%</span>
// </td>
// <td data-sort="38.302339122775024" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="780" data-24h="false" data-json="{&quot;usd&quot;:38.302}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="780"><i class="fas fa-fw fa-caret-up"></i>38.3%</span>
// </td>
// <td data-sort="97.62751903634127" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="780" data-24h="false" data-json="{&quot;usd&quot;:97.627}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="780"><i class="fas fa-fw fa-caret-up"></i>97.6%</span>
// </td>
// <td data-sort="1120075109.6676958" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="15902.158233404543" data-prev-price="1120075098.6633577">$1,120,075,099</span>
// </td>
// <td data-sort="11323221301.540848" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="160742.39552286148" data-prev-price="11321957176.004496">$11,321,957,176</span>
// </td>
// <td data-sort="12081343653.441256" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="171504.56290426862" data-prev-price="12079994891.051203">$12,079,994,891</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bitcoin-cash">
// <img loading="lazy" alt="bitcoin cash (BCH) 7d chart" src="https://www.coingecko.com/coins/780/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="877" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 16
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/chainlink">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="LINK" src="https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Chainlink
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// LINK
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="LINK" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10775.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="LINK" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="19.039426701716494" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="877" data-price-target="price" data-price-btc="0.00027031042246249766" data-prev-price="19.039426514660924">$19.04</span>
// </td>
// <td data-sort="0.3008581614312257" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="877" data-24h="false" data-json="{&quot;usd&quot;:0.3}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="877"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="-1.1877466641752403" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="877" data-24h="true" data-json="{&quot;usd&quot;:-1.187}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="877"><i class="fas fa-fw fa-caret-down"></i>1.2%</span>
// </td>
// <td data-sort="3.4813789623300284" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="877" data-24h="false" data-json="{&quot;usd&quot;:3.481}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="877"><i class="fas fa-fw fa-caret-up"></i>3.5%</span>
// </td>
// <td data-sort="0.8216528816131423" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="877" data-24h="false" data-json="{&quot;usd&quot;:0.821}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="877"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="424017885.3991849" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="6019.952991734535" data-prev-price="424017881.2333606">$424,017,881</span>
// </td>
// <td data-sort="11180235310.339214" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="158712.5923299456" data-prev-price="11178987147.772943">$11,178,987,148</span>
// </td>
// <td data-sort="19043154244.11326" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="270333.1631515115" data-prev-price="19041028264.50626">$19,041,028,265</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.59
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/chainlink">
// <img loading="lazy" alt="chainlink (LINK) 7d chart" src="https://www.coingecko.com/coins/877/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="7598" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 17
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/wrapped-bitcoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="WBTC" src="https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Wrapped Bitcoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// WBTC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="WBTC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10702.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="WBTC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="70470.98897653786" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="7598" data-price-target="price" data-price-btc="1.0005050624702165" data-prev-price="70470.98828418557">$70,470.99</span>
// </td>
// <td data-sort="0.009914904581941393" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7598" data-24h="false" data-json="{&quot;usd&quot;:0.009}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="7598"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="1.7989345813606488" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7598" data-24h="true" data-json="{&quot;usd&quot;:1.798}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="7598"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="6.868234744847171" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7598" data-24h="false" data-json="{&quot;usd&quot;:6.868}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="7598"><i class="fas fa-fw fa-caret-up"></i>6.9%</span>
// </td>
// <td data-sort="23.725876401648353" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7598" data-24h="false" data-json="{&quot;usd&quot;:23.725}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="7598"><i class="fas fa-fw fa-caret-up"></i>23.7%</span>
// </td>
// <td data-sort="205617670.481761" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2919.2370255911437" data-prev-price="205617668.4616408">$205,617,668</span>
// </td>
// <td data-sort="10941321565.28244" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="155321.01614494793" data-prev-price="10940100075.070093">$10,940,100,075</span>
// </td>
// <td data-sort="10941321565.28244" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="155321.01614494793" data-prev-price="10940100075.070093">$10,940,100,075</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/wrapped-bitcoin">
// <img loading="lazy" alt="wrapped bitcoin (WBTC) 7d chart" src="https://www.coingecko.com/coins/7598/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="1094" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 18
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/tron">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="TRX" src="https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// TRON
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// TRX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="TRX" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10629.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="TRX" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.12051022389926058" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="1094" data-price-target="price" data-price-btc="1.7107412774779512e-06" data-prev-price="0.12049677012604837">$0.1205</span>
// </td>
// <td data-sort="0.03192843475038326" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1094" data-24h="false" data-json="{&quot;usd&quot;:0.031}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="1094"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="1.1016092332675071" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1094" data-24h="true" data-json="{&quot;usd&quot;:1.101}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="1094"><i class="fas fa-fw fa-caret-up"></i>1.1%</span>
// </td>
// <td data-sort="-0.5668276227385588" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="1094" data-24h="false" data-json="{&quot;usd&quot;:-0.566}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="1094"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="-15.915090693113875" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="1094" data-24h="false" data-json="{&quot;usd&quot;:-15.915}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="1094"><i class="fas fa-fw fa-caret-down"></i>15.9%</span>
// </td>
// <td data-sort="296732880.90538496" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4212.366148901544" data-prev-price="296699753.6174659">$296,699,754</span>
// </td>
// <td data-sort="10574792478.910812" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="150117.83572453482" data-prev-price="10573611908.041601">$10,573,611,908</span>
// </td>
// <td data-sort="10574806547.958693" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="150118.03544618635" data-prev-price="10573625975.51881">$10,573,625,976</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/tron">
// <img loading="lazy" alt="tron (TRX) 7d chart" src="https://www.coingecko.com/coins/1094/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12504" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 19
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/uniswap">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="UNI" src="https://assets.coingecko.com/coins/images/12504/standard/uni.jpg?1696512319">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Uniswap
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// UNI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="UNI" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10560.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="UNI" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="12.821474658321211" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12504" data-price-target="price" data-price-btc="0.0001820316486299747" data-prev-price="12.8214745323548">$12.82</span>
// </td>
// <td data-sort="0.44607777984624203" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12504" data-24h="false" data-json="{&quot;usd&quot;:0.446}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12504"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="4.158948144535353" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12504" data-24h="true" data-json="{&quot;usd&quot;:4.158}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12504"><i class="fas fa-fw fa-caret-up"></i>4.2%</span>
// </td>
// <td data-sort="5.668309746288483" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12504" data-24h="false" data-json="{&quot;usd&quot;:5.668}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12504"><i class="fas fa-fw fa-caret-up"></i>5.7%</span>
// </td>
// <td data-sort="17.791472809955746" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12504" data-24h="false" data-json="{&quot;usd&quot;:17.791}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12504"><i class="fas fa-fw fa-caret-up"></i>17.8%</span>
// </td>
// <td data-sort="193380805.6366404" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2745.5053183437385" data-prev-price="193380803.73674303">$193,380,804</span>
// </td>
// <td data-sort="9664400219.227743" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="137209.38907633114" data-prev-price="9664400124.278461">$9,664,400,124</span>
// </td>
// <td data-sort="12821474658.32121" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="182031.6486299747" data-prev-price="12821474532.354801">$12,821,474,532</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.75
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/uniswap">
// <img loading="lazy" alt="uniswap (UNI) 7d chart" src="https://www.coingecko.com/coins/12504/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4713" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 20
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/polygon">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="MATIC" src="https://assets.coingecko.com/coins/images/4713/standard/polygon.png?1698233745">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Polygon
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// MATIC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="MATIC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10491.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="MATIC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.9990392645988238" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4713" data-price-target="price" data-price-btc="1.418376350827752e-05" data-prev-price="0.9990392547836197">$0.999</span>
// </td>
// <td data-sort="0.47127328288575643" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4713" data-24h="false" data-json="{&quot;usd&quot;:0.471}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4713"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="-0.9665330713077642" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4713" data-24h="true" data-json="{&quot;usd&quot;:-0.966}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4713"><i class="fas fa-fw fa-caret-down"></i>1.0%</span>
// </td>
// <td data-sort="-0.7447412371759556" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4713" data-24h="false" data-json="{&quot;usd&quot;:-0.744}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4713"><i class="fas fa-fw fa-caret-down"></i>0.7%</span>
// </td>
// <td data-sort="-2.8468022214076916" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4713" data-24h="false" data-json="{&quot;usd&quot;:-2.846}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4713"><i class="fas fa-fw fa-caret-down"></i>2.8%</span>
// </td>
// <td data-sort="391169542.5640081" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="5553.591815629948" data-prev-price="391169538.72090703">$391,169,539</span>
// </td>
// <td data-sort="9275197016.675089" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="131669.01429401274" data-prev-price="9274161532.770706">$9,274,161,533</span>
// </td>
// <td data-sort="9991655072.04299" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="141839.7228799004" data-prev-price="9990539602.691057">$9,990,539,603</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.93
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/polygon">
// <img loading="lazy" alt="polygon (MATIC) 7d chart" src="https://www.coingecko.com/coins/4713/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="14495" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 21
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/internet-computer">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ICP" src="https://assets.coingecko.com/coins/images/14495/standard/Internet_Computer_logo.png?1696514180">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Internet Computer
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ICP
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ICP" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10418.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ICP" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="17.482279647105965" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="14495" data-price-target="price" data-price-btc="0.0002482029774872738" data-prev-price="17.48227947534881">$17.48</span>
// </td>
// <td data-sort="-1.856637224453779" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="14495" data-24h="false" data-json="{&quot;usd&quot;:-1.856}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="14495"><i class="fas fa-fw fa-caret-down"></i>1.9%</span>
// </td>
// <td data-sort="-3.7860652169912203" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="14495" data-24h="true" data-json="{&quot;usd&quot;:-3.786}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="14495"><i class="fas fa-fw fa-caret-down"></i>3.8%</span>
// </td>
// <td data-sort="35.84551489573817" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="14495" data-24h="false" data-json="{&quot;usd&quot;:35.845}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="14495"><i class="fas fa-fw fa-caret-up"></i>35.8%</span>
// </td>
// <td data-sort="35.64415104096579" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="14495" data-24h="false" data-json="{&quot;usd&quot;:35.644}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="14495"><i class="fas fa-fw fa-caret-up"></i>35.6%</span>
// </td>
// <td data-sort="459310935.11730516" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="6521.022657788868" data-prev-price="459310930.60473925">$459,310,931</span>
// </td>
// <td data-sort="8066299349.508267" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="114520.50626492738" data-prev-price="8066299270.259754">$8,066,299,270</span>
// </td>
// <td data-sort="9028205272.818695" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="128177.07274524999" data-prev-price="9028205184.1198">$9,028,205,184</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.89
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/internet-computer">
// <img loading="lazy" alt="internet computer (ICP) 7d chart" src="https://www.coingecko.com/coins/14495/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="10365" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 22
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/near">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="NEAR" src="https://assets.coingecko.com/coins/images/10365/standard/near.jpg?1696510367">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// NEAR Protocol
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// NEAR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="NEAR" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10341.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="NEAR" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="7.101473771787509" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="10365" data-price-target="price" data-price-btc="0.00010082248827298814" data-prev-price="7.101473702018065">$7.10</span>
// </td>
// <td data-sort="0.6576906282338555" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="10365" data-24h="false" data-json="{&quot;usd&quot;:0.657}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="10365"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="-2.4123753620383925" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="10365" data-24h="true" data-json="{&quot;usd&quot;:-2.412}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="10365"><i class="fas fa-fw fa-caret-down"></i>2.4%</span>
// </td>
// <td data-sort="10.51074457789999" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="10365" data-24h="false" data-json="{&quot;usd&quot;:10.51}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="10365"><i class="fas fa-fw fa-caret-up"></i>10.5%</span>
// </td>
// <td data-sort="82.01855690991795" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="10365" data-24h="false" data-json="{&quot;usd&quot;:82.018}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="10365"><i class="fas fa-fw fa-caret-up"></i>82.0%</span>
// </td>
// <td data-sort="345921311.5807441" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4911.184424672945" data-prev-price="345921308.1821907">$345,921,308</span>
// </td>
// <td data-sort="7379545328.907079" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="104770.38235915924" data-prev-price="7379545256.405678">$7,379,545,256</span>
// </td>
// <td data-sort="8402791646.637114" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="119297.82316723064" data-prev-price="8402791564.082682">$8,402,791,564</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.88
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/near">
// <img loading="lazy" alt="near protocol (NEAR) 7d chart" src="https://www.coingecko.com/coins/10365/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="2" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 23
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/litecoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="LTC" src="https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Litecoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// LTC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="LTC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10268.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="LTC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="94.47185361280654" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="2" data-price-target="price" data-price-btc="0.0013412550210133544" data-prev-price="94.47185268465432">$94.47</span>
// </td>
// <td data-sort="-0.17816799541736092" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="2" data-24h="false" data-json="{&quot;usd&quot;:-0.178}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="2"><i class="fas fa-fw fa-caret-down"></i>0.2%</span>
// </td>
// <td data-sort="-0.9535269709473696" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="2" data-24h="true" data-json="{&quot;usd&quot;:-0.953}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="2"><i class="fas fa-fw fa-caret-down"></i>1.0%</span>
// </td>
// <td data-sort="10.361178059368477" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2" data-24h="false" data-json="{&quot;usd&quot;:10.361}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="2"><i class="fas fa-fw fa-caret-up"></i>10.4%</span>
// </td>
// <td data-sort="27.578823158575734" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2" data-24h="false" data-json="{&quot;usd&quot;:27.578}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="2"><i class="fas fa-fw fa-caret-up"></i>27.6%</span>
// </td>
// <td data-sort="765107201.6552249" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="10862.5356292833" data-prev-price="765107194.1383198">$765,107,194</span>
// </td>
// <td data-sort="7024392103.415613" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="99716.99604963555" data-prev-price="7023607899.592444">$7,023,607,900</span>
// </td>
// <td data-sort="7934741102.3562155" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="112640.14529795403" data-prev-price="7933855267.081546">$7,933,855,267</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.89
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/litecoin">
// <img loading="lazy" alt="litecoin (LTC) 7d chart" src="https://www.coingecko.com/coins/2/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="26455" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 24
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/aptos">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="APT" src="https://assets.coingecko.com/coins/images/26455/standard/aptos_round.png?1696525528">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Aptos
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// APT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="APT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10199.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="APT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="17.12482190866129" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="26455" data-price-target="price" data-price-btc="0.00024314316218578935" data-prev-price="17.125889289825217">$17.13</span>
// </td>
// <td data-sort="0.05765247407340136" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="26455" data-24h="false" data-json="{&quot;usd&quot;:0.057}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="26455"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="-5.4674782063000515" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="26455" data-24h="true" data-json="{&quot;usd&quot;:-5.467}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="26455"><i class="fas fa-fw fa-caret-down"></i>5.4%</span>
// </td>
// <td data-sort="10.068611436710038" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26455" data-24h="false" data-json="{&quot;usd&quot;:10.068}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="26455"><i class="fas fa-fw fa-caret-up"></i>10.2%</span>
// </td>
// <td data-sort="71.36581831057671" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26455" data-24h="false" data-json="{&quot;usd&quot;:71.365}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="26455"><i class="fas fa-fw fa-caret-up"></i>71.5%</span>
// </td>
// <td data-sort="271371346.27613527" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3853.008668476858" data-prev-price="271388260.70975626">$271,388,261</span>
// </td>
// <td data-sort="6820651974.759521" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="96714.49820484829" data-prev-price="6812125720.860746">$6,812,125,721</span>
// </td>
// <td data-sort="18700135535.29404" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="265161.4876922937" data-prev-price="18676759162.462612">$18,676,759,162</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.36
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/aptos">
// <img loading="lazy" alt="aptos (APT) 7d chart" src="https://www.coingecko.com/coins/26455/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="8418" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 25
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/leo-token">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="LEO" src="https://assets.coingecko.com/coins/images/8418/standard/leo-token.png?1696508607">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// LEO Token
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// LEO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="6.012424641066768" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="8418" data-price-target="price" data-price-btc="8.536081838032275e-05" data-prev-price="6.012424581996843">$6.01</span>
// </td>
// <td data-sort="-0.6156566954897613" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="8418" data-24h="false" data-json="{&quot;usd&quot;:-0.615}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="8418"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="-0.6437928245975674" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="8418" data-24h="true" data-json="{&quot;usd&quot;:-0.643}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="8418"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="-0.48493280593335025" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="8418" data-24h="false" data-json="{&quot;usd&quot;:-0.484}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="8418"><i class="fas fa-fw fa-caret-down"></i>0.5%</span>
// </td>
// <td data-sort="36.99168562553036" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8418" data-24h="false" data-json="{&quot;usd&quot;:36.991}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="8418"><i class="fas fa-fw fa-caret-up"></i>37.0%</span>
// </td>
// <td data-sort="2529549.7372965775" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="35.91303818338677" data-prev-price="2529549.712444655">$2,529,550</span>
// </td>
// <td data-sort="5572379092.863071" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="79113.3141932897" data-prev-price="5572379038.116436">$5,572,379,038</span>
// </td>
// <td data-sort="5923678271.202001" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="84100.85036206327" data-prev-price="5923678213.003977">$5,923,678,213</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/leo-token">
// <img loading="lazy" alt="leo token (LEO) 7d chart" src="https://www.coingecko.com/coins/8418/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="2069" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 26
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/stacks">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="STX" src="https://assets.coingecko.com/coins/images/2069/standard/Stacks_Logo_png.png?1709979332">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Stacks
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// STX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="STX" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -10061.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="STX" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3.5556324344323134" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="2069" data-price-target="price" data-price-btc="5.048074821423629e-05" data-prev-price="3.555632399499494">$3.56</span>
// </td>
// <td data-sort="0.29573685619135526" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2069" data-24h="false" data-json="{&quot;usd&quot;:0.295}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="2069"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="3.952668758219159" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2069" data-24h="true" data-json="{&quot;usd&quot;:3.952}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="2069"><i class="fas fa-fw fa-caret-up"></i>4.0%</span>
// </td>
// <td data-sort="6.083065236284056" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2069" data-24h="false" data-json="{&quot;usd&quot;:6.083}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="2069"><i class="fas fa-fw fa-caret-up"></i>6.1%</span>
// </td>
// <td data-sort="20.002786473214385" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2069" data-24h="false" data-json="{&quot;usd&quot;:20.002}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="2069"><i class="fas fa-fw fa-caret-up"></i>20.0%</span>
// </td>
// <td data-sort="104052013.06708975" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1477.2684099622936" data-prev-price="104052012.04481588">$104,052,012</span>
// </td>
// <td data-sort="5158200146.521041" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="73233.04858893235" data-prev-price="5158200095.843566">$5,158,200,096</span>
// </td>
// <td data-sort="6464139765.797945" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="91774.00025348157" data-prev-price="6464139702.29008">$6,464,139,702</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.8
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/stacks">
// <img loading="lazy" alt="stacks (STX) 7d chart" src="https://www.coingecko.com/coins/2069/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12817" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 27
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/filecoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FIL" src="https://assets.coingecko.com/coins/images/12817/standard/filecoin.png?1696512609">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Filecoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FIL
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="9.442103394798071" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12817" data-price-target="price" data-price-btc="0.00013405335137283038" data-prev-price="9.442103302032777">$9.44</span>
// </td>
// <td data-sort="0.8388792406598002" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12817" data-24h="false" data-json="{&quot;usd&quot;:0.838}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12817"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="4.117331128894614" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12817" data-24h="true" data-json="{&quot;usd&quot;:4.117}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12817"><i class="fas fa-fw fa-caret-up"></i>4.1%</span>
// </td>
// <td data-sort="4.80271413716628" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12817" data-24h="false" data-json="{&quot;usd&quot;:4.802}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12817"><i class="fas fa-fw fa-caret-up"></i>4.8%</span>
// </td>
// <td data-sort="17.61658459776793" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12817" data-24h="false" data-json="{&quot;usd&quot;:17.616}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12817"><i class="fas fa-fw fa-caret-up"></i>17.6%</span>
// </td>
// <td data-sort="239958542.41516224" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3406.7882394736152" data-prev-price="239958540.05765525">$239,958,540</span>
// </td>
// <td data-sort="4981703699.822421" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="70727.25732653408" data-prev-price="4981703650.878962">$4,981,703,651</span>
// </td>
// <td data-sort="18514143318.80154" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="262852.7623463205" data-prev-price="18514143136.906696">$18,514,143,137</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.27
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/filecoin">
// <img loading="lazy" alt="filecoin (FIL) 7d chart" src="https://www.coingecko.com/coins/12817/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="9956" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 28
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/dai">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="DAI" src="https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Dai
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// DAI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="DAI" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9923.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="DAI" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.9986657944250438" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="9956" data-price-target="price" data-price-btc="1.4167295334899457e-05" data-prev-price="0.9978793121739119">$0.9979</span>
// </td>
// <td data-sort="0.042144205315807884" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="9956" data-24h="false" data-json="{&quot;usd&quot;:0.042}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="9956"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="0.3173701318027485" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="9956" data-24h="true" data-json="{&quot;usd&quot;:0.317}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="9956"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="0.018890805220337134" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="9956" data-24h="false" data-json="{&quot;usd&quot;:0.018}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="9956"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="-0.02928871982870991" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="9956" data-24h="false" data-json="{&quot;usd&quot;:-0.029}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="9956"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="734554864.397067" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="10420.55887134057" data-prev-price="733976378.2142459">$733,976,378</span>
// </td>
// <td data-sort="4831853204.203036" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="68545.7454745764" data-prev-price="4828047960.440415">$4,828,047,960</span>
// </td>
// <td data-sort="4831853204.203036" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="68545.7454745764" data-prev-price="4828047960.440415">$4,828,047,960</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/dai">
// <img loading="lazy" alt="dai (DAI) 7d chart" src="https://www.coingecko.com/coins/9956/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="1481" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 29
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/cosmos-hub">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ATOM" src="https://assets.coingecko.com/coins/images/1481/standard/cosmos_hub.png?1696502525">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Cosmos Hub
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ATOM
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ATOM" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9850.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ATOM" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="12.234920284865083" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="1481" data-price-target="price" data-price-btc="0.0001737040995409122" data-prev-price="12.23492016466136">$12.23</span>
// </td>
// <td data-sort="0.47068725197566874" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1481" data-24h="false" data-json="{&quot;usd&quot;:0.47}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="1481"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="-1.2529403323152313" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="1481" data-24h="true" data-json="{&quot;usd&quot;:-1.252}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="1481"><i class="fas fa-fw fa-caret-down"></i>1.3%</span>
// </td>
// <td data-sort="4.853402606346446" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1481" data-24h="false" data-json="{&quot;usd&quot;:4.853}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="1481"><i class="fas fa-fw fa-caret-up"></i>4.9%</span>
// </td>
// <td data-sort="9.635298416200042" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1481" data-24h="false" data-json="{&quot;usd&quot;:9.635}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="1481"><i class="fas fa-fw fa-caret-up"></i>9.6%</span>
// </td>
// <td data-sort="246527920.74647012" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3500.0563541008128" data-prev-price="246527918.32442135">$246,527,918</span>
// </td>
// <td data-sort="4780780220.566688" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="67867.08876012437" data-prev-price="4780246493.794107">$4,780,246,494</span>
// </td>
// <td data-sort="4783737433.123008" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="67909.0688131247" data-prev-price="4783203376.206927">$4,783,203,376</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/cosmos-hub">
// <img loading="lazy" alt="cosmos hub (ATOM) 7d chart" src="https://www.coingecko.com/coins/1481/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="453" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 30
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ethereum-classic">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ETC" src="https://assets.coingecko.com/coins/images/453/standard/ethereum-classic-logo.png?1696501717">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ethereum Classic
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ETC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ETC" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9773.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ETC" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="32.40839270927321" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="453" data-price-target="price" data-price-btc="0.0004601150266664483" data-prev-price="32.40839239087233">$32.41</span>
// </td>
// <td data-sort="0.16087956237497023" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="453" data-24h="false" data-json="{&quot;usd&quot;:0.16}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="453"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="0.9002893950437392" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="453" data-24h="true" data-json="{&quot;usd&quot;:0.9}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="453"><i class="fas fa-fw fa-caret-up"></i>0.9%</span>
// </td>
// <td data-sort="6.569081104283894" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="453" data-24h="false" data-json="{&quot;usd&quot;:6.569}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="453"><i class="fas fa-fw fa-caret-up"></i>6.6%</span>
// </td>
// <td data-sort="15.825410371937771" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="453" data-24h="false" data-json="{&quot;usd&quot;:15.825}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="453"><i class="fas fa-fw fa-caret-up"></i>15.8%</span>
// </td>
// <td data-sort="180660854.38175228" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2564.915038432569" data-prev-price="180660852.60682392">$180,660,853</span>
// </td>
// <td data-sort="4744551932.879926" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="67352.79856006715" data-prev-price="4744022250.636934">$4,744,022,251</span>
// </td>
// <td data-sort="6834344926.203775" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="97019.12079719022" data-prev-price="6833581939.266104">$6,833,581,939</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.69
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ethereum-classic">
// <img loading="lazy" alt="ethereum classic (ETC) 7d chart" src="https://www.coingecko.com/coins/453/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="16547" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 31
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/arbitrum">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ARB" src="https://assets.coingecko.com/coins/images/16547/standard/photo_2023-03-29_21.47.00.jpeg?1696516109">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Arbitrum
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ARB
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ARB" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9700.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ARB" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.6563457459415316" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="16547" data-price-target="price" data-price-btc="2.351580881839533e-05" data-prev-price="1.656345729668526">$1.66</span>
// </td>
// <td data-sort="0.3694782788082271" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16547" data-24h="false" data-json="{&quot;usd&quot;:0.369}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="16547"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="-0.009782679448901481" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="16547" data-24h="true" data-json="{&quot;usd&quot;:-0.009}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="16547"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="-0.6720422233749296" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="16547" data-24h="false" data-json="{&quot;usd&quot;:-0.672}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="16547"><i class="fas fa-fw fa-caret-down"></i>0.7%</span>
// </td>
// <td data-sort="-10.96208818652037" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="16547" data-24h="false" data-json="{&quot;usd&quot;:-10.962}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="16547"><i class="fas fa-fw fa-caret-down"></i>11.0%</span>
// </td>
// <td data-sort="351147715.7681892" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4985.385793548232" data-prev-price="351147712.31828827">$351,147,712</span>
// </td>
// <td data-sort="4406682194.482919" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="62494.76448373133" data-prev-price="4401844609.244113">$4,401,844,609</span>
// </td>
// <td data-sort="16604306115.84352" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="235479.2459108076" data-prev-price="16586078174.135542">$16,586,078,174</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.27
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/arbitrum">
// <img loading="lazy" alt="arbitrum (ARB) 7d chart" src="https://www.coingecko.com/coins/16547/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="17233" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 33
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/immutable-x">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="IMX" src="https://assets.coingecko.com/coins/images/17233/standard/immutableX-symbol-BLK-RGB.png?1696516787">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Immutable
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// IMX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="IMX" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9631.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="IMX" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="2.9411051479694623" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="17233" data-price-target="price" data-price-btc="4.175605639336704e-05" data-prev-price="2.9411051190741544">$2.94</span>
// </td>
// <td data-sort="0.7679038768814319" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17233" data-24h="false" data-json="{&quot;usd&quot;:0.767}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="17233"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="-1.0317363461233373" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="17233" data-24h="true" data-json="{&quot;usd&quot;:-1.031}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="17233"><i class="fas fa-fw fa-caret-down"></i>1.0%</span>
// </td>
// <td data-sort="3.2771288042211113" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="17233" data-24h="false" data-json="{&quot;usd&quot;:3.277}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="17233"><i class="fas fa-fw fa-caret-up"></i>3.3%</span>
// </td>
// <td data-sort="-11.799603401448296" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="17233" data-24h="false" data-json="{&quot;usd&quot;:-11.799}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="17233"><i class="fas fa-fw fa-caret-down"></i>11.8%</span>
// </td>
// <td data-sort="60816636.93499479" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="863.438331426476" data-prev-price="60816636.337493055">$60,816,636</span>
// </td>
// <td data-sort="4188882981.6684465" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="59405.97570594661" data-prev-price="4184284492.9222918">$4,184,284,493</span>
// </td>
// <td data-sort="5887314466.316988" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="83492.82175936834" data-prev-price="5880851466.649318">$5,880,851,467</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.71
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/immutable-x">
// <img loading="lazy" alt="immutable (IMX) 7d chart" src="https://www.coingecko.com/coins/17233/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="11636" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 32
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/render">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="RNDR" src="https://assets.coingecko.com/coins/images/11636/standard/rndr.png?1696511529">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Render
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// RNDR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="RNDR" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9562.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="RNDR" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="10.966228837706261" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="11636" data-price-target="price" data-price-btc="0.00015569197520393617" data-prev-price="10.966228729966979">$10.97</span>
// </td>
// <td data-sort="-0.4569407545522703" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="11636" data-24h="false" data-json="{&quot;usd&quot;:-0.456}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="11636"><i class="fas fa-fw fa-caret-down"></i>0.5%</span>
// </td>
// <td data-sort="-1.112964594444627" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="11636" data-24h="true" data-json="{&quot;usd&quot;:-1.112}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="11636"><i class="fas fa-fw fa-caret-down"></i>1.1%</span>
// </td>
// <td data-sort="0.3292110026632967" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11636" data-24h="false" data-json="{&quot;usd&quot;:0.329}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="11636"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="50.16700636300884" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11636" data-24h="false" data-json="{&quot;usd&quot;:50.167}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="11636"><i class="fas fa-fw fa-caret-up"></i>50.2%</span>
// </td>
// <td data-sort="271588556.3141994" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3855.8523081292433" data-prev-price="271588553.6459388">$271,588,554</span>
// </td>
// <td data-sort="4187571373.922393" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="59452.64029797568" data-prev-price="4187571332.7810006">$4,187,571,333</span>
// </td>
// <td data-sort="5834750588.388014" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="82838.30817071188" data-prev-price="5834750531.063675">$5,834,750,531</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.72
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/render">
// <img loading="lazy" alt="render (RNDR) 7d chart" src="https://www.coingecko.com/coins/11636/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="7310" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 34
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/cronos">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="CRO" src="https://assets.coingecko.com/coins/images/7310/standard/cro_token_logo.png?1696507599">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Cronos
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// CRO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="CRO" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9493.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="CRO" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.1534606245208197" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="7310" data-price-target="price" data-price-btc="2.178742400990557e-06" data-prev-price="0.15346062301312388">$0.1535</span>
// </td>
// <td data-sort="1.0731460820971375" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7310" data-24h="false" data-json="{&quot;usd&quot;:1.073}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="7310"><i class="fas fa-fw fa-caret-up"></i>1.1%</span>
// </td>
// <td data-sort="3.473998749720801" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7310" data-24h="true" data-json="{&quot;usd&quot;:3.473}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="7310"><i class="fas fa-fw fa-caret-up"></i>3.5%</span>
// </td>
// <td data-sort="10.247078227388949" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7310" data-24h="false" data-json="{&quot;usd&quot;:10.247}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="7310"><i class="fas fa-fw fa-caret-up"></i>10.2%</span>
// </td>
// <td data-sort="51.76294820877519" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="7310" data-24h="false" data-json="{&quot;usd&quot;:51.762}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="7310"><i class="fas fa-fw fa-caret-up"></i>51.8%</span>
// </td>
// <td data-sort="26186668.171482902" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="371.78269320896214" data-prev-price="26186667.914208237">$26,186,668</span>
// </td>
// <td data-sort="4084962318.5373993" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="57995.85814039659" data-prev-price="4084962278.404104">$4,084,962,278</span>
// </td>
// <td data-sort="4603818735.624591" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="65362.27202971671" data-prev-price="4603818690.393717">$4,603,818,690</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.89
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/cronos">
// <img loading="lazy" alt="cronos (CRO) 7d chart" src="https://www.coingecko.com/coins/7310/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="100" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 35
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/stellar">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="XLM" src="https://assets.coingecko.com/coins/images/100/standard/Stellar_symbol_black_RGB.png?1696501482">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Stellar
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// XLM
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="XLM" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9424.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="XLM" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.13945368054565294" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="100" data-price-target="price" data-price-btc="1.979880166184163e-06" data-prev-price="0.13945367917557033">$0.1395</span>
// </td>
// <td data-sort="1.116488578664997" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="100" data-24h="false" data-json="{&quot;usd&quot;:1.116}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="100"><i class="fas fa-fw fa-caret-up"></i>1.1%</span>
// </td>
// <td data-sort="3.2910683959370064" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="100" data-24h="true" data-json="{&quot;usd&quot;:3.291}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="100"><i class="fas fa-fw fa-caret-up"></i>3.3%</span>
// </td>
// <td data-sort="5.0483549826033425" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="100" data-24h="false" data-json="{&quot;usd&quot;:5.048}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="100"><i class="fas fa-fw fa-caret-up"></i>5.0%</span>
// </td>
// <td data-sort="15.280413630453399" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="100" data-24h="false" data-json="{&quot;usd&quot;:15.28}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="100"><i class="fas fa-fw fa-caret-up"></i>15.3%</span>
// </td>
// <td data-sort="102049242.87203322" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1448.8342734726575" data-prev-price="102049241.86943586">$102,049,242</span>
// </td>
// <td data-sort="4015714099.057687" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="57006.348884978855" data-prev-price="4015265784.341924">$4,015,265,784</span>
// </td>
// <td data-sort="6969018357.258478" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="98930.92039418916" data-prev-price="6968240335.365757">$6,968,240,335</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.58
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/stellar">
// <img loading="lazy" alt="stellar (XLM) 7d chart" src="https://www.coingecko.com/coins/100/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4463" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 38
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/okb">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="OKB" src="https://assets.coingecko.com/coins/images/4463/standard/WeChat_Image_20220118095654.png?1696505053">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// OKB
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// OKB
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="64.63885368950767" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4463" data-price-target="price" data-price-btc="0.0009177038847880417" data-prev-price="64.63885305445403">$64.64</span>
// </td>
// <td data-sort="1.8124469654482895" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4463" data-24h="false" data-json="{&quot;usd&quot;:1.812}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4463"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="1.1838388524546632" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4463" data-24h="true" data-json="{&quot;usd&quot;:1.183}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4463"><i class="fas fa-fw fa-caret-up"></i>1.2%</span>
// </td>
// <td data-sort="8.314556474213973" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4463" data-24h="false" data-json="{&quot;usd&quot;:8.314}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4463"><i class="fas fa-fw fa-caret-up"></i>8.3%</span>
// </td>
// <td data-sort="26.32923751421576" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4463" data-24h="false" data-json="{&quot;usd&quot;:26.329}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4463"><i class="fas fa-fw fa-caret-up"></i>26.3%</span>
// </td>
// <td data-sort="12025165.327665905" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="170.7261237865791" data-prev-price="12025165.209522948">$12,025,165</span>
// </td>
// <td data-sort="3878331221.37046" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="55062.233087282504" data-prev-price="3878331183.2672415">$3,878,331,183</span>
// </td>
// <td data-sort="15252034297.021595" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="216539.2844454042" data-prev-price="15252034147.175806">$15,252,034,147</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.25
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/okb">
// <img loading="lazy" alt="okb (OKB) 7d chart" src="https://www.coingecko.com/coins/4463/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="3688" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 36
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/hedera">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="HBAR" src="https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Hedera
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// HBAR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="HBAR" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9286.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="HBAR" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.11497151230601688" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="3688" data-price-target="price" data-price-btc="1.6321147324428306e-06" data-prev-price="0.11495867687511001">$0.115</span>
// </td>
// <td data-sort="0.24395447431970868" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3688" data-24h="false" data-json="{&quot;usd&quot;:0.243}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="3688"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="1.7363090150298313" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3688" data-24h="true" data-json="{&quot;usd&quot;:1.736}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="3688"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="4.039696048329708" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3688" data-24h="false" data-json="{&quot;usd&quot;:4.039}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="3688"><i class="fas fa-fw fa-caret-up"></i>4.0%</span>
// </td>
// <td data-sort="4.899217650328866" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3688" data-24h="false" data-json="{&quot;usd&quot;:4.899}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="3688"><i class="fas fa-fw fa-caret-up"></i>4.9%</span>
// </td>
// <td data-sort="60640498.68698256" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="860.8415189518629" data-prev-price="60633728.77576331">$60,633,729</span>
// </td>
// <td data-sort="3874643286.3312016" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="55003.733218275745" data-prev-price="3874210720.7748046">$3,874,210,721</span>
// </td>
// <td data-sort="5748575615.300845" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="81605.73662214154" data-prev-price="5747933843.755502">$5,747,933,844</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.67
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/hedera">
// <img loading="lazy" alt="hedera (HBAR) 7d chart" src="https://www.coingecko.com/coins/3688/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13397" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 37
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/the-graph">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="GRT" src="https://assets.coingecko.com/coins/images/13397/standard/Graph_Token.png?1696513159">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// The Graph
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// GRT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="GRT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9217.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="GRT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.4060418115359306" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13397" data-price-target="price" data-price-btc="5.764739418536175e-06" data-prev-price="0.40604180754671476">$0.406</span>
// </td>
// <td data-sort="0.01794286033194889" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13397" data-24h="false" data-json="{&quot;usd&quot;:0.017}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13397"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="-0.3423839216242499" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="13397" data-24h="true" data-json="{&quot;usd&quot;:-0.342}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13397"><i class="fas fa-fw fa-caret-down"></i>0.3%</span>
// </td>
// <td data-sort="7.003569464222653" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13397" data-24h="false" data-json="{&quot;usd&quot;:7.003}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13397"><i class="fas fa-fw fa-caret-up"></i>7.0%</span>
// </td>
// <td data-sort="43.820522683718444" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13397" data-24h="false" data-json="{&quot;usd&quot;:43.82}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13397"><i class="fas fa-fw fa-caret-up"></i>43.8%</span>
// </td>
// <td data-sort="156770975.86583245" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2225.740794618082" data-prev-price="156770974.3256136">$156,770,974</span>
// </td>
// <td data-sort="3839802242.281059" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="54515.22162638772" data-prev-price="3839802204.5563726">$3,839,802,205</span>
// </td>
// <td data-sort="4380380816.544204" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="62190.0337450778" data-prev-price="4380380773.508526">$4,380,380,774</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.88
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/the-graph">
// <img loading="lazy" alt="the graph (GRT) 7d chart" src="https://www.coingecko.com/coins/13397/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="30980" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 39
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/mantle">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="MNT" src="https://assets.coingecko.com/coins/images/30980/standard/token-logo.png?1696529819">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Mantle
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// MNT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="MNT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9148.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="MNT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.1722867951248401" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="30980" data-price-target="price" data-price-btc="1.6644466136674722e-05" data-prev-price="1.1723598631456646">$1.17</span>
// </td>
// <td data-sort="0.22086462794769648" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30980" data-24h="false" data-json="{&quot;usd&quot;:0.22}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="30980"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="-1.4832399198486188" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="30980" data-24h="true" data-json="{&quot;usd&quot;:-1.483}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="30980"><i class="fas fa-fw fa-caret-down"></i>1.7%</span>
// </td>
// <td data-sort="40.77554870984111" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30980" data-24h="false" data-json="{&quot;usd&quot;:40.775}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="30980"><i class="fas fa-fw fa-caret-up"></i>40.8%</span>
// </td>
// <td data-sort="34.74655655420999" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30980" data-24h="false" data-json="{&quot;usd&quot;:34.746}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="30980"><i class="fas fa-fw fa-caret-up"></i>34.7%</span>
// </td>
// <td data-sort="208374442.93328524" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2958.560459415717" data-prev-price="208387430.80297625">$208,387,431</span>
// </td>
// <td data-sort="3804695630.8105264" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="53959.12197585779" data-prev-price="3800633095.446042">$3,800,633,095</span>
// </td>
// <td data-sort="7317416836.222049" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="103777.39139406182" data-prev-price="7309603526.680782">$7,309,603,527</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.52
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/mantle">
// <img loading="lazy" alt="mantle (MNT) 7d chart" src="https://www.coingecko.com/coins/30980/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="33566" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 40
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/dogwifhat">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="WIF" src="https://assets.coingecko.com/coins/images/33566/standard/dogwifhat.jpg?1702499428">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// dogwifhat
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// WIF
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="WIF" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9079.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="WIF" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3.746397488778745" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="33566" data-price-target="price" data-price-btc="5.3189116656171385e-05" data-prev-price="3.7463974519717276">$3.75</span>
// </td>
// <td data-sort="-0.6386234791377795" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="33566" data-24h="false" data-json="{&quot;usd&quot;:-0.638}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="33566"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="20.94239330406876" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33566" data-24h="true" data-json="{&quot;usd&quot;:20.942}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="33566"><i class="fas fa-fw fa-caret-up"></i>20.9%</span>
// </td>
// <td data-sort="61.18519853927741" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33566" data-24h="false" data-json="{&quot;usd&quot;:61.185}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="33566"><i class="fas fa-fw fa-caret-up"></i>61.2%</span>
// </td>
// <td data-sort="524.4406816444683" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33566" data-24h="false" data-json="{&quot;usd&quot;:524.44}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="33566"><i class="fas fa-fw fa-caret-up"></i>524.4%</span>
// </td>
// <td data-sort="735140691.13229" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="10437.088989209253" data-prev-price="735140683.9097953">$735,140,684</span>
// </td>
// <td data-sort="3755513401.715172" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="53261.60759985622" data-prev-price="3751503381.6014194">$3,751,503,382</span>
// </td>
// <td data-sort="3755513401.715172" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="53261.60759985622" data-prev-price="3751503381.6014194">$3,751,503,382</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/dogwifhat">
// <img loading="lazy" alt="dogwifhat (WIF) 7d chart" src="https://www.coingecko.com/coins/33566/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="25244" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 41
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/optimism">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="OP" src="https://assets.coingecko.com/coins/images/25244/standard/Optimism.png?1696524385">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Optimism
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// OP
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="OP" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -9010.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="OP" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3.7064610373805658" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="25244" data-price-target="price" data-price-btc="5.2622122743055214e-05" data-prev-price="3.70646100096591">$3.71</span>
// </td>
// <td data-sort="0.7521176771988536" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="25244" data-24h="false" data-json="{&quot;usd&quot;:0.752}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="25244"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="1.318348429055158" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="25244" data-24h="true" data-json="{&quot;usd&quot;:1.318}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="25244"><i class="fas fa-fw fa-caret-up"></i>1.3%</span>
// </td>
// <td data-sort="7.542079720476531" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="25244" data-24h="false" data-json="{&quot;usd&quot;:7.542}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="25244"><i class="fas fa-fw fa-caret-up"></i>7.5%</span>
// </td>
// <td data-sort="-0.843273404618563" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="25244" data-24h="false" data-json="{&quot;usd&quot;:-0.843}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="25244"><i class="fas fa-fw fa-caret-down"></i>0.8%</span>
// </td>
// <td data-sort="213580709.37608117" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3032.291501512676" data-prev-price="213580707.27772698">$213,580,707</span>
// </td>
// <td data-sort="3724789701.476748" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="52816.236370073944" data-prev-price="3720133474.6480155">$3,720,133,475</span>
// </td>
// <td data-sort="15900197300.579" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="225459.32690515267" data-prev-price="15880321030.725769">$15,880,321,031</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.23
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/optimism">
// <img loading="lazy" alt="optimism (OP) 7d chart" src="https://www.coingecko.com/coins/25244/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="1364" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 42
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/maker">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="MKR" src="https://assets.coingecko.com/coins/images/1364/standard/Mark_Maker.png?1696502423">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Maker
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// MKR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="MKR" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8941.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="MKR" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="3813.3924792397797" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="1364" data-price-target="price" data-price-btc="0.05414027156530322" data-prev-price="3813.39244177456">$3,813.39</span>
// </td>
// <td data-sort="2.804760801181419" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1364" data-24h="false" data-json="{&quot;usd&quot;:2.804}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="1364"><i class="fas fa-fw fa-caret-up"></i>2.8%</span>
// </td>
// <td data-sort="13.732629215541126" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1364" data-24h="true" data-json="{&quot;usd&quot;:13.732}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="1364"><i class="fas fa-fw fa-caret-up"></i>13.7%</span>
// </td>
// <td data-sort="16.443023631592947" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1364" data-24h="false" data-json="{&quot;usd&quot;:16.443}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="1364"><i class="fas fa-fw fa-caret-up"></i>16.4%</span>
// </td>
// <td data-sort="77.60111623809051" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1364" data-24h="false" data-json="{&quot;usd&quot;:77.601}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="1364"><i class="fas fa-fw fa-caret-up"></i>77.6%</span>
// </td>
// <td data-sort="273277435.71679676" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3879.830010397093" data-prev-price="273277433.03194356">$273,277,433</span>
// </td>
// <td data-sort="3525457844.174937" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="50052.347382221276" data-prev-price="3525457809.538572">$3,525,457,810</span>
// </td>
// <td data-sort="3728090843.779904" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="52929.20983119006" data-prev-price="3728090807.1527424">$3,728,090,807</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.95
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/maker">
// <img loading="lazy" alt="maker (MKR) 7d chart" src="https://www.coingecko.com/coins/1364/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="28452" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 43
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bittensor">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="TAO" src="https://assets.coingecko.com/coins/images/28452/standard/ARUsPeNQ_400x400.jpeg?1696527447">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bittensor
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// TAO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="TAO" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8872.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="TAO" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="522.284266145195" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="28452" data-price-target="price" data-price-btc="0.007415542696312594" data-prev-price="522.3168198494539">$522.32</span>
// </td>
// <td data-sort="-0.5737800549705968" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28452" data-24h="false" data-json="{&quot;usd&quot;:-0.573}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="28452"><i class="fas fa-fw fa-caret-down"></i>0.8%</span>
// </td>
// <td data-sort="-4.070945634483207" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28452" data-24h="true" data-json="{&quot;usd&quot;:-4.07}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="28452"><i class="fas fa-fw fa-caret-down"></i>3.9%</span>
// </td>
// <td data-sort="-16.736780455723498" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28452" data-24h="false" data-json="{&quot;usd&quot;:-16.736}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="28452"><i class="fas fa-fw fa-caret-down"></i>16.7%</span>
// </td>
// <td data-sort="-13.420689088674548" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28452" data-24h="false" data-json="{&quot;usd&quot;:-13.42}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="28452"><i class="fas fa-fw fa-caret-down"></i>13.4%</span>
// </td>
// <td data-sort="28050130.19692624" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="398.26384135149846" data-prev-price="28051878.546823114">$28,051,879</span>
// </td>
// <td data-sort="3397864088.668524" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="48180.54366649267" data-prev-price="3393616539.8944893">$3,393,616,540</span>
// </td>
// <td data-sort="10976792697.419418" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="155647.14363937214" data-prev-price="10963071000.156645">$10,963,071,000</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.31
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bittensor">
// <img loading="lazy" alt="bittensor (TAO) 7d chart" src="https://www.coingecko.com/coins/28452/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12882" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 44
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/injective">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="INJ" src="https://assets.coingecko.com/coins/images/12882/standard/Secondary_Symbol.png?1696512670">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Injective
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// INJ
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="INJ" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8803.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="INJ" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="38.208626520195715" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12882" data-price-target="price" data-price-btc="0.0005424632862214682" data-prev-price="38.20862614480961">$38.21</span>
// </td>
// <td data-sort="0.7294929409813364" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12882" data-24h="false" data-json="{&quot;usd&quot;:0.729}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12882"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="0.21139749151339562" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12882" data-24h="true" data-json="{&quot;usd&quot;:0.211}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12882"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="2.5798345887812633" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12882" data-24h="false" data-json="{&quot;usd&quot;:2.579}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12882"><i class="fas fa-fw fa-caret-up"></i>2.6%</span>
// </td>
// <td data-sort="-6.029977570023286" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12882" data-24h="false" data-json="{&quot;usd&quot;:-6.029}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12882"><i class="fas fa-fw fa-caret-down"></i>6.0%</span>
// </td>
// <td data-sort="142207369.38247463" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2018.9753975938581" data-prev-price="142207367.985338">$142,207,368</span>
// </td>
// <td data-sort="3377345410.2970734" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="47949.53540155044" data-prev-price="3377345377.115862">$3,377,345,377</span>
// </td>
// <td data-sort="3820862652.019571" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="54246.32862214682" data-prev-price="3820862614.4809613">$3,820,862,614</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.88
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/injective">
// <img loading="lazy" alt="injective (INJ) 7d chart" src="https://www.coingecko.com/coins/12882/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="5681" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 45
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/fetch-ai">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FET" src="https://assets.coingecko.com/coins/images/5681/standard/Fetch.jpg?1696506140">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Fetch.ai
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FET
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3.205237133056458" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="5681" data-price-target="price" data-price-btc="4.5506044751382424e-05" data-prev-price="3.2052371015661483">$3.21</span>
// </td>
// <td data-sort="-0.6484705772811851" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="5681" data-24h="false" data-json="{&quot;usd&quot;:-0.648}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="5681"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="2.9409967418327576" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5681" data-24h="true" data-json="{&quot;usd&quot;:2.94}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="5681"><i class="fas fa-fw fa-caret-up"></i>2.9%</span>
// </td>
// <td data-sort="28.21726202568297" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5681" data-24h="false" data-json="{&quot;usd&quot;:28.217}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="5681"><i class="fas fa-fw fa-caret-up"></i>28.2%</span>
// </td>
// <td data-sort="189.8634820780126" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="5681" data-24h="false" data-json="{&quot;usd&quot;:189.863}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="5681"><i class="fas fa-fw fa-caret-up"></i>189.9%</span>
// </td>
// <td data-sort="769537909.1210356" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="10925.440170772623" data-prev-price="769537901.5606004">$769,537,902</span>
// </td>
// <td data-sort="3344545729.54925" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="47483.865100733026" data-prev-price="3344545696.690283">$3,344,545,697</span>
// </td>
// <td data-sort="3695630641.7140484" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="52468.359246185406" data-prev-price="3695630605.405797">$3,695,630,605</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.9
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/fetch-ai">
// <img loading="lazy" alt="fetch.ai (FET) 7d chart" src="https://www.coingecko.com/coins/5681/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="29850" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 46
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/pepe">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="PEPE" src="https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg?1696528776">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Pepe
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// PEPE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="PEPE" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8665.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="PEPE" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="7.857203686256373e-06" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="29850" data-price-target="price" data-price-btc="1.1155189077276031e-10" data-prev-price="0.000007857203609062153">$0.0<sub title="$0.000007857">5</sub>7857</span>
// </td>
// <td data-sort="-0.31742485499314116" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="29850" data-24h="false" data-json="{&quot;usd&quot;:-0.317}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="29850"><i class="fas fa-fw fa-caret-down"></i>0.3%</span>
// </td>
// <td data-sort="3.2885424040152746" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="29850" data-24h="true" data-json="{&quot;usd&quot;:3.288}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="29850"><i class="fas fa-fw fa-caret-up"></i>3.3%</span>
// </td>
// <td data-sort="-2.476262254096581" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="29850" data-24h="false" data-json="{&quot;usd&quot;:-2.476}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="29850"><i class="fas fa-fw fa-caret-down"></i>2.5%</span>
// </td>
// <td data-sort="202.0404941472461" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="29850" data-24h="false" data-json="{&quot;usd&quot;:202.04}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="29850"><i class="fas fa-fw fa-caret-up"></i>202.0%</span>
// </td>
// <td data-sort="770758763.7410017" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="10942.773136373871" data-prev-price="770758756.1685721">$770,758,756</span>
// </td>
// <td data-sort="3327594550.4506397" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="47184.14579236293" data-prev-price="3323434843.121441">$3,323,434,843</span>
// </td>
// <td data-sort="3327594550.4506397" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="47184.14579236293" data-prev-price="3323434843.121441">$3,323,434,843</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/pepe">
// <img loading="lazy" alt="pepe (PEPE) 7d chart" src="https://www.coingecko.com/coins/29850/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="1167" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 47
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/vechain">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="VET" src="https://assets.coingecko.com/coins/images/1167/standard/VET_Token_Icon.png?1710013505">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// VeChain
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// VET
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.04576180581168267" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="1167" data-price-target="price" data-price-btc="6.496988200011044e-07" data-prev-price="0.04576180536208927">$0.04576</span>
// </td>
// <td data-sort="0.5231353813149492" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1167" data-24h="false" data-json="{&quot;usd&quot;:0.523}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="1167"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="4.139745445877746" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1167" data-24h="true" data-json="{&quot;usd&quot;:4.139}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="1167"><i class="fas fa-fw fa-caret-up"></i>4.1%</span>
// </td>
// <td data-sort="9.505988720096614" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="1167" data-24h="false" data-json="{&quot;usd&quot;:9.505}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="1167"><i class="fas fa-fw fa-caret-up"></i>9.5%</span>
// </td>
// <td data-sort="-4.978828302708912" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="1167" data-24h="false" data-json="{&quot;usd&quot;:-4.978}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="1167"><i class="fas fa-fw fa-caret-down"></i>5.0%</span>
// </td>
// <td data-sort="117820961.92374064" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1672.7517320504678" data-prev-price="117820960.76619178">$117,820,961</span>
// </td>
// <td data-sort="3327470005.5362306" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="47236.16058334735" data-prev-price="3327098526.4585524">$3,327,098,526</span>
// </td>
// <td data-sort="3934739002.590526" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="55856.84110471011" data-prev-price="3934299727.9424744">$3,934,299,728</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.85
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/vechain">
// <img loading="lazy" alt="vechain (VET) 7d chart" src="https://www.coingecko.com/coins/1167/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="25751" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 48
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/kaspa">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="KAS" src="https://assets.coingecko.com/coins/images/25751/standard/kaspa-icon-exchanges.png?1696524837">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Kaspa
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// KAS
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="KAS" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8527.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="KAS" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.13859536416881252" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="25751" data-price-target="price" data-price-btc="1.967694302288939e-06" data-prev-price="0.1385953628071626">$0.1386</span>
// </td>
// <td data-sort="0.5852544450950881" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="25751" data-24h="false" data-json="{&quot;usd&quot;:0.585}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="25751"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="2.8984787643551098" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="25751" data-24h="true" data-json="{&quot;usd&quot;:2.898}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="25751"><i class="fas fa-fw fa-caret-up"></i>2.9%</span>
// </td>
// <td data-sort="-9.722318187227916" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="25751" data-24h="false" data-json="{&quot;usd&quot;:-9.722}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="25751"><i class="fas fa-fw fa-caret-down"></i>9.7%</span>
// </td>
// <td data-sort="-17.639787336232743" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="25751" data-24h="false" data-json="{&quot;usd&quot;:-17.639}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="25751"><i class="fas fa-fw fa-caret-down"></i>17.6%</span>
// </td>
// <td data-sort="49365621.48703136" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="700.8636451264666" data-prev-price="49365621.00203176">$49,365,621</span>
// </td>
// <td data-sort="3212009512.4592977" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="45545.1897232527" data-prev-price="3207994293.8658495">$3,207,994,294</span>
// </td>
// <td data-sort="3222438619.8760724" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="45693.07087805584" data-prev-price="3218410364.2272067">$3,218,410,364</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/kaspa">
// <img loading="lazy" alt="kaspa (KAS) 7d chart" src="https://www.coingecko.com/coins/25751/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="6595" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 49
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/thorchain">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="RUNE" src="https://assets.coingecko.com/coins/images/6595/standard/Rune200x200.png?1696506946">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// THORChain
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// RUNE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="9.226015588906664" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="6595" data-price-target="price" data-price-btc="0.00013098546561058554" data-prev-price="9.226015498264356">$9.23</span>
// </td>
// <td data-sort="0.2848226465826479" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6595" data-24h="false" data-json="{&quot;usd&quot;:0.284}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="6595"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="3.8715406850118774" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6595" data-24h="true" data-json="{&quot;usd&quot;:3.871}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="6595"><i class="fas fa-fw fa-caret-up"></i>3.9%</span>
// </td>
// <td data-sort="8.139537359834707" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6595" data-24h="false" data-json="{&quot;usd&quot;:8.139}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="6595"><i class="fas fa-fw fa-caret-up"></i>8.1%</span>
// </td>
// <td data-sort="55.541457996017996" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6595" data-24h="false" data-json="{&quot;usd&quot;:55.541}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="6595"><i class="fas fa-fw fa-caret-up"></i>55.5%</span>
// </td>
// <td data-sort="622793250.8408523" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="8842.047052099828" data-prev-price="622793244.722131">$622,793,245</span>
// </td>
// <td data-sort="3097660649.853202" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="43978.73801692698" data-prev-price="3097660619.419791">$3,097,660,619</span>
// </td>
// <td data-sort="3845164491.268794" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="54591.35163870017" data-prev-price="3845164453.4914255">$3,845,164,453</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.81
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/thorchain">
// <img loading="lazy" alt="thorchain (RUNE) 7d chart" src="https://www.coingecko.com/coins/6595/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="2538" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 50
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/theta-network">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="THETA" src="https://assets.coingecko.com/coins/images/2538/standard/theta-token-logo.png?1696503349">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Theta Network
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// THETA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="THETA" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8385.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="THETA" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="2.9670838439220555" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="2538" data-price-target="price" data-price-btc="4.21248864210767e-05" data-prev-price="2.967083814771516">$2.97</span>
// </td>
// <td data-sort="1.0451123482000222" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2538" data-24h="false" data-json="{&quot;usd&quot;:1.045}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="2538"><i class="fas fa-fw fa-caret-up"></i>1.0%</span>
// </td>
// <td data-sort="0.11173460192857182" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2538" data-24h="true" data-json="{&quot;usd&quot;:0.111}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="2538"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="1.9038814574778862" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2538" data-24h="false" data-json="{&quot;usd&quot;:1.903}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="2538"><i class="fas fa-fw fa-caret-up"></i>1.9%</span>
// </td>
// <td data-sort="51.58006871396257" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2538" data-24h="false" data-json="{&quot;usd&quot;:51.58}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="2538"><i class="fas fa-fw fa-caret-up"></i>51.6%</span>
// </td>
// <td data-sort="42199197.12984607" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="599.1190271878579" data-prev-price="42199196.71525403">$42,199,197</span>
// </td>
// <td data-sort="2967083843.922055" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="42124.8864210767" data-prev-price="2967083814.771516">$2,967,083,815</span>
// </td>
// <td data-sort="2967083843.922055" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="42124.8864210767" data-prev-price="2967083814.771516">$2,967,083,815</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/theta-network">
// <img loading="lazy" alt="theta network (THETA) 7d chart" src="https://www.coingecko.com/coins/2538/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4001" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 51
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/fantom">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FTM" src="https://assets.coingecko.com/coins/images/4001/standard/Fantom_round.png?1696504642">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Fantom
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FTM
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="FTM" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -8312.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="FTM" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.0023744185922012" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4001" data-price-target="price" data-price-btc="1.423111403511067e-05" data-prev-price="1.0023744087442306">$1.00</span>
// </td>
// <td data-sort="0.5474698751782657" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4001" data-24h="false" data-json="{&quot;usd&quot;:0.547}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4001"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="-0.5342262124746301" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4001" data-24h="true" data-json="{&quot;usd&quot;:-0.534}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4001"><i class="fas fa-fw fa-caret-down"></i>0.5%</span>
// </td>
// <td data-sort="-13.217426304835456" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4001" data-24h="false" data-json="{&quot;usd&quot;:-13.217}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4001"><i class="fas fa-fw fa-caret-down"></i>13.2%</span>
// </td>
// <td data-sort="126.51559233278273" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4001" data-24h="false" data-json="{&quot;usd&quot;:126.515}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4001"><i class="fas fa-fw fa-caret-up"></i>126.5%</span>
// </td>
// <td data-sort="250640340.15996385" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3558.442031696044" data-prev-price="250640337.697512">$250,640,338</span>
// </td>
// <td data-sort="2811990467.541977" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="39918.50657185693" data-prev-price="2811676536.650464">$2,811,676,537</span>
// </td>
// <td data-sort="3184462406.1995115" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="45206.05064526554" data-prev-price="3184106892.5042458">$3,184,106,893</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.88
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/fantom">
// <img loading="lazy" alt="fantom (FTM) 7d chart" src="https://www.coingecko.com/coins/4001/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4343" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 52
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/arweave">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AR" src="https://assets.coingecko.com/coins/images/4343/standard/oRt6SiEN_400x400.jpg?1696504946">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Arweave
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="42.28634872211573" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4343" data-price-target="price" data-price-btc="0.0006003563535051764" data-prev-price="42.286348306667456">$42.29</span>
// </td>
// <td data-sort="1.6780259776694455" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4343" data-24h="false" data-json="{&quot;usd&quot;:1.678}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4343"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="-1.1934127838969122" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="4343" data-24h="true" data-json="{&quot;usd&quot;:-1.193}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4343"><i class="fas fa-fw fa-caret-down"></i>1.2%</span>
// </td>
// <td data-sort="19.01434407831394" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4343" data-24h="false" data-json="{&quot;usd&quot;:19.014}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4343"><i class="fas fa-fw fa-caret-up"></i>19.0%</span>
// </td>
// <td data-sort="86.23330748415268" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4343" data-24h="false" data-json="{&quot;usd&quot;:86.233}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4343"><i class="fas fa-fw fa-caret-up"></i>86.2%</span>
// </td>
// <td data-sort="111481574.16048613" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1582.7488863090869" data-prev-price="111481573.06521948">$111,481,573</span>
// </td>
// <td data-sort="2767818514.988322" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="39295.83615133564" data-prev-price="2767818487.7954926">$2,767,818,488</span>
// </td>
// <td data-sort="2767818514.988322" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="39295.83615133564" data-prev-price="2767818487.7954926">$2,767,818,488</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/arweave">
// <img loading="lazy" alt="arweave (AR) 7d chart" src="https://www.coingecko.com/coins/4343/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="26375" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 53
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/sui">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SUI" src="https://assets.coingecko.com/coins/images/26375/standard/sui_asset.jpeg?1696525453">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Sui
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SUI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="2.1266357140656633" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="26375" data-price-target="price" data-price-btc="3.0192705237343064e-05" data-prev-price="2.126635693172227">$2.13</span>
// </td>
// <td data-sort="0.38612937431080036" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26375" data-24h="false" data-json="{&quot;usd&quot;:0.386}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="26375"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="4.718637574451119" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26375" data-24h="true" data-json="{&quot;usd&quot;:4.718}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="26375"><i class="fas fa-fw fa-caret-up"></i>4.7%</span>
// </td>
// <td data-sort="18.45036513674369" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26375" data-24h="false" data-json="{&quot;usd&quot;:18.45}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="26375"><i class="fas fa-fw fa-caret-up"></i>18.5%</span>
// </td>
// <td data-sort="32.14528925902675" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26375" data-24h="false" data-json="{&quot;usd&quot;:32.145}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="26375"><i class="fas fa-fw fa-caret-up"></i>32.1%</span>
// </td>
// <td data-sort="469350025.13840604" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="6663.551669153384" data-prev-price="469350020.52720964">$469,350,021</span>
// </td>
// <td data-sort="2617429199.5164313" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="37114.24546432378" data-prev-price="2614157244.5772676">$2,614,157,245</span>
// </td>
// <td data-sort="21264064105.05818" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="301517.1126348135" data-prev-price="21237482656.51772">$21,237,482,657</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.12
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/sui">
// <img loading="lazy" alt="sui (SUI) 7d chart" src="https://www.coingecko.com/coins/26375/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="31079" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 54
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/first-digital-usd">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FDUSD" src="https://assets.coingecko.com/coins/images/31079/standard/firstfigital.jpeg?1696529912">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// First Digital USD
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FDUSD
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.0003275136487173" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="31079" data-price-target="price" data-price-btc="1.4202053299791163e-05" data-prev-price="1.0003275038208568">$1.00</span>
// </td>
// <td data-sort="0.17864262247143356" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31079" data-24h="false" data-json="{&quot;usd&quot;:0.178}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="31079"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="0.10995947946487335" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31079" data-24h="true" data-json="{&quot;usd&quot;:0.109}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="31079"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="-0.0070725130952098555" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="31079" data-24h="false" data-json="{&quot;usd&quot;:-0.007}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="31079"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="-0.001961188268424807" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="31079" data-24h="false" data-json="{&quot;usd&quot;:-0.001}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="31079"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="7225041707.502232" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="102576.83211060244" data-prev-price="7225041636.518777">$7,225,041,637</span>
// </td>
// <td data-sort="2553787906.8863263" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="36211.8338320332" data-prev-price="2550595507.658465">$2,550,595,508</span>
// </td>
// <td data-sort="2553787906.8863263" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="36211.8338320332" data-prev-price="2550595507.658465">$2,550,595,508</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/first-digital-usd">
// <img loading="lazy" alt="first digital usd (FDUSD) 7d chart" src="https://www.coingecko.com/coins/31079/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13573" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 55
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/lido-dao">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="LDO" src="https://assets.coingecko.com/coins/images/13573/standard/Lido_DAO.png?1696513326">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Lido DAO
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// LDO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="2.8619619463455908" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13573" data-price-target="price" data-price-btc="4.063242842908308e-05" data-prev-price="2.8619619182278364">$2.86</span>
// </td>
// <td data-sort="0.8258099269187049" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13573" data-24h="false" data-json="{&quot;usd&quot;:0.825}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13573"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="-2.7541673760894225" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="13573" data-24h="true" data-json="{&quot;usd&quot;:-2.754}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13573"><i class="fas fa-fw fa-caret-down"></i>2.8%</span>
// </td>
// <td data-sort="1.7975968574338925" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13573" data-24h="false" data-json="{&quot;usd&quot;:1.797}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13573"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="-17.112624757815308" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="13573" data-24h="false" data-json="{&quot;usd&quot;:-17.112}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13573"><i class="fas fa-fw fa-caret-down"></i>17.1%</span>
// </td>
// <td data-sort="83309632.97053349" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1182.7804710858388" data-prev-price="83309632.1520461">$83,309,632</span>
// </td>
// <td data-sort="2552048716.006235" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="36232.46526148433" data-prev-price="2552048690.933267">$2,552,048,691</span>
// </td>
// <td data-sort="2861961946.345591" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="40632.42842908308" data-prev-price="2861961918.227836">$2,861,961,918</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.89
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/lido-dao">
// <img loading="lazy" alt="lido dao (LDO) 7d chart" src="https://www.coingecko.com/coins/13573/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="31967" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 56
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/celestia">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="TIA" src="https://assets.coingecko.com/coins/images/31967/standard/tia.jpg?1696530772">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Celestia
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// TIA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="TIA" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7959.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="TIA" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="14.453728785601205" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="31967" data-price-target="price" data-price-btc="0.00020520541901831486" data-prev-price="14.453728643598481">$14.45</span>
// </td>
// <td data-sort="0.4820531226612332" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31967" data-24h="false" data-json="{&quot;usd&quot;:0.482}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="31967"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="2.668630492164982" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31967" data-24h="true" data-json="{&quot;usd&quot;:2.668}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="31967"><i class="fas fa-fw fa-caret-up"></i>2.7%</span>
// </td>
// <td data-sort="-0.964232656112295" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="31967" data-24h="false" data-json="{&quot;usd&quot;:-0.964}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="31967"><i class="fas fa-fw fa-caret-down"></i>1.0%</span>
// </td>
// <td data-sort="-13.015104037560812" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="31967" data-24h="false" data-json="{&quot;usd&quot;:-13.015}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="31967"><i class="fas fa-fw fa-caret-down"></i>13.0%</span>
// </td>
// <td data-sort="132793820.64287539" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1885.3274481814435" data-prev-price="132793819.33822353">$132,793,819</span>
// </td>
// <td data-sort="2522792912.985287" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="35778.86478204383" data-prev-price="2520099153.3732767">$2,520,099,153</span>
// </td>
// <td data-sort="14998072429.694984" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="212706.32349223105" data-prev-price="14982057955.593222">$14,982,057,956</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.17
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/celestia">
// <img loading="lazy" alt="celestia (TIA) 7d chart" src="https://www.coingecko.com/coins/31967/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="69" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 57
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/monero">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="XMR" src="https://assets.coingecko.com/coins/images/69/standard/monero_logo.png?1696501460">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Monero
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// XMR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="136.50010267365735" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="69" data-price-target="price" data-price-btc="0.001937947029495597" data-prev-price="136.50010133259258">$136.50</span>
// </td>
// <td data-sort="-0.08730105676315278" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="69" data-24h="false" data-json="{&quot;usd&quot;:-0.087}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="69"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="-0.8704049307662483" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="69" data-24h="true" data-json="{&quot;usd&quot;:-0.87}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="69"><i class="fas fa-fw fa-caret-down"></i>0.9%</span>
// </td>
// <td data-sort="-2.5688558698763853" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="69" data-24h="false" data-json="{&quot;usd&quot;:-2.568}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="69"><i class="fas fa-fw fa-caret-down"></i>2.6%</span>
// </td>
// <td data-sort="-1.8507011302111287" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="69" data-24h="false" data-json="{&quot;usd&quot;:-1.85}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="69"><i class="fas fa-fw fa-caret-down"></i>1.9%</span>
// </td>
// <td data-sort="41148091.36476094" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="584.1960545656143" data-prev-price="41148090.960495636">$41,148,091</span>
// </td>
// <td data-sort="2476862581.520955" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="35161.09189532833" data-prev-price="2476586064.339496">$2,476,586,064</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span>-</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/monero">
// <img loading="lazy" alt="monero (XMR) 7d chart" src="https://www.coingecko.com/coins/69/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12493" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 58
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/gala">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="GALA" src="https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// GALA
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// GALA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="GALA" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7821.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="GALA" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.06621701500083559" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12493" data-price-target="price" data-price-btc="9.401096776442183e-07" data-prev-price="0.06621701435027706">$0.06622</span>
// </td>
// <td data-sort="0.6214083597363428" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12493" data-24h="false" data-json="{&quot;usd&quot;:0.621}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12493"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="-0.47474714514172245" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12493" data-24h="true" data-json="{&quot;usd&quot;:-0.474}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12493"><i class="fas fa-fw fa-caret-down"></i>0.5%</span>
// </td>
// <td data-sort="13.934167400232209" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12493" data-24h="false" data-json="{&quot;usd&quot;:13.934}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12493"><i class="fas fa-fw fa-caret-up"></i>13.9%</span>
// </td>
// <td data-sort="66.6589749358815" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12493" data-24h="false" data-json="{&quot;usd&quot;:66.658}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12493"><i class="fas fa-fw fa-caret-up"></i>66.7%</span>
// </td>
// <td data-sort="193009256.25094473" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2740.230281811046" data-prev-price="193009254.3546977">$193,009,254</span>
// </td>
// <td data-sort="2464822036.673934" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="34994.07290284313" data-prev-price="2464822012.4579377">$2,464,822,012</span>
// </td>
// <td data-sort="2465062171.0274816" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="34997.48218714418" data-prev-price="2465062146.809126">$2,465,062,147</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/gala">
// <img loading="lazy" alt="gala (GALA) 7d chart" src="https://www.coingecko.com/coins/12493/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="16746" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 59
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/floki">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FLOKI" src="https://assets.coingecko.com/coins/images/16746/standard/PNG_image.png?1696516318">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// FLOKI
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FLOKI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="FLOKI" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7752.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="FLOKI" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.0002484576738970571" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="16746" data-price-target="price" data-price-btc="3.5274538381509213e-09" data-prev-price="0.0002484576714560491">$0.0002485</span>
// </td>
// <td data-sort="-0.6305675383312271" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="16746" data-24h="false" data-json="{&quot;usd&quot;:-0.63}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="16746"><i class="fas fa-fw fa-caret-down"></i>0.6%</span>
// </td>
// <td data-sort="11.73269154879473" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16746" data-24h="true" data-json="{&quot;usd&quot;:11.732}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="16746"><i class="fas fa-fw fa-caret-up"></i>11.7%</span>
// </td>
// <td data-sort="14.772203009764192" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16746" data-24h="false" data-json="{&quot;usd&quot;:14.772}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="16746"><i class="fas fa-fw fa-caret-up"></i>14.8%</span>
// </td>
// <td data-sort="387.2823539572357" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16746" data-24h="false" data-json="{&quot;usd&quot;:387.282}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="16746"><i class="fas fa-fw fa-caret-up"></i>387.3%</span>
// </td>
// <td data-sort="902237753.9212558" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="12809.433406000737" data-prev-price="902237745.0570921">$902,237,745</span>
// </td>
// <td data-sort="2424287980.6599636" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="34380.810711007645" data-prev-price="2421626636.085458">$2,421,626,636</span>
// </td>
// <td data-sort="2496064508.828067" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="35398.73236393317" data-prev-price="2493324369.128832">$2,493,324,369</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.97
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/floki">
// <img loading="lazy" alt="floki (FLOKI) 7d chart" src="https://www.coingecko.com/coins/16746/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="28205" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 60
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/sei">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SEI" src="https://assets.coingecko.com/coins/images/28205/standard/Sei_Logo_-_Transparent.png?1696527207">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Sei
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SEI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.8681733131118983" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="28205" data-price-target="price" data-price-btc="1.2325806796314216e-05" data-prev-price="0.8681733045824056">$0.8682</span>
// </td>
// <td data-sort="0.6385102453360488" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28205" data-24h="false" data-json="{&quot;usd&quot;:0.638}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="28205"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="-0.7145315083198686" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28205" data-24h="true" data-json="{&quot;usd&quot;:-0.714}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="28205"><i class="fas fa-fw fa-caret-down"></i>0.7%</span>
// </td>
// <td data-sort="4.978190203928071" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28205" data-24h="false" data-json="{&quot;usd&quot;:4.978}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="28205"><i class="fas fa-fw fa-caret-up"></i>5.0%</span>
// </td>
// <td data-sort="0.0031365600207101424" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28205" data-24h="false" data-json="{&quot;usd&quot;:0.003}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="28205"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="135770016.31176233" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1927.5816988577706" data-prev-price="135770014.9778704">$135,770,015</span>
// </td>
// <td data-sort="2326823407.666713" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="32993.555325290676" data-prev-price="2323914728.6687536">$2,323,914,729</span>
// </td>
// <td data-sort="8698405262.30547" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="123340.3937394044" data-prev-price="8687531695.957958">$8,687,531,696</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.27
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/sei">
// <img loading="lazy" alt="sei (SEI) 7d chart" src="https://www.coingecko.com/coins/28205/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="4380" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 61
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/algorand">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ALGO" src="https://assets.coingecko.com/coins/images/4380/standard/download.png?1696504978">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Algorand
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ALGO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="ALGO" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7614.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="ALGO" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.27258016962801357" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="4380" data-price-target="price" data-price-btc="3.8699306424181835e-06" data-prev-price="0.27258016695001075">$0.2726</span>
// </td>
// <td data-sort="0.8198416046419743" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4380" data-24h="false" data-json="{&quot;usd&quot;:0.819}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="4380"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="2.1814372430408553" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4380" data-24h="true" data-json="{&quot;usd&quot;:2.181}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="4380"><i class="fas fa-fw fa-caret-up"></i>2.2%</span>
// </td>
// <td data-sort="8.580564593585294" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4380" data-24h="false" data-json="{&quot;usd&quot;:8.58}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="4380"><i class="fas fa-fw fa-caret-up"></i>8.6%</span>
// </td>
// <td data-sort="30.499440212336726" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="4380" data-24h="false" data-json="{&quot;usd&quot;:30.499}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="4380"><i class="fas fa-fw fa-caret-up"></i>30.5%</span>
// </td>
// <td data-sort="75927516.25075278" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1077.9735816530026" data-prev-price="75927515.50479205">$75,927,516</span>
// </td>
// <td data-sort="2203266091.5910387" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="31277.165755688504" data-prev-price="2203020118.748543">$2,203,020,119</span>
// </td>
// <td data-sort="2203266161.630661" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="31277.166749958276" data-prev-price="2203020188.780346">$2,203,020,189</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/algorand">
// <img loading="lazy" alt="algorand (ALGO) 7d chart" src="https://www.coingecko.com/coins/4380/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="20764" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 62
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/rocket-pool-eth">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="RETH" src="https://assets.coingecko.com/coins/images/20764/standard/reth.png?1696520159">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Rocket Pool ETH
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// RETH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3933.5121392912347" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="20764" data-price-target="price" data-price-btc="0.05584565884209728" data-prev-price="3933.5121006458826">$3,933.51</span>
// </td>
// <td data-sort="0.40285549231620166" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20764" data-24h="false" data-json="{&quot;usd&quot;:0.402}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="20764"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="1.722112482844823" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20764" data-24h="true" data-json="{&quot;usd&quot;:1.722}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="20764"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="1.5346082057632031" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20764" data-24h="false" data-json="{&quot;usd&quot;:1.534}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="20764"><i class="fas fa-fw fa-caret-up"></i>1.5%</span>
// </td>
// <td data-sort="10.09848053172323" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20764" data-24h="false" data-json="{&quot;usd&quot;:10.098}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="20764"><i class="fas fa-fw fa-caret-up"></i>10.1%</span>
// </td>
// <td data-sort="8533139.076345755" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="121.1484182163068" data-prev-price="8533138.992510712">$8,533,139</span>
// </td>
// <td data-sort="2107629425.510346" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="29890.016741201947" data-prev-price="2105315703.63349">$2,105,315,704</span>
// </td>
// <td data-sort="2107629425.510346" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="29890.016741201947" data-prev-price="2105315703.63349">$2,105,315,704</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/rocket-pool-eth">
// <img loading="lazy" alt="rocket pool eth (RETH) 7d chart" src="https://www.coingecko.com/coins/20764/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13446" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 63
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/flow">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FLOW" src="https://assets.coingecko.com/coins/images/13446/standard/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1696513210">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Flow
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FLOW
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="FLOW" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7468.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="FLOW" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.366647958565384" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13446" data-price-target="price" data-price-btc="1.9402852450594747e-05" data-prev-price="1.3666479451385556">$1.37</span>
// </td>
// <td data-sort="0.06702031493552221" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13446" data-24h="false" data-json="{&quot;usd&quot;:0.067}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13446"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="0.9066809227789553" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13446" data-24h="true" data-json="{&quot;usd&quot;:0.906}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13446"><i class="fas fa-fw fa-caret-up"></i>0.9%</span>
// </td>
// <td data-sort="5.068214346406597" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13446" data-24h="false" data-json="{&quot;usd&quot;:5.068}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13446"><i class="fas fa-fw fa-caret-up"></i>5.1%</span>
// </td>
// <td data-sort="29.797929698822323" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13446" data-24h="false" data-json="{&quot;usd&quot;:29.797}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13446"><i class="fas fa-fw fa-caret-up"></i>29.8%</span>
// </td>
// <td data-sort="51238189.33771123" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="727.4492464020203" data-prev-price="51238188.83431432">$51,238,189</span>
// </td>
// <td data-sort="2046777220.580695" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="29058.92198591804" data-prev-price="2046777200.4718394">$2,046,777,200</span>
// </td>
// <td data-sort="2046777220.8703833" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="29058.921990030864" data-prev-price="2046777200.7615278">$2,046,777,201</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/flow">
// <img loading="lazy" alt="flow (FLOW) 7d chart" src="https://www.coingecko.com/coins/13446/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="3370" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 64
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/quant">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="QNT" src="https://assets.coingecko.com/coins/images/3370/standard/5ZOu7brX_400x400.jpg?1696504070">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Quant
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// QNT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="QNT" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7399.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="QNT" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="137.18975964860329" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="3370" data-price-target="price" data-price-btc="0.0019477383678154127" data-prev-price="137.1897583007629">$137.19</span>
// </td>
// <td data-sort="0.1364139565425219" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3370" data-24h="false" data-json="{&quot;usd&quot;:0.136}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="3370"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="0.12034319843163227" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3370" data-24h="true" data-json="{&quot;usd&quot;:0.12}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="3370"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="8.533673582974924" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3370" data-24h="false" data-json="{&quot;usd&quot;:8.533}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="3370"><i class="fas fa-fw fa-caret-up"></i>8.5%</span>
// </td>
// <td data-sort="24.6349177695709" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3370" data-24h="false" data-json="{&quot;usd&quot;:24.634}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="3370"><i class="fas fa-fw fa-caret-up"></i>24.6%</span>
// </td>
// <td data-sort="37161069.559966594" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="527.5906974135534" data-prev-price="37161069.194872364">$37,161,069</span>
// </td>
// <td data-sort="1995397292.5692313" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="28326.297992936332" data-prev-price="1995174526.2198398">$1,995,174,526</span>
// </td>
// <td data-sort="2004770063.3519523" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="28459.352146712892" data-prev-price="2004546250.6255114">$2,004,546,251</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/quant">
// <img loading="lazy" alt="quant (QNT) 7d chart" src="https://www.coingecko.com/coins/3370/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="33345" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 65
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/mantle-staked-ether">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="METH" src="https://assets.coingecko.com/coins/images/33345/standard/symbol_transparent_bg.png?1701697066">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Mantle Staked Ether
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// METH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3654.8675370076908" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="33345" data-price-target="price" data-price-btc="0.05188383654900498" data-prev-price="3654.4595072374973">$3,654.46</span>
// </td>
// <td data-sort="0.6614137753318307" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33345" data-24h="false" data-json="{&quot;usd&quot;:0.661}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="33345"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="1.3902824065408972" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33345" data-24h="true" data-json="{&quot;usd&quot;:1.39}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="33345"><i class="fas fa-fw fa-caret-up"></i>1.4%</span>
// </td>
// <td data-sort="1.7783958431233708" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33345" data-24h="false" data-json="{&quot;usd&quot;:1.778}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="33345"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="10.158392687108236" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33345" data-24h="false" data-json="{&quot;usd&quot;:10.158}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="33345"><i class="fas fa-fw fa-caret-up"></i>10.2%</span>
// </td>
// <td data-sort="3207288.065594" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="45.53007956537148" data-prev-price="3206930.0036398806">$3,206,930</span>
// </td>
// <td data-sort="1923065334.2308285" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="27273.38189604388" data-prev-price="1921011945.0279558">$1,921,011,945</span>
// </td>
// <td data-sort="1923065334.2308285" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="27273.38189604388" data-prev-price="1921011945.0279558">$1,921,011,945</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/mantle-staked-ether">
// <img loading="lazy" alt="mantle staked ether (METH) 7d chart" src="https://www.coingecko.com/coins/33345/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12645" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 66
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/aave">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AAVE" src="https://assets.coingecko.com/coins/images/12645/standard/AAVE.png?1696512452">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Aave
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AAVE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="AAVE" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7253.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="AAVE" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="129.21004822138184" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12645" data-price-target="price" data-price-btc="0.0018344471852176415" data-prev-price="129.21004695193926">$129.21</span>
// </td>
// <td data-sort="1.4381775069668854" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12645" data-24h="false" data-json="{&quot;usd&quot;:1.438}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12645"><i class="fas fa-fw fa-caret-up"></i>1.4%</span>
// </td>
// <td data-sort="3.9146611618052196" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12645" data-24h="true" data-json="{&quot;usd&quot;:3.914}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12645"><i class="fas fa-fw fa-caret-up"></i>3.9%</span>
// </td>
// <td data-sort="4.730395901893457" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12645" data-24h="false" data-json="{&quot;usd&quot;:4.73}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12645"><i class="fas fa-fw fa-caret-up"></i>4.7%</span>
// </td>
// <td data-sort="24.378340885602114" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12645" data-24h="false" data-json="{&quot;usd&quot;:24.378}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12645"><i class="fas fa-fw fa-caret-up"></i>24.4%</span>
// </td>
// <td data-sort="106457329.52632019" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1511.4176581742665" data-prev-price="106457328.48041496">$106,457,328</span>
// </td>
// <td data-sort="1910570171.611961" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="27125.135558105634" data-prev-price="1910570152.8412914">$1,910,570,153</span>
// </td>
// <td data-sort="2067360771.5421088" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="29351.154963482255" data-prev-price="2067360751.2310276">$2,067,360,751</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.92
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/aave">
// <img loading="lazy" alt="aave (AAVE) 7d chart" src="https://www.coingecko.com/coins/12645/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="32417" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 67
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/beam-2">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BEAM" src="https://assets.coingecko.com/coins/images/32417/standard/chain-logo.png?1698114384">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Beam
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BEAM
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.035979641156128665" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="32417" data-price-target="price" data-price-btc="5.10760459013731e-07" data-prev-price="0.03597562438546218">$0.03598</span>
// </td>
// <td data-sort="0.728387801254615" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32417" data-24h="false" data-json="{&quot;usd&quot;:0.728}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="32417"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="-1.893856678049324" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="32417" data-24h="true" data-json="{&quot;usd&quot;:-1.893}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="32417"><i class="fas fa-fw fa-caret-down"></i>1.9%</span>
// </td>
// <td data-sort="5.023110581698885" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32417" data-24h="false" data-json="{&quot;usd&quot;:5.023}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="32417"><i class="fas fa-fw fa-caret-up"></i>5.0%</span>
// </td>
// <td data-sort="3.3063878188679863" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32417" data-24h="false" data-json="{&quot;usd&quot;:3.306}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="32417"><i class="fas fa-fw fa-caret-up"></i>3.3%</span>
// </td>
// <td data-sort="24514991.671338312" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="348.0103746570499" data-prev-price="24512254.81526442">$24,512,255</span>
// </td>
// <td data-sort="1895620069.9547803" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="26879.240361648852" data-prev-price="1893250422.8782468">$1,893,250,423</span>
// </td>
// <td data-sort="2246254314.202114" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="31851.11330155395" data-prev-price="2243446351.7558594">$2,243,446,352</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.84
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/beam-2">
// <img loading="lazy" alt="beam (BEAM) 7d chart" src="https://www.coingecko.com/coins/32417/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="28600" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 68
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bonk">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BONK" src="https://assets.coingecko.com/coins/images/28600/standard/bonk.jpg?1696527587">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bonk
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BONK
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="BONK" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -7115.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="BONK" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="2.8359413087180467e-05" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="28600" data-price-target="price" data-price-btc="4.0263002938492505e-10" data-prev-price="0.000028359412808559363">$0.00002836</span>
// </td>
// <td data-sort="0.5873889610211165" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28600" data-24h="false" data-json="{&quot;usd&quot;:0.587}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="28600"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="7.166517033666786" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28600" data-24h="true" data-json="{&quot;usd&quot;:7.166}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="28600"><i class="fas fa-fw fa-caret-up"></i>7.2%</span>
// </td>
// <td data-sort="22.43905400704579" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28600" data-24h="false" data-json="{&quot;usd&quot;:22.439}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="28600"><i class="fas fa-fw fa-caret-up"></i>22.4%</span>
// </td>
// <td data-sort="103.81146398318923" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28600" data-24h="false" data-json="{&quot;usd&quot;:103.811}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="28600"><i class="fas fa-fw fa-caret-up"></i>103.8%</span>
// </td>
// <td data-sort="328188559.3162833" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4659.425386382309" data-prev-price="328188556.0919479">$328,188,556</span>
// </td>
// <td data-sort="1880889581.3730974" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="26670.367101913307" data-prev-price="1878538348.3552442">$1,878,538,348</span>
// </td>
// <td data-sort="2670573046.043868" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="37867.806922758646" data-prev-price="2667234657.876571">$2,667,234,658</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.7
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bonk">
// <img loading="lazy" alt="bonk (BONK) 7d chart" src="https://www.coingecko.com/coins/28600/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="6799" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 69
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bitcoin-sv">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BSV" src="https://assets.coingecko.com/coins/images/6799/standard/BSV.png?1696507128">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bitcoin SV
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BSV
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="93.98555928936298" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="6799" data-price-target="price" data-price-btc="0.0013343509043048773" data-prev-price="93.98555836598842">$93.99</span>
// </td>
// <td data-sort="-0.021507286584846727" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="6799" data-24h="false" data-json="{&quot;usd&quot;:-0.021}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="6799"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="5.166787480723809" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6799" data-24h="true" data-json="{&quot;usd&quot;:5.166}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="6799"><i class="fas fa-fw fa-caret-up"></i>5.2%</span>
// </td>
// <td data-sort="17.666945167571267" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6799" data-24h="false" data-json="{&quot;usd&quot;:17.666}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="6799"><i class="fas fa-fw fa-caret-up"></i>17.7%</span>
// </td>
// <td data-sort="18.13026911344055" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="6799" data-24h="false" data-json="{&quot;usd&quot;:18.13}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="6799"><i class="fas fa-fw fa-caret-up"></i>18.1%</span>
// </td>
// <td data-sort="71322281.76641399" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1012.5912096675976" data-prev-price="71322281.06569804">$71,322,281</span>
// </td>
// <td data-sort="1849021376.2208092" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="26251.302477683086" data-prev-price="1849021358.0548341">$1,849,021,358</span>
// </td>
// <td data-sort="1973696745.0766225" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="28021.368990402418" data-prev-price="1973696725.6857564">$1,973,696,726</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bitcoin-sv">
// <img loading="lazy" alt="bitcoin sv (BSV) 7d chart" src="https://www.coingecko.com/coins/6799/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13079" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 70
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/conflux">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="CFX" src="https://assets.coingecko.com/coins/images/13079/standard/3vuYMbjN.png?1696512867">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Conflux
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// CFX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.4765227043433962" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13079" data-price-target="price" data-price-btc="6.765385089689837e-06" data-prev-price="0.47652269966173083">$0.4765</span>
// </td>
// <td data-sort="0.6796081950080256" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13079" data-24h="false" data-json="{&quot;usd&quot;:0.679}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13079"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="-1.241807132558084" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="13079" data-24h="true" data-json="{&quot;usd&quot;:-1.241}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13079"><i class="fas fa-fw fa-caret-down"></i>1.2%</span>
// </td>
// <td data-sort="11.198514158772904" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13079" data-24h="false" data-json="{&quot;usd&quot;:11.198}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13079"><i class="fas fa-fw fa-caret-up"></i>11.2%</span>
// </td>
// <td data-sort="82.83686940338758" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13079" data-24h="false" data-json="{&quot;usd&quot;:82.836}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13079"><i class="fas fa-fw fa-caret-up"></i>82.8%</span>
// </td>
// <td data-sort="112651027.30974407" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1599.3520844924394" data-prev-price="112651026.20298795">$112,651,026</span>
// </td>
// <td data-sort="1833227242.595104" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="26027.066790354933" data-prev-price="1833227224.584301">$1,833,227,225</span>
// </td>
// <td data-sort="2612089589.577109" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="37084.88976744371" data-prev-price="2612089563.914262">$2,612,089,564</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.7
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/conflux">
// <img loading="lazy" alt="conflux (CFX) 7d chart" src="https://www.coingecko.com/coins/13079/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="33033" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 71
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/wrapped-eeth">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="WEETH" src="https://assets.coingecko.com/coins/images/33033/standard/weETH.png?1701438396">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Wrapped eETH
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// WEETH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3691.760710345827" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="33033" data-price-target="price" data-price-btc="0.052413416269202255" data-prev-price="3691.7606740755964">$3,691.76</span>
// </td>
// <td data-sort="0.3409938786744063" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33033" data-24h="false" data-json="{&quot;usd&quot;:0.34}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="33033"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="1.732829529417506" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33033" data-24h="true" data-json="{&quot;usd&quot;:1.732}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="33033"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="2.364260307861619" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33033" data-24h="false" data-json="{&quot;usd&quot;:2.364}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="33033"><i class="fas fa-fw fa-caret-up"></i>2.4%</span>
// </td>
// <td data-sort="10.167810388722941" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33033" data-24h="false" data-json="{&quot;usd&quot;:10.167}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="33033"><i class="fas fa-fw fa-caret-up"></i>10.2%</span>
// </td>
// <td data-sort="36882072.867396384" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="523.6296688061376" data-prev-price="36882072.505043186">$36,882,073</span>
// </td>
// <td data-sort="1756787603.7913442" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="24915.1905427078" data-prev-price="1754911760.7645087">$1,754,911,761</span>
// </td>
// <td data-sort="1756787603.7913442" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="24915.1905427078" data-prev-price="1754911760.7645087">$1,754,911,761</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/wrapped-eeth">
// <img loading="lazy" alt="wrapped eeth (WEETH) 7d chart" src="https://www.coingecko.com/coins/33033/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="34188" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 72
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/jupiter">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="JUP" src="https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Jupiter
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// JUP
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.2892321977645596" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="34188" data-price-target="price" data-price-btc="1.8303749660622618e-05" data-prev-price="1.2892321850983137">$1.29</span>
// </td>
// <td data-sort="-0.4968029675322789" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="34188" data-24h="false" data-json="{&quot;usd&quot;:-0.496}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="34188"><i class="fas fa-fw fa-caret-down"></i>0.5%</span>
// </td>
// <td data-sort="-0.0004379419151161195" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="34188" data-24h="true" data-json="{&quot;usd&quot;:-0.0}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="34188"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="4.190619895698753" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="34188" data-24h="false" data-json="{&quot;usd&quot;:4.19}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="34188"><i class="fas fa-fw fa-caret-up"></i>4.2%</span>
// </td>
// <td data-sort="157.61618286830702" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="34188" data-24h="false" data-json="{&quot;usd&quot;:157.616}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="34188"><i class="fas fa-fw fa-caret-up"></i>157.6%</span>
// </td>
// <td data-sort="172876500.75438532" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2454.3974293376828" data-prev-price="172876499.05593544">$172,876,499</span>
// </td>
// <td data-sort="1753526746.0826204" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="24868.944262867153" data-prev-price="1751654384.8979728">$1,751,654,385</span>
// </td>
// <td data-sort="12989087008.01941" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="184214.4019471641" data-prev-price="12975217665.91091">$12,975,217,666</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.14
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/jupiter">
// <img loading="lazy" alt="jupiter (JUP) 7d chart" src="https://www.coingecko.com/coins/34188/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="2138" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 73
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/singularitynet">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AGIX" src="https://assets.coingecko.com/coins/images/2138/standard/singularitynet.png?1696503103">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// SingularityNET
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AGIX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.3465129139851826" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="2138" data-price-target="price" data-price-btc="1.9116987099077374e-05" data-prev-price="1.346512900756174">$1.35</span>
// </td>
// <td data-sort="-0.8328218556955043" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="2138" data-24h="false" data-json="{&quot;usd&quot;:-0.832}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="2138"><i class="fas fa-fw fa-caret-down"></i>0.8%</span>
// </td>
// <td data-sort="6.770953357815538" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2138" data-24h="true" data-json="{&quot;usd&quot;:6.77}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="2138"><i class="fas fa-fw fa-caret-up"></i>6.8%</span>
// </td>
// <td data-sort="28.53634647070735" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2138" data-24h="false" data-json="{&quot;usd&quot;:28.536}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="2138"><i class="fas fa-fw fa-caret-up"></i>28.5%</span>
// </td>
// <td data-sort="100.72733670530462" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="2138" data-24h="false" data-json="{&quot;usd&quot;:100.727}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="2138"><i class="fas fa-fw fa-caret-up"></i>100.7%</span>
// </td>
// <td data-sort="542275875.085064" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="7698.909383245724" data-prev-price="542275869.7573973">$542,275,870</span>
// </td>
// <td data-sort="1722703459.3846028" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="24457.91604858964" data-prev-price="1722703442.4596555">$1,722,703,442</span>
// </td>
// <td data-sort="1875270797.670358" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="26623.97610449895" data-prev-price="1875270779.246491">$1,875,270,779</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.92
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/singularitynet">
// <img loading="lazy" alt="singularitynet (AGIX) 7d chart" src="https://www.coingecko.com/coins/2138/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="3406" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 74
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/synthetix-network-token">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SNX" src="https://assets.coingecko.com/coins/images/3406/standard/SNX.png?1696504103">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Synthetix Network
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SNX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="SNX" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -6689.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="SNX" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="5.026275268473061" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="3406" data-price-target="price" data-price-btc="7.136005786935107e-05" data-prev-price="5.0262752190917">$5.03</span>
// </td>
// <td data-sort="0.7293242513648042" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3406" data-24h="false" data-json="{&quot;usd&quot;:0.729}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="3406"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="5.558771914641607" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3406" data-24h="true" data-json="{&quot;usd&quot;:5.558}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="3406"><i class="fas fa-fw fa-caret-up"></i>5.6%</span>
// </td>
// <td data-sort="15.582584940620334" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3406" data-24h="false" data-json="{&quot;usd&quot;:15.582}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="3406"><i class="fas fa-fw fa-caret-up"></i>15.6%</span>
// </td>
// <td data-sort="28.917451150283608" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="3406" data-24h="false" data-json="{&quot;usd&quot;:28.917}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="3406"><i class="fas fa-fw fa-caret-up"></i>28.9%</span>
// </td>
// <td data-sort="84021188.41001098" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1192.8827107416846" data-prev-price="84021187.58453281">$84,021,188</span>
// </td>
// <td data-sort="1647458204.3233833" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23389.628804307085" data-prev-price="1647458188.1376946">$1,647,458,188</span>
// </td>
// <td data-sort="1649588882.3648098" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="23419.87890009687" data-prev-price="1649588866.1581879">$1,649,588,866</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/synthetix-network-token">
// <img loading="lazy" alt="synthetix network (SNX) 7d chart" src="https://www.coingecko.com/coins/3406/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="32594" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 75
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/dydx-chain">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="DYDX" src="https://assets.coingecko.com/coins/images/32594/standard/dydx.png?1698673495">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// dYdX
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// DYDX
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3.526509954295824" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="32594" data-price-target="price" data-price-btc="5.006728461408806e-05" data-prev-price="3.526509919649123">$3.53</span>
// </td>
// <td data-sort="0.32509428075236824" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32594" data-24h="false" data-json="{&quot;usd&quot;:0.325}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="32594"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="2.9238811934029836" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32594" data-24h="true" data-json="{&quot;usd&quot;:2.923}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="32594"><i class="fas fa-fw fa-caret-up"></i>2.9%</span>
// </td>
// <td data-sort="4.668184141010611" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32594" data-24h="false" data-json="{&quot;usd&quot;:4.668}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="32594"><i class="fas fa-fw fa-caret-up"></i>4.7%</span>
// </td>
// <td data-sort="0.028348977989857273" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="32594" data-24h="false" data-json="{&quot;usd&quot;:0.028}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="32594"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="10171497.423422676" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="144.40885267589036" data-prev-price="10171497.323491346">$10,171,497</span>
// </td>
// <td data-sort="1644109017.4110973" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23317.15533134354" data-prev-price="1642353489.0654895">$1,642,353,489</span>
// </td>
// <td data-sort="2516971886.4118342" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="35696.30956255187" data-prev-price="2514284342.3105">$2,514,284,342</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.65
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/dydx-chain">
// <img loading="lazy" alt="dydx (DYDX) 7d chart" src="https://www.coingecko.com/coins/32594/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="26433" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 76
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/starknet">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="STRK" src="https://assets.coingecko.com/coins/images/26433/standard/starknet.png?1696525507">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Starknet
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// STRK
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="2.227994802783372" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="26433" data-price-target="price" data-price-btc="3.163174111383967e-05" data-prev-price="2.2279947808941185">$2.23</span>
// </td>
// <td data-sort="0.054667146988805294" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26433" data-24h="false" data-json="{&quot;usd&quot;:0.054}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="26433"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="-1.8924511880728796" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="26433" data-24h="true" data-json="{&quot;usd&quot;:-1.892}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="26433"><i class="fas fa-fw fa-caret-down"></i>1.9%</span>
// </td>
// <td data-sort="5.223532320808695" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26433" data-24h="false" data-json="{&quot;usd&quot;:5.223}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="26433"><i class="fas fa-fw fa-caret-up"></i>5.2%</span>
// </td>
// <td data-sort="16.934050488757645" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26433" data-24h="false" data-json="{&quot;usd&quot;:16.934}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="26433"><i class="fas fa-fw fa-caret-up"></i>16.9%</span>
// </td>
// <td data-sort="166394549.29280174" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2362.37054925289" data-prev-price="166394547.6580347">$166,394,548</span>
// </td>
// <td data-sort="1629488755.4882452" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23105.58989092019" data-prev-price="1627451789.6811786">$1,627,451,790</span>
// </td>
// <td data-sort="22383087300.66271" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="317384.476523629" data-prev-price="22355107001.11509">$22,355,107,001</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.07
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/starknet">
// <img loading="lazy" alt="starknet (STRK) 7d chart" src="https://www.coingecko.com/coins/26433/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12335" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 77
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/multiversx">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="EGLD" src="https://assets.coingecko.com/coins/images/12335/standard/egld-token-logo.png?1696512162">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// MultiversX
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// EGLD
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="60.73152112594786" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12335" data-price-target="price" data-price-btc="0.0008622299079449203" data-prev-price="60.73152052928235">$60.73</span>
// </td>
// <td data-sort="0.7159364120046269" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12335" data-24h="false" data-json="{&quot;usd&quot;:0.715}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12335"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="0.4476077397924556" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12335" data-24h="true" data-json="{&quot;usd&quot;:0.447}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12335"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="0.473954522803344" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12335" data-24h="false" data-json="{&quot;usd&quot;:0.473}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12335"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="2.3274952864213843" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12335" data-24h="false" data-json="{&quot;usd&quot;:2.327}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12335"><i class="fas fa-fw fa-caret-up"></i>2.3%</span>
// </td>
// <td data-sort="27361586.04975828" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="388.463476354955" data-prev-price="27361585.780940466">$27,361,586</span>
// </td>
// <td data-sort="1624525131.470627" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23064.038716521885" data-prev-price="1624525115.5102477">$1,624,525,116</span>
// </td>
// <td data-sort="1624838020.2674677" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="23068.480925007618" data-prev-price="1624838004.3040147">$1,624,838,004</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/multiversx">
// <img loading="lazy" alt="multiversx (EGLD) 7d chart" src="https://www.coingecko.com/coins/12335/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="15823" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 78
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ribbon-finance">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="RBN" src="https://assets.coingecko.com/coins/images/15823/standard/ribbon.png?1709186956">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ribbon Finance
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// RBN
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.7063091769544474" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="15823" data-price-target="price" data-price-btc="2.422245554531173e-05" data-prev-price="1.7061186844306278">$1.71</span>
// </td>
// <td data-sort="0.09616781721429662" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15823" data-24h="false" data-json="{&quot;usd&quot;:0.096}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="15823"><i class="fas fa-fw fa-caret-up"></i>0.1%</span>
// </td>
// <td data-sort="6.561732852783919" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15823" data-24h="true" data-json="{&quot;usd&quot;:6.561}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="15823"><i class="fas fa-fw fa-caret-up"></i>6.6%</span>
// </td>
// <td data-sort="24.058002054937898" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15823" data-24h="false" data-json="{&quot;usd&quot;:24.058}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="15823"><i class="fas fa-fw fa-caret-up"></i>24.1%</span>
// </td>
// <td data-sort="134.20569979312822" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15823" data-24h="false" data-json="{&quot;usd&quot;:134.205}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="15823"><i class="fas fa-fw fa-caret-up"></i>134.2%</span>
// </td>
// <td data-sort="22168749.217419665" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="314.7035423981944" data-prev-price="22166274.296083376">$22,166,274</span>
// </td>
// <td data-sort="1622872938.536347" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="23015.28851066845" data-prev-price="1621091374.5783758">$1,621,091,375</span>
// </td>
// <td data-sort="1706692401.893527" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="24204.00087758657" data-prev-price="1704818822.2691736">$1,704,818,822</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.95
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ribbon-finance">
// <img loading="lazy" alt="ribbon finance (RBN) 7d chart" src="https://www.coingecko.com/coins/15823/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="22457" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 79
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bittorrent">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BTT" src="https://assets.coingecko.com/coins/images/22457/standard/btt_logo.png?1696521780">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// BitTorrent
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BTT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.6435071446928398e-06" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="22457" data-price-target="price" data-price-btc="2.3334988612841788e-11" data-prev-price="0.000001643609583630797">$0.0<sub title="$0.000001644">5</sub>1644</span>
// </td>
// <td data-sort="0.4005683055344397" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="22457" data-24h="false" data-json="{&quot;usd&quot;:0.4}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="22457"><i class="fas fa-fw fa-caret-up"></i>0.4%</span>
// </td>
// <td data-sort="10.039591495808194" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="22457" data-24h="true" data-json="{&quot;usd&quot;:10.039}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="22457"><i class="fas fa-fw fa-caret-up"></i>10.0%</span>
// </td>
// <td data-sort="20.67143820595591" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="22457" data-24h="false" data-json="{&quot;usd&quot;:20.671}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="22457"><i class="fas fa-fw fa-caret-up"></i>20.7%</span>
// </td>
// <td data-sort="47.465414295538885" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="22457" data-24h="false" data-json="{&quot;usd&quot;:47.465}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="22457"><i class="fas fa-fw fa-caret-up"></i>47.5%</span>
// </td>
// <td data-sort="69784329.73581004" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="990.8180472463135" data-prev-price="69788679.35646565">$69,788,679</span>
// </td>
// <td data-sort="1590019565.9117358" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="22549.367962269967" data-prev-price="1588274067.8608217">$1,588,274,068</span>
// </td>
// <td data-sort="1625742500.879455" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="23055.98412130915" data-prev-price="1623957786.7618363">$1,623,957,787</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.98
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bittorrent">
// <img loading="lazy" alt="bittorrent (BTT) 7d chart" src="https://www.coingecko.com/coins/22457/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="13029" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 80
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/axie-infinity">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AXS" src="https://assets.coingecko.com/coins/images/13029/standard/axie_infinity_logo.png?1696512817">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Axie Infinity
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AXS
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="11.033687333348931" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="13029" data-price-target="price" data-price-btc="0.0001566497106831358" data-prev-price="11.033687224946894">$11.03</span>
// </td>
// <td data-sort="0.7355833216466245" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13029" data-24h="false" data-json="{&quot;usd&quot;:0.735}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="13029"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="0.543916079663803" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13029" data-24h="true" data-json="{&quot;usd&quot;:0.543}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="13029"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="8.110849954538663" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13029" data-24h="false" data-json="{&quot;usd&quot;:8.11}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="13029"><i class="fas fa-fw fa-caret-up"></i>8.1%</span>
// </td>
// <td data-sort="25.743932768315247" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="13029" data-24h="false" data-json="{&quot;usd&quot;:25.743}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="13029"><i class="fas fa-fw fa-caret-up"></i>25.7%</span>
// </td>
// <td data-sort="60088239.39800231" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="853.0969777171582" data-prev-price="60088238.80765682">$60,088,239</span>
// </td>
// <td data-sort="1570513581.3518558" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="22297.214948181052" data-prev-price="1570513565.922121">$1,570,513,566</span>
// </td>
// <td data-sort="2979095580.004211" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="42295.42188444667" data-prev-price="2979095550.7356615">$2,979,095,551</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.53
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/axie-infinity">
// <img loading="lazy" alt="axie infinity (AXS) 7d chart" src="https://www.coingecko.com/coins/13029/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12129" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 81
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/the-sandbox">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="SAND" src="https://assets.coingecko.com/coins/images/12129/standard/sandbox_logo.jpg?1696511971">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// The Sandbox
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// SAND
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="SAND" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -6190.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="SAND" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.6966271770843911" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12129" data-price-target="price" data-price-btc="9.890297091748164e-06" data-prev-price="0.696627170240278">$0.6966</span>
// </td>
// <td data-sort="0.781899383174286" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12129" data-24h="false" data-json="{&quot;usd&quot;:0.781}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12129"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="2.0229886970340285" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12129" data-24h="true" data-json="{&quot;usd&quot;:2.022}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12129"><i class="fas fa-fw fa-caret-up"></i>2.0%</span>
// </td>
// <td data-sort="7.6987946014899915" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12129" data-24h="false" data-json="{&quot;usd&quot;:7.698}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12129"><i class="fas fa-fw fa-caret-up"></i>7.7%</span>
// </td>
// <td data-sort="25.32168222831117" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12129" data-24h="false" data-json="{&quot;usd&quot;:25.321}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12129"><i class="fas fa-fw fa-caret-up"></i>25.3%</span>
// </td>
// <td data-sort="134460798.16523868" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1908.9942006191566" data-prev-price="134460796.84420934">$134,460,797</span>
// </td>
// <td data-sort="1568617655.3157516" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="22270.29772132302" data-prev-price="1568617639.9046435">$1,568,617,640</span>
// </td>
// <td data-sort="2089881531.2531734" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="29670.891275244492" data-prev-price="2089881510.7208338">$2,089,881,511</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.75
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/the-sandbox">
// <img loading="lazy" alt="the sandbox (SAND) 7d chart" src="https://www.coingecko.com/coins/12129/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="33049" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 82
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ether-fi-staked-eth">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="EETH" src="https://assets.coingecko.com/coins/images/33049/standard/ether.fi_eETH.png?1700473063">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// ether.fi Staked ETH
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// EETH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="3549.1580363496173" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="33049" data-price-target="price" data-price-btc="0.05038882857251903" data-prev-price="3549.158001480407">$3,549.16</span>
// </td>
// <td data-sort="-0.061497623703026104" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="33049" data-24h="false" data-json="{&quot;usd&quot;:-0.061}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="33049"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="3.306564220172123" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33049" data-24h="true" data-json="{&quot;usd&quot;:3.306}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="33049"><i class="fas fa-fw fa-caret-up"></i>3.3%</span>
// </td>
// <td data-sort="3.69296221221129" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33049" data-24h="false" data-json="{&quot;usd&quot;:3.692}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="33049"><i class="fas fa-fw fa-caret-up"></i>3.7%</span>
// </td>
// <td data-sort="11.931266870884004" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33049" data-24h="false" data-json="{&quot;usd&quot;:11.931}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="33049"><i class="fas fa-fw fa-caret-up"></i>11.9%</span>
// </td>
// <td data-sort="385562.59742015984" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="5.473987753264927" data-prev-price="385562.593632145">$385,563</span>
// </td>
// <td data-sort="1421045054.1372294" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="20149.929925461314" data-prev-price="1419268656.370857">$1,419,268,656</span>
// </td>
// <td data-sort="3168037550.1169233" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="44921.682426770945" data-prev-price="3164077299.3061366">$3,164,077,299</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.45
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ether-fi-staked-eth">
// <img loading="lazy" alt="ether.fi staked eth (EETH) 7d chart" src="https://www.coingecko.com/coins/33049/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="30162" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 83
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ordi">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ORDI" src="https://assets.coingecko.com/coins/images/30162/standard/ordi.png?1696529082">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// ORDI
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ORDI
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="67.28556947126111" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="30162" data-price-target="price" data-price-btc="0.000955280376575971" data-prev-price="67.28556881020442">$67.29</span>
// </td>
// <td data-sort="-0.20507164236335815" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="30162" data-24h="false" data-json="{&quot;usd&quot;:-0.205}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="30162"><i class="fas fa-fw fa-caret-down"></i>0.2%</span>
// </td>
// <td data-sort="8.297416745067219" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30162" data-24h="true" data-json="{&quot;usd&quot;:8.297}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="30162"><i class="fas fa-fw fa-caret-up"></i>8.3%</span>
// </td>
// <td data-sort="5.295568902251974" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30162" data-24h="false" data-json="{&quot;usd&quot;:5.295}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="30162"><i class="fas fa-fw fa-caret-up"></i>5.3%</span>
// </td>
// <td data-sort="0.6813119724321615" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="30162" data-24h="false" data-json="{&quot;usd&quot;:0.681}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="30162"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="303884875.81918854" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4314.376186297821" data-prev-price="303884872.8336282">$303,884,873</span>
// </td>
// <td data-sort="1419209837.6357594" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="20123.907186917586" data-prev-price="1417435734.0081155">$1,417,435,734</span>
// </td>
// <td data-sort="1419209837.6357594" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="20123.907186917586" data-prev-price="1417435734.0081155">$1,417,435,734</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ordi">
// <img loading="lazy" alt="ordi (ORDI) 7d chart" src="https://www.coingecko.com/coins/30162/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="11610" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 84
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/bitget-token">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="BGB" src="https://assets.coingecko.com/coins/images/11610/standard/icon_colour.png?1696511504">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Bitget Token
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// BGB
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.0024599502003184" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="11610" data-price-target="price" data-price-btc="1.4232328361859381e-05" data-prev-price="1.0024599403515073">$1.00</span>
// </td>
// <td data-sort="-0.36262144521600903" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="11610" data-24h="false" data-json="{&quot;usd&quot;:-0.362}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="11610"><i class="fas fa-fw fa-caret-down"></i>0.4%</span>
// </td>
// <td data-sort="2.0196447975453653" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11610" data-24h="true" data-json="{&quot;usd&quot;:2.019}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="11610"><i class="fas fa-fw fa-caret-up"></i>2.0%</span>
// </td>
// <td data-sort="8.032427611911766" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11610" data-24h="false" data-json="{&quot;usd&quot;:8.032}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="11610"><i class="fas fa-fw fa-caret-up"></i>8.0%</span>
// </td>
// <td data-sort="0.0028950703509776974" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="11610" data-24h="false" data-json="{&quot;usd&quot;:0.002}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="11610"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="39245660.309221715" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="557.1864733221717" data-prev-price="39245659.92364712">$39,245,660</span>
// </td>
// <td data-sort="1403444932.7403953" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19925.273938931496" data-prev-price="1403444918.9520507">$1,403,444,919</span>
// </td>
// <td data-sort="2004919900.400636" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="28464.65672371876" data-prev-price="2004919880.7030146">$2,004,919,881</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.7
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/bitget-token">
// <img loading="lazy" alt="bitget token (BGB) 7d chart" src="https://www.coingecko.com/coins/11610/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="976" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 85
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/tezos">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="XTZ" src="https://assets.coingecko.com/coins/images/976/standard/Tezos-logo.png?1696502091">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Tezos
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// XTZ
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="XTZ" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5894.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="XTZ" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.4364914023440745" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="976" data-price-target="price" data-price-btc="2.039444800070401e-05" data-prev-price="1.4364913882310593">$1.44</span>
// </td>
// <td data-sort="1.698028961343475" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="976" data-24h="false" data-json="{&quot;usd&quot;:1.698}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="976"><i class="fas fa-fw fa-caret-up"></i>1.7%</span>
// </td>
// <td data-sort="5.595760535476687" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="976" data-24h="true" data-json="{&quot;usd&quot;:5.595}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="976"><i class="fas fa-fw fa-caret-up"></i>5.6%</span>
// </td>
// <td data-sort="15.142230608868976" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="976" data-24h="false" data-json="{&quot;usd&quot;:15.142}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="976"><i class="fas fa-fw fa-caret-up"></i>15.1%</span>
// </td>
// <td data-sort="24.2616004758961" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="976" data-24h="false" data-json="{&quot;usd&quot;:24.261}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="976"><i class="fas fa-fw fa-caret-up"></i>24.3%</span>
// </td>
// <td data-sort="58838070.29703922" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="835.3478226020818" data-prev-price="58838069.71897619">$58,838,070</span>
// </td>
// <td data-sort="1402211421.7120473" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19907.761285194138" data-prev-price="1402211407.9358213">$1,402,211,408</span>
// </td>
// <td data-sort="1431856421.287142" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="20328.643304626054" data-prev-price="1431856407.2196643">$1,431,856,407</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.98
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/tezos">
// <img loading="lazy" alt="tezos (XTZ) 7d chart" src="https://www.coingecko.com/coins/976/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="33613" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 86
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ethena-usde">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="USDE" src="https://assets.coingecko.com/coins/images/33613/standard/3466ef_3c088c66c7d941e8856339d0bddf33cc_mv2.png?1702514458">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ethena USDe
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// USDE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.999693060347783" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="33613" data-price-target="price" data-price-btc="1.4191461336714871e-05" data-prev-price="0.9995814545165054">$0.9996</span>
// </td>
// <td data-sort="-0.057687150635668906" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="33613" data-24h="false" data-json="{&quot;usd&quot;:-0.057}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="33613"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="0.19756060885281232" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33613" data-24h="true" data-json="{&quot;usd&quot;:0.197}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="33613"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="0.0257104253906797" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="33613" data-24h="false" data-json="{&quot;usd&quot;:0.025}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="33613"><i class="fas fa-fw fa-caret-up"></i>0.0%</span>
// </td>
// <td data-sort="-0.04727919337027225" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="33613" data-24h="false" data-json="{&quot;usd&quot;:-0.047}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="33613"><i class="fas fa-fw fa-caret-down"></i>0.0%</span>
// </td>
// <td data-sort="100516573.98693414" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1426.9150502438806" data-prev-price="100505352.30675854">$100,505,352</span>
// </td>
// <td data-sort="1399495883.6218083" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19847.992169868463" data-prev-price="1398001545.5534437">$1,398,001,546</span>
// </td>
// <td data-sort="1399495883.6218083" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="19847.992169868463" data-prev-price="1398001545.5534437">$1,398,001,546</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ethena-usde">
// <img loading="lazy" alt="ethena usde (USDE) 7d chart" src="https://www.coingecko.com/coins/33613/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="31069" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 87
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/worldcoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="WLD" src="https://assets.coingecko.com/coins/images/31069/standard/worldcoin.jpeg?1696529903">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Worldcoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// WLD
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="8.538191076097705" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="31069" data-price-target="price" data-price-btc="0.00012122014349504677" data-prev-price="8.538190992213027">$8.54</span>
// </td>
// <td data-sort="0.5401029438102393" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31069" data-24h="false" data-json="{&quot;usd&quot;:0.54}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="31069"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="1.7884659467574127" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31069" data-24h="true" data-json="{&quot;usd&quot;:1.788}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="31069"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="8.11593734280989" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31069" data-24h="false" data-json="{&quot;usd&quot;:8.115}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="31069"><i class="fas fa-fw fa-caret-up"></i>8.1%</span>
// </td>
// <td data-sort="14.796413301431235" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31069" data-24h="false" data-json="{&quot;usd&quot;:14.796}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="31069"><i class="fas fa-fw fa-caret-up"></i>14.8%</span>
// </td>
// <td data-sort="262857065.1403673" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="3731.887805158503" data-prev-price="262857062.5578905">$262,857,063</span>
// </td>
// <td data-sort="1396717574.2018247" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19804.974630388646" data-prev-price="1394971587.3509214">$1,394,971,587</span>
// </td>
// <td data-sort="85631140195.96786" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="1214220.10467761" data-prev-price="85524095760.0908">$85,524,095,760</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.02
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/worldcoin">
// <img loading="lazy" alt="worldcoin (WLD) 7d chart" src="https://www.coingecko.com/coins/31069/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="16646" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 88
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ecash">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="XEC" src="https://assets.coingecko.com/coins/images/16646/standard/Logo_final-22.png?1696516207">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// eCash
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// XEC
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="6.926803719871686e-05" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="16646" data-price-target="price" data-price-btc="9.834262707419185e-10" data-prev-price="0.00006926803651818312">$0.00006927</span>
// </td>
// <td data-sort="-1.2292582028724552" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="16646" data-24h="false" data-json="{&quot;usd&quot;:-1.229}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="16646"><i class="fas fa-fw fa-caret-down"></i>1.2%</span>
// </td>
// <td data-sort="7.6747572415299805" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16646" data-24h="true" data-json="{&quot;usd&quot;:7.674}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="16646"><i class="fas fa-fw fa-caret-up"></i>7.7%</span>
// </td>
// <td data-sort="35.07921166942889" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16646" data-24h="false" data-json="{&quot;usd&quot;:35.079}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="16646"><i class="fas fa-fw fa-caret-up"></i>35.1%</span>
// </td>
// <td data-sort="96.5648971677585" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="16646" data-24h="false" data-json="{&quot;usd&quot;:96.564}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="16646"><i class="fas fa-fw fa-caret-up"></i>96.6%</span>
// </td>
// <td data-sort="38584741.071969025" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="547.8031362588105" data-prev-price="38584740.69288773">$38,584,741</span>
// </td>
// <td data-sort="1373483894.0667222" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19478.498492440056" data-prev-price="1371976105.4133914">$1,371,976,105</span>
// </td>
// <td data-sort="1465975263.0907218" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="20790.194246485913" data-prev-price="1464365938.8916535">$1,464,365,939</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ecash">
// <img loading="lazy" alt="ecash (XEC) 7d chart" src="https://www.coingecko.com/coins/16646/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="31924" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 89
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/pyth-network">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="PYTH" src="https://assets.coingecko.com/coins/images/31924/standard/pyth.png?1701245725">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Pyth Network
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// PYTH
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.9123223990237018" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="31924" data-price-target="price" data-price-btc="1.29526091812346e-05" data-prev-price="0.9123223900604601">$0.9123</span>
// </td>
// <td data-sort="0.7605478037774305" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31924" data-24h="false" data-json="{&quot;usd&quot;:0.76}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="31924"><i class="fas fa-fw fa-caret-up"></i>0.8%</span>
// </td>
// <td data-sort="1.258984718875418" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31924" data-24h="true" data-json="{&quot;usd&quot;:1.258}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="31924"><i class="fas fa-fw fa-caret-up"></i>1.3%</span>
// </td>
// <td data-sort="-2.247596084213031" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="31924" data-24h="false" data-json="{&quot;usd&quot;:-2.247}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="31924"><i class="fas fa-fw fa-caret-down"></i>2.2%</span>
// </td>
// <td data-sort="32.74141950745384" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="31924" data-24h="false" data-json="{&quot;usd&quot;:32.741}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="31924"><i class="fas fa-fw fa-caret-up"></i>32.7%</span>
// </td>
// <td data-sort="66543640.65949003" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="944.7469138993421" data-prev-price="66543640.005722515">$66,543,640</span>
// </td>
// <td data-sort="1372770450.6690257" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19468.965557363954" data-prev-price="1371304649.184671">$1,371,304,649</span>
// </td>
// <td data-sort="9151803004.46017" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="129793.1037157597" data-prev-price="9142030994.564474">$9,142,030,995</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.15
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/pyth-network">
// <img loading="lazy" alt="pyth network (PYTH) 7d chart" src="https://www.coingecko.com/coins/31924/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="15628" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 90
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/mina-protocol">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="MINA" src="https://assets.coingecko.com/coins/images/15628/standard/JM4_vQ34_400x400.png?1696515261">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Mina Protocol
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// MINA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="1.2502189839882256" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="15628" data-price-target="price" data-price-btc="1.7749863324509892e-05" data-prev-price="1.2502189717052707">$1.25</span>
// </td>
// <td data-sort="0.4840452192514242" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15628" data-24h="false" data-json="{&quot;usd&quot;:0.484}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="15628"><i class="fas fa-fw fa-caret-up"></i>0.5%</span>
// </td>
// <td data-sort="0.2650248899062808" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15628" data-24h="true" data-json="{&quot;usd&quot;:0.265}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="15628"><i class="fas fa-fw fa-caret-up"></i>0.3%</span>
// </td>
// <td data-sort="1.8526399010519876" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="15628" data-24h="false" data-json="{&quot;usd&quot;:1.852}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="15628"><i class="fas fa-fw fa-caret-up"></i>1.9%</span>
// </td>
// <td data-sort="-2.9426945295348514" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="15628" data-24h="false" data-json="{&quot;usd&quot;:-2.942}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="15628"><i class="fas fa-fw fa-caret-down"></i>2.9%</span>
// </td>
// <td data-sort="33828979.258417845" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="480.2836670493653" data-prev-price="33828978.92606021">$33,828,979</span>
// </td>
// <td data-sort="1345324498.4764442" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="19084.19988695675" data-prev-price="1344203519.896552">$1,344,203,520</span>
// </td>
// <td data-sort="1425997816.699032" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="20228.597192028865" data-prev-price="1424809617.8597906">$1,424,809,618</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/mina-protocol">
// <img loading="lazy" alt="mina protocol (MINA) 7d chart" src="https://www.coingecko.com/coins/15628/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="28624" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 92
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/flare">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="FLR" src="https://assets.coingecko.com/coins/images/28624/standard/FLR-icon200x200.png?1696527609">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Flare
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// FLR
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="FLR" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5456.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="FLR" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.03501803872098375" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="28624" data-price-target="price" data-price-btc="4.971652239730433e-07" data-prev-price="0.03501803837694403">$0.03502</span>
// </td>
// <td data-sort="-0.3259696965111798" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28624" data-24h="false" data-json="{&quot;usd&quot;:-0.325}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="28624"><i class="fas fa-fw fa-caret-down"></i>0.3%</span>
// </td>
// <td data-sort="2.4604487210303674" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28624" data-24h="true" data-json="{&quot;usd&quot;:2.46}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="28624"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="3.5267818431860256" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="28624" data-24h="false" data-json="{&quot;usd&quot;:3.526}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="28624"><i class="fas fa-fw fa-caret-up"></i>3.5%</span>
// </td>
// <td data-sort="-27.767448745277797" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="28624" data-24h="false" data-json="{&quot;usd&quot;:-27.767}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="28624"><i class="fas fa-fw fa-caret-down"></i>27.8%</span>
// </td>
// <td data-sort="11807406.340871684" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="167.63451159480846" data-prev-price="11807406.224868136">$11,807,406</span>
// </td>
// <td data-sort="1293964970.815709" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18347.97806869552" data-prev-price="1292347431.3314896">$1,292,347,431</span>
// </td>
// <td data-sort="3576851375.565531" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="50718.52181012922" data-prev-price="3572380081.164481">$3,572,380,081</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.36
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/flare">
// <img loading="lazy" alt="flare (FLR) 7d chart" src="https://www.coingecko.com/coins/28624/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="8183" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 91
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/gatetoken">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="GT" src="https://assets.coingecko.com/coins/images/8183/standard/gate.png?1696508395">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Gate
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// GT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="9.684947097471769" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="8183" data-price-target="price" data-price-btc="0.00013750110139653074" data-prev-price="9.684947002320621">$9.68</span>
// </td>
// <td data-sort="2.496142936818339" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8183" data-24h="false" data-json="{&quot;usd&quot;:2.496}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="8183"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="-5.084133503044394" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="8183" data-24h="true" data-json="{&quot;usd&quot;:-5.084}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="8183"><i class="fas fa-fw fa-caret-down"></i>5.1%</span>
// </td>
// <td data-sort="39.09775907714842" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8183" data-24h="false" data-json="{&quot;usd&quot;:39.097}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="8183"><i class="fas fa-fw fa-caret-up"></i>39.1%</span>
// </td>
// <td data-sort="93.98094789175533" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8183" data-24h="false" data-json="{&quot;usd&quot;:93.98}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="8183"><i class="fas fa-fw fa-caret-up"></i>94.0%</span>
// </td>
// <td data-sort="73351490.92575236" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1041.400710800112" data-prev-price="73351490.20510016">$73,351,490</span>
// </td>
// <td data-sort="1293797361.678411" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18368.563134552078" data-prev-price="1293797348.9673133">$1,293,797,349</span>
// </td>
// <td data-sort="2905484129.241531" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="41250.33041895921" data-prev-price="2905484100.6961856">$2,905,484,101</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.45
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/gatetoken">
// <img loading="lazy" alt="gate (GT) 7d chart" src="https://www.coingecko.com/coins/8183/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="26580" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 93
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ondo">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="ONDO" src="https://assets.coingecko.com/coins/images/26580/standard/ONDO.png?1696525656">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ondo
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// ONDO
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="0.8886133859122859" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="26580" data-price-target="price" data-price-btc="1.2616002756539157e-05" data-prev-price="0.8886133771819767">$0.8886</span>
// </td>
// <td data-sort="-0.1718601690068828" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="26580" data-24h="false" data-json="{&quot;usd&quot;:-0.171}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="26580"><i class="fas fa-fw fa-caret-down"></i>0.2%</span>
// </td>
// <td data-sort="-3.0656854860077356" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="26580" data-24h="true" data-json="{&quot;usd&quot;:-3.065}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="26580"><i class="fas fa-fw fa-caret-down"></i>3.1%</span>
// </td>
// <td data-sort="23.207297828967217" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26580" data-24h="false" data-json="{&quot;usd&quot;:23.207}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="26580"><i class="fas fa-fw fa-caret-up"></i>23.2%</span>
// </td>
// <td data-sort="106.12014957968452" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="26580" data-24h="false" data-json="{&quot;usd&quot;:106.12}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="26580"><i class="fas fa-fw fa-caret-up"></i>106.1%</span>
// </td>
// <td data-sort="293380332.9512302" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="4165.238953076548" data-prev-price="293380330.0688732">$293,380,330</span>
// </td>
// <td data-sort="1290497340.0728414" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18298.808257877256" data-prev-price="1288884135.3502033">$1,288,884,135</span>
// </td>
// <td data-sort="8938418534.6362" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="126743.6993591415" data-prev-price="8927244936.252666">$8,927,244,936</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.14
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ondo">
// <img loading="lazy" alt="ondo (ONDO) 7d chart" src="https://www.coingecko.com/coins/26580/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="8834" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 94
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/chiliz">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="CHZ" src="https://assets.coingecko.com/coins/images/8834/standard/CHZ_Token_updated.png?1696508986">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Chiliz
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// CHZ
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="CHZ" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5249.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="CHZ" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.14464056044199744" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="8834" data-price-target="price" data-price-btc="2.053291157707224e-06" data-prev-price="0.14462441275564764">$0.1446</span>
// </td>
// <td data-sort="0.931588791763697" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8834" data-24h="false" data-json="{&quot;usd&quot;:0.931}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="8834"><i class="fas fa-fw fa-caret-up"></i>0.9%</span>
// </td>
// <td data-sort="2.3508894124416315" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8834" data-24h="true" data-json="{&quot;usd&quot;:2.35}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="8834"><i class="fas fa-fw fa-caret-up"></i>2.4%</span>
// </td>
// <td data-sort="2.6665458849692527" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8834" data-24h="false" data-json="{&quot;usd&quot;:2.666}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="8834"><i class="fas fa-fw fa-caret-up"></i>2.7%</span>
// </td>
// <td data-sort="2.563591079911167" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="8834" data-24h="false" data-json="{&quot;usd&quot;:2.563}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="8834"><i class="fas fa-fw fa-caret-up"></i>2.6%</span>
// </td>
// <td data-sort="69506480.6923226" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="986.7013911780651" data-prev-price="69498720.98200297">$69,498,721</span>
// </td>
// <td data-sort="1285693870.466963" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18251.476955572398" data-prev-price="1285550335.4772015">$1,285,550,335</span>
// </td>
// <td data-sort="1285693870.466963" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="18251.476955572398" data-prev-price="1285550335.4772015">$1,285,550,335</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/chiliz">
// <img loading="lazy" alt="chiliz (CHZ) 7d chart" src="https://www.coingecko.com/coins/8834/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="24383" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 95
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/apecoin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="APE" src="https://assets.coingecko.com/coins/images/24383/standard/apecoin.jpg?1696523566">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// ApeCoin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// APE
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="APE" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5180.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="APE" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="2.037269142778291" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="24383" data-price-target="price" data-price-btc="2.892393196926264e-05" data-prev-price="2.0372691227628494">$2.04</span>
// </td>
// <td data-sort="0.5560479767906488" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="24383" data-24h="false" data-json="{&quot;usd&quot;:0.556}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="24383"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="1.7690721583157776" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="24383" data-24h="true" data-json="{&quot;usd&quot;:1.769}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="24383"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="6.6209340874289255" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="24383" data-24h="false" data-json="{&quot;usd&quot;:6.62}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="24383"><i class="fas fa-fw fa-caret-up"></i>6.6%</span>
// </td>
// <td data-sort="3.5845516420872783" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="24383" data-24h="false" data-json="{&quot;usd&quot;:3.584}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="24383"><i class="fas fa-fw fa-caret-up"></i>3.6%</span>
// </td>
// <td data-sort="73418416.63060664" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1042.3508820335308" data-prev-price="73418415.9092969">$73,418,416</span>
// </td>
// <td data-sort="1284920688.1466942" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18219.7332523358" data-prev-price="1283314454.5978386">$1,283,314,455</span>
// </td>
// <td data-sort="2046570508.113695" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="29019.66563688159" data-prev-price="2044012163.2753286">$2,044,012,163</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.63
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/apecoin">
// <img loading="lazy" alt="apecoin (APE) 7d chart" src="https://www.coingecko.com/coins/24383/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="738" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 96
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/eos">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="EOS" src="https://assets.coingecko.com/coins/images/738/standard/eos-eos-logo.png?1696501893">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// EOS
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// EOS
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="EOS" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5111.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="EOS" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="1.1225336035224853" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="738" data-price-target="price" data-price-btc="1.593706246255603e-05" data-prev-price="1.1225335924939934">$1.12</span>
// </td>
// <td data-sort="1.0056124898560748" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="738" data-24h="false" data-json="{&quot;usd&quot;:1.005}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="738"><i class="fas fa-fw fa-caret-up"></i>1.0%</span>
// </td>
// <td data-sort="7.016228209521998" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="738" data-24h="true" data-json="{&quot;usd&quot;:7.016}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="738"><i class="fas fa-fw fa-caret-up"></i>7.0%</span>
// </td>
// <td data-sort="11.637467827631943" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="738" data-24h="false" data-json="{&quot;usd&quot;:11.637}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="738"><i class="fas fa-fw fa-caret-up"></i>11.6%</span>
// </td>
// <td data-sort="35.71033353028875" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="738" data-24h="false" data-json="{&quot;usd&quot;:35.71}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="738"><i class="fas fa-fw fa-caret-up"></i>35.7%</span>
// </td>
// <td data-sort="157378916.68684193" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="2234.3719757315585" data-prev-price="157378915.14065027">$157,378,915</span>
// </td>
// <td data-sort="1284781832.2710557" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="18240.566026182983" data-prev-price="1284781819.6485333">$1,284,781,820</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span>-</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/eos">
// <img loading="lazy" alt="eos (EOS) 7d chart" src="https://www.coingecko.com/coins/738/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="878" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 97
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/decentraland">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="MANA" src="https://assets.coingecko.com/coins/images/878/standard/decentraland-mana.png?1696502010">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Decentraland
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// MANA
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// <div class="" data-ads-target="banner">
// <div class="tw-flex tw-flex-col" x-data="{ open: false }">
// <span class="tw-cursor-pointer tw-px-1.5 tw-text-xs tw-font-medium tw-text-inline tw-border tw-border-primary-500 tw-text-primary-500 tw-rounded-md tw-text-center" data-action="click->coin-row-ads#sendImpression" data-keyword="MANA" @click="open = !open">
// Buy
// </span>
// <div menu_position="left" data-view-component="true" class="tw-inline-block tw-text-left">
// <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(198.5px, -5042.5px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top-start">
// <div @click.away="open = false" x-show="open" x-transition:enter="tw-transition tw-ease-out tw-duration-100" x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100" x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave="tw-transition tw-ease-in tw-duration-75" x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95" x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="; display: none" data-view-component="true" class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">
// <div data-view-component="true">
// <div data-coin-row-ads-target="body" data-login-state-target="kevelAd" data-ad-prop="{&quot;requestBody&quot;:{&quot;keywords&quot;:[&quot;OP&quot;,&quot;APT&quot;,&quot;TIA&quot;,&quot;INJ&quot;,&quot;TON&quot;,&quot;AVAX&quot;,&quot;LINK&quot;,&quot;BUSD&quot;,&quot;XRP&quot;,&quot;ADA&quot;,&quot;SOL&quot;,&quot;DOT&quot;,&quot;TRX&quot;,&quot;SHIB&quot;,&quot;LTC&quot;,&quot;MANA&quot;,&quot;CRO&quot;,&quot;COMP&quot;,&quot;LUNA&quot;,&quot;SLP&quot;,&quot;AURORA&quot;,&quot;LOOKS&quot;,&quot;WAXP&quot;,&quot;1INCH&quot;,&quot;KAVA&quot;,&quot;WIF&quot;,&quot;FLOKI&quot;,&quot;FTM&quot;,&quot;FRAX&quot;,&quot;ATOM&quot;,&quot;AAVE&quot;,&quot;APE&quot;,&quot;ARB&quot;,&quot;BNB&quot;,&quot;BTC&quot;,&quot;CHZ&quot;,&quot;DASH&quot;,&quot;DOGE&quot;,&quot;EOS&quot;,&quot;ETH&quot;,&quot;GALA&quot;,&quot;GRT&quot;,&quot;IMX&quot;,&quot;MATIC&quot;,&quot;IOTA&quot;,&quot;NEO&quot;,&quot;SAND&quot;,&quot;SNX&quot;,&quot;THETA&quot;,&quot;GMT&quot;,&quot;WBTC&quot;,&quot;UNI&quot;,&quot;DAI&quot;,&quot;XLM&quot;,&quot;MKR&quot;,&quot;ETC&quot;,&quot;COMP&quot;,&quot;BCH&quot;,&quot;ATOM&quot;,&quot;YFI&quot;,&quot;ZEC&quot;,&quot;FLR&quot;,&quot;ENJ&quot;,&quot;BAT&quot;,&quot;QNT&quot;,&quot;CRO&quot;,&quot;ALGO&quot;,&quot;MANA&quot;,&quot;HBAR&quot;,&quot;TRX&quot;,&quot;IOTA&quot;,&quot;FTM&quot;,&quot;COMP&quot;,&quot;KAS&quot;,&quot;BONK&quot;,&quot;USDC&quot;,&quot;USDT&quot;,&quot;STETH&quot;,&quot;FLOW&quot;,&quot;MNT&quot;,&quot;RNDR&quot;,&quot;STX&quot;,&quot;TAO&quot;,&quot;ICP&quot;,&quot;NEAR&quot;,&quot;PEPE&quot;,&quot;XTZ&quot;],&quot;placements&quot;:[{&quot;count&quot;:20,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[71],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[305625],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;coinConverter&quot;}" data-keyword="MANA" data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg" data-sponsored="Sponsored" data-ad-not-support-message="Ad not supported in this country.">
// <div class="tw-w-full tw-flex tw-justify-center tw-my-2">
// <i class="fa fa-spinner-third fa-fw fa-spin tw-text-lg"></i>
// </div>
// </div>
// </div>
// </div></div></div> </div>
// </div>
// </td>
// <td data-sort="0.6718199009420432" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="878" data-price-target="price" data-price-btc="9.53809818370135e-06" data-prev-price="0.6718198943416527">$0.6718</span>
// </td>
// <td data-sort="0.8899557887438783" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="878" data-24h="false" data-json="{&quot;usd&quot;:0.889}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="878"><i class="fas fa-fw fa-caret-up"></i>0.9%</span>
// </td>
// <td data-sort="0.6267449325121524" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="878" data-24h="true" data-json="{&quot;usd&quot;:0.626}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="878"><i class="fas fa-fw fa-caret-up"></i>0.6%</span>
// </td>
// <td data-sort="4.95489199899513" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="878" data-24h="false" data-json="{&quot;usd&quot;:4.954}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="878"><i class="fas fa-fw fa-caret-up"></i>5.0%</span>
// </td>
// <td data-sort="19.24553178133266" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="878" data-24h="false" data-json="{&quot;usd&quot;:19.245}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="878"><i class="fas fa-fw fa-caret-up"></i>19.2%</span>
// </td>
// <td data-sort="92289308.33913592" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="1310.268545201231" data-prev-price="92289307.43242642">$92,289,307</span>
// </td>
// <td data-sort="1252370791.1969638" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="17780.413399612702" data-prev-price="1252370778.8928683">$1,252,370,779</span>
// </td>
// <td data-sort="1473421518.4283602" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="20918.75975844367" data-prev-price="1473421503.95252">$1,473,421,504</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.85
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/decentraland">
// <img loading="lazy" alt="decentraland (MANA) 7d chart" src="https://www.coingecko.com/coins/878/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="20009" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 98
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/ronin">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="RON" src="https://assets.coingecko.com/coins/images/20009/standard/14101.png?1711464498">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Ronin
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// RON
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="4.084691411032944" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="20009" data-price-target="price" data-price-btc="5.799201195725646e-05" data-prev-price="4.084691370902309">$4.08</span>
// </td>
// <td data-sort="0.23715773658560865" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20009" data-24h="false" data-json="{&quot;usd&quot;:0.237}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="20009"><i class="fas fa-fw fa-caret-up"></i>0.2%</span>
// </td>
// <td data-sort="-2.9864181779263586" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="20009" data-24h="true" data-json="{&quot;usd&quot;:-2.986}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="20009"><i class="fas fa-fw fa-caret-down"></i>3.0%</span>
// </td>
// <td data-sort="1.8250166082740753" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20009" data-24h="false" data-json="{&quot;usd&quot;:1.825}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="20009"><i class="fas fa-fw fa-caret-up"></i>1.8%</span>
// </td>
// <td data-sort="36.90076151884172" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="20009" data-24h="false" data-json="{&quot;usd&quot;:36.9}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="20009"><i class="fas fa-fw fa-caret-up"></i>36.9%</span>
// </td>
// <td data-sort="37688260.14694721" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="535.0754348753244" data-prev-price="37688259.77667351">$37,688,260</span>
// </td>
// <td data-sort="1245815617.7880554" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="17667.93024495711" data-prev-price="1244447981.3266757">$1,244,447,981</span>
// </td>
// <td data-sort="4080722024.167607" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="57872.05670134658" data-prev-price="4076242272.7908206">$4,076,242,273</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.31
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/ronin">
// <img loading="lazy" alt="ronin (RON) 7d chart" src="https://www.coingecko.com/coins/20009/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="27277" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 99
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/axelar">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AXL" src="https://assets.coingecko.com/coins/images/27277/standard/V-65_xQ1_400x400.jpeg?1696526329">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Axelar
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AXL
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="2.0097215849570693" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="27277" data-price-target="price" data-price-btc="2.853460689318771e-05" data-prev-price="2.0098468498489304">$2.01</span>
// </td>
// <td data-sort="0.7368458562919679" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="27277" data-24h="false" data-json="{&quot;usd&quot;:0.736}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="27277"><i class="fas fa-fw fa-caret-up"></i>0.7%</span>
// </td>
// <td data-sort="-5.0375508398527185" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="27277" data-24h="true" data-json="{&quot;usd&quot;:-5.037}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="27277"><i class="fas fa-fw fa-caret-down"></i>5.0%</span>
// </td>
// <td data-sort="2.5285819701393053" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="27277" data-24h="false" data-json="{&quot;usd&quot;:2.528}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="27277"><i class="fas fa-fw fa-caret-up"></i>2.5%</span>
// </td>
// <td data-sort="38.19626013077351" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="27277" data-24h="false" data-json="{&quot;usd&quot;:38.196}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="27277"><i class="fas fa-fw fa-caret-up"></i>38.2%</span>
// </td>
// <td data-sort="36337578.31783306" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="515.9314208052041" data-prev-price="36339843.22002277">$36,339,843</span>
// </td>
// <td data-sort="1230673346.5546381" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="17450.52461356668" data-prev-price="1229134925.673759">$1,229,134,926</span>
// </td>
// <td data-sort="2294634692.5063143" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="32537.130419560668" data-prev-price="2291766251.4737496">$2,291,766,251</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 0.54
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/axelar">
// <img loading="lazy" alt="axelar (AXL) 7d chart" src="https://www.coingecko.com/coins/27277/sparkline.svg">
// </a>
// </td>
// </tr> <tr data-view-component="true" class="hover:tw-bg-gray-50 tw-bg-white dark:tw-bg-moon-900 hover:dark:tw-bg-moon-800 tw-text-sm">
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-0">
// <i class="far fa-star tw-cursor-pointer tw-py-2" data-coin-id="12785" data-action="click->coin-favorites#showDropdown"></i>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[24px]">
// 100
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-sticky tw-left-[51px] md:tw-left-[72px]">
// <a class="tw-flex tw-items-center tw-w-full" href="/en/coins/akash-network">
// <img class="tw-mr-2 !tw-h-6 tw-w-6 tw-object-fill" loading="lazy" alt="AKT" src="https://assets.coingecko.com/coins/images/12785/standard/akash-logo.png?1696512580">
// <div class="tw-flex tw-flex-col 2lg:tw-flex-row tw-items-start 2lg:tw-items-center">
// <div data-view-component="true" class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
// Akash Network
// <div data-view-component="true" class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-block 2lg:tw-inline">
// AKT
// </div>
// </div> </div>
// </a>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-p-0">
// </td>
// <td data-sort="5.242399834541029" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-coin-id="12785" data-price-target="price" data-price-btc="7.442846553065368e-05" data-prev-price="5.242399783036323">$5.24</span>
// </td>
// <td data-sort="-0.07220103389972424" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12785" data-24h="false" data-json="{&quot;usd&quot;:-0.072}" data-attr="price_change_percentage_1h" data-async="coin_price" data-async-id="12785"><i class="fas fa-fw fa-caret-down"></i>0.1%</span>
// </td>
// <td data-sort="-3.0455747267917945" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12785" data-24h="true" data-json="{&quot;usd&quot;:-3.045}" data-attr="price_change_percentage_24h" data-async="coin_price" data-async-id="12785"><i class="fas fa-fw fa-caret-down"></i>3.0%</span>
// </td>
// <td data-sort="-1.2119971598380095" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span class="gecko-down" data-percent-change-target="percent" data-coin-id="12785" data-24h="false" data-json="{&quot;usd&quot;:-1.211}" data-attr="price_change_percentage_7d" data-async="coin_price" data-async-id="12785"><i class="fas fa-fw fa-caret-down"></i>1.2%</span>
// </td>
// <td data-sort="12.751270422560355" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden d30">
// <span class="gecko-up" data-percent-change-target="percent" data-coin-id="12785" data-24h="false" data-json="{&quot;usd&quot;:12.751}" data-attr="price_change_percentage_30d" data-async="coin_price" data-async-id="12785"><i class="fas fa-fw fa-caret-up"></i>12.8%</span>
// </td>
// <td data-sort="9722919.767471785" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="138.04021471283707" data-prev-price="9722919.67194757">$9,722,920</span>
// </td>
// <td data-sort="1211932516.28779" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end">
// <span data-price-target="price" data-price-btc="17206.294895647035" data-prev-price="1211932504.3809857">$1,211,932,504</span>
// </td>
// <td data-sort="1215447774.1757445" data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden fdv">
// <span data-price-target="price" data-price-btc="17256.202430135556" data-prev-price="1215447762.234404">$1,215,447,762</span>
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit tw-text-end tw-hidden ratio">
// 1.0
// </td>
// <td data-view-component="true" class="tw-text-gray-900 dark:tw-text-moon-50 tw-px-1 tw-py-2.5 2lg:tw-p-2.5 tw-bg-inherit !tw-py-1.5 2lg:!tw-px-2.5 tw-text-end tw-box-content tw-h-[56px]">
// <a href="/en/coins/akash-network">
// <img loading="lazy" alt="akash network (AKT) 7d chart" src="https://www.coingecko.com/coins/12785/sparkline.svg">
// </a>
// </td>
// </tr>
// </tbody>
// </table>































// <th data-view-component="true" class="tw-py-3 tw-px-1 2lg:tw-pl-2.5 tw-font-semibold tw-text-xs tw-text-gray-900 dark:tw-text-moon-50 tw-whitespace-nowrap tw-text-left tw-bg-white dark:tw-bg-moon-900 tw-sticky tw-left-0 tw-min-w-[24px] no-sort">
// </th>
// <th
// 	aria-sort='ascending'
// 	data-view-component='true'
// 	class='tw-py-3 tw-px-1 2lg:tw-pl-2.5 tw-font-semibold tw-text-xs tw-text-gray-900 dark:tw-text-moon-50 tw-whitespace-nowrap tw-text-left tw-bg-white dark:tw-bg-moon-900 tw-sticky tw-left-[24px] md:tw-min-w-[48px] indicator-left'>
// 	#
// </th>;

// {/* <th
// 	data-view-component='true'
// 	class='tw-py-3 tw-px-1 2lg:tw-pl-2.5 tw-font-semibold tw-text-xs tw-text-gray-900 dark:tw-text-moon-50 tw-whitespace-nowrap tw-text-left tw-bg-white dark:tw-bg-moon-900 tw-sticky tw-left-[51px] md:tw-left-[72px] tw-min-w-[122px] 2lg:tw-min-w-[220px]'>
// 	Coin
// </th>; */}
