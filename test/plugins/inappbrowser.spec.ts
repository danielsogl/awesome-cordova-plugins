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

	it('should create an object using strings and InAppBrowserOptions signature', () => {
		object = new InAppBrowser('http://google.com', '_self', options);
		expect(object).toBeDefined();
	});

	it('should create an object using string only signature', () => {
		object = new InAppBrowser('http://google.com', '_self', 'location=no');
		expect(object).toBeDefined();
	});

	it('should create an object with the least amount of parameters', () => {
		object = new InAppBrowser('http://google.com');
		expect(object).toBeDefined();
	});
});
