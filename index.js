const scp = require('node-scp')

async function test() {
  try {
    const client = await scp({
      host: 'your host',
      port: 22,
      username: 'username',
      password: 'password',
      // privateKey: fs.readFileSync('./key.pem'),
      // passphrase: 'your key passphrase',
    })
    await client.uploadFile('./test.txt', '/workspace/test.txt');
    const result = await client.stat('/server/path');
    console.log(result)
    client.close() // remember to close connection after you finish
  } catch (e) {
    console.log(e)
  }
}

test()