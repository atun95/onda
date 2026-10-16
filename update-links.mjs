import fs from 'fs';

let c = fs.readFileSync('src/components/SupportPage.js', 'utf8');
c = c.replaceAll("window.location.hash = '#/';", "window.navigate ? window.navigate('/') : window.location.assign('/');");
c = c.replaceAll("window.location.hash = `#/ho-tro/${sub}`;", "window.navigate ? window.navigate(`/ho-tro/${sub}`) : window.location.assign(`/ho-tro/${sub}`);");
c = c.replaceAll('href="#/ho-tro"', 'href="/ho-tro"');
c = c.replaceAll('href="#/"', 'href="/"');

fs.writeFileSync('src/components/SupportPage.js', c, 'utf8');
console.log('Successfully updated SupportPage.js');
