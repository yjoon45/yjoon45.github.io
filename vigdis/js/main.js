$(function () {
  'use strict';

  $('#sdhmob-nav').click(function () {
    $('.vs-nav').toggleClass('opennav');
    $('.vs-mobBtnNav').toggleClass('close-nav');
  });

  $('.vs-banner-trigger').on('click', function () {
    var $elm = $('.vs-banner video').get(0);
    if ($elm.muted) {
      $elm.muted = false;
      $(this).addClass('active');
    } else {
      $elm.muted = true;
      $(this).removeClass('active');
    }
  });

  var $loader = $('.loader');
  var $loaderVideo = $('.loader video').get(0);

  $loaderVideo.addEventListener('ended', function () {
    $loader.fadeOut('fast');
  });

  function copyToClipboard(element) {
    var temp = $(element).val();

    $(element).select();
    document.execCommand("copy");
    $(element).val('Copied');

    setTimeout(function () {
      $(element).val(temp);
    }, 800);
  }

  $('.copyBtn').on('click', function () {
    copyToClipboard('.token-address');
  });
});

$(function () {
  function isMetaMaskInstalled() {
    var ethereum = window.ethereum;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  function onClickInstall() {
    var forwarderOrigin = window.location.origin;
    var onboarding = new MetaMaskOnboarding({ forwarderOrigin });

    onboarding.startOnboarding();
  };

  function handleConnectWallet(address) {
    var addr = Array.isArray(address) ? address[0] : address;
    var renderMarkup = `
      <li>
        <a href="#" class="wallet"><img src="images/wallet.png" alt=""> ${addr}</a>
      </li>
      <li>
      <div class="vs-profileUser">
        <div class="dropdown">
            <button class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="images/user.png" alt="">
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item logout-trigger" href="#">Sign Out</a></li>
            </ul>
        </div>
        <div class="vs-mobBtnNav" id="sdhmob-nav"></div>
        </div>
      </li>
    `;
    $('#loginvigdis').modal('hide');
    $('.wallet-list').html(renderMarkup);
    localStorage.setItem('walletConnect', true);
    localStorage.setItem('loginClicked', true);
  }

  function handleDisconnectWallet() {
    var renderMarkup = `<li>
        <a href="#" data-bs-toggle="modal" data-bs-target="#loginvigdis" class="connectBtn">
            <span><img src="images/connect.png" alt=""> Connect</span>
        </a>
    </li>`;
    $('.wallet-list').html(renderMarkup);
    localStorage.removeItem('walletConnect');
    localStorage.removeItem('loginClicked');
  }

  function onClickConnect() {
    ethereum.request({ method: 'eth_requestAccounts' })
      .then(handleConnectWallet)
      .catch(err => console.log('Error linking wallet: ', err));
  };


  $('.login-trigger').on('click', function () {
    if (isMetaMaskInstalled()) {
      onClickConnect();
    } else {
      onClickInstall();
    }
  });

  $('body').on('click', '.logout-trigger', handleDisconnectWallet);

  if (isMetaMaskInstalled()) {
    ethereum.on('accountsChanged', (addresses) => {
      if (addresses.length) {
        handleConnectWallet(addresses[0]);
      } else {
        handleDisconnectWallet();
      }
    });
  }

  if (localStorage.getItem('walletConnect') && localStorage.getItem('loginClicked')) {
    onClickConnect();
  }
});
