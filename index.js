let i = 0;
let pageUrl = window.location.href;
let show = 'block';
let hide = 'none';
scrollButton = document.getElementById('scrollButton');
copyUrlButton = document.getElementById('copyUrl');
let pageHeight = document.body.scrollHeight;

function scrollButtonBehavior() {
	scrollButton.href = 'javascript:void(0);';
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		scrollButton.title='scroll to top';
		scrollButton.setAttribute('aria-label', 'scroll to top');
		scrollButton.classList.remove('scrollToBottom');
	} else {
		scrollButton.title='scroll to bottom';
		scrollButton.setAttribute('aria-label', 'scroll to bottom');
		scrollButton.classList.add('scrollToBottom');
	};
}

function nowScroll() {
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		window.scrollTo(0, 0);
	} else {
		window.scrollTo(0, pageHeight);
	}
}

function tocBehavior() {
	let toc = document.getElementById('toc');
	if (toc) {
		let footer = document.getElementsByTagName('footer')[0];
		let footerHeight = footer.offsetHeight;
		let tocHeight = pageHeight - footerHeight - 100; // adding some random pixels to consider margins etc.
		if (document.body.scrollTop > tocHeight || document.documentElement.scrollTop > tocHeight) {
			toc.style.left = '-19vw';
		} else {
			toc.style.left = '4vw';
		}
	}
}

window.onload = function() {
	scrollButtonBehavior();
	window.onscroll = function() {
		tocBehavior();
		scrollButtonBehavior();
	};
};

function copyUrl() {
	navigator.clipboard.writeText(pageUrl);
	console.log('copied %s to clipboard', pageUrl);
	copyUrlButton.style.background = 'var(--green)';
}

function shareViaMastodon() {
	let defaultUrl = localStorage['instanceUrl'];
	console.log(defaultUrl);
	let instanceUrl= prompt('Enter the address of your server:', defaultUrl);
	localStorage['instanceUrl'] = instanceUrl; 
	if ( !instanceUrl.startsWith('https://') && !instanceUrl.startsWith('http://') ) {
		instanceUrl = 'https://' + instanceUrl;
	}
	if ( !instanceUrl.endsWith('/') ) {
		instanceUrl += '/';
	}
	let author = '@tommi@pan.rent'; 
	let shareUrl = instanceUrl + 'share?text=' + encodeURIComponent(pageUrl + '\n\nby ' + author);
	window.open(shareUrl, '_blank');
}

window.addEventListener('load', () => {	
	if (copyUrlButton) {
		copyUrlButton.addEventListener('click', copyUrl);
	};
	if (document.getElementById('shareViaMastodon')) {
		document.getElementById('shareViaMastodon').addEventListener('click', shareViaMastodon);
	};
  scrollButton.addEventListener('click', nowScroll);
});
