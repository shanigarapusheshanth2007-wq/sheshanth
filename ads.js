(function () {
  const adConfig = {
    client: 'ca-pub-9079513582356664',
    variants: {
      banner: {
        className: 'ad-banner-top',
        slot: 'YOUR_10_DIGIT_SLOT_ID_HERE',
        format: 'auto'
      },
      sidebar: {
        className: 'ad-sidebar',
        slot: 'YOUR_SIDEBAR_SLOT_ID_HERE',
        format: 'rectangle'
      }
    }
  };

  function renderAds() {
    document.querySelectorAll('[data-ad-variant]').forEach(function (container) {
      if (container.dataset.adRendered) {
        return;
      }

      const variant = adConfig.variants[container.dataset.adVariant];
      if (!variant) {
        return;
      }

      container.classList.add(variant.className);

      const label = document.createElement('span');
      label.className = 'ad-label';
      label.textContent = 'Advertisement';

      const ad = document.createElement('ins');
      ad.className = 'adsbygoogle';
      ad.style.display = 'block';
      ad.dataset.adClient = adConfig.client;
      ad.dataset.adSlot = variant.slot;
      ad.dataset.adFormat = variant.format;
      ad.dataset.fullWidthResponsive = 'true';

      container.append(label, ad);
      container.dataset.adRendered = 'true';
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAds);
  } else {
    renderAds();
  }
})();
