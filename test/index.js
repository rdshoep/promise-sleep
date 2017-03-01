const expect = require('expect.js')
    , sleep = require('..');

describe('promise-sleep', function () {
    it('simple sleep for ms', function (done) {
        let sleepTime = 1500
            , start = Date.now();

        sleep(sleepTime).then(() => {
            expect(Date.now() - start).to.not.be.below(sleepTime);
            done();
        }).catch(err => {
            done(err);
        })
    });

    it('sleep ms with single params', function (done) {
        let customParams = {a: 1};
        sleep(200, customParams).then((params) => {
            expect(params).to.be(customParams);
            done();
        }).catch(err => {
            done(err);
        })
    });

    it('sleep ms with multi params', function (done) {
        let paramsArray = [1, '32sds', {a: 1}, [1, 2]];
        sleep.apply(this, [200].concat(paramsArray)).then((arr) => {
            expect(arr).to.eql(paramsArray);
            done();
        }).catch(err => {
            done(err);
        })
    });
});