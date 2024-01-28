// let html = document.documentElement;
// let page = document.querySelector(".page");
// let viewHeight = html.clientHeight;
// let pageScroll = html.scrollTop;

// window.addEventListener("scroll",()=>{
// let pageHeight = page.offsetHeight;
// let pageBottomToTop = page.offsetTop;
// let pageTop = pageBottomToTop - pageHeight;
// let scrollInPage = pageScroll - pageTop;
// let PageScrollPerc = (scrollInPage / pageHeight) * 100;
// html.style.setProperty("--scroll", Math.min(PageScrollPerc, 100));
// })

let html = document.documentElement;
let secondPage = document.querySelector(".second");
let thirdPage = document.querySelector(".third");
let fourthPage = document.querySelector(".fourth");
let fifthPage = document.querySelector(".fifth");
window.addEventListener("scroll", scrollProp);
window.addEventListener("resize", scrollProp);
let thirdPageOffsetTop = thirdPage.offsetTop;
let fourthPageOffsetTop = fourthPage.offsetTop;
let fifthPageOffsetTop = fifthPage.offsetTop;
let clientHeight = html.clientHeight;

// Functions
function scrollProp() {
	let scrollClient = html.scrollTop;
	let scrollPerc = (scrollClient / clientHeight) * 100;
	html.style.setProperty("--scroll", Math.min(scrollPerc, 100));
	// **********
	let secondPageOffsetTop = secondPage.offsetTop;
	let secondPageScrollPerc = (scrollClient / secondPageOffsetTop) * 100;
	html.style.setProperty("--scroll-two", Math.min(secondPageScrollPerc, 100));
	// **********
	let thirdHeight = thirdPage.offsetHeight;
	let topThird = thirdPageOffsetTop - thirdHeight;
	let scrollAfterThird = scrollClient - topThird;
	let thirdPageScrollPerc = (scrollAfterThird / thirdHeight) * 100;
	html.style.setProperty("--scroll-three", Math.min(thirdPageScrollPerc, 100));
	// **********
	let fourthHeight = fourthPage.offsetHeight;
	let topfourth = fourthPageOffsetTop - fourthHeight;
	let scrollAfterfourth = scrollClient - topfourth;
	let fourthPageScrollPerc = (scrollAfterfourth / fourthHeight) * 100;
	html.style.setProperty(
		"--scroll-fourth",
		Math.min(fourthPageScrollPerc, 100)
	);
	// **********
	let fifthHeight = fifthPage.offsetHeight;
	let topfifth = fifthPageOffsetTop - fifthHeight;
	let scrollAfterfifth = scrollClient - topfifth;
	let fifthPageScrollPerc = (scrollAfterfifth / fifthHeight) * 100;
	html.style.setProperty("--scroll-fifth", Math.min(fifthPageScrollPerc, 100));
	// **********
}
