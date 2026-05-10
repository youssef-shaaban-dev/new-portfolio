const https = require('https');
const fs = require('fs');

https.get('https://youssefshaaban-portfolio.vercel.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('temp_html.txt', data);
    
    // Extract everything looking like a JSON string or object
    const chunks = data.match(/self\.__next_f\.push\(\[1,"(.*?)\]\)/g);
    if (chunks) {
        fs.writeFileSync('temp_chunks.txt', chunks.join('\n'));
    }
  });
});
