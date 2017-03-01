# promise-sleep
sleep module for promise

## Install
npm install sleep.promise

## Usage

### 1. simple sleep for ms
```js
let sleepTime = 1500
    , start = Date.now();

sleep(sleepTime).then(() => {
    expect(Date.now() - start).to.not.be.below(sleepTime);
    done();
}).catch(err => {
    done(err);
})
```

### 2. sleep ms with single params
```js
let customParams = {a: 1};
sleep(200, customParams).then((params) => {
    expect(params).to.be(customParams);
    done();
}).catch(err => {
    done(err);
})
```

### 3. sleep ms with multi params
```js
it('sleep ms with multi params', function (done) {
        let paramsArray = [1, '32sds', {a: 1}, [1, 2]];
        sleep.apply(this, [200].concat(paramsArray)).then((arr) => {
            expect(arr).to.eql(paramsArray);
            done();
        }).catch(err => {
            done(err);
        })
    });
```

### 4.Usage in a promise chain, study from [sleep-promise](https://www.npmjs.com/package/sleep-promise)
```js
let trace = value => {
    console.log(value);
    return value;
}

sleep(2000)
    .then(() => "hello")
    .then(trace)
    .then(sleep(1000))
    .then(value => value + " world")
    .then(trace)
    .then(sleep(500))
    .then(value => value + "!")
    .then(trace)

// [2 seconds sleep]
// hello
// [1 second sleep]
// hello world
// [500 ms sleep]
// hello world!
```