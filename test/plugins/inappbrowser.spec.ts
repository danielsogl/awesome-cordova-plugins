import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '../../src/plugins/inappbrowser';

declare var window: any;

window.cordova = {
	InAppBrowser: {
		open: window.open
	}
};

describe('InAppBrowser', () => {

	const options: InAppBrowserOptions = { hidden: 'yes', hardwareback: 'no' };
	let object;

	it('should create an object', () => {
		object = new InAppBrowser("http://google.com", "_self", options);
		expect(true).toBeDefined();
	});
});
