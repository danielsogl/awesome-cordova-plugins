import {Mixpanel} from '../../src/plugins/mixpanel';
declare const window: any;

window.mixpanel = {
  people: {
    identify: (args, success, error) => success('Success')
  }
};

describe('Mixpanel', () => {

  it('should return MixpanelPeople', () => {
    expect(Mixpanel.people).toBeDefined();
    expect(Mixpanel.people.identify).toBeDefined();
  });

  it('should call a method of MixpanelPeople', (done) => {
    const spy = spyOn(window.mixpanel.people, 'identify').and.callThrough();
    Mixpanel.people.identify('veryDistinctSuchIdVeryWow')
      .then(result => {
        expect(result).toEqual('Success');
        done();
      });
    expect(spy.calls.mostRecent().args[0]).toEqual('veryDistinctSuchIdVeryWow');
    expect(window.mixpanel.people.identify).toHaveBeenCalled();
  });

});
