const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function test(){
    const a = await wait(1000)
}

test()